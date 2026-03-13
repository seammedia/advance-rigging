import ServicePage from '@/components/ServicePage'

export default function TiltUpPanels() {
  return (
    <ServicePage
      title="Tilt-Up Panel Erection"
      subtitle="Core Service"
      description="Expert tilt-up concrete panel erection for commercial and industrial buildings in Western Australia. Our crews manage the full lift sequence from bracing design through to final panel alignment."
      steps={[
        {
          number: '01',
          title: 'Bracing Design & Setup',
          description: 'We review panel schedules and engineer the bracing layout for each panel. Bracing is installed to the slab prior to lifting, ensuring every panel has a secure support system ready.',
        },
        {
          number: '02',
          title: 'Panel Lift',
          description: 'Panels are lifted from the casting bed using crane and rigging configurations matched to panel weight and geometry. Each lift follows a documented procedure with continuous crew communication.',
        },
        {
          number: '03',
          title: 'Bracing & Final Alignment',
          description: 'Once vertical, panels are connected to the bracing system and adjusted to survey marks. Plumb, line, and level are confirmed before the crane is released.',
        },
      ]}
      benefits={[
        'Proven tilt-up experience on warehouses, factories, and retail projects across WA',
        'Engineered bracing systems designed and installed by our team',
        'Efficient lift sequences that keep projects on programme',
        'Close collaboration with builders and structural engineers',
        'Full safety documentation including SWMS and lift plans',
      ]}
      faqs={[
        {
          question: 'Are there limitations on tilt-up panel size or weight?',
          answer: 'Panel size is generally limited by crane capacity and site access rather than our capability. We regularly lift panels exceeding 20 tonnes and can advise on crane selection during the planning stage to suit your panel schedule.',
        },
        {
          question: 'How long does a tilt-up erection take?',
          answer: 'A typical industrial building with 20 to 40 panels can be erected in one to three days depending on panel size and site conditions. We provide a detailed programme as part of our planning process.',
        },
        {
          question: 'What site preparation is required before tilt-up erection?',
          answer: 'The slab must be complete with bracing inserts cast in. Panels should be cast, cured, and have lifting anchors installed. Crane access paths need to be clear and capable of supporting crane loads.',
        },
      ]}
    />
  )
}
