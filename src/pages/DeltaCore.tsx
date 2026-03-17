import ServicePage from '@/components/ServicePage'

export default function DeltaCore() {
  return (
    <ServicePage
      title="Delta Core Erection"
      subtitle="Specialist Service"
      description="Specialist Delta Core erection services for commercial and industrial construction in Western Australia. We bring the technical knowledge and equipment needed to install these high-performance precast systems efficiently."
      steps={[
        {
          number: '01',
          title: 'Planning & Coordination',
          description: 'We review project drawings, coordinate with the Delta Core supplier, and plan the erection sequence including crane positioning, delivery schedules, and connection details.',
        },
        {
          number: '02',
          title: 'Erection & Installation',
          description: 'Delta Core units are lifted into position using appropriately rated cranes. Our crews place each unit with precision, maintaining correct alignment and spacing throughout the installation.',
        },
        {
          number: '03',
          title: 'Completion & Handover',
          description: 'Connections are completed to engineering specifications, and the installation is checked against drawing requirements. Documentation is provided for builder and engineer sign-off.',
        },
      ]}
      benefits={[
        'Specialist knowledge of Delta Core systems and installation requirements',
        'Purpose-selected equipment for safe and efficient unit placement',
        'Quality workmanship with attention to alignment and connection details',
        'Experienced crews familiar with precast flooring and walling systems',
        'Full compliance with manufacturer guidelines and Australian Standards',
      ]}
      faqs={[
        {
          question: 'What is Delta Core?',
          answer: 'Delta Core is a precast concrete system used for flooring, walling, and roofing in commercial and industrial buildings. The hollow-core units provide long spans, thermal performance, and fire resistance in a cost-effective package.',
        },
        {
          question: 'What are the advantages of Delta Core over traditional methods?',
          answer: 'Delta Core offers faster installation compared to in-situ concrete, reduced formwork and propping, excellent fire and acoustic ratings, and the ability to span large distances. It is well suited to multi-storey and industrial applications.',
        },
        {
          question: 'Is Delta Core suitable for my project?',
          answer: 'Delta Core is commonly used in commercial offices, multi-storey residential, retail centres, and industrial buildings. We can review your project requirements and advise whether Delta Core is a suitable option during the planning stage.',
        },
      ]}
      image="/img/service-precast.jpg"
    />
  )
}
