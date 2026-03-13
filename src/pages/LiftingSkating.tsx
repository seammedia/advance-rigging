import ServicePage from '@/components/ServicePage'

export default function LiftingSkating() {
  return (
    <ServicePage
      title="Lifting & Skating"
      subtitle="Specialised Service"
      description="Specialised lifting and skating services for moving heavy loads with precision and care. Hydraulic jacking, skating systems, and controlled load movement."
      steps={[
        {
          number: '01',
          title: 'Load Assessment',
          description: 'We assess the load weight, dimensions, centre of gravity, and floor conditions to determine the best lifting and skating approach.',
        },
        {
          number: '02',
          title: 'Equipment Setup',
          description: 'Hydraulic jacks, skates, and track systems are positioned and tested. Load paths are cleared and marked for safe movement.',
        },
        {
          number: '03',
          title: 'Controlled Movement',
          description: 'The load is lifted, skated, and positioned with precision. Our crew maintains constant control throughout the entire operation.',
        },
      ]}
      benefits={[
        'Hydraulic jacking systems for precise height control',
        'Heavy-duty skating systems for smooth load movement',
        'Suitable for confined spaces and limited access areas',
        'No crane required for many heavy load movements',
        'Minimises floor damage with proper load distribution',
        'Cost-effective alternative to traditional crane lifts',
      ]}
      faqs={[
        {
          question: 'What weight capacity can you handle?',
          answer: 'Our hydraulic jacking and skating systems can handle loads from a few tonnes to several hundred tonnes, depending on the specific requirements and site conditions.',
        },
        {
          question: 'Can you work in confined spaces?',
          answer: 'Yes, lifting and skating is often the preferred method for confined spaces where crane access is not available. Our equipment is designed to operate in tight areas.',
        },
        {
          question: 'How do you protect flooring during skating operations?',
          answer: 'We use steel plates, timber dunnage, and purpose-built track systems to distribute loads and protect flooring surfaces during movement.',
        },
      ]}
    />
  )
}
