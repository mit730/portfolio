import { FaLink, FaEye } from 'react-icons/fa';
import Link from 'next/link';
import { projects } from '../utils/common';
import toothaid from "../../public/images/toothaid.png";
import vms from "../../public/images/vms.png";
import imghippo from "../../public/images/imghippo.png";
import Image, { StaticImageData } from 'next/image';

const ProjectCard = ({ id, title, description, techStack, liveLink, image }: { id: string, title: string, description: string, techStack: string, liveLink: string, image?: StaticImageData | string }) => {
  const techArray = techStack.split(',').map(tech => tech.trim());
  return (
  <div className="group bg-white dark:bg-[#111111] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 dark:border-gray-800 hover:-translate-y-2">
    <div className="h-52 sm:h-60 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
      {image ? (
         <Image src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      ) : ( 
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 transition-transform duration-700 group-hover:scale-110"></div>
      )}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-5 backdrop-blur-sm">
         {liveLink && (
            <a target='_blank' href={liveLink} className="p-3.5 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all transform hover:scale-110 shadow-lg" title="Live Preview">
              <FaLink size={20} />
            </a>
         )}
         <Link href={`/projects/${id}`} className="p-3.5 bg-white/20 hover:bg-white/40 rounded-full text-white transition-all transform hover:scale-110 shadow-lg" title="View Details">
           <FaEye size={20} />
         </Link>
      </div>
    </div>
    <div className="p-6 sm:p-8 flex flex-col flex-grow relative bg-white dark:bg-[#111111]">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 flex-grow line-clamp-3 leading-relaxed">
        {description}
      </p>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {techArray.map((tech, i) => (
          <span key={i} className="px-3 py-1 text-xs font-semibold bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 rounded-lg border border-blue-100 dark:border-blue-800/50 transition-colors hover:bg-blue-100 dark:hover:bg-blue-900/50">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100 dark:border-gray-800">
        <a target='_blank' href={liveLink} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-bold transition-colors">
          <FaLink size={14} /> Live Demo
        </a>
        <Link href={`/projects/${id}`} className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-bold transition-colors">
           More Details &rarr;
        </Link>
      </div>
    </div>
  </div>
)};

const Projects = () => {
  const projectsWithImages = projects.map(project => ({
    ...project,
    image: project.id === "toothaid" ? toothaid : project.id === "vms" ? vms : project.id === "imghippo" ? imghippo : undefined
  }));

  return (
    <section className="w-full py-16 sm:py-20 md:py-24" id="projects">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#42446E] dark:text-[#A6A8D6] mb-4 sm:mb-5 tracking-tight">Projects</h2>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium">Things I&apos;ve built so far</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {projectsWithImages.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
