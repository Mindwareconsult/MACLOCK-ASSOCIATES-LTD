import React from 'react';
import { PageId } from '../types';
import { SERVICES, FALLBACK_IMAGE } from '../data/siteData';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Compass, ArrowUpRight } from 'lucide-react';

interface ServiceDetailViewProps {
  serviceId: string;
  onNavigate: (page: PageId, extraId?: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  serviceId,
  onNavigate,
}) => {
  const currentService = SERVICES.find((s) => s.id === serviceId) || SERVICES[0];
  const otherServices = SERVICES.filter((s) => s.id !== currentService.id).slice(0, 3);

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A0A2AA] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#C29B62]" />
          <span>Back to All Services</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
            <span>SERVICE {currentService.number}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-bold text-white tracking-tight">
            {currentService.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#D0CFCB] font-light leading-relaxed">
            {currentService.shortDescription}
          </p>
        </div>
      </section>

      {/* Full-width Image Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] sm:aspect-[21/8] rounded-lg overflow-hidden border border-[#23252E]">
          <img
            src={currentService.image}
            alt={currentService.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.fallback) {
                target.dataset.fallback = 'true';
                target.src = FALLBACK_IMAGE;
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-xs text-[#C6C5C0] font-sora tracking-wider uppercase">
            MACLOCK ASSOCIATES LTD • TECHNICAL DISCIPLINE {currentService.number}
          </div>
        </div>
      </section>

      {/* Deep Dive Content Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold text-white">
                Detailed Scope & Overview
              </h2>
              <p className="text-base text-[#C6C5C0] leading-relaxed">
                {currentService.fullDescription}
              </p>
            </div>

            {/* Approach */}
            <div className="p-8 rounded-lg bg-[#14161D] border border-[#22242D] space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
                <Compass className="w-4 h-4" />
                <span>Our Engineering & Design Approach</span>
              </div>
              <p className="text-sm sm:text-base text-[#D0CFCB] leading-relaxed">
                {currentService.approach}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-white">
                Standard Deliverables & Documentation
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded bg-[#161820] border border-[#22242C] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C29B62] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#D0CFCB]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phased Workflow */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-white">
                Key Execution Phases
              </h3>
              <div className="space-y-3">
                {currentService.keyPhases.map((phase, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded bg-[#121318] border border-[#1E2028] flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-sora font-semibold text-[#C29B62]">
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-medium text-white">{phase}</span>
                    </div>
                    <span className="text-[10px] text-[#7E8088] uppercase tracking-wider font-sora">
                      STAGE 0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA & Info */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-lg bg-[#161820] border border-[#242632] space-y-6 sticky top-28">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C29B62] font-sora font-semibold">
                  PROJECT ENGAGEMENT
                </span>
                <h4 className="text-lg font-heading font-bold text-white">
                  Commission {currentService.title}
                </h4>
                <p className="text-xs text-[#9A9CA4] leading-relaxed">
                  Discuss your project scope, site conditions, or technical requirements with our engineering and design team in Port Harcourt.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onNavigate('consultation')}
                  className="w-full py-3.5 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-bold text-xs tracking-wider uppercase rounded text-center transition-all shadow-md"
                >
                  REQUEST CONSULTATION
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3 bg-[#1C1E26] hover:bg-[#22252E] text-white text-xs tracking-wider uppercase rounded border border-[#2A2D38] transition-colors"
                >
                  CONTACT OUR OFFICE
                </button>
              </div>

              <div className="pt-4 border-t border-[#232530] space-y-2 text-xs text-[#8E9098]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C29B62]" />
                  <span>Licensed standards adherence</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B62]" />
                  <span>Transparent itemized billing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1E2026] pt-16 space-y-8">
        <h3 className="text-xl font-heading font-bold text-white">
          Other Specialized Disciplines
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherServices.map((srv) => (
            <div
              key={srv.id}
              onClick={() => {
                onNavigate('service-detail', srv.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-6 rounded-lg bg-[#14161D] border border-[#20222B] hover:border-[#C29B62]/50 cursor-pointer transition-colors group space-y-4"
            >
              <div className="text-xs font-sora font-semibold text-[#C29B62]">
                {srv.number}
              </div>
              <h4 className="text-lg font-heading font-bold text-white group-hover:text-[#C29B62] transition-colors">
                {srv.title}
              </h4>
              <p className="text-xs text-[#9A9CA4] line-clamp-2">
                {srv.shortDescription}
              </p>
              <div className="pt-2 text-xs font-semibold text-[#C29B62] inline-flex items-center gap-1 group-hover:underline">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
