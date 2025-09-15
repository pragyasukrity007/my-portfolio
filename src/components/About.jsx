export default function About() {
  return (
    <section id="about" className="py-12 max-w-5xl mx-auto px-4">
      {/* <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2> */}

      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left: Photo */}
        <div className="flex justify-center">
          <img
            src="/profile.jpeg" // save your photo in public/profile.jpg
            alt="Pragya Sukrity"
            className="max-w-xs rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Right: Text */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Hi 👋 I’m <span className="font-semibold">Pragya Sukrity</span>, a{" "}
            <span className="font-semibold">Full Stack Developer</span> with{" "}
            <span className="font-semibold">4+ years of experience</span> in building scalable,
            user-friendly web applications.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            I’m currently working as <span className="font-semibold">Software Engineer II at
            Nuvolo</span>, where I specialize in{" "}
            <span className="font-semibold">React.js, Node.js, and ServiceNow</span>. My journey
            began at LTIMindtree, where I contributed to{" "}
            <span className="font-semibold">e-commerce, APIs, and client-facing solutions</span> that
            improved performance and customer experience.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I enjoy exploring <span className="font-semibold">AI tools</span> (OpenAI, Claude,
            Gemini) and continuously learning <span className="font-semibold">TypeScript, DevOps,
            and modern frameworks</span> to create impactful digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
