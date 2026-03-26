import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_ITEMS } from '@/constants'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img src="/img/logo.png" alt="Advanced Rigging" className="h-20 md:h-24 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                location.pathname === item.href
                  ? 'text-ar-red'
                  : 'text-gray-700 hover:text-ar-red'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0403289016"
            className="flex items-center gap-2 bg-ar-red hover:bg-ar-red-dark text-white px-5 py-2.5 rounded text-sm font-semibold transition-colors"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-6 shadow-lg">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`block py-3 text-sm font-medium tracking-wide uppercase ${
                location.pathname === item.href
                  ? 'text-ar-red'
                  : 'text-gray-700 hover:text-ar-red'
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:0403289016"
            className="flex items-center justify-center gap-2 mt-4 bg-ar-red hover:bg-ar-red-dark text-white px-5 py-3 rounded text-sm font-semibold transition-colors"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      )}
    </nav>
  )
}
