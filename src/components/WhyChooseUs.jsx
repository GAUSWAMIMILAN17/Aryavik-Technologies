import React from 'react';
import { WHY_CHOOSE_US, QUALITATIVE_STATS } from '../data/portfolioData';
import { CheckCircle2, ShieldAlert, Award, Zap, Code, Users } from 'lucide-react';

const icons = [Award, Zap, Users, Code, ShieldAlert, CheckCircle2];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider border border-orange-200">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why <span className="text-orange-500">Aryavik Technologies?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            We combine high-end aesthetic design with modern engineering principles to deliver results you can measure.
          </p>
        </div>

        {/* 6 Points Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-orange-500/40 hover:shadow-xl transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center font-bold">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Qualitative Metrics Banner (No Fake Statistics)
        <div className="mt-20 rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Standard of Excellence</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Engineering & Quality Benchmarks</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                We believe in qualitative integrity—every metric below is built directly into our codebase.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-6 border-t border-slate-800">
              {QUALITATIVE_STATS.map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="text-2xl sm:text-3xl font-black text-orange-400 tracking-tight">{stat.value}</div>
                  <div className="text-sm font-bold text-white mt-1">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{stat.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
