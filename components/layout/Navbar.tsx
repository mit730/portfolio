"use client"

import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaBars, FaTimes, FaBriefcase } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="w-full py-4 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-40 shadow-sm transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 flex items-center justify-between">
          
          {/* Logo container */}
          <div className="flex-shrink-0">
             <Link href="/">
               <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 flex items-center gap-2">
                <FaBriefcase size={28} className="text-blue-600" />
                <span>Portfolio</span>
               </span>
             </Link>
          </div>

          {/* Desktop Links */}
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

          {/* Right side interactions */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              {/* Desktop Only Socials & Theme Toggle */}
              <div className="hidden md:flex items-center gap-3 sm:gap-4">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-gray-200 dark:bg-black/50 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300"
                  aria-label="Toggle Theme"
                >
                  {mounted && (theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />)}
                </button>
                <a href="https://github.com/mit730?tab=repositories" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-[20px] sm:text-lg transition-colors"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/mitesh-kumar-6a2136121/" target="_blank" rel="noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-500 text-[20px] sm:text-lg transition-colors"><FaLinkedin /></a>
              </div>

              {/* Mobile Hamburger Menu Right Aligned */}
              <button 
                className="md:hidden flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(true)}
                aria-label="Open Mobile Menu"
              >
                <FaBars size={24} />
              </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] md:hidden transition-opacity" 
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Mobile Sidebar Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full justify-between items-center mb-10">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <FaBriefcase size={24} className="text-blue-600 dark:text-blue-400" />
            <span className="font-bold text-xl text-gray-800 dark:text-white">Menu</span>
          </Link>
          <button 
            className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 p-1 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close Mobile Menu"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <ul className='flex flex-col gap-6 font-medium text-lg text-gray-700 dark:text-gray-300 w-full'>
          <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-gray-100 dark:border-gray-800 pb-2">
            <Link href="/" className="block w-full" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-gray-100 dark:border-gray-800 pb-2">
            <Link href="/about" className="block w-full" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-gray-100 dark:border-gray-800 pb-2">
            <Link href="/tech-stack" className="block w-full" onClick={() => setIsOpen(false)}>Tech Stack</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b border-gray-100 dark:border-gray-800 pb-2">
            <Link href="/projects" className="block w-full" onClick={() => setIsOpen(false)}>Projects</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <Link href="/contact" className="block w-full" onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
        </ul>
        
        {/* Footer info in Mobile menu */}
        <div className="mt-auto flex flex-col gap-6 border-t border-gray-200 dark:border-gray-800 pt-6">
           <div className="flex flex-col gap-3">
             <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Settings & Socials</span>
             
             {/* Theme Toggle Button for Mobile */}
             <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark');
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-200"
              >
                <span>Toggle Theme</span>
                {mounted && (theme === 'dark' ? <FaSun size={18} className="text-yellow-500" /> : <FaMoon size={18} className="text-blue-500" />)}
              </button>
           </div>
           
           <div className="flex justify-around gap-4 mt-2 mb-4">
             <a href="https://github.com/mit730?tab=repositories" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
               <FaGithub size={24} /> <span className="font-medium text-sm">GitHub</span>
             </a>
             <a href="https://www.linkedin.com/in/mitesh-kumar-6a2136121/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-colors" onClick={() => setIsOpen(false)}>
               <FaLinkedin size={24} /> <span className="font-medium text-sm">LinkedIn</span>
             </a>
           </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

