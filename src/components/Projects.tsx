export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ar-black mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing our capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
              <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                <p className="text-gray-400 text-sm">Project image {i}</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ar-black mb-2">Project {i}</h3>
                <p className="text-gray-600 text-sm">Project description - to be added</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
