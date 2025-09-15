
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="font-bold text-lg">
          Pragya Sukrity
        </a>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:underline">About</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="https://github.com/pragyasukrity007" target="_blank" rel="noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/pragya-sukrity/" target="_blank" rel="noreferrer">
            <FaLinkedin size={20} />
          </a>
        <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
