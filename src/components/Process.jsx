import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { ArrowRight, Check } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-orange-400 text-xs font-bold uppercase tracking-wider">
            Our Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            A structured, 5-step transparent development process engineered for seamless execution and quality results.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((item, idx) => (
            <div
              key={idx}
              className="group relative p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-slate-700 group-hover:text-orange-500 transition-colors">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center text-xs font-bold transition-all">
                    <Check className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                Phase {idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
