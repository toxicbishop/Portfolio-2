"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Pacman = () => {
  const pacmanControls = useAnimation();

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
        className="flex flex-col items-center justify-center w-full max-w-[1200px] px-4"
      >
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
          Pacman Arcade
        </h1>

        <div className="relative w-full h-32 bg-black/40 border border-[#7042f88b] rounded-2xl flex items-center overflow-hidden shadow-[0_0_30px_rgba(112,66,248,0.3)] backdrop-blur-sm">
          {/* Game Path/Dots */}
          <div className="flex gap-8 px-10 w-full justify-around">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-yellow-100/30"
              />
            ))}
          </div>

          {/* Animated Pacman & Ghosts */}
          <motion.div
            animate={pacmanControls}
            initial={{ x: "-15%" }}
            className="absolute left-0 flex items-center pointer-events-none"
          >
            {/* Pacman */}
            <div className="relative w-16 h-16 mr-10">
                <motion.div 
                    animate={{ rotate: [0, -35, 0] }}
                    transition={{ repeat: Infinity, duration: 0.2 }}
                    className="absolute top-0 left-0 w-16 h-8 bg-yellow-400 rounded-t-full origin-bottom"
                />
                <motion.div 
                    animate={{ rotate: [0, 35, 0] }}
                    transition={{ repeat: Infinity, duration: 0.2 }}
                    className="absolute bottom-0 left-0 w-16 h-8 bg-yellow-400 rounded-b-full origin-top"
                />
                {/* Eye */}
                <div className="absolute top-3 right-4 w-2 h-2 bg-black rounded-full z-10" />
            </div>
            
            {/* Ghosts in Pursuit */}
            <div className="flex gap-6">
                <Ghost color="#ff0000" /> {/* Blinky */}
                <Ghost color="#ffb8ff" /> {/* Pinky */}
                <Ghost color="#00ffff" /> {/* Inky */}
                <Ghost color="#ffb852" /> {/* Clyde */}
            </div>
          </motion.div>

          {/* Cyber Grid Background Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-10" 
               style={{ backgroundImage: 'linear-gradient(#7042f8 1px, transparent 1px), linear-gradient(90deg, #7042f8 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
          />
        </div>
        
        <div className="mt-8 flex gap-4 opacity-50 text-xs text-gray-400">
            <span>HIGH SCORE: 99999</span>
            <span>PLAYER 1: UP NEXT</span>
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
