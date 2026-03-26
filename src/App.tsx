import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import WhatWeDo from '@/pages/WhatWeDo'
import WhoWeAre from '@/pages/WhoWeAre'
import Safety from '@/pages/Safety'
import ProjectsPage from '@/pages/ProjectsPage'

function HomePage() {
  useScrollAnimation()
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
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
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App
