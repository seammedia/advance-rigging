import ServicePage from '@/components/ServicePage'

export default function MechanicalRigging() {
  return (
    <ServicePage
      title="Mechanical Rigging"
      subtitle="Core Service"
      description="Precision mechanical rigging for heavy machinery, equipment relocation, and complex lifting operations. Safe, efficient, and professionally executed by our experienced team."
      steps={[
        {
          number: '01',
          title: 'Site Assessment',
          description: 'Our team conducts a thorough site inspection to assess access, load paths, and safety requirements before any work begins.',
        },
        {
          number: '02',
          title: 'Planning & Execution',
          description: 'Detailed rigging plans are developed including lift studies, equipment selection, and step-by-step procedures for the operation.',
        },
        {
          number: '03',
          title: 'Safe Completion',
          description: 'The rigging operation is carried out by qualified riggers with continuous safety monitoring through to final positioning.',
        },
      ]}
      benefits={[
        'Experienced and licensed riggers on every job',
        'Comprehensive lift planning and risk assessment',
        'Modern rigging equipment maintained to the highest standards',
        'Proven track record across industrial and commercial sectors',
        'Full compliance with Australian safety standards',
        'Flexible scheduling to minimise disruption to your operations',
      ]}
      faqs={[
        {
          question: 'What types of equipment can you rig?',
          answer: 'We handle rigging for all types of heavy machinery and equipment, from CNC machines and generators to complete production lines and industrial plant equipment.',
        },
        {
          question: 'Do you provide lift studies?',
          answer: 'Yes, we provide detailed lift studies and rigging plans for all complex operations. This includes load calculations, equipment selection, and safety procedures.',
        },
        {
          question: 'What safety certifications do your riggers hold?',
          answer: 'All our riggers hold current high-risk work licences and are trained in accordance with Australian Standards. We maintain comprehensive safety documentation for every project.',
        },
      ]}
    />
  )
}
