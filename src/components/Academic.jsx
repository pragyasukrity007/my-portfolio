export default function Academic() {
  const academics = [
    {
      institute: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology - Chennai, India",
      degree: "Bachelor of Technology in Computer Science",
      grade: "CGPA: 9.0/10",
      period: "May 2017 – April 2021"
    },
    {
      institute: "Sri Chaitanya Junior College - Visakhapatnam, India",
      degree: "Class 12th",
      period: "2017"
    },
    {
      institute: "St. Anthony School - Kurseong, India",
      degree: "Class 10th",
      period: "2015"
    }
  ];

  return (
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">Academic</h2>

      <div className="border rounded-lg p-6 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 space-y-4">
        {academics.map((a, idx) => (
          <div key={idx}>
            <p className="text-gray-800 dark:text-gray-100 font-semibold">{a.institute}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {a.degree} {a.grade ? `- ${a.grade}` : ""}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{a.period}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
