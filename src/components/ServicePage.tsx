import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react'

interface Step {
  number: string
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  steps: Step[]
  benefits: string[]
  faqs: FAQ[]
}

export default function ServicePage({ title, subtitle, description, steps, benefits, faqs }: ServicePageProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-ar-black pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-8">
            {description}
          </p>
          <a
            href="tel:0403289016"
            className="inline-flex items-center gap-2 bg-ar-red hover:bg-ar-red-dark text-white px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-colors"
          >
            <Phone size={18} />
            Get a Quote
          </a>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 md:py-28 bg-ar-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ar-black mb-12 text-center">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
                <span className="inline-block bg-ar-red text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-ar-black mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-ar-black mb-8">
                Why Advance Rigging
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-ar-red rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-600 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-gray-100 aspect-[4/3] flex items-center justify-center border border-gray-200">
              <p className="text-gray-400 text-sm">Service image placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-ar-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-ar-black mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-ar-black mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ar-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to discuss your project?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
            Get in touch with our team to discuss your rigging and lifting requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0403289016"
              className="inline-flex items-center justify-center gap-2 bg-ar-red hover:bg-ar-red-dark text-white px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-white text-white px-8 py-4 rounded font-semibold text-sm uppercase tracking-wide transition-colors"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-ar-black border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white font-bold text-lg mb-2">ADVANCE RIGGING</p>
          <p className="text-gray-500 text-xs">&copy; {new Date().getFullYear()} Advance Rigging. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
