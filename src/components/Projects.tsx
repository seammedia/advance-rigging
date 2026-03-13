export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
            Our Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ar-black mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing our capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                <p className="text-gray-400 text-sm">Project image {i}</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ar-black mb-2 group-hover:text-ar-red transition-colors">Project {i}</h3>
                <p className="text-gray-500 text-sm">Project description - to be added</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
