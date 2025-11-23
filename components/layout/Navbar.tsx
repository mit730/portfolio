import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full py-4 sticky top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-8 md:px-16 flex items-center justify-between">
        <div className="flex-shrink-0">
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
             <Image src="/images/files.png" alt="Logo" width={30} height={30} />
            </span>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
           <ul className='flex gap-12 font-medium text-gray-700'>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">
              <Link href="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">
              <Link href="/tech-stack">Tech Stack</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">
              <Link href="/contact">Contact</Link>
            </li>
           </ul>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
            <a href="#" className="text-gray-600 hover:text-black text-xl transition-colors"><FaGithub /></a>
            <a href="#" className="text-gray-600 hover:text-black text-xl transition-colors"><FaTwitter /></a>
            <a href="#" className="text-gray-600 hover:text-black text-xl transition-colors"><FaLinkedin /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

