interface PageHeroProps {
  eyebrow: string
  heading: string
  description: string
}

export default function PageHero({ eyebrow, heading, description }: PageHeroProps) {
  return (
    <section className="bg-white pt-44 pb-16 md:pt-52 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="fade-up text-ar-red font-semibold text-sm uppercase tracking-widest mb-4">
          {eyebrow}
        </p>
        <h1 className="fade-up text-4xl md:text-5xl lg:text-6xl font-bold text-ar-black leading-tight mb-6" style={{ transitionDelay: '100ms' }}>
          {heading}
        </h1>
        <p className="fade-up text-gray-500 text-lg max-w-3xl leading-relaxed" style={{ transitionDelay: '200ms' }}>
          {description}
        </p>
      </div>
    </section>
  )
}
