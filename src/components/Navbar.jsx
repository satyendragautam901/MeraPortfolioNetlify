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
  Menu,
  X,
} from "lucide-react";

export default function Navbar({ isDarkMode, setIsDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isDarkMode
          ? "dark:bg-gray-900/95 backdrop-blur-sm"
          : "bg-white/95 backdrop-blur-sm"
      } ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button - hidden on desktop */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X
                  className={`h-6 w-6 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex space-x-24">
              {" "}
              {/* Changed from space-x-1 to space-x-6 */}
              <NavItem
                text="Home"
                icon={<Home className="w-5 h-5" />}
                href="/"
                isDarkMode={isDarkMode}
              />
              <NavItem
                text="About"
                icon={<Info className="w-5 h-5" />}
                href="/about"
                isDarkMode={isDarkMode}
              />
              <NavItem
                text="Education"
                icon={<GraduationCap className="w-5 h-5" />}
                href="/education"
                isDarkMode={isDarkMode}
              />
              <NavItem
                text="Experience"
                icon={<Briefcase className="w-5 h-5" />}
                href="/experience"
                isDarkMode={isDarkMode}
              />
              <NavItem
                text="Skills"
                icon={<Code2 className="w-5 h-5" />}
                href="/skills"
                isDarkMode={isDarkMode}
              />
              <NavItem
                text="Contact"
                icon={<Mail className="w-5 h-5" />}
                href="/contact"
                isDarkMode={isDarkMode}
              />
            </ul>
          </nav>

          {/* Theme Toggle - positioned on the right */}
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full focus:outline-none transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div
            className={`pt-2 pb-3 space-y-1 px-2 ${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <MobileNavItem
              text="Home"
              icon={<Home className="w-5 h-5" />}
              href="/"
              isDarkMode={isDarkMode}
              onClick={toggleMobileMenu}
            />
            <MobileNavItem
              text="About"
              icon={<Info className="w-5 h-5" />}
              href="/about"
              isDarkMode={isDarkMode}
              onClick={toggleMobileMenu}
            />
            <MobileNavItem
              text="Education"
              icon={<GraduationCap className="w-5 h-5" />}
              href="/education"
              isDarkMode={isDarkMode}
              onClick={toggleMobileMenu}
            />
            <MobileNavItem
              text="Experience"
              icon={<Briefcase className="w-5 h-5" />}
              href="/experience"
              isDarkMode={isDarkMode}
              onClick={toggleMobileMenu}
            />
            <MobileNavItem
              text="Skills"
              icon={<Code2 className="w-5 h-5" />}
              href="/skills"
              isDarkMode={isDarkMode}
              onClick={toggleMobileMenu}
            />
            <MobileNavItem
              text="Contact"
              icon={<Mail className="w-5 h-5" />}
              href="/contact"
              isDarkMode={isDarkMode}
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      )}
    </header>
  );
}

function NavItem({ text, icon, href, isDarkMode }) {
  return (
    <li>
      <Link
        to={href}
        className={`flex flex-col items-center p-3 rounded-md transition-colors duration-200 ${
          isDarkMode
            ? "text-gray-300 hover:bg-gray-700 hover:text-white"
            : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
        }`}
      >
        <span>{icon}</span>
        <span className="text-xs mt-1">{text}</span>
      </Link>
    </li>
  );
}

function MobileNavItem({ text, icon, href, isDarkMode, onClick }) {
  return (
    <Link
      to={href}
      onClick={onClick}
      className={`flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
        isDarkMode
          ? "text-gray-300 hover:bg-gray-700 hover:text-white"
          : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
      }`}
    >
      <span className="mr-3">{icon}</span>
      {text}
    </Link>
  );
}
