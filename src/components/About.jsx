import React from 'react';
import { Lightbulb, Cpu, Target, Headphones, CheckCircle } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Creative Thinking",
      desc: "Fresh, innovative design strategies that set your brand apart in competitive markets."
    },
    {
      icon: Cpu,
      title: "Modern Technology",
      desc: "Built on battle-tested modern web frameworks for speed, security, and scalability."
    },
    {
      icon: Target,
      title: "Business-Focused Solutions",
      desc: "Every design and feature is aligned directly with your lead generation & revenue goals."
    },
    {
      icon: Headphones,
      title: "Long-Term Support",
      desc: "Dedicated post-launch maintenance, performance monitoring, and continuous evolution."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold uppercase tracking-wider">
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Turning Ideas Into{' '}
            <span className="text-orange-500">Digital Experiences</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Aryavik Technologies is a digital solutions agency focused on helping businesses build a strong and professional presence online. From websites and branding to digital marketing and creative content, we bring strategy, design and technology together under one roof.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-orange-600 opacity-80 group-hover:opacity-100">
                  <CheckCircle className="w-4 h-4" />
                  <span>Aryavik Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Callout Box */}
        <div className="mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Our Agency Philosophy</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                "We don't build just for launch day—we build for sustainable business growth."
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you need a brand-new corporate website, graphic identity, or social media management, our unified team ensures seamless execution from day one.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#contact"
                className="px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/25 transition-all text-center"
              >
                Discuss Your Vision
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
