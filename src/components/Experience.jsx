

const data = [
  {
    title: 'Software Engineer II',
    company: 'Nuvolo',
    range: 'Apr 2025 - Present',
    bullets: ['Working on ServiceNow integrations and front-end features', 'React.js, Vanilla JS']
  },
  {
    title: 'Senior Software Engineer',
    company: 'LTIMindtree',
    range: 'Oct 2024 - Mar 2025',
    bullets: ['Led critical front-end features', 'Performance optimizations']
  },
  {
    title: 'Software Engineer',
    company: 'LTIMindtree',
    range: 'Jun 2021 - Sep 2024',
    bullets: ['Built 50+ reusable React components', 'Implemented JWT authentication']
  }
]

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
