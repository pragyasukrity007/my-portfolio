const projects = [
  {
    title: "Basic JavaScript Projects",
    description:
      "A collection of beginner-friendly JavaScript projects like countdown timers, calculators, and form validation — built to strengthen core JS fundamentals.",
    source: "https://github.com/pragyasukrity007/basic-JavaScript-Projects",
  },
  {
    title: "Mini Projects with React",
    description:
      "A set of small React.js projects such as to-do apps, notes app, and UI experiments — showcasing reusable components and state management.",
    source: "https://github.com/pragyasukrity007/mini-projects-ReactJS",
  },
  {
    title: "Coming soon",
    description: "I’ll add projects here as I finish them — stay tuned!",
    source: null,
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <div
            key={i}
            className="border rounded-lg p-6 flex flex-col items-start justify-between bg-gray-50 dark:bg-gray-800"
          >
            <div>
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>
            {project.source && (
              <div className="mt-4 flex gap-2">
                <a
                  href={project.source}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline"
                >
                  Source
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
