"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Pacman = () => {
  const [dots, setDots] = useState<number[]>([]);
  const pacmanControls = useAnimation();

  // Create a grid of "contribution" squares
  useEffect(() => {
    const newDots = Array.from({ length: 50 }, (_, i) => i);
    setDots(newDots);
  }, []);

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        await pacmanControls.start({
          x: "100%",
          transition: { duration: 8, ease: "linear" }
        });
        await pacmanControls.set({ x: "-10%" });
      }
    };
    sequence();
  }, [pacmanControls]);

  return (
    <div 
      className="flex flex-col items-center justify-center w-full z-[20] py-20"
      id="pacman"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center w-full max-w-[1000px] px-4"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
          Pacman Contributions
        </h1>

        <div className="relative w-full h-24 bg-transparent border border-[#7042f88b] rounded-xl flex items-center overflow-hidden shadow-[0_0_20px_rgba(112,66,248,0.2)]">
          {/* Contribution Grid Simulation */}
          <div className="flex gap-2 px-4 w-full justify-around opacity-40">
            {dots.map((dot) => (
              <div
                key={dot}
                className={`w-3 h-3 rounded-sm ${
                  dot % 3 === 0 ? "bg-purple-500" : 
                  dot % 5 === 0 ? "bg-cyan-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Animated Pacman */}
          <motion.div
            animate={pacmanControls}
            initial={{ x: "-10%" }}
            className="absolute left-0 flex items-center pointer-events-none"
          >
            {/* Pacman Mouth Animation */}
            <div className="relative w-12 h-12">
                <motion.div 
                    animate={{ rotate: [0, -45, 0] }}
                    transition={{ repeat: Infinity, duration: 0.3 }}
                    className="absolute top-0 left-0 w-12 h-6 bg-yellow-400 rounded-t-full origin-bottom"
                />
                <motion.div 
                    animate={{ rotate: [0, 45, 0] }}
                    transition={{ repeat: Infinity, duration: 0.3 }}
                    className="absolute bottom-0 left-0 w-12 h-6 bg-yellow-400 rounded-b-full origin-top"
                />
            </div>
            
            {/* Ghosts */}
            <div className="flex gap-4 ml-8 opacity-80">
                <Ghost color="#ff0000" />
                <Ghost color="#ffb8ff" />
                <Ghost color="#00ffff" />
                <Ghost color="#ffb852" />
            </div>
          </motion.div>

          {/* Glowing Trail Effect */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-transparent via-purple-500/10 to-transparent" />
        </div>
        
        <p className="text-gray-400 text-sm mt-6 text-center italic">
          Fetching real-time contribution data... (Powered by GitHub Actions)
        </p>

        {/* This keeps the original logic for the actual SVG if it exists */}
        <div className="mt-10 w-full flex justify-center">
            <img 
              src="https://raw.githubusercontent.com/toxicbishop/Portfolio-2/output/pacman-contribution-graph.svg" 
              alt=""
              className="w-full max-w-[880px] h-auto object-contain mix-blend-screen opacity-90"
              style={{ filter: "brightness(1.2) contrast(1.1)" }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
        </div>
      </motion.div>
    </div>
  );
};

const Ghost = ({ color }: { color: string }) => (
    <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        className="w-8 h-8 relative"
    >
        <div 
            style={{ backgroundColor: color }}
            className="w-full h-full rounded-t-full shadow-[0_0_10px_currentColor]"
        >
            <div className="flex justify-around pt-2 px-1">
                <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-blue-900 rounded-full" />
                </div>
                <div className="w-2 h-2 bg-white rounded-full flex items-center justify-center">
                    <div className="w-1 h-1 bg-blue-900 rounded-full" />
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex">
                <div style={{ backgroundColor: color }} className="w-1/3 h-1 rounded-full translate-y-1/2" />
                <div style={{ backgroundColor: color }} className="w-1/3 h-1 rounded-full translate-y-1/2" />
                <div style={{ backgroundColor: color }} className="w-1/3 h-1 rounded-full translate-y-1/2" />
            </div>
        </div>
    </motion.div>
);

export default Pacman;
