import { Shield, Award, Users } from 'lucide-react'
import { STATS } from '@/constants'

const ICON_MAP: Record<string, typeof Shield> = {
  'Years Experience': Award,
  'Projects Completed': Users,
  'Safety Record': Shield,
}

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ar-black mb-6 leading-tight">
              We rise by lifting our industry
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Advance Rigging delivers professional lifting and rigging solutions with an unwavering commitment to safety and quality. With decades of combined experience, our team handles complex operations with precision and care.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              From mechanical rigging and heavy lifts to installation and fabrication, we provide end-to-end solutions tailored to your project requirements.
            </p>
          </div>

          {/* Image placeholder */}
          <div className="rounded-lg bg-gray-100 aspect-[4/3] flex items-center justify-center border border-gray-200">
            <p className="text-gray-400 text-sm">About image - add to /public/img/about.jpg</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          {STATS.map((stat) => {
            const Icon = ICON_MAP[stat.label] || Shield
            return (
              <div key={stat.label} className="text-center">
                <Icon size={32} className="text-ar-red mx-auto mb-4" />
                <p className="text-3xl md:text-4xl font-bold text-ar-black mb-2">{stat.value}</p>
                <p className="text-gray-500 text-sm uppercase tracking-wide">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
