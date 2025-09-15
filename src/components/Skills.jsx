import React from 'react'

const skills = [
  'React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3',
  'Node.js', 'Express.js', 'REST APIs', 'ServiceNow',
  'Redux', 'Context API', 'MySQL', 'Azure DevOps', 'JWT'
]

export default function Skills() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span key={s} className="px-3 py-1 rounded-full border text-sm">{s}</span>
        ))}
      </div>
    </div>
  )
}
