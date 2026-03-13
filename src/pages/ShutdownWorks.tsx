import ServicePage from '@/components/ServicePage'

export default function ShutdownWorks() {
  return (
    <ServicePage
      title="Shutdown & Maintenance Works"
      subtitle="Support Service"
      description="Experienced shutdown and maintenance support for industrial, mining, and processing facilities across Western Australia. We provide rigging crews, crane support, and trade labour to keep your shutdown on schedule."
      steps={[
        {
          number: '01',
          title: 'Scope & Schedule Review',
          description: 'We review your shutdown scope, programme, and crew requirements to understand the work and plan our resource allocation well ahead of the shutdown window.',
        },
        {
          number: '02',
          title: 'Mobilisation',
          description: 'Our crews are mobilised with all required licences, medicals, inductions, and equipment. Personnel are site-ready and briefed on the scope before arrival.',
        },
        {
          number: '03',
          title: 'Execution & Handback',
          description: 'Rigging, lifting, and support works are carried out to programme. We maintain open communication with your shutdown coordinators and complete all work to handback requirements.',
        },
      ]}
      benefits={[
        'Experienced shutdown crews familiar with the pace and demands of turnaround work',
        'Early planning and resource commitment to secure the right personnel',
        'Flexible crewing to scale up or down as the shutdown scope evolves',
        'Strong safety culture suited to high-hazard environments',
        'Capability across rigging, crane operations, welding, and general trade support',
        'Track record on shutdowns in mining, oil and gas, and heavy industrial facilities in WA',
      ]}
      faqs={[
        {
          question: 'How much lead time do you need for shutdown work?',
          answer: 'We recommend engaging as early as possible, ideally four to six weeks before the shutdown window. This allows time for planning, personnel allocation, and completion of site-specific inductions and medicals.',
        },
        {
          question: 'What crew sizes can you provide for shutdowns?',
          answer: 'We can supply individual riggers through to full crews depending on your requirements. Crew sizes are tailored to the scope of work, and we can scale numbers during the shutdown if the programme changes.',
        },
        {
          question: 'Can you support emergency or unplanned maintenance?',
          answer: 'Yes. We maintain availability for urgent callouts and can mobilise experienced riggers and crane support at short notice. Contact us directly to discuss your immediate requirements and we will do our best to assist.',
        },
      ]}
    />
  )
}
