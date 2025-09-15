export default function Hero() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Left side */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I’m <span className="text-purple-600 dark:text-purple-400">Pragya Sukrity</span>
        </h1>
        <p className="text-lg max-w-xl">
          Full Stack Developer building clean, scalable web apps with React, Node.js and ServiceNow.
          I enjoy simplifying complex workflows and creating delightful user experiences.
        </p>

        <div className="mt-6 flex gap-3">
          <a
            href="https://github.com/pragyasukrity007"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border rounded-md"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pragya-sukrity/"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border rounded-md"
          >
            LinkedIn
          </a>
          <a
            href="/Pragya-Sukrity-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-purple-600 text-white rounded-md"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="rounded-lg border p-6">
        <p className="font-semibold">📍 Location</p>
        <p className="mt-1">Pune, India</p>

        <div className="mt-4">
          <p className="font-semibold">💼 Current</p>
          <p>Software Engineer II @ Nuvolo (Apr 2025 – Present)</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Working with ServiceNow, React.js and modern front-end practices.
          </p>
        </div>
      </div>
    </div>
  );
}
