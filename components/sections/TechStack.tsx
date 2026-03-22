import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaSass, FaGithub, FaServer, FaBell } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress, SiMongoose, SiStripe, SiSocketdotio, SiWebrtc, SiFirebase, SiNextdotjs } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const TechStack = () => {
  return (
    <div className="mt-30 mb-10" id="tech-stack">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#42446E] dark:text-[#A6A8D6] mb-4">My Tech Stack</h2>
        <p className="text-xl text-gray-500 dark:text-gray-400">Technologies I've been working with recently</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-12 items-center justify-items-center grayscale-0">
        <FaHtml5 className="text-7xl text-[#E34F26]" size={100} title="HTML5" />
        <FaCss3Alt className="text-7xl text-[#1572B6]" size={100} title="CSS3" />
        <FaJs className="text-7xl text-[#F7DF1E]" size={100} title="JavaScript" />
        <FaReact className="text-7xl text-[#61DAFB]" size={100} title="React" />
        <SiNextdotjs className="text-7xl text-[#000000] dark:text-[#ffffff]" size={100} title="Next.js" />
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

      <div className="text-center mt-24 mb-16">
        <h2 className="text-4xl font-bold text-[#42446E] dark:text-[#A6A8D6] mb-4">Integrations & Advanced Technologies</h2>
        <p className="text-xl text-gray-500 dark:text-gray-400">Third-party services, real-time protocols, and server-side tools</p>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-12 items-center justify-items-center grayscale-0">
        <SiStripe className="text-7xl text-[#008CDD]" size={100} title="Stripe" />
        <SiSocketdotio className="text-7xl text-[#010101] dark:text-white" size={100} title="WebSockets (Socket.io)" />
        <SiWebrtc className="text-7xl text-[#333333] dark:text-[#ffffff]" size={100} title="WebRTC" />
        <SiFirebase className="text-7xl text-[#FFCA28]" size={100} title="Firebase Notifications" />
        <FaServer className="text-7xl text-[#4A4A55] dark:text-[#A6A8D6]" size={100} title="SSR & Server Notifications" />
      </div>
    </div>
  );
};

export default TechStack;
