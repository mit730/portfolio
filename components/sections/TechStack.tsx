import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaSass, FaGithub, FaServer, FaBell } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress, SiMongoose, SiStripe, SiSocketdotio, SiWebrtc, SiFirebase, SiNextdotjs } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const TechStack = () => {
  return (
    <div className="mt-20 mb-10" id="tech-stack">
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#42446E] dark:text-[#A6A8D6] mb-3 sm:mb-4">My Tech Stack</h2>
        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400">Technologies I&apos;ve been working with recently</p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 sm:gap-8 md:gap-12 items-center justify-items-center grayscale-0">
        <FaHtml5 className="text-[60px] sm:text-[80px] md:text-[100px] text-[#E34F26]" title="HTML5" />
        <FaCss3Alt className="text-[60px] sm:text-[80px] md:text-[100px] text-[#1572B6]" title="CSS3" />
        <FaJs className="text-[60px] sm:text-[80px] md:text-[100px] text-[#F7DF1E]" title="JavaScript" />
        <FaReact className="text-[60px] sm:text-[80px] md:text-[100px] text-[#61DAFB]" title="React" />
        <SiNextdotjs className="text-[60px] sm:text-[80px] md:text-[100px] text-[#000000] dark:text-[#ffffff]" title="Next.js" />
        <SiRedux className="text-[60px] sm:text-[80px] md:text-[100px] text-[#764ABC]" title="Redux" />
        <FaBootstrap className="text-[60px] sm:text-[80px] md:text-[100px] text-[#7952B3]" title="Bootstrap" />
        
        <SiTailwindcss className="text-[60px] sm:text-[80px] md:text-[100px] text-[#06B6D4]" title="Tailwind CSS" />
        <FaSass className="text-[60px] sm:text-[80px] md:text-[100px] text-[#CC6699]" title="Sass" />
        <FaGithub className="text-[60px] sm:text-[80px] md:text-[100px] text-[#181717]" title="GitHub" />
        <SiMongodb className="text-[60px] sm:text-[80px] md:text-[100px] text-[#439743]" title="MongoDB" />
        <SiNodedotjs className="text-[60px] sm:text-[80px] md:text-[100px] text-[#439743]" title="Node.js" />
        <SiExpress className="text-[60px] sm:text-[80px] md:text-[100px] text-[#439743]" title="Express" />
        <SiMongoose className="text-[60px] sm:text-[80px] md:text-[100px] text-[#439743]" title="Mongoose" />
        <VscVscode className="text-[60px] sm:text-[80px] md:text-[100px] text-[#007ACC]" title="VS Code" />
      </div>

      <div className="text-center mt-16 sm:mt-24 mb-10 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#42446E] dark:text-[#A6A8D6] mb-3 sm:mb-4">Integrations & Advanced Technologies</h2>
        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400">Third-party services, real-time protocols, and server-side tools</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 items-center justify-items-center grayscale-0 px-4 sm:px-0">
        <SiStripe className="text-[60px] sm:text-[80px] md:text-[100px] text-[#008CDD]" title="Stripe" />
        <SiSocketdotio className="text-[60px] sm:text-[80px] md:text-[100px] text-[#010101] dark:text-white" title="WebSockets (Socket.io)" />
        <SiWebrtc className="text-[60px] sm:text-[80px] md:text-[100px] text-[#333333] dark:text-[#ffffff]" title="WebRTC" />
        <SiFirebase className="text-[60px] sm:text-[80px] md:text-[100px] text-[#FFCA28]" title="Firebase Notifications" />
        <FaServer className="text-[60px] sm:text-[80px] md:text-[100px] text-[#4A4A55] dark:text-[#A6A8D6]" title="SSR & Server Notifications" />
      </div>
    </div>
  );
};

export default TechStack;
