import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Star, Quote, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Client <span className="text-orange-500">Feedback</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Read what partners and clients say about our design standards, communication, and technical delivery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative space-y-6"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-orange-200" />

                <p className="text-slate-700 text-sm leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-11 h-11 rounded-full object-cover border-2 border-orange-500/30"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900">{item.author}</div>
                    <div className="text-xs text-slate-500">{item.role}</div>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-md bg-orange-50 text-orange-600 text-[10px] font-bold">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Structured Placeholder Notice for Easy Future Updates */}
        <div className="mt-12 text-center p-4 rounded-2xl bg-white border border-dashed border-slate-300 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <MessageSquare className="w-4 h-4 text-orange-500" />
            <span>Client testimonials structure initialized. Easily add new client reviews in data module.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
