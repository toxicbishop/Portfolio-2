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
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Portfolio Website"
                    description="A high-performance portfolio built with Next.js 14, Framer Motion, and Tailwind CSS, featuring 3D effects and smooth navigation."
                />
                <ProjectCard
                    src="/CardImage.png"
                    title="Interactive UI Library"
                    description="A collection of pixel-perfect, interactive components focusing on complex animations and micro-interactions using React and TypeScript."
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Systems Programming Tool"
                    description="A backend utility optimized for system-level logic and high-concurrency tasks, leveraging the speed of Go and C++."
                />
            </div>
        </div>
    );
};

export default Projects;