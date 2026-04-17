import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { STATS, SECTORS } from '@/constants'

export default function Hero() {
  return (
    <section className="relative bg-white pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="fade-up text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
              Specialist Steel Erection Contractor
            </p>
            <h1 className="fade-up text-5xl md:text-6xl lg:text-7xl font-bold text-ar-black leading-tight mb-6" style={{ transitionDelay: '100ms' }}>
              Lifting<br />
              Standards.
            </h1>
            <p className="fade-up text-gray-500 text-lg max-w-xl mb-4 leading-relaxed" style={{ transitionDelay: '200ms' }}>
              We do one thing and we do it well. Advanced Rigging is a specialist structural steel erection contractor serving the industrial sector across Western Australia.
            </p>
            <p className="fade-up text-gray-400 text-base max-w-xl mb-8 leading-relaxed" style={{ transitionDelay: '250ms' }}>
              From warehouses and workshops to processing plants and distribution centres, our experienced crews deliver safe, precise steel installations - on schedule, every time.
            </p>

            <div className="fade-up flex flex-col sm:flex-row gap-4" style={{ transitionDelay: '300ms' }}>
              <a
                href="mailto:admin@advancedrigging.au"
                className="inline-flex items-center justify-center gap-2 bg-ar-red hover:bg-ar-red-dark text-white px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-red-200"
              >
                Get a Quote
                <ArrowRight size={18} />
              </a>
              <Link
                to="/what-we-do"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-ar-red text-gray-700 hover:text-ar-red px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-all duration-300"
              >
                What We Do
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <div className="fade-up" style={{ transitionDelay: '400ms' }}>
            <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-lg">
              <img
                src="/img/hero.jpg"
                alt="Advanced Rigging crane on industrial site"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="fade-up grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-gray-100" style={{ transitionDelay: '500ms' }}>
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-ar-black">{stat.value}</p>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wide mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Sector pills */}
        <div className="fade-up flex flex-wrap gap-3 justify-center mt-10" style={{ transitionDelay: '600ms' }}>
          {SECTORS.map((sector) => (
            <span
              key={sector}
              className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-ar-red hover:text-ar-red transition-colors"
            >
              {sector}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
