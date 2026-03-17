import ServicePage from '@/components/ServicePage'

export default function PrecastPanels() {
  return (
    <ServicePage
      title="Precast Concrete Panel Erection"
      subtitle="Core Service"
      description="Specialist precast concrete panel erection for commercial, industrial, and residential developments in Western Australia. We coordinate delivery, lifting, and final positioning to ensure panels are installed safely and accurately."
      steps={[
        {
          number: '01',
          title: 'Delivery Coordination',
          description: 'We work with panel manufacturers and transport companies to schedule deliveries that align with crane availability and site readiness, minimising downtime and double handling.',
        },
        {
          number: '02',
          title: 'Crane Lift & Positioning',
          description: 'Each panel is rigged and lifted into position using appropriately rated cranes. Our crews guide panels into place with precision, ensuring correct orientation and clearance.',
        },
        {
          number: '03',
          title: 'Alignment & Grouting',
          description: 'Panels are aligned to survey marks, braced securely, and grouted at the base. Connections are completed to engineering details before bracing is removed.',
        },
      ]}
      benefits={[
        'Extensive experience erecting precast panels across WA',
        'Crane and rigging capability for panels of all sizes and weights',
        'Clean, quality finishes with careful handling of architectural panels',
        'Strong coordination with precasters, builders, and engineers',
        'Detailed lift plans and safety documentation for every project',
      ]}
      faqs={[
        {
          question: 'What panel sizes can you handle?',
          answer: 'We erect precast panels ranging from small boundary wall panels through to large architectural facade panels. Our crane fleet and rigging equipment are selected to suit the specific weight and reach requirements of each project.',
        },
        {
          question: 'What site preparation is needed before panel erection?',
          answer: 'The slab or footings must be complete with holding-down ferrules or connections in place. Crane access needs to be clear and level, and the site should be ready to receive panels without obstruction.',
        },
        {
          question: 'How do you handle weatherproofing between panels?',
          answer: 'We install panels to the specified tolerances so that joints are consistent and ready for sealing by the waterproofing trade. We can advise on joint details during planning to ensure a smooth process.',
        },
      ]}
      image="/img/service-precast.jpg"
    />
  )
}
