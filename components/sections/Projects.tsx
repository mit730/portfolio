import {  FaLink } from 'react-icons/fa';
import Link from 'next/link';
import { projects } from '../utils/common';
import toothaid from "../../public/images/toothaid.png";
import vms from "../../public/images/vms.png";
import imghippo from "../../public/images/imghippo.png";
import Image, { StaticImageData } from 'next/image';

const ProjectCard = ({ id, title, description, techStack, liveLink, image }: { id: string, title: string, description: string, techStack: string, liveLink: string, image?: StaticImageData | string }) => (
  <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg flex flex-col h-full transition-colors duration-300">
    <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
      {image ? (
         <Image src={image} alt={title} className="w-full h-full object-cover" />
      ) : ( 
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500"></div>
      )}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
        {description}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
        <span className="font-semibold">Tech stack:</span> {techStack}
      </p>
      <div className="flex justify-between items-center mt-auto">
        <a target='_blank' href={liveLink} className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 underline text-sm font-medium transition-colors">
          <FaLink size={14} /> Live Preview
        </a>
        <Link href={`/projects/${id}`} className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 underline text-sm font-medium transition-colors">
          View Detail
        </Link>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projectsWithImages = projects.map(project => ({
    ...project,
    image: project.id === "toothaid" ? toothaid : project.id === "vms" ? vms : project.id === "imghippo" ? imghippo : undefined
  }));

  return (
    <section className="w-full py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#42446E] dark:text-[#A6A8D6] mb-4">Projects</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">Things I've built so far</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsWithImages.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
