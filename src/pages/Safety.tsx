import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import CTA from '@/components/CTA'
import { SAFETY_COMMITMENTS, CONTRACTOR_PLATFORMS } from '@/constants'

export default function Safety() {
  return (
    <Layout>
      <PageHero
        eyebrow="Safety"
        heading="Safety is how we work. Not how we report."
        description="Structural steel erection is high-risk work. We don't pretend otherwise - and we don't manage that risk with paperwork alone. Safety at Advanced Rigging is a genuine operational commitment, embedded in how our crews plan, start, and execute every lift and every installation."
      />

      {/* Safety Commitments */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="fade-up text-ar-red font-semibold text-sm uppercase tracking-widest mb-12">
            Safety Commitments
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {SAFETY_COMMITMENTS.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-8 h-1 bg-ar-red mb-5" />
                <h3 className="text-lg font-bold text-ar-black mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contractor Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="fade-up text-center">
            <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
              Contractor Management Platforms
            </p>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-8">
              Advanced Rigging is pre-registered and compliant on the major contractor management platforms used by industrial builders across Western Australia.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {CONTRACTOR_PLATFORMS.map((platform) => (
                <span
                  key={platform}
                  className="px-6 py-3 rounded-lg bg-gray-50 border border-gray-200 text-sm font-semibold text-gray-700"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center fade-up">
          <blockquote className="text-xl md:text-2xl font-medium text-gray-700 italic leading-relaxed mb-6">
            "Their pre-start documentation was the best I'd seen from a subcontractor on that site. Everything was in order before they started, and they ran a clean, safe job from day one to practical completion."
          </blockquote>
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">Site Manager</span> - Tier 2 industrial builder, Perth WA
          </p>
        </div>
      </section>

      {/* Image */}
      <section className="pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="fade-up rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/img/service-crane.jpg"
              alt="Advanced Rigging crane and safety equipment on site"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <CTA
        heading="Safety questions before you engage us?"
        subtext="We're happy to walk through our WHS system and documentation with you before a project starts."
      />
    </Layout>
  )
}
