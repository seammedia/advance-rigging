import { TESTIMONIALS } from '@/constants'

export default function About() {
  const testimonial = TESTIMONIALS.home

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="fade-up">
          <p className="text-ar-red font-semibold text-sm uppercase tracking-widest mb-8">
            Client Testimonial
          </p>
          <blockquote className="text-2xl md:text-3xl font-medium text-ar-black leading-snug mb-8 italic">
            "{testimonial.quote}"
          </blockquote>
          <div className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-700">{testimonial.author}</span>
            <span className="mx-2">-</span>
            <span>{testimonial.role}, {testimonial.company}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
