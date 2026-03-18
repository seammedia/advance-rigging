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
      </Routes>
    </Router>
  )
}

export default App
