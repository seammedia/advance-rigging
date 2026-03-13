import ServicePage from '@/components/ServicePage'

export default function Fabrication() {
  return (
    <ServicePage
      title="Fabrication"
      subtitle="Custom Solutions"
      description="Custom fabrication services for rigging components, structural steel, and specialised lifting equipment. From concept to completion, built to your specifications."
      steps={[
        {
          number: '01',
          title: 'Design & Engineering',
          description: 'We work with your drawings or develop solutions from scratch. All fabrication is designed to meet relevant Australian Standards.',
        },
        {
          number: '02',
          title: 'Fabrication',
          description: 'Our workshop produces high-quality fabricated components using quality materials and proven welding procedures.',
        },
        {
          number: '03',
          title: 'Delivery & Installation',
          description: 'Completed fabrications are delivered to site and installed by our rigging team, ensuring a seamless end-to-end service.',
        },
      ]}
      benefits={[
        'Custom fabrication to your specifications',
        'Experienced welders and fabricators',
        'Quality materials sourced from reputable suppliers',
        'Full traceability and documentation',
        'Integrated fabrication and installation service',
        'Competitive pricing and reliable delivery',
      ]}
      faqs={[
        {
          question: 'What types of fabrication do you offer?',
          answer: 'We fabricate rigging components, lifting beams, spreader bars, structural steelwork, platforms, frames, and custom solutions for specific project requirements.',
        },
        {
          question: 'Can you work from our drawings?',
          answer: 'Yes, we can fabricate from your engineering drawings or develop solutions from concept sketches. We can also arrange independent engineering certification if required.',
        },
        {
          question: 'Do you provide testing and certification?',
          answer: 'Yes, all lifting equipment is proof-load tested and certified in accordance with Australian Standards before being put into service.',
        },
      ]}
    />
  )
}
