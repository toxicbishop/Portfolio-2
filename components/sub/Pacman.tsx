"use client";

import React from "react";
import { motion } from "framer-motion";

const Pacman = () => {
  return (
    <div 
      className="flex flex-col items-center justify-center w-full z-[20]"
      id="pacman"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-full py-10"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          Pacman Contributions
        </h1>
        
        <div className="w-full max-w-[1200px] flex items-center justify-center overflow-hidden rounded-lg px-4">
          <div className="relative w-full h-auto flex justify-center">
            <img 
              src="https://raw.githubusercontent.com/toxicbishop/New-Portfolio/output/pacman-contribution-graph.svg" 
              alt="Pacman Contribution Graph"
              className="w-full max-w-[880px] h-auto object-contain mix-blend-screen"
              style={{ filter: "brightness(1.1) contrast(1.1)" }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pacman;
