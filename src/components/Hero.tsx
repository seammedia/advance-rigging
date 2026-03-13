import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative bg-ar-black pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ar-red/10 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
            Lifting & Rigging Solutions
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Securing Trust.
            <br />
            <span className="text-ar-red">Ensuring Safety.</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Professional rigging and lifting solutions delivered with precision, safety, and reliability. Your trusted partner for complex heavy lifting operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-ar-red hover:bg-ar-red-dark text-white px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              Get a Quote
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-white text-white px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Hero image placeholder */}
        <div className="mt-16 rounded-lg bg-ar-gray/50 aspect-[21/9] flex items-center justify-center border border-gray-800">
          <p className="text-gray-600 text-sm">Hero image - add to /public/img/hero.jpg</p>
        </div>
      </div>
    </section>
  )
}
