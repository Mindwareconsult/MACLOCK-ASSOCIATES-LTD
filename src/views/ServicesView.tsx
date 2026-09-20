import React from 'react';
import { PageId } from '../types';
import { SERVICES, FALLBACK_IMAGE } from '../data/siteData';
import { ArrowRight, CheckCircle2, Layers } from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: PageId, extraId?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
            <span>OUR DISCIPLINES & EXPERTISE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-medium text-white tracking-tight leading-tight">
            WHAT WE <span className="text-[#C29B62] italic">DO.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-[#D0CFCB] font-light leading-relaxed">
            Professional solutions designed around the requirements of each project.
          </p>
        </div>
      </section>

      {/* Services List - Large Horizontal Editorial Panels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {SERVICES.map((srv) => (
          <div
            key={srv.id}
            id={`service-card-${srv.id}`}
            className="p-8 sm:p-12 rounded-lg bg-[#14161D] border border-[#22242D] hover:border-[#C29B62]/50 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
          >
            {/* Left: Image */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded overflow-hidden border border-[#2B2D38]">
              <img
                src={srv.image}
                alt={srv.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.dataset.fallback) {
                    target.dataset.fallback = 'true';
                    target.src = FALLBACK_IMAGE;
                  }
                }}
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-[#0E0F12]/80 backdrop-blur-md text-xs font-sora font-semibold text-[#C29B62] rounded">
                PHASE {srv.number}
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-sora tracking-widest text-[#C29B62] uppercase">
                  CATEGORY {srv.number}
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                  {srv.title}
                </h2>
                <p className="text-sm sm:text-base text-[#D0CFCB] leading-relaxed">
                  {srv.shortDescription}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#9A9CA4] leading-relaxed">
                {srv.fullDescription}
              </p>

              {/* Key deliverables pills */}
              <div className="space-y-2">
                <span className="text-[11px] uppercase tracking-wider text-white/70 font-semibold block">
                  Core Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#C6C5C0]">
                  {srv.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C29B62] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onNavigate('service-detail', srv.id)}
                  className="px-6 py-3 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-semibold text-xs tracking-wider uppercase rounded inline-flex items-center gap-2 transition-colors"
                >
                  <span>FULL SPECIFICATIONS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('consultation')}
                  className="px-5 py-3 bg-[#1C1E25] hover:bg-[#252832] text-white font-medium text-xs tracking-wider uppercase rounded border border-[#2B2D38] transition-colors"
                >
                  ENQUIRE ABOUT THIS SERVICE
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Cross-link CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-lg bg-[#161820] border border-[#242630] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-[#C29B62] uppercase tracking-widest font-sora">
              <Layers className="w-4 h-4" />
              <span>Tailored Project Solutions</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Need a combination of architectural planning and structural construction?
            </h3>
            <p className="text-xs sm:text-sm text-[#9A9CA4] max-w-xl">
              We frequently handle unified Design-and-Build contracts to eliminate clashes and maintain single-point responsibility.
            </p>
          </div>
          <button
            onClick={() => onNavigate('consultation')}
            className="px-8 py-4 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-bold text-xs tracking-[0.16em] uppercase rounded shrink-0 shadow-lg"
          >
            REQUEST A CONSULTATION
          </button>
        </div>
      </section>
    </div>
  );
};
