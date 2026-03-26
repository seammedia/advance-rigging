import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import CTA from '@/components/CTA'
import { SCOPE_OF_WORK, HOW_WE_WORK, PROJECT_TYPES, CONTRACTOR_PLATFORMS } from '@/constants'

export default function WhatWeDo() {
  return (
    <Layout>
      <PageHero
        eyebrow="What We Do"
        heading="Structural steel erection - start to finish."
        description="Advanced Rigging handles the full scope of structural steel erection for industrial projects across Western Australia. Whether you're erecting a single-span workshop or a multi-bay processing facility, our crews deliver a safe, precise, and programme-driven installation."
      />

      {/* Secondary description */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="fade-up text-gray-400 text-base max-w-3xl leading-relaxed">
            We work directly from engineer-approved drawings and sign off every installation against specification before we leave site. Our project managers stay across programme, RFI resolution, and coordination with other trades - so you spend less time managing us and more time managing your project.
          </p>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="fade-up text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
            Scope of Work
          </p>
          <h2 className="fade-up text-3xl md:text-4xl font-bold text-ar-black mb-12">
            What we erect
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-children">
            {SCOPE_OF_WORK.map((item) => (
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

      {/* How We Work */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="fade-up text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
            How We Work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 stagger-children">
            {HOW_WE_WORK.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-bold text-ar-black mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types + Contractor Platforms */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Project Types */}
            <div className="fade-up">
              <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
                Typical Project Types
              </p>
              <ul className="space-y-3">
                {PROJECT_TYPES.map((type) => (
                  <li key={type} className="flex items-center gap-3 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-ar-red rounded-full flex-shrink-0" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contractor Platforms */}
            <div className="fade-up" style={{ transitionDelay: '200ms' }}>
              <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
                Contractor Platforms
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Advanced Rigging is registered and compliant on all major contractor management systems used by industrial builders in WA. If your platform isn't listed, contact us and we'll get registered before your project starts.
              </p>
              <div className="flex flex-wrap gap-3">
                {CONTRACTOR_PLATFORMS.map((platform) => (
                  <span
                    key={platform}
                    className="px-4 py-2 rounded bg-white border border-gray-200 text-sm font-medium text-gray-700"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        heading="Have a project coming up?"
        subtext="We're happy to discuss scope, programme, and preliminary pricing early."
      />
    </Layout>
  )
}
