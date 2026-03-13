import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import StructuralSteel from '@/pages/StructuralSteel'
import PrecastPanels from '@/pages/PrecastPanels'
import TiltUpPanels from '@/pages/TiltUpPanels'
import DeltaCore from '@/pages/DeltaCore'
import MechanicalRigging from '@/pages/MechanicalRigging'
import HeavyLiftRigging from '@/pages/HeavyLiftRigging'
import SiteWelding from '@/pages/SiteWelding'
import CraneHire from '@/pages/CraneHire'
import LabourHire from '@/pages/LabourHire'
import ShutdownWorks from '@/pages/ShutdownWorks'

function HomePage() {
  useScrollAnimation()
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <CTA />
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
        <Route path="/services/structural-steel" element={<StructuralSteel />} />
        <Route path="/services/precast-panels" element={<PrecastPanels />} />
        <Route path="/services/tilt-up-panels" element={<TiltUpPanels />} />
        <Route path="/services/delta-core" element={<DeltaCore />} />
        <Route path="/services/mechanical-rigging" element={<MechanicalRigging />} />
        <Route path="/services/heavy-lift-rigging" element={<HeavyLiftRigging />} />
        <Route path="/services/site-welding" element={<SiteWelding />} />
        <Route path="/services/crane-hire" element={<CraneHire />} />
        <Route path="/services/labour-hire" element={<LabourHire />} />
        <Route path="/services/shutdown-works" element={<ShutdownWorks />} />
      </Routes>
    </Router>
  )
}

export default App
