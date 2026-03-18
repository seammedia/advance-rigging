import { Shield, Leaf, Award, Users } from 'lucide-react'
import { PILLARS } from '@/constants'

const PILLAR_ICONS = [Shield, Leaf, Award, Users]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="slide-left">
            <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ar-black mb-6 leading-tight">
              Four pillars that drive everything we do
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Advanced Rigging specialises in structural steel erection for the industrial sector. We have the experienced staff and purpose-built equipment to deliver safe, high-quality steel installations on projects of any scale.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Our commitment to safety, environment, quality, and service ensures the best outcomes for our clients and project stakeholders.
            </p>
          </div>

          {/* Image */}
          <div className="slide-right">
            <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
              <img
                src="/img/about.jpg"
                alt="Advanced Rigging crane lifting steel beams on site"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Four Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-100 stagger-children">
          {PILLARS.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i]
            return (
              <div key={pillar.title} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-5 group-hover:bg-ar-red transition-colors duration-500">
                  <Icon size={28} className="text-ar-red group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold text-ar-black mb-3">{pillar.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
