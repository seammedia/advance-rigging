import ServicePage from '@/components/ServicePage'

export default function MechanicalRigging() {
  return (
    <ServicePage
      title="Mechanical Rigging"
      subtitle="Rigging Service"
      description="Professional mechanical rigging for heavy machinery, plant equipment, and complex relocations across Western Australia. Our experienced riggers deliver safe, controlled operations from initial assessment through to final placement."
      steps={[
        {
          number: '01',
          title: 'Site Assessment',
          description: 'Our team inspects the site to evaluate access, load paths, floor capacities, and any obstacles. We identify risks early and build them into the rigging plan before mobilisation.',
        },
        {
          number: '02',
          title: 'Planning & Execution',
          description: 'A detailed rigging plan is developed covering lift studies, equipment selection, and step-by-step procedures. The operation is carried out by qualified riggers following the approved methodology.',
        },
        {
          number: '03',
          title: 'Safe Completion',
          description: 'Equipment is positioned to specification with continuous safety monitoring throughout. Final checks confirm placement, levelling, and connection readiness before sign-off.',
        },
      ]}
      benefits={[
        'Licensed and experienced riggers on every operation',
        'Comprehensive lift planning and engineered rigging solutions',
        'Modern rigging equipment maintained to manufacturer standards',
        'Proven track record across industrial, mining, and commercial sectors in WA',
        'Full compliance with Australian Standards and workplace safety legislation',
        'Flexible scheduling to minimise disruption to your operations',
      ]}
      faqs={[
        {
          question: 'What types of equipment can you rig?',
          answer: 'We rig all types of heavy machinery and plant equipment including CNC machines, generators, compressors, HVAC units, production lines, and industrial plant. If it needs moving or placing, we can handle it.',
        },
        {
          question: 'Do you provide lift studies for mechanical rigging?',
          answer: 'Yes. We provide detailed lift studies and rigging plans for complex operations, covering load calculations, equipment selection, rigging configurations, and safety procedures. These are prepared by qualified personnel and reviewed before work begins.',
        },
        {
          question: 'What safety certifications do your riggers hold?',
          answer: 'All riggers hold current high-risk work licences issued under Australian regulations. Our team is trained in confined space, working at heights, and other relevant competencies as required by the scope of work.',
        },
      ]}
    />
  )
}
