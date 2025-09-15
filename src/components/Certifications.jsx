export default function Certifications() {
  const certifications = [
    "Microsoft Certified: Azure Fundamentals (AZ-900) – Microsoft",
    "Git Fundamentals – GitHub",
    "React (Basic), Node (Basic) – HackerRank"
  ];

  return (
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>

      <div className="border rounded-lg p-6 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 space-y-2">
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-sm">
          {certifications.map((c, idx) => (
            <li key={idx}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
