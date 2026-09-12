import React, { useState } from 'react';
import { CATEGORIES, PROJECTS } from '../data/portfolioData';
import { ExternalLink, Layers, ArrowUpRight } from 'lucide-react';

export default function Portfolio({ onOpenCaseStudy }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => 
        project.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
        project.secondaryCategory?.toLowerCase().includes(activeCategory.toLowerCase())
      );

  return (
    <section id="portfolio" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider border border-orange-200">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Selected <span className="text-orange-500">Work</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            A selection of digital experiences, creative designs and brand solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-50 border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-2xl hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge Pills */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold text-white bg-slate-950/80 backdrop-blur-md border border-white/10 shadow-sm">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-orange-300 bg-orange-950/80 backdrop-blur-md border border-orange-500/30">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal mt-2">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {project.technologies.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-200 text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-orange-500 transition-colors shadow-md"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Mandatory Transparency Note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          <p>
            * All featured projects are marked as <span className="font-semibold text-slate-700">Concept Project</span> or <span className="font-semibold text-slate-700">Self-Initiated Project</span> to demonstrate agency production capability.
          </p>
        </div>

      </div>
    </section>
  );
}
