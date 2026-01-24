import { z } from 'zod';

/**
 * Common validation schemas for user inputs
 * Following OWASP best practices for input validation and sanitization
 */

// Schema for contact form inputs (example)
export const ContactFormSchema = z.object({
    name: z.string().min(2).max(50).trim(),
    email: z.string().email().max(100).toLowerCase(),
    message: z.string().min(10).max(1000).trim(),
}).strict(); // reject unexpected fields

// Schema for generic ID parameters
export const IdSchema = z.string().uuid().or(z.string().regex(/^[0-9]+$/));

/**
 * Utility function to validate data against a schema
 */
export async function validateInput<T>(schema: z.ZodSchema<T>, data: unknown): Promise<{ success: true; data: T } | { success: false; error: string }> {
    try {
        const validatedData = await schema.parseAsync(data);
        return { success: true, data: validatedData };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                error: error.issues.map((e: z.ZodIssue) => `${e.path.join('.')}: ${e.message}`).join(', ')
            };
        }
        return { success: false, error: 'Invalid input' };
    }
}

/**
 * Basic sanitization for strings to prevent XSS
 * Note: Next.js/React already escapes most things, but extra sanitization is good for DB storage
 */
export function sanitizeString(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}
