import { ArrowRight, CheckCircle } from 'lucide-react'

const CAPABILITIES = [
  'Portal frames and clear-span structures',
  'Mezzanine floors and platforms',
  'Roof purlins, girts, and bridging',
  'Columns, beams, and bracing systems',
  'Crane rails and runway beams',
  'Connection bolting and site welding',
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="fade-up">
            <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ar-black mb-6 leading-tight">
              Structural Steel Erection Specialists
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We do one thing and we do it well. Advanced Rigging is a specialist structural steel erection contractor serving the industrial sector across Western Australia. From warehouses and factories to processing plants and distribution centres, our experienced crews deliver safe, precise steel installations on schedule.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {CAPABILITIES.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-ar-red flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-ar-red hover:bg-ar-red-dark text-white px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-red-200"
            >
              Discuss Your Project
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Image */}
          <div className="fade-up" style={{ transitionDelay: '200ms' }}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/img/service-steel.jpg"
                alt="Structural steel frame erection on an industrial site"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
