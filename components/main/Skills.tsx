"use client";

import {
    Backend_skill,
    DevTools,
    Frontend_skill,
	libraries,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-3 h-fit relative overflow-hidden py-20"
            style={{ transform: "scale(0.9" }}
        >
            <SkillText />

            <div className="flex flex-col items-center justify-center w-full px-4 md:px-0 gap-8">
                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
                    <div className="w-full lg:w-1/2">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="rounded-xl bg-[#03001417] backdrop-blur-md text-[white] w-full py-6 px-6 border border-[#7042f88b]"
                                >
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold mb-6 text-center lg:text-left">
                                        Frontend
                                    </h3>
                                    <div className="flex flex-row justify-center lg:justify-start flex-wrap gap-6 items-center">
                                        {Frontend_skill.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.5)}
                                    className="rounded-xl bg-[#03001417] backdrop-blur-md text-[white] w-full py-6 px-6 border border-[#7042f88b]"
                                >
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold mb-6 text-center lg:text-left">
                                        Backend
                                    </h3>
                                    <div className="flex flex-row justify-center lg:justify-start flex-wrap gap-6 items-center">
                                        {Backend_skill.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8">
                    <div className="w-full lg:w-1/2">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromLeft(0.5)}
                                    className="rounded-xl bg-[#03001417] backdrop-blur-md text-[white] w-full py-6 px-6 border border-[#7042f88b]"
                                >
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold mb-6 text-center lg:text-left">
                                        Dev Tools
                                    </h3>
                                    <div className="flex flex-row justify-center lg:justify-start flex-wrap gap-6 items-center">
                                        {DevTools.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <InView triggerOnce={false}>
                            {({ inView, ref }) => (
                                <motion.div
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? "visible" : "hidden"}
                                    variants={slideInFromRight(0.5)}
                                    className="rounded-xl bg-[#03001417] backdrop-blur-md text-[white] w-full py-6 px-6 border border-[#7042f88b]"
                                >
                                    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl font-bold mb-6 text-center lg:text-left">
                                        Libraries
                                    </h3>
                                    <div className="flex flex-row justify-center lg:justify-start flex-wrap gap-6 items-center">
                                        {libraries.map((image, index) => (
                                            <SkillDataProvider
                                                key={index}
                                                src={image.Image}
                                                width={image.width}
                                                height={image.height}
                                                index={index}
                                            />
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </InView>
                    </div>
                </div>
            </div>

            <div className="hidden md:block w-full h-full absolute top-24">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video
                        className="w-full h-auto"
                        preload="false"
                        playsInline
                        loop
                        muted
                        autoPlay
                        src="/cards-video.webm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
