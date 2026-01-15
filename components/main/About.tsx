"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full"
        >
            <div className="md:absolute w-auto h-auto md:top-[80px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200 z-50"
                        >
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="flex flex-col items-center justify-start relative md:mt-[90px] lg:mt-12 z-[20] w-auto h-auto">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="flex items-center justify-center w-[250px] h-[250px] rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500"
                        >
                            <Image
                                src="/pranav.jpg"
                                alt="profile"
                                width={250}
                                height={250}
                                quality={100}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="Welcome-box px-[15px] py-[8px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[20px] font-bold">
                                Pranav Arun
                            </h1>
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="Welcome-box px-[15px] w-[90%] md:w-3/4 py-[15px] z-[20] border mb-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[16px] w-full text-justify leading-relaxed">
                                I am a passionate Full Stack Developer dedicated to building pixel-perfect user interfaces with HTML5 and CSS3, while ensuring robust and scalable backend performance. Beyond the web, I possess a strong software engineering foundation with proficiency in Java, Go, and C++, enabling me to solve complex logic and system-level challenges. I am committed to clean code, architectural excellence, and efficient workflows, leveraging Git and GitHub for seamless version control and collaboration.
                            </h1>
                        </motion.div>
                    )}
                </InView>
            </div>
            <div className="absolute z-[20] bottom-[-4rem] md:bottom-[10px] px-[5px]">
                <div className="cursive text-[20px] font-medium text-center text-gray-300">
                    Shaping Tomorrow with Code and Creativity
                </div>
            </div>

            <div className="w-full hidden md:flex items-start justify-center absolute top-[1px]">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="false"
                    className="h-full"
                    src="/encryption.webm/"
                />
            </div>
        </section>
    );
};

export default About;