import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "pragyasukrity2712@gmail.com",
      href: "mailto:pragyasukrity2712@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      label: "Address",
      value: "Pune, India",
      icon: <FaMapMarkerAlt />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/pragya-sukrity",
      href: "https://www.linkedin.com/in/pragya-sukrity/",
      icon: <FaLinkedin />,
    },
    {
      label: "GitHub",
      value: "github.com/pragyasukrity007",
      href: "https://github.com/pragyasukrity007",
      icon: <FaGithub />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>

      <div className="border rounded-lg p-6 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 space-y-2">
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm space-y-2">
          {contacts.map((c) => (
            <li key={c.label} className="flex items-center gap-3">
              <span className="text-blue-600 dark:text-blue-400">{c.icon}</span>
              {c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  <strong>{c.label}:</strong> {c.value}
                </a>
              ) : (
                <span>
                  <strong>{c.label}:</strong> {c.value}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
