import Image from 'next/image';
import { FaGithub, FaLink } from 'react-icons/fa';
import project1 from '@/public/images/myimg.jpg'; // Using profile pic as placeholder for now

const ProjectCard = ({ title, description, techStack, liveLink, codeLink }: { title: string, description: string, techStack: string, liveLink: string, codeLink: string }) => (
  <div className="bg-white rounded-3xl overflow-hidden shadow-lg flex flex-col h-full">
    <div className="h-48 bg-gray-200 relative overflow-hidden">
        {/* Placeholder for project image - using a gradient if no image, or the placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500"></div>
        {/* <Image src={project1} alt={title} fill className="object-cover opacity-50" /> */}
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow line-clamp-4">
        {description}
      </p>
      
      <div className="mb-6">
        <p className="text-sm text-gray-500">
          <span className="font-semibold text-gray-700">Tech stack : </span>
          {techStack}
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
        <a href={liveLink} className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors text-sm font-medium underline">
          <FaLink className="text-sm" />
          Live Preview
        </a>
        <a href={codeLink} className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors text-sm font-medium underline">
          <FaGithub className="text-lg" />
          View Code
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML , JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML , JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#"
    },
    {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML , JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#"
    },
     {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML , JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#"
    },
     {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML , JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#"
    },
     {
      title: "Project Tile goes here",
      description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
      techStack: "HTML , JavaScript, SASS, React",
      liveLink: "#",
      codeLink: "#"
    }
  ];

  return (
    <section className="w-full py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#42446E] mb-4">Projects</h2>
          <p className="text-xl text-gray-500">Things I've built so far</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
