import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaSass, FaGithub } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress, SiMongoose } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const TechStack = () => {
  return (
    <div className="mt-35 mb-10" id="tech-stack">
      <div className="text-center mb-16">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">My Tech Stack</h3>
        <p className="text-xl text-gray-500">Technologies I've been working with recently</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-12 items-center justify-items-center grayscale-0">
        <FaHtml5 className="text-7xl text-[#E34F26]" size={100} title="HTML5" />
        <FaCss3Alt className="text-7xl text-[#1572B6]" size={100} title="CSS3" />
        <FaJs className="text-7xl text-[#F7DF1E]" size={100} title="JavaScript" />
        <FaReact className="text-7xl text-[#61DAFB]" size={100} title="React" />
        <SiRedux className="text-7xl text-[#764ABC]" size={100} title="Redux" />
        <FaBootstrap className="text-7xl text-[#7952B3]" size={100} title="Bootstrap" />
        
        <SiTailwindcss className="text-7xl text-[#06B6D4]" size={100} title="Tailwind CSS" />
        <FaSass className="text-7xl text-[#CC6699]" size={100} title="Sass" />
        <FaGithub className="text-7xl text-[#181717]" size={100} title="GitHub" />
        <SiMongodb className="text-7xl text-[#439743]" size={100} title="MongoDB" />
        <SiNodedotjs className="text-7xl text-[#439743]" size={100} title="Node.js" />
        <SiExpress className="text-7xl text-[#439743]" size={100} title="Express" />
        <SiMongoose className="text-7xl text-[#439743]" size={100} title="Mongoose" />
        <VscVscode className="text-7xl text-[#007ACC]" size={100} title="VS Code" />
        
      </div>
    </div>
  );
};

export default TechStack;
