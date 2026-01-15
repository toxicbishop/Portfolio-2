import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
                <ProjectCard
                    src="/homepage.png"
                    title="Portfolio Website"
                    description="A high-performance portfolio built with Next.js 14, Framer Motion, and Tailwind CSS, featuring 3D effects and smooth navigation."
                    link="https://github.com/toxicbishop/Portfolio-2"
                />
                <ProjectCard
                    src="/DSA-Website-Photo.png"
                    title="DSA Study Hub"
                    description="A comprehensive hub for Data Structures and Algorithms study materials, featuring curated resources and interactive learning tools."
                    link="https://dsa-study-hub.vercel.app/"
                />
                <ProjectCard
                    title="Bengaluru-cost-explorer"
                    description="An interactive explorer for analyzing and visualizing the cost of living and real estate trends in Bengaluru."
                    link="https://github.com/Mohammed0572/bengaluru-cost-explorer"
                />
                <ProjectCard
                    title="Student-GUI-With-SQL"
                    description="A database-driven management system featuring a graphical user interface for organizing and managing student information efficiently."
                    link="https://github.com/toxicbishop/Student-GUI-With-SQL"
                />
                <ProjectCard
                    title="Slot-Machine"
                    description="A logic-based simulation of a slot machine game, implementing randomized probability and betting mechanics in Python."
                    link="https://github.com/toxicbishop/Slot-Machine"
                />
                <ProjectCard
                    title="Music-Player-With-Python"
                    description="A versatile desktop music player built using Python, supporting core playback features and playlist management."
                    link="https://github.com/toxicbishop/Music-with-python"
                />
                <ProjectCard
                    title="Pokemon-API-Data-Fetcher"
                    description="An application that connects to the PokeAPI to fetch, process, and display detailed information about various Pokemon."
                    link="https://github.com/toxicbishop/PokeAPI-Data-Fetcher"
                />
                <ProjectCard
                    title="Carousel-Using-React"
                    description="A responsive and interactive carousel component built with React, focusing on smooth transitions and modern UI design."
                    link="https://github.com/toxicbishop/Carousel-React"
                />
                <ProjectCard
                    title="Assci-Art-Using-Python"
                    description="A creative utility that converts visual inputs into unique ASCII art representations using custom Python algorithms."
                    link="https://github.com/toxicbishop/Assci-Art"
                />
            </div>
        </div>
    );
};

export default Projects;