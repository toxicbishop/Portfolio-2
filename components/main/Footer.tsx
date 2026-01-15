import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <a 
                            href="https://github.com/toxicbishop" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/pranav-arun/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Social Media
                        </div>
                        <a 
                            href="https://github.com/toxicbishop" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/pranav-arun/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Legal</div>
                        <a 
                            href="#"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <span className="text-[15px] ml-[6px]">Privacy Policy</span>
                        </a>
                        <a 
                            href="#"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <span className="text-[15px] ml-[6px]">Terms & Conditions</span>
                        </a>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Contact</div>
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=pranavarun19@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[15px] cursor-pointer"
                        >
                            <span className="text-[15px] ml-[6px]">
                                pranavarun19@gmail.com
                            </span>
                        </a>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Pranav Arun 2026 Inc. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;