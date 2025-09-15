import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCss3Alt,
  FaHtml5,
  FaKey,
  FaTools,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiPostman,
  SiRedux,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbBrandOpenai } from "react-icons/tb";
import { FaGem } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const skills = [
  {
    category: "Framework",
    items: [
      { name: "MERN", icon: <FaReact className="text-sky-500 text-3xl" /> },
    ],
  },
  {
    category: "AI Tools",
    items: [
      {
        name: "OpenAI",
        icon: <TbBrandOpenai className="text-purple-500 text-3xl" />,
      },
      { name: "Claude", icon: <FaGem className="text-pink-500 text-3xl" /> },
      { name: "Gemini", icon: <FaGem className="text-blue-500 text-3xl" /> },
    ],
  },
  {
    category: "Front-end Development",
    items: [
      { name: "React.js", icon: <FaReact className="text-sky-500 text-3xl" /> },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-white text-3xl" />,
      },
      {
        name: "JavaScript (ES6+)",
        icon: <SiJavascript className="text-yellow-400 text-3xl" />,
      },
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
      },
    ],
  },

  {
    category: "Backend Development",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-600 text-3xl" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-600 text-3xl" />,
      },
      {
        name: "RESTful APIs",
        icon: <SiExpress className="text-gray-400 text-3xl" />,
      },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-500 text-3xl" /> },
      { name: "MSSQL", icon: <FaDatabase className="text-red-600 text-3xl" /> },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-3xl" />,
      },
    ],
  },
  {
    category: "Platform",
    items: [
      {
        name: "ServiceNow",
        icon: <FaTools className="text-gray-500 text-3xl" />,
      },
      { name: "Azure", icon: <VscAzure className="text-blue-700 text-3xl" /> },
      {
        name: "Netlify",
        icon: <SiNetlify className="text-green-500 text-3xl" />,
      },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: <FaGitAlt className="text-black text-3xl" /> },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500 text-3xl" />,
      },
      { name: "VS Code", icon: <FaTools className="text-blue-600 text-3xl" /> },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "JWT", icon: <FaKey className="text-green-600 text-3xl" /> },
      { name: "Redux", icon: <SiRedux className="text-purple-600 text-3xl" /> },
      {
        name: "Context API",
        icon: <SiRedux className="text-purple-400 text-3xl" />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="space-y-8">
        {skills.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold mb-3">{group.category}</h3>
            <div className="flex flex-wrap gap-5">
              {group.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 border rounded-lg bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md transition"
                >
                  {item.icon}
                  <span className="text-base font-medium">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
