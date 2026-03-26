import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  useScrollAnimation()
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
