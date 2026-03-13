import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-white pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-50 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="fade-up text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
              Structural Steel & Precast Concrete Erection
            </p>
            <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-bold text-ar-black leading-tight mb-6" style={{ transitionDelay: '100ms' }}>
              Trusted Quality.
              <br />
              <span className="text-ar-red">Built to Last.</span>
            </h1>
            <p className="fade-up text-gray-500 text-lg max-w-xl mb-10 leading-relaxed" style={{ transitionDelay: '200ms' }}>
              Advanced Rigging is a trusted provider of high quality structural steel and precast concrete erection services. Experienced staff, full range of equipment, and a commitment to safety on every project.
            </p>
            <div className="fade-up flex flex-col sm:flex-row gap-4" style={{ transitionDelay: '300ms' }}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-ar-red hover:bg-ar-red-dark text-white px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-red-200"
              >
                Get a Quote
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-ar-red text-gray-700 hover:text-ar-red px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="fade-up" style={{ transitionDelay: '400ms' }}>
            <div className="rounded-2xl bg-gray-100 aspect-[4/3] flex items-center justify-center border border-gray-200 overflow-hidden shadow-lg">
              <p className="text-gray-400 text-sm">Hero image - add to /public/img/hero.jpg</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
