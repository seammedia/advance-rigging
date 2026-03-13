import ServicePage from '@/components/ServicePage'

export default function LabourEquipmentHire() {
  return (
    <ServicePage
      title="Labour & Equipment Hire"
      subtitle="Flexible Solutions"
      description="Skilled riggers and specialised equipment available for hire. Flexible solutions to supplement your existing workforce or provide complete rigging capability."
      steps={[
        {
          number: '01',
          title: 'Requirements Review',
          description: 'We discuss your project needs, including the number of riggers, skill levels, equipment requirements, and timeline.',
        },
        {
          number: '02',
          title: 'Crew & Equipment Selection',
          description: 'We match the right personnel and equipment to your project. All our riggers are fully licenced and experienced.',
        },
        {
          number: '03',
          title: 'On-Site Delivery',
          description: 'Our crew arrives on site ready to work, with all necessary PPE, tools, and equipment. Ongoing support is provided throughout the hire period.',
        },
      ]}
      benefits={[
        'Fully licenced and experienced riggers',
        'Flexible hire periods from single days to long-term engagements',
        'Wide range of rigging equipment available',
        'All personnel come with current safety documentation',
        'Scalable workforce to match your project demands',
        'Competitive rates with no hidden costs',
      ]}
      faqs={[
        {
          question: 'What qualifications do your riggers hold?',
          answer: 'All our riggers hold current high-risk work licences for rigging, along with relevant industry inductions and safety training certifications.',
        },
        {
          question: 'What equipment is available for hire?',
          answer: 'We offer a range of rigging equipment including chain blocks, lever hoists, slings, shackles, hydraulic jacks, and skating systems. Contact us for specific requirements.',
        },
        {
          question: 'What are your minimum hire periods?',
          answer: 'We offer flexible hire periods starting from a single day. Longer-term arrangements are available at competitive rates.',
        },
      ]}
    />
  )
}
