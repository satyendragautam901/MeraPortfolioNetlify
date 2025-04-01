import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Home,
  Info,
  GraduationCap,
  Briefcase,
  Code2,
  Mail,
  Sun, 
  Moon,
} from "lucide-react";

export default function Navbar({ isDarkMode, setIsDarkMode }) {

    const toggleTheme = () => {
      setIsDarkMode(prev => !prev);
    };

  return (
    <header className={`fixed top-0 left-0 w-full shadow-sm z-50  transition-all duration-500 ${isDarkMode ? 'dark:bg-gray-900 shadow-xl' : 'bg-gray-50'}`}>
      <div>
        <nav>
          <ul className="flex justify-evenly px-2 py-4">
            <NavItem text="Home" icon={<Home className={`w-5 h-5 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}/>} href="/" />
            <NavItem text="About" icon={<Info className={`w-5 h-5 ${isDarkMode ? 'dark:text-white' : 'text-black'}`} />} href="/about"/>
            <NavItem text="Education" icon={<GraduationCap className={`w-5 h-5 ${isDarkMode ? 'dark:text-white' : 'text-black'}`} />} href="/education"/>
            <NavItem text="Experience" icon={<Briefcase className={`w-5 h-5 ${isDarkMode ? 'dark:text-white' : 'text-black'}`} />} href="/experience"/>
            <NavItem text="Skills" icon={<Code2  className={`w-5 h-5 ${isDarkMode ? 'dark:text-white' : 'text-black'}`} />} href="/skills"/>
            <NavItem text="Contact" icon={<Mail className={`w-5 h-5 ${isDarkMode ? 'dark:text-white' : 'text-black'}`} />} href="/contact"/>
            
            <li className="relative group">
              <button
                onClick={toggleTheme}
                className="flex items-center justify-center space-x-2 py-2 px-3 focus:outline-none hover:cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" /> 
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function NavItem({ text, icon, href }) {
  return (
    <li className="relative group">
        <Link to={href} className="flex items-center justify-center space-x-2 py-4 px-4">
          <span>{icon}</span>
          <span className="opacity-0 group-hover:opacity-100 absolute -top-0 text-sm bg-black text-white px-2 py-1 rounded-md transition-opacity duration-300 whitespace-nowrap">
            {text}
          </span>
        </Link>
    </li>
  );
}