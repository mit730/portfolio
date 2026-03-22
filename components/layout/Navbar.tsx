"use client"

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="w-full py-4 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-8 md:px-16 flex items-center justify-between">
        <div className="flex-shrink-0">
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
             <Image src="/images/files.png" alt="Logo" width={30} height={30} />
            </span>
        </div>

        <div className="hidden md:flex flex-1 justify-center">
           <ul className='flex gap-12 font-medium text-gray-700 dark:text-gray-300'>
            <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Link href="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Link href="/tech-stack">Tech Stack</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Link href="/contact">Contact</Link>
            </li>
           </ul>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
              aria-label="Toggle Theme"
            >
              {mounted && (theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />)}
            </button>
            <a href="https://github.com/mit730?tab=repositories" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl transition-colors"><FaGithub /></a>
            {/* <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl transition-colors"><FaTwitter /></a> */}
            <a href="https://www.linkedin.com/in/mitesh-kumar-6a2136121/" target="_blank" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl transition-colors"><FaLinkedin /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

