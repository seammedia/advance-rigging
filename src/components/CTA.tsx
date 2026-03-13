import { Phone, ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-ar-red relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full border-[40px] border-white -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border-[30px] border-white translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="fade-up text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to discuss your project?
        </h2>
        <p className="fade-up text-white/80 text-lg max-w-xl mx-auto mb-10" style={{ transitionDelay: '100ms' }}>
          Get in touch with our team to discuss your structural steel, precast, or rigging requirements.
        </p>
        <div className="fade-up flex flex-col sm:flex-row gap-4 justify-center" style={{ transitionDelay: '200ms' }}>
          <a
            href="tel:0403289016"
            className="inline-flex items-center justify-center gap-2 bg-white text-ar-red hover:bg-gray-50 px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:shadow-lg"
          >
            <Phone size={18} />
            Call Now
          </a>
          <a
            href="mailto:admin@advancedrigging.au"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-all duration-300"
          >
            Email Us
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
