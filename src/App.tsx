import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import MechanicalRigging from '@/pages/MechanicalRigging'
import LiftingSkating from '@/pages/LiftingSkating'
import Installation from '@/pages/Installation'
import Maintenance from '@/pages/Maintenance'
import LabourEquipmentHire from '@/pages/LabourEquipmentHire'
import Fabrication from '@/pages/Fabrication'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/mechanical-rigging" element={<MechanicalRigging />} />
        <Route path="/services/lifting-skating" element={<LiftingSkating />} />
        <Route path="/services/installation" element={<Installation />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/services/labour-equipment-hire" element={<LabourEquipmentHire />} />
        <Route path="/services/fabrication" element={<Fabrication />} />
      </Routes>
    </Router>
  )
}

export default App
