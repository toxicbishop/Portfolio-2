import React from "react";

const PrivacyPolicy = () => {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20 py-20 px-10 max-w-[1000px] mx-auto text-gray-200">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                        Privacy Policy
                    </h1>
                    <p className="text-gray-400 mt-4">Last Updated: January 20, 2026</p>
                </div>

                <div className="flex flex-col gap-10">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p className="leading-7">
                            Welcome to Pranav Arun&apos;s Portfolio. Your privacy is important to me. This Privacy Policy explains how I collect, use, and protect any information you may provide while using this website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Information Collection</h2>
                        <p className="leading-7">
                            This portfolio is primarily a showcase of my projects and skills. I do not collect personal data from visitors unless you explicitly choose to contact me via email or social media links provided on the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Cookies</h2>
                        <p className="leading-7">
                            This website may use technical cookies necessary for the functioning of the site or to analyze traffic via third-party services like Google Analytics (if applicable).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Links</h2>
                        <p className="leading-7">
                            My portfolio contains links to external sites such as GitHub, LinkedIn, and Discord. I am not responsible for the privacy practices or content of these external sites.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Contact Me</h2>
                        <p className="leading-7">
                            If you have any questions about this Privacy Policy, please contact me at: 
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pranavarun19@gmail.com" className="text-purple-500 ml-2 hover:underline">
                                pranavarun19@gmail.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
