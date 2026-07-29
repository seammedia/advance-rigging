import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-ar-black text-gray-400 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-8 mb-10">
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={22} />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={22} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={22} />
            </a>
          </div>

          <a href="mailto:admin@advancedrigging.au" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} className="text-ar-red flex-shrink-0" />
            admin@advancedrigging.au
          </a>

          <div className="flex flex-col items-center gap-3">
            <p className="text-xs uppercase tracking-[0.22em] text-gray-500">Proudly supporting</p>
            <a
              href="https://sccpau.com.au"
              target="_blank"
              rel="noreferrer"
              aria-label="The Children's Christmas Party"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src="/img/childrens-christmas-party.png"
                alt="The Children's Christmas Party"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Advanced Rigging Pty Ltd &nbsp;&middot;&nbsp; ACN 682 156 663
        </div>
      </div>
    </footer>
  )
}
