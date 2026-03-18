import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ar-black text-gray-400 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img src="/img/logo.png" alt="Advanced Rigging" className="h-16 w-auto mb-4" />
            <p className="text-sm leading-relaxed mb-4">
              Specialist structural steel erection contractor for the industrial sector across Western Australia.
            </p>
            <p className="text-xs text-gray-600">
              Advanced Rigging Pty Ltd<br />
              ACN 682 156 663
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <div className="space-y-4 text-sm">
              <a href="tel:0403289016" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-ar-red flex-shrink-0" />
                0403 289 016
              </a>
              <a href="mailto:jon@advancedrigging.au" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-ar-red flex-shrink-0" />
                jon@advancedrigging.au
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-ar-red flex-shrink-0 mt-0.5" />
                <span>347 Mandogalup Rd<br />Hope Valley WA 6165</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Advanced Rigging Pty Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
