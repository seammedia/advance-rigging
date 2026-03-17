import ServicePage from '@/components/ServicePage'

export default function LabourHire() {
  return (
    <ServicePage
      title="Labour Hire"
      subtitle="Hire Service"
      description="Skilled rigger and trade labour hire for construction, industrial, and shutdown projects across Western Australia. We supply qualified, safety-conscious workers ready to integrate with your site team."
      steps={[
        {
          number: '01',
          title: 'Requirements Review',
          description: 'We discuss the scope of work, required qualifications, duration, and site-specific requirements to understand exactly what personnel you need.',
        },
        {
          number: '02',
          title: 'Crew Selection',
          description: 'We select personnel from our pool of experienced riggers and tradespeople, matching qualifications and experience to your project requirements.',
        },
        {
          number: '03',
          title: 'On-Site Delivery',
          description: 'Our crew arrives site-ready with current licences, medicals, and PPE. They integrate with your team and operate under your site management systems.',
        },
      ]}
      benefits={[
        'Licensed riggers with current high-risk work licences and industry experience',
        'Flexible hire periods from short-term fill-ins to long-term project placements',
        'Full safety documentation including licences, medicals, and inductions',
        'Workers experienced across commercial, industrial, and mining environments in WA',
        'Quick mobilisation to meet your programme requirements',
      ]}
      faqs={[
        {
          question: 'What qualifications do your labour hire personnel hold?',
          answer: 'Our personnel hold current high-risk work licences for rigging and dogging, along with relevant trade qualifications. Workers also maintain current construction induction cards (white cards), first aid, and other certifications as required.',
        },
        {
          question: 'Is there a minimum hire period?',
          answer: 'We are flexible with hire periods and can accommodate single-day requirements through to long-term project placements. Contact us to discuss the arrangement that best suits your project.',
        },
        {
          question: 'Do your workers supply their own PPE?',
          answer: 'Yes. Our personnel arrive with standard PPE including hard hat, safety boots, high-visibility clothing, gloves, and safety glasses. Any site-specific PPE requirements beyond the standard set should be advised at the time of booking.',
        },
      ]}
      image="/img/service-rigging.jpg"
    />
  )
}
