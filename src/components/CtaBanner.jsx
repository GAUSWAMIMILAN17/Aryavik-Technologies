import React from 'react';
import { ArrowRight, Calendar, MessageCircle, Sparkles } from 'lucide-react';
import Logo from './Logo';

export default function CtaBanner({ scrollToSection }) {
  const whatsappUrl = "https://wa.me/919664709383?text=Hello%20Aryavik%20Technologies,%20I%20would%20like%20to%20discuss%20a%20new%20project!";

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-900/60 border border-slate-800 p-8 sm:p-14 text-center space-y-6 shadow-2xl backdrop-blur-xl">
          
          <div className="flex justify-center pb-1">
            <Logo size="large" showTagline={true} />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider font-rounded">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready To Elevate Your Brand?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto font-rounded">
            Have a Project In Mind?
          </h2>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal font-rounded">
            Let's build something meaningful for your business. Reach out today for a complimentary consultation and project quote.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-xl shadow-orange-500/30 hover:scale-105 transition-all font-rounded tracking-wide"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/40 transition-all font-rounded"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
