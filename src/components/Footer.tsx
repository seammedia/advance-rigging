import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ar-black text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo centred */}
        <div className="flex justify-center mb-8">
          <img src="/img/logo-white.png" alt="Advanced Rigging" className="h-36 md:h-40 w-auto" />
        </div>

        {/* Quick Links centred */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 text-sm">
          <Link to="/what-we-do" className="hover:text-white transition-colors">What We Do</Link>
          <Link to="/who-we-are" className="hover:text-white transition-colors">Who We Are</Link>
          <Link to="/safety" className="hover:text-white transition-colors">Safety</Link>
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
        </nav>

        {/* Email centred */}
        <div className="flex justify-center mb-8 text-sm">
          <a href="mailto:admin@advancedrigging.au" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} className="text-ar-red flex-shrink-0" />
            admin@advancedrigging.au
          </a>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Advanced Rigging Pty Ltd &nbsp;&middot;&nbsp; ACN 682 156 663
        </div>
      </div>
    </footer>
  )
}
