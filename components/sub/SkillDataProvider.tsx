"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface Props {
    src: string;
    name: string;
    width: number;
    height: number;
    index: number;
}

const SkillDataProvider = ({ src, name, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const [isHovered, setIsHovered] = React.useState(false);

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.3;
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className="flex items-center justify-center p-2 relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image 
                src={src} 
                width={width} 
                height={height} 
                alt={name} 
                className="object-contain max-h-[50px] md:max-h-full transition-transform duration-300 group-hover:scale-110"
            />
            <AnimatePresence>
                {isHovered && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, x: "-50%" }}
                        className="absolute -top-12 left-1/2 px-3 py-1.5 bg-[#030014] border border-[#7042f88b] text-white text-xs font-medium rounded-lg whitespace-nowrap z-50 backdrop-blur-md shadow-xl"
                    >
                        {name}
                        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#030014] border-r border-b border-[#7042f88b] rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SkillDataProvider;