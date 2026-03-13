import ServicePage from '@/components/ServicePage'

export default function SiteWelding() {
  return (
    <ServicePage
      title="Site Welding"
      subtitle="Trade Service"
      description="On-site welding services for structural steel connections, repairs, and fabrication across Western Australia. Our certified welders deliver quality work on commercial, industrial, and mining projects."
      steps={[
        {
          number: '01',
          title: 'Assessment & Preparation',
          description: 'We review welding requirements against drawings and specifications, confirm joint details, and prepare the work area including safety exclusion zones and hot work permits.',
        },
        {
          number: '02',
          title: 'Welding Execution',
          description: 'Certified welders carry out structural and general welding using processes matched to the material and specification. Work is performed to Australian Standards with ongoing quality checks.',
        },
        {
          number: '03',
          title: 'Inspection & Documentation',
          description: 'Completed welds are visually inspected and documented. Where required, we coordinate third-party NDT inspection and provide welding records for engineer and builder sign-off.',
        },
      ]}
      benefits={[
        'Certified welders qualified to Australian Standards',
        'Structural connection welding for steel erection and modification projects',
        'Quality documentation including weld maps and inspection records',
        'Experience with MIG, stick, and flux-cored welding processes',
        'Hot work management and compliance with site safety requirements',
      ]}
      faqs={[
        {
          question: 'What welding processes do you offer?',
          answer: 'We provide MIG (GMAW), stick (MMAW), and flux-cored (FCAW) welding on site. The process is selected based on the material, joint type, and project specification. We can advise on the most suitable approach for your application.',
        },
        {
          question: 'What certifications do your welders hold?',
          answer: 'Our welders hold qualifications in accordance with AS/NZS 1554 and relevant welding standards. Certifications are maintained and available for review. We can provide welder qualification records as part of project documentation.',
        },
        {
          question: 'What materials can you weld on site?',
          answer: 'We weld structural steel, mild steel, and general carbon steels on site. For specialist materials such as stainless steel or aluminium, we can discuss your requirements and confirm our capability for the specific application.',
        },
      ]}
    />
  )
}
