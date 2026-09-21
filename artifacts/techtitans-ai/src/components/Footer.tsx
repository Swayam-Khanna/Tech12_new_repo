import { Linkedin, Github, Phone, MessageSquare, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 pt-10 pb-6 text-neutral-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10">
          {/* Brand/Logo Column */}
          <div className="flex flex-col items-start">
            <a href="#" className="mb-3 inline-block">
              <div className="h-12 w-auto max-w-[220px] flex items-center justify-start">
                <img src="/logo.png" alt="AVBT Technologies" className="h-full w-auto object-contain drop-shadow-[0_2px_10px_rgba(59,130,246,0.3)]" />
              </div>
            </a>
            <p className="text-xs text-neutral-500 mb-4 font-sans">Empowering Digital Realities</p>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/avbt-technology"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/avbttechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display text-white font-bold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="hover:text-white transition-colors text-sm">Services</a></li>
              <li><a href="/portfolio" className="hover:text-white transition-colors text-sm">Portfolio</a></li>
              <li><a href="/careers" className="hover:text-white transition-colors text-sm flex items-center gap-1.5">Careers <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-medium">Hiring</span></a></li>
              <li><a href="/about" className="hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-display text-white font-bold text-base mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/terms-conditions" className="hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="/privacy-policy" className="hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors text-sm">Security Policy</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-display text-white font-bold text-base mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <a href="tel:8979768681" className="hover:text-white transition-colors block">+91 8979768681</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MessageSquare className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <a href="https://wa.me/917876799926" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block">+91 7876799926</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <a href="mailto:contact@avbt.in" className="hover:text-white transition-colors break-all">
                  contact@avbt.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex items-center justify-center text-center text-xs text-neutral-500">
          <p>© 2026 AVBT Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
