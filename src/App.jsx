import Experience from "./components/Experience";
import About from "./components/About";
// import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";
import Academic from "./components/Academic";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <main className="container mx-auto px-6">
        {/* <section id="hero" className="py-16">
          <Hero />
        </section> */}
        <section id="about" className="py-16">
          <About />
        </section>
        <section id="experience" className="py-16">
          <Experience />
        </section>
        <section id="skills" className="py-16">
          <Skills />
        </section>
        <section id="projects" className="py-16">
          <Projects />
        </section>
        <section id="academic" className="py-16">
          <Academic />
        </section>
        <section id="certifications" className="py-16">
          <Certifications />
        </section>
        <section id="contact" className="py-16">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
