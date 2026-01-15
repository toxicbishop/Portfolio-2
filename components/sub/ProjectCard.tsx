import Image from "next/image";
import React from "react";

interface Props {
    title: string;
    description: string;
    link?: string;
    src?: string;
}

const ProjectCard = ({ title, description, link, src }: Props) => {
    const CardContent = (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-full cursor-pointer hover:border-purple-500 transition-colors duration-300 bg-[#03001417] backdrop-blur-md">
            {src && (
                <Image
                    src={src}
                    alt={title}
                    width={1000}
                    height={1000}
                    className="w-full object-contain"
                />
            )}
            <div className="relative p-6 flex flex-col gap-3">
                <h1 className="text-2xl font-semibold text-white">{title}</h1>
                <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
        </div>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="z-[20] block h-full">
                {CardContent}
            </a>
        );
    }

    return CardContent;
};

export default ProjectCard;