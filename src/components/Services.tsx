import { WHY_CHOOSE_US } from '@/constants'
import { Target, Shield, Users, Wrench } from 'lucide-react'

const ICONS = [Target, Shield, Users, Wrench]

export default function Services() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
            Why Clients Choose Advanced Rigging
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-ar-black">
            Built different. Built to deliver.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-5">
                  <Icon size={24} className="text-ar-red" />
                </div>
                <h3 className="text-xl font-bold text-ar-black mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
