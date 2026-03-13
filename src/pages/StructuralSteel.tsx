import ServicePage from '@/components/ServicePage'

export default function StructuralSteel() {
  return (
    <ServicePage
      title="Structural Steel Erection"
      subtitle="Core Service"
      description="Professional structural steel erection for commercial and industrial projects across Western Australia. From warehouses and factories to multi-storey buildings, our crews deliver safe, precise steel installations on schedule."
      steps={[
        {
          number: '01',
          title: 'Site Preparation & Planning',
          description: 'We review drawings, confirm crane positions, and coordinate delivery schedules. Our team prepares the site with holding-down bolts checked and access established before steel arrives.',
        },
        {
          number: '02',
          title: 'Steel Erection',
          description: 'Columns, beams, and bracing are lifted into position using crane and rigging equipment suited to the project. Each member is plumbed, levelled, and temporarily secured as the structure takes shape.',
        },
        {
          number: '03',
          title: 'Bolting, Welding & Completion',
          description: 'All connections are completed to engineering specifications, whether bolted or welded. Final checks confirm alignment and tolerances before handover to the next trade.',
        },
      ]}
      benefits={[
        'Experienced steel erection crews with decades of combined field time',
        'Strong safety record backed by comprehensive SWMS and JSA documentation',
        'Precision alignment and plumbing to meet engineering tolerances',
        'Capability to handle projects from small canopies to large industrial structures',
        'Close coordination with builders, engineers, and steel fabricators',
        'Fully equipped with rigging gear, EWPs, and safety systems',
      ]}
      faqs={[
        {
          question: 'What types of structural steel projects do you handle?',
          answer: 'We erect structural steel for warehouses, factories, retail buildings, multi-storey commercial frames, mining infrastructure, and agricultural structures throughout Western Australia.',
        },
        {
          question: 'How long does a typical steel erection project take?',
          answer: 'Timelines vary depending on the size and complexity of the structure. A standard warehouse frame may take one to two weeks, while larger projects are scheduled in stages. We provide a detailed programme during the planning phase.',
        },
        {
          question: 'What certifications and licences does your team hold?',
          answer: 'Our crews hold current high-risk work licences for rigging and crane operations, along with relevant trade qualifications. We comply with Australian Standards and maintain all required safety documentation.',
        },
      ]}
    />
  )
}
