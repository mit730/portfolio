import Image from 'next/image';
import profilePic from '@/public/images/myimg.jpg';
import TechStack from './TechStack';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';

const Dashboard = () => {
  return (
    <div className="w-full">
      <section className="w-full py-20" id="home">
        <div className="container mx-auto px-8 md:px-16">
          <div className='flex  flex-col md:flex-row items-center justify-between gap-10'>
            <div className='max-w-xl' >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 mb-6">
                Hi 👋,<br />
                My name is<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Mitesh Kumar
                </span>
                <br />
                I build things for web
              </h2>
              <p className="text-lg text-gray-600 mb-8">I am a passionate MERN stack developer with 3+ years of experience in web development. My expertise lies in building dynamic and responsive web applications using the latest technologies.</p>
            </div>

            <div className="rounded-full p-[6px] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] cursor-pointer">
              <Image src={profilePic} alt='profilePic' className='rounded-full bg-white' width={350} height={350} />
            </div>
          </div>
        </div>
      </section>

      <About />
      
      <TechStack />
      
      <Projects />
      
      <Contact />
    </div>
  );
};

export default Dashboard;
