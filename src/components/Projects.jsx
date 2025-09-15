

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-6 flex flex-col items-start justify-between">
          <div>
            <h3 className="font-semibold">Coming soon</h3>
            <p className="mt-2 text-sm text-gray-600">I’ll add projects here as I finish them — stay tuned!</p>
          </div>
        </div>

        {/* Example project card (copy/paste later when you have projects)
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold">Project name</h3>
          <p className="text-sm mt-2">Short description</p>
          <div className="mt-4 flex gap-2">
            <a href="#" className="text-sm underline">Live</a>
            <a href="#" className="text-sm underline">Source</a>
          </div>
        </div>
        */}
      </div>
    </div>
  )
}
