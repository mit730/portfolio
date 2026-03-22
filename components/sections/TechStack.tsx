import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaSass, FaGithub, FaServer } from 'react-icons/fa';
import { SiRedux, SiTailwindcss, SiMongodb, SiNodedotjs, SiExpress, SiMongoose, SiStripe, SiSocketdotio, SiWebrtc, SiFirebase, SiNextdotjs, SiPostgresql, SiTypescript } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const TechIcon = ({ icon: Icon, name, color }: { icon: any, name: string, color: string }) => (
  <div className="group relative flex flex-col items-center justify-center p-6 bg-white dark:bg-[#111111] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500/30">
    <Icon className="text-5xl transition-transform duration-300 group-hover:scale-110" style={{ color }} />
    <span className="mt-4 text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{name}</span>
  </div>
);

const TechStack = () => {
  const categories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Redux", icon: SiRedux, color: "#764ABC" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      ]
    },
    {
      title: "Advanced & Services",
      skills: [
        { name: "Stripe", icon: SiStripe, color: "#008CDD" },
        { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
        { name: "WebRTC", icon: SiWebrtc, color: "#333333" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
      ]
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-gray-50/50 dark:bg-[#0c0c0c]/50" id="tech-stack">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#42446E] dark:text-[#A6A8D6] mb-4 tracking-tight">Technical Arsenal</h2>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 font-medium">Tools and technologies I use to bring ideas to life</p>
        </div>

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 border-l-4 border-blue-600 pl-4">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, sIdx) => (
                  <TechIcon key={sIdx} icon={skill.icon} name={skill.name} color={skill.color} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
