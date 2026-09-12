import React from 'react';
import { Mail, Phone, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const InstagramIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer({ scrollToSection }) {
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const serviceLinks = [
    "Web Design",
    "Web Development",
    "Branding & Graphic Design",
    "Digital Marketing",
    "Social Media Management",
    "Reel & Video Editing",
    "Portfolio Design",
    "SEO Optimization"
  ];

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800/80 pt-16 pb-8 relative overflow-hidden font-rounded">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Logo isDark={true} size="large" />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-normal">
              Building Digital Experiences That Grow Businesses. We design websites, brands and digital solutions that help companies succeed online.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com/aryavik_technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-pink-400 hover:border-pink-500/50 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:aryaviktech@gmail.com"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-orange-400 hover:border-orange-500/50 flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href="tel:9664709383"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 flex items-center justify-center transition-all"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((svc, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400">Contact Us</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div>
                <span className="text-slate-500 font-medium block text-[11px]">Email:</span>
                <a href="mailto:aryaviktech@gmail.com" className="text-white hover:text-orange-400 font-semibold">
                  aryaviktech@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-500 font-medium block text-[11px]">Phone Lines:</span>
                <a href="tel:9664709383" className="text-white hover:text-orange-400 font-semibold block">
                  +91 96647 09383
                </a>
                <a href="tel:8140843303" className="text-white hover:text-orange-400 font-semibold block">
                  +91 81408 43303
                </a>
              </div>
              <div>
                <span className="text-slate-500 font-medium block text-[11px]">Instagram:</span>
                <a 
                  href="https://instagram.com/aryavik_technologies" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pink-400 hover:underline font-semibold"
                >
                  @aryavik_technologies
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Aryavik Technologies. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('home')}
              className="inline-flex items-center gap-1.5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
