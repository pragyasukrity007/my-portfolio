
const data = [
  {
    title: 'Software Engineer II',
    company: 'Nuvolo',
    range: 'Apr 2025 - Present',
    bullets: [
      'Working on ServiceNow UI Builder for Asset and Maintenance Management',
      'Implemented front-end features using React.js and Vanilla JS'
    ]
  },
  {
    title: 'Senior Software Engineer',
    company: 'LTIMindtree',
    range: 'Oct 2024 - Mar 2025',
    bullets: [
      'Reduced page load times by 40% through code optimization and efficient state management',
      'Mentored junior developers and established best practices for clean, maintainable code',
      'Delivered 8+ client-facing features, enhancing user satisfaction by 15%',
      'Implemented Jest tests achieving 95% coverage, reducing bugs by 30%',
      'Optimized deployment pipelines with Azure DevOps, reducing time from 2 hours to 15 minutes',
      'Integrated Auth0 for secure authentication and implemented Terraform for infrastructure automation'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'LTIMindtree',
    range: 'Jun 2021 - Sep 2024',
    bullets: [
      'Designed the front end of an e-commerce app with 50+ reusable React components',
      'Developed 25+ API endpoints, ensuring seamless integration between front-end and back-end systems',
      'Enhanced security with JWT protocols, reducing unauthorized access attempts by 40%',
      'Created 10+ Braze email templates, boosting engagement rates by 15%',
      'Coordinated with external partners to ensure timely project delivery, reducing miscommunication by 30%',
      'Achieved a 5-star customer rating by consistently delivering timely updates and exceptional support'
    ]
  }
];

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {data.map((exp, i) => (
          <div key={i} className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{exp.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company}</p>
              </div>
              <div className="text-sm text-gray-500">{exp.range}</div>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              {exp.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
