import ServicePage from '@/components/ServicePage'

export default function CraneHire() {
  return (
    <ServicePage
      title="Crane Hire"
      subtitle="Hire Service"
      description="Crane hire with experienced operators for construction, industrial, and maintenance projects across Western Australia. We supply the right crane for the job with qualified operators ready to work on your site."
      steps={[
        {
          number: '01',
          title: 'Requirement Assessment',
          description: 'We discuss your lifting requirements including load weights, lift heights, reach distances, and site conditions. This ensures the right crane is selected for the job.',
        },
        {
          number: '02',
          title: 'Crane Selection',
          description: 'Based on the assessment, we recommend a crane configuration that meets capacity and site requirements. Lift plans are prepared where needed for specific operations.',
        },
        {
          number: '03',
          title: 'Mobilisation & Operation',
          description: 'The crane and operator are mobilised to site on schedule. Our operators work with your crew to complete lifting operations safely and efficiently.',
        },
      ]}
      benefits={[
        'Range of crane sizes and configurations to suit different projects',
        'Experienced, licensed crane operators on every hire',
        'Flexible hire periods from single lifts to long-term project support',
        'Well-maintained cranes with current certifications and inspections',
        'Competitive rates with clear pricing and no hidden charges',
        'Responsive availability across the Perth metro area and regional WA',
      ]}
      faqs={[
        {
          question: 'What crane sizes do you have available?',
          answer: 'We provide access to a range of mobile cranes from small pick-and-carry units through to large capacity all-terrain cranes. The right crane is selected based on your specific load, reach, and site requirements.',
        },
        {
          question: 'What are your hire periods?',
          answer: 'We offer flexible hire arrangements including single-lift hire, daily hire, and longer-term project hire. We work with you to find the most cost-effective arrangement for your scope of work.',
        },
        {
          question: 'What is included in the crane hire rate?',
          answer: 'Our crane hire includes the crane, operator, and standard rigging gear. Mobilisation and demobilisation are quoted based on site location. Additional items such as dogmen, lift plans, or specialised rigging are quoted separately as required.',
        },
      ]}
      image="/img/service-crane.jpg"
    />
  )
}
