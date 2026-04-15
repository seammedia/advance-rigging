import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import CTA from '@/components/CTA'
import { STANDARDS, TESTIMONIALS } from '@/constants'

export default function WhoWeAre() {
  return (
    <Layout>
      <PageHero
        eyebrow="Who We Are"
        heading="Built on standards. Driven by people."
        description="Advanced Rigging was founded on a straightforward belief - that the structural steel erection industry deserved a contractor that took safety, quality, and client service as seriously as it took getting the steel up. That belief hasn't changed."
      />

      {/* Our Story */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="slide-left">
              <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
                Our Story
              </p>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Advanced Rigging was established by riggers and steel erectors who had spent years working for others and knew exactly what a well-run structural steel crew looked like - and what it didn't. We started with the right people, the right culture, and the right focus: industrial structural steel erection, done properly.
                </p>
                <p>
                  Over the years we've built a reputation across the Perth industrial sector for showing up, communicating well, working safely, and delivering what we promise. Our client base has grown steadily through word of mouth and repeat business - the most reliable indicator we know that we're doing something right.
                </p>
                <p>
                  Today we operate a full fleet of cranes and equipment, carry a team of qualified riggers and steel erectors, and serve industrial builders and steel fabricators across Western Australia. We're not trying to be the biggest rigging contractor in Perth. We're trying to be the best one to work with.
                </p>
              </div>
            </div>
            <div className="slide-right">
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-md">
                <img
                  src="/img/about.jpg"
                  alt="Advanced Rigging crew on site"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Standards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
              Our Five Standards
            </p>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              These aren't values on a wall. They're the commitments we hold ourselves to on every project, with every client, every day.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 stagger-children">
            {STANDARDS.map((standard) => (
              <div key={standard.number} className="text-center p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                <span className="text-3xl font-bold text-ar-red">{standard.number}</span>
                <h3 className="text-lg font-bold text-ar-black mt-2 mb-3">{standard.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="fade-up text-ar-red font-semibold text-sm uppercase tracking-widest mb-12 text-center">
            Client Testimonials
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            {[TESTIMONIALS.builder, TESTIMONIALS.fabricator].map((t, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-ar-red">
                <p className="text-gray-700 italic leading-relaxed mb-4">
                  "{t.quote}"
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">{t.author}</span> - {t.role}, {t.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Want to work with us?"
        subtext="We're always interested in meeting industrial builders and fabricators doing good work in WA."
      />
    </Layout>
  )
}
