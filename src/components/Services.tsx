import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SERVICES } from '@/constants'

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-ar-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ar-black mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive rigging and lifting solutions for projects of any scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              <span className="text-ar-red font-bold text-sm">{service.id}</span>
              <h3 className="text-xl font-bold text-ar-black mt-3 mb-3 group-hover:text-ar-red transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-ar-red text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
