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
                        initial={{ opacity: 0, y: 20, x: "-50%", scale: 0.5 }}
                        animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                        exit={{ opacity: 0, y: 20, x: "-50%", scale: 0.5 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 300, 
                            damping: 20 
                        }}
                        className="absolute -top-14 left-1/2 px-4 py-2 bg-[#030014] border border-[#7042f88b] text-white text-sm font-semibold rounded-xl whitespace-nowrap z-50 backdrop-blur-xl shadow-[0_0_15px_rgba(112,66,248,0.4)]"
                    >
                        {name}
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#030014] border-r border-b border-[#7042f88b] rotate-45 shadow-[2px_2px_5px_rgba(0,0,0,0.5)]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default SkillDataProvider;