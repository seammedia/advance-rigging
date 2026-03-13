import ServicePage from '@/components/ServicePage'

export default function HeavyLiftRigging() {
  return (
    <ServicePage
      title="Heavy Lift Rigging"
      subtitle="Rigging Service"
      description="Specialist heavy lift operations for high-tonnage loads across Western Australia. From large plant equipment to structural components, our team plans and executes complex lifts with precision and safety at every stage."
      steps={[
        {
          number: '01',
          title: 'Lift Study & Engineering',
          description: 'A detailed lift study is prepared covering load weights, centre of gravity, crane capacity charts, ground bearing, and rigging configurations. All plans are reviewed and approved before mobilisation.',
        },
        {
          number: '02',
          title: 'Equipment Mobilisation',
          description: 'Cranes, rigging gear, and support equipment are selected and mobilised to site. Ground preparation, crane setup, and pre-lift checks are completed in accordance with the lift plan.',
        },
        {
          number: '03',
          title: 'Controlled Lift Execution',
          description: 'The lift is executed under the direction of qualified riggers and crane operators. Continuous communication and monitoring ensure the load is moved safely to its final position.',
        },
      ]}
      benefits={[
        'High-tonnage lifting capability for large and complex loads',
        'Engineered lift studies prepared by qualified personnel',
        'Strict safety protocols with detailed risk assessment for every lift',
        'Access to a range of crane configurations suited to heavy lift work',
        'Experience across mining, oil and gas, industrial, and construction sectors in WA',
        'Coordination of multi-crane lifts and tandem operations when required',
      ]}
      faqs={[
        {
          question: 'What weight capacity can you handle?',
          answer: 'Our heavy lift capability extends to several hundred tonnes depending on crane selection, site conditions, and lift geometry. We assess each project individually and source the right crane and rigging configuration for the job.',
        },
        {
          question: 'What types of cranes do you use for heavy lifts?',
          answer: 'We use a range of mobile cranes, crawler cranes, and specialised lifting equipment depending on the load and site requirements. Crane selection is determined during the lift study to match capacity, reach, and ground conditions.',
        },
        {
          question: 'Can you manage complex or multi-crane lifts?',
          answer: 'Yes. We have experience planning and executing tandem lifts, multi-crane operations, and lifts involving complex load geometry. These operations require additional engineering and coordination, which we manage as part of our planning process.',
        },
      ]}
    />
  )
}
