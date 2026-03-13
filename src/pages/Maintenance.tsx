import ServicePage from '@/components/ServicePage'

export default function Maintenance() {
  return (
    <ServicePage
      title="Maintenance & Shutdowns"
      subtitle="Ongoing Support"
      description="Planned maintenance programs and shutdown support services. Our experienced crews minimise downtime while maintaining the highest safety standards."
      steps={[
        {
          number: '01',
          title: 'Scope & Schedule',
          description: 'We work with your team to define the maintenance scope, timeline, and resource requirements well before the shutdown window.',
        },
        {
          number: '02',
          title: 'Mobilisation',
          description: 'Our crews arrive with all necessary equipment, tooling, and materials ready to execute the maintenance plan efficiently.',
        },
        {
          number: '03',
          title: 'Execution & Handback',
          description: 'Work is completed safely and on schedule. All tasks are documented and the plant is handed back ready for operation.',
        },
      ]}
      benefits={[
        'Experienced shutdown crews available at short notice',
        'Detailed pre-planning to maximise efficiency during shutdowns',
        'Equipment removal, replacement, and repositioning capabilities',
        'Flexible crewing to match your project timeline',
        'Strong safety culture with zero-harm focus',
        'Post-shutdown support and follow-up services',
      ]}
      faqs={[
        {
          question: 'How far in advance should we plan a shutdown?',
          answer: 'We recommend engaging us as early as possible - ideally 4 to 8 weeks before the shutdown window. However, we can also mobilise quickly for urgent requirements.',
        },
        {
          question: 'Can you provide crews for extended shutdowns?',
          answer: 'Yes, we can provide dedicated rigging crews for shutdowns of any duration, from weekend turnarounds to multi-week maintenance campaigns.',
        },
        {
          question: 'Do you handle emergency maintenance?',
          answer: 'Yes, we offer emergency response for critical equipment failures and unplanned maintenance requirements. Contact us directly for urgent requests.',
        },
      ]}
    />
  )
}
