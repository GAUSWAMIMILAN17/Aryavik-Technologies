import React from 'react';
import { X, CheckCircle, ExternalLink, Calendar, Code, Target, Sparkles, Layers } from 'lucide-react';

export default function CaseStudyModal({ project, onClose, onStartProject }) {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full my-8 overflow-hidden shadow-2xl border border-slate-200 relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-orange-500 text-white text-[11px] font-bold uppercase tracking-wider">
              {project.badge}
            </span>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">
              Case Study / {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        {project.isImageOnly ? (
          <div className="overflow-y-auto p-6 sm:p-10 flex flex-col items-center justify-center min-h-[400px]">
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white p-4 sm:p-8 flex items-center justify-center">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-auto max-h-[75vh] object-contain rounded-xl"
              />
            </div>
          </div>
        ) : (
          <div className="overflow-y-auto p-6 sm:p-10 space-y-10">
            
            {/* Main Hero Header */}
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-orange-600">
                Digital Experience Showcase
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                {project.name}
              </h2>
              <p className="text-lg text-slate-600 font-normal leading-relaxed">
                {project.shortDesc}
              </p>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/9] bg-slate-900">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quick Details Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <div className="text-xs font-semibold text-slate-400">Category</div>
                <div className="text-sm font-bold text-slate-800 mt-1">{project.category}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">Classification</div>
                <div className="text-sm font-bold text-slate-800 mt-1">{project.badge}</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">Role</div>
                <div className="text-sm font-bold text-slate-800 mt-1">Design & Code</div>
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-400">Status</div>
                <div className="text-sm font-bold text-emerald-600 mt-1 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Production Ready
                </div>
              </div>
            </div>

            {/* Overview & Challenge Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-500" />
                  <span>Project Overview</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  <span>The Challenge</span>
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* Strategy, Design & Development */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-3">
                Execution Strategy & Approach
              </h3>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">01. Strategy</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{project.strategy}</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">02. Design Approach</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{project.designApproach}</p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">03. Development & Build</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{project.development}</p>
                </div>
              </div>
            </div>

            {/* Final Result Banner */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-2 relative overflow-hidden">
              <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">Key Outcome</div>
              <h4 className="text-xl font-extrabold text-white">{project.finalResult}</h4>
            </div>

            {/* Tech Stack Used */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Screenshots */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Project Gallery</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.gallery.map((imgUrl, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-slate-200 aspect-video shadow-md">
                      <img src={imgUrl} alt={`${project.name} screen ${i+1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* Footer Bar with Action */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Close Modal
          </button>

          <button
            onClick={() => {
              onClose();
              onStartProject();
            }}
            className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-orange-500 hover:bg-orange-600 shadow-md"
          >
            Start Similar Project
          </button>
        </div>

      </div>
    </div>
  );
}
