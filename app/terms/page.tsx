import React from "react";

const TermsAndConditions = () => {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20 py-20 px-10 max-w-[1000px] mx-auto text-gray-200">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-400 mt-4">Last Updated: January 20, 2026</p>
                </div>

                <div className="flex flex-col gap-10">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="leading-7">
                            By accessing and using Pranav Arun&apos;s Portfolio, you agree to comply with and be bound by these Terms and Conditions. If you do not agree, please refrain from using the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                        <p className="leading-7">
                            All content on this website, including but not limited to project descriptions, images, and code snippets, is the intellectual property of Pranav Arun unless otherwise stated. You may view and use the content for personal, non-commercial purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Use License</h2>
                        <p className="leading-7">
                            Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-20 text-2xl font-bold text-white mb-4">4. Disclaimer</h2>
                        <p className="leading-7">
                            The materials on this website are provided on an &apos;as is&apos; basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                        <p className="leading-7">
                            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default TermsAndConditions;
