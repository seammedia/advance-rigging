import ServicePage from '@/components/ServicePage'

export default function Installation() {
  return (
    <ServicePage
      title="Installation"
      subtitle="End-to-End Service"
      description="Professional installation of heavy equipment, machinery, and structural components. From initial planning through to commissioning, we manage the entire process."
      steps={[
        {
          number: '01',
          title: 'Pre-Installation Planning',
          description: 'Detailed planning including foundation checks, service connections, and coordination with other trades to ensure a smooth installation.',
        },
        {
          number: '02',
          title: 'Positioning & Alignment',
          description: 'Equipment is carefully positioned and aligned to manufacturer specifications using precision measuring instruments and levelling systems.',
        },
        {
          number: '03',
          title: 'Commissioning Support',
          description: 'We support the commissioning process, ensuring all connections are secure and equipment is ready for operational testing.',
        },
      ]}
      benefits={[
        'Complete project management from delivery to commissioning',
        'Precision alignment to manufacturer specifications',
        'Coordination with electrical, hydraulic, and mechanical trades',
        'Experience across manufacturing, food processing, and mining sectors',
        'Detailed documentation and handover procedures',
        'Ongoing support after installation completion',
      ]}
      faqs={[
        {
          question: 'Do you handle the full installation process?',
          answer: 'Yes, we manage the complete installation from receiving equipment, through positioning and alignment, to supporting commissioning and handover.',
        },
        {
          question: 'What industries do you work in?',
          answer: 'We have installation experience across manufacturing, food and beverage, mining, energy, and commercial sectors.',
        },
        {
          question: 'Can you coordinate with other trades?',
          answer: 'Absolutely. We regularly coordinate with electricians, plumbers, and other trades to ensure installations are completed efficiently and safely.',
        },
      ]}
    />
  )
}
