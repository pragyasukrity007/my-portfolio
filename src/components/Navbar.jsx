import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaSun,
  FaMoon,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Keep theme consistent on load
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Name */}
          <div className="flex-shrink-0 font-bold text-xl text-gray-800 dark:text-white">
            Pragya Sukrity
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* <a
              href="#about"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              About
            </a> */}
            <a
              href="#experience"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              Skills
            </a>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/pragyasukrity007"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/pragya-sukrity/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:pragyasukrity2712@gmail.com"
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
              >
                <FaEnvelope size={20} />
              </a>
            </div>

            {/* Theme Switch Button */}
            <button
              onClick={toggleTheme}
              className="px-3 py-1 border rounded text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Resume Button */}
            <a
              href="/Pragya_Sukrity_Resume.pdf"
              download
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 px-2 pt-2 pb-4 space-y-2">
          <a
            href="#about"
            className="block text-gray-700 dark:text-gray-200 px-2 py-1 hover:text-blue-600"
          >
            About
          </a>
          <a
            href="#experience"
            className="block text-gray-700 dark:text-gray-200 px-2 py-1 hover:text-blue-600"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="block text-gray-700 dark:text-gray-200 px-2 py-1 hover:text-blue-600"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block text-gray-700 dark:text-gray-200 px-2 py-1 hover:text-blue-600"
          >
            Skills
          </a>

          {/* Social Links */}
          <div className="flex items-center space-x-4 px-2 py-2">
            <a
              href="https://github.com/pragyasukrity007"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/pragya-sukrity/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:pragyasukrity2712@gmail.com"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600"
            >
              <FaEnvelope size={20} />
            </a>
          </div>

          {/* Theme Switch Button */}
          <button
            onClick={toggleTheme}
            className="block w-full text-left px-4 py-2 border rounded text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {isDark ? "Light" : "Dark"}
          </button>

          {/* Resume Button */}
          <a
            href="/Pragya_Sukrity_Resume.pdf"
            download
            className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
