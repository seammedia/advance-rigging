import Layout from '@/components/Layout'
import PageHero from '@/components/PageHero'
import CTA from '@/components/CTA'
import { PROJECTS_DATA } from '@/constants'

export default function ProjectsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Projects"
        heading="Our work speaks for itself."
        description="Below is a sample of the structural steel erection projects we've completed for industrial builders and fabricators across Western Australia. Every project on this page was delivered safely, to specification, and on programme."
      />

      {/* Project Cards */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-children">
            {PROJECTS_DATA.map((project) => (
              <div
                key={project.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <p className="text-ar-red text-xs font-semibold uppercase tracking-widest mb-1">
                    {project.category} - {project.location}
                  </p>
                  <h3 className="text-xl font-bold text-ar-black mb-3 group-hover:text-ar-red transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-red-50 text-ar-red text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Ready to get your steel up?"
        subtext="Talk to us early - we can help with programme planning and preliminary scope definition."
      />
    </Layout>
  )
}
