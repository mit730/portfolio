import Image from 'next/image';
import profilePic from '@/public/images/img.jpg';
import TechStack from './TechStack';
import Projects from './Projects';
import { getTotalExperienceYears } from '../utils/common';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Dashboard = () => {
  const totalExperience = getTotalExperienceYears();

  return (
    <div className="w-full relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob dark:opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 dark:opacity-10 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 dark:opacity-10 pointer-events-none"></div>

      <section className="w-full py-20 lg:py-32 relative z-10" id="home">
        <div className="container mx-auto px-8 md:px-16">
          <div className='flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-10'>
            <div className='max-w-2xl text-center lg:text-left' >
              <p className="text-xl md:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-2">Hello, I am</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 dark:text-gray-100 mb-6 drop-shadow-sm tracking-tight">
                Mitesh Kumar
                <br />
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-medium">
                 I am a passionate MERN stack developer bringing {totalExperience} years of experience in building dynamic, high-performance, and scalable web applications. My expertise lies in creating modern and responsive user interfaces using the latest technologies.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-12">
                <a href="#projects" className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-[0_4px_14px_0_rgba(100,100,255,0.39)] hover:shadow-[0_6px_20px_rgba(100,100,255,0.23)] hover:-translate-y-1 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center border-none">
                  View Projects
                </a>
                <a href="/images/resume.pdf" download="Mitesh_Kumar_Resume.pdf" className="px-8 py-3.5 rounded-full bg-transparent text-gray-800 dark:text-white font-semibold border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 hover:-translate-y-1 hover:scale-105 transition-all duration-300 w-full sm:w-auto text-center">
                  Download CV
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6">
                 <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 hover:scale-125">
                   <FaGithub size={30} />
                 </Link>
                 <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-[#0077b5] dark:hover:text-[#0077b5] transition-colors duration-300 hover:scale-125">
                   <FaLinkedin size={30} />
                 </Link>
                 <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2] transition-colors duration-300 hover:scale-125">
                   <FaTwitter size={30} />
                 </Link>
              </div>
            </div>

            <div className="animate-float shrink-0">
              <div className="relative rounded-full p-[8px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(168,85,247,0.7)] cursor-pointer w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px] shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white border-[6px] border-white dark:border-[#0a0a0a] shadow-inner">
                  <Image 
                    src={profilePic} 
                    alt='Profile Picture' 
                    fill 
                    className='object-cover object-top hover:scale-110 transition-transform duration-700 ease-in-out' 
                    quality={100} 
                    priority 
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 420px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechStack />
      <Projects />
    </div>
  );
};

export default Dashboard;
