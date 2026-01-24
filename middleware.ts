import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Configuration for rate limiting
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 100; // sensible default

// Note: In a real production environment with multiple serverless instances,
// you should use a centralized store like Redis (e.g., Upstash) instead of an in-memory Map.
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export function middleware(request: NextRequest) {
    const ip = request.ip ?? request.headers.get('x-forwarded-for') ?? 'unknown';

    // For "user-based" rate limiting, we could check a session token or auth header
    // Here we use the IP or a potential user identifier
    const identifier = request.headers.get('x-user-id') || ip;

    const currentTime = Date.now();
    const rateLimitData = rateLimitMap.get(identifier);

    if (!rateLimitData || (currentTime - rateLimitData.lastReset) > RATE_LIMIT_WINDOW) {
        // Reset or initialize rate limit for this identifier
        rateLimitMap.set(identifier, { count: 1, lastReset: currentTime });
    } else {
        // Increment request count
        rateLimitData.count++;
        if (rateLimitData.count > MAX_REQUESTS) {
            // Graceful 429 response
            return new NextResponse(
                JSON.stringify({
                    error: 'Too many requests',
                    message: 'You have exceeded the rate limit. Please try again later.',
                }),
                {
                    status: 429,
                    headers: {
                        'Content-Type': 'application/json',
                        'Retry-After': Math.ceil((RATE_LIMIT_WINDOW - (currentTime - rateLimitData.lastReset)) / 1000).toString(),
                    },
                }
            );
        }
    }

    return NextResponse.next();
}

// Apply rate limiting to all public endpoints
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - public assets
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)',
    ],
};
