import React from 'react';
import { ArrowRight, Sparkles, Code, Layout, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';

export default function Hero({ scrollToSection }) {
  const marqueeItems = [
    "Web Design",
    "Web Development",
    "Branding",
    "Digital Marketing",
    "Social Media Management",
    "Reel & Video Editing",
    "Portfolio Design",
    "SEO Optimization"
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAFAFC] text-slate-900 overflow-hidden">
      {/* Background Subtle Warm Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-orange-400/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f080_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs sm:text-sm font-semibold shadow-xs font-rounded">
              <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
              <span>Full-Service Digital Solutions Agency</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15] font-rounded">
              Building Digital Experiences That{' '}
              <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent drop-shadow-xs">
                Grow Businesses.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed font-rounded">
              We design websites, brands and digital experiences that help businesses build credibility, reach more customers and grow online.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 hover:from-orange-500 hover:to-orange-700 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all duration-200 font-rounded"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Your Appointment</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 hover:border-slate-400 shadow-sm transition-all duration-200 font-rounded"
              >
                <span>View Our Work</span>
              </button>
            </div>

            {/* Trust Checklist Pills */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 font-medium font-rounded">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>No Cookie-Cutter Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Fast 100% Responsive Code</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Transparent Delivery</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Tech Visual Graphic (White Theme Card) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer Glow Card Container - White Theme */}
              <div className="relative rounded-3xl p-6 bg-white border border-slate-200/90 shadow-2xl shadow-slate-200 overflow-hidden group">
                
                {/* Visual Graphic Mockup Screen */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-4 shadow-inner">
                  
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">aryavik.tech</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>

                  {/* Dashboard Visual Elements */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                      <div className="text-[10px] text-slate-500 font-medium">Page Speed Index</div>
                      <div className="text-2xl font-extrabold text-emerald-600 flex items-center gap-1.5">
                        <span>99/100</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[99%]" />
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                      <div className="text-[10px] text-slate-500 font-medium">Responsive Viewport</div>
                      <div className="text-2xl font-extrabold text-orange-500 flex items-center gap-1.5">
                        <span>Fluid 4K</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 w-[100%]" />
                      </div>
                    </div>
                  </div>

                  {/* Code Snippet Box - Crisp Light Theme */}
                  <div className="rounded-xl bg-slate-900 p-3 font-mono text-[11px] text-slate-200 border border-slate-800 space-y-1 shadow-md">
                    <div className="text-slate-400">// Building high-performing agency code</div>
                    <div><span className="text-orange-400">const</span> agency = <span className="text-amber-300">new</span> AryavikTechnologies();</div>
                    <div>agency.<span className="text-blue-400 font-semibold">buildDigitalExperience</span>();</div>
                  </div>

                </div>

                {/* Floating Badge 1 */}
                <div className="absolute -top-3 -right-3 sm:-right-4 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center gap-3 animate-float font-rounded">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Modern UI/UX</div>
                    <div className="text-[10px] text-slate-500">Tailored Design</div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute -bottom-3 -left-3 sm:-left-4 px-4 py-2.5 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center gap-3 animate-float [animation-delay:2s] font-rounded">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Clean Architecture</div>
                    <div className="text-[10px] text-slate-500">React & Tailwind</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Infinite Non-Stop Ticker Marquee - Light Theme */}
      <div className="mt-16 pt-8 pb-5 border-t border-b border-slate-200/90 bg-white/80 backdrop-blur-xs select-none relative">
        <div className="max-w-7xl mx-auto px-4 mb-3">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 font-rounded flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-slate-200"></span>
            <span>Our Core Competencies</span>
            <span className="h-px w-8 bg-slate-200"></span>
          </p>
        </div>

        <div className="relative w-full overflow-hidden flex items-center group trust-marquee-container">
          {/* Edge Gradient Fades for Seamless Masking */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

          {/* Marquee Motion Track */}
          <div className="trust-marquee flex items-center gap-6 py-2 animate-marquee whitespace-nowrap font-rounded">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <div 
                key={index} 
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-50/80 border border-slate-200/70 text-slate-700 font-semibold text-sm sm:text-base hover:border-orange-300 hover:bg-orange-50/60 hover:text-orange-600 transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs hover:-translate-y-0.5"
              >
                <span className="text-orange-500 text-sm font-bold animate-pulse">✦</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
