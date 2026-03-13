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
              Trusted provider of high quality structural steel and precast concrete erection services.
            </p>
            <p className="text-xs text-gray-600">
              Advanced Rigging Pty Ltd<br />
              ACN 682 156 663
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services/structural-steel" className="hover:text-white transition-colors">Structural Steel</a></li>
              <li><a href="/services/precast-panels" className="hover:text-white transition-colors">Pre-cast Panels</a></li>
              <li><a href="/services/tilt-up-panels" className="hover:text-white transition-colors">Tilt-up Panels</a></li>
              <li><a href="/services/mechanical-rigging" className="hover:text-white transition-colors">Mechanical Rigging</a></li>
              <li><a href="/services/heavy-lift-rigging" className="hover:text-white transition-colors">Heavy Lift Rigging</a></li>
              <li><a href="/services/crane-hire" className="hover:text-white transition-colors">Crane Hire</a></li>
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
              <a href="mailto:admin@advancedrigging.au" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-ar-red flex-shrink-0" />
                admin@advancedrigging.au
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
