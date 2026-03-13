import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ar-black text-gray-400 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">ADVANCE RIGGING</h3>
            <p className="text-sm leading-relaxed">
              Professional lifting and rigging solutions delivered with precision, safety, and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/mechanical-rigging" className="hover:text-white transition-colors">Mechanical Rigging</a></li>
              <li><a href="/services/lifting-skating" className="hover:text-white transition-colors">Lifting & Skating</a></li>
              <li><a href="/services/installation" className="hover:text-white transition-colors">Installation</a></li>
              <li><a href="/services/maintenance" className="hover:text-white transition-colors">Maintenance & Shutdowns</a></li>
              <li><a href="/services/labour-equipment-hire" className="hover:text-white transition-colors">Labour & Equipment Hire</a></li>
              <li><a href="/services/fabrication" className="hover:text-white transition-colors">Fabrication</a></li>
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
                <span>Australia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Advance Rigging. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
