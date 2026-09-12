import React, { useState } from 'react';
import { 
  Layout, 
  Code2, 
  Palette, 
  TrendingUp, 
  Share2, 
  Video, 
  Briefcase, 
  Search, 
  ArrowRight, 
  X,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

const iconMap = {
  Layout: Layout,
  Code2: Code2,
  Palette: Palette,
  TrendingUp: TrendingUp,
  Share2: Share2,
  Video: Video,
  Briefcase: Briefcase,
  Search: Search
};

export default function Services({ onSelectService, scrollToSection }) {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    if (onSelectService) onSelectService(service);
  };

  return (
    <section id="services" className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
            Our Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            What We <span className="text-orange-500">Do</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            From design and custom code to marketing strategy and reel editing—we deliver complete end-to-end digital solutions.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || Layout;
            return (
              <div
                key={service.id}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-orange-400 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenModal(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                    Aryavik Tech
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-md max-w-2xl mx-auto">
            <p className="text-sm font-semibold text-slate-700">
              Need a custom package combining multiple services?
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md shadow-orange-500/20 whitespace-nowrap"
            >
              Get Custom Quote
            </button>
          </div>
        </div>

      </div>

      {/* Service Interactive Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-slate-900 text-orange-400 flex items-center justify-center shadow-lg">
                {React.createElement(iconMap[selectedService.icon] || Layout, { className: "w-7 h-7" })}
              </div>
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Service Overview</span>
                <h3 className="text-2xl font-extrabold text-slate-900">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Key Deliverables</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-semibold">Tech & Tools:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setSelectedService(null);
                  scrollToSection('contact');
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md"
              >
                Book This Service
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
