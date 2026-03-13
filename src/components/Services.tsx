import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/constants'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ar-black mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Comprehensive structural steel, precast concrete, and rigging solutions for projects of any scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg bg-red-50 text-ar-red font-bold text-sm flex items-center justify-center">
                  {service.id}
                </span>
                <div className="h-px flex-1 bg-gray-100 group-hover:bg-red-100 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-ar-black mb-3 group-hover:text-ar-red transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-ar-red text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                Learn More <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
