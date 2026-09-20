import React from 'react';
import { PageId } from '../types';
import { COMPANY, PRINCIPLES } from '../data/siteData';
import { ArrowRight, MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const values = [
    {
      name: 'Integrity',
      desc: 'Transparency in material specification, procurement pricing, and contractual adherence.',
    },
    {
      name: 'Quality',
      desc: 'Uncompromising construction standards, structural safety verification, and durable finishes.',
    },
    {
      name: 'Precision',
      desc: 'Meticulous attention to architectural tolerances, structural calculations, and site alignment.',
    },
    {
      name: 'Professionalism',
      desc: 'Structured coordination, respectful client partnerships, and orderly site management.',
    },
    {
      name: 'Accountability',
      desc: 'Taking direct ownership of project schedules, site safety, and execution milestones.',
    },
    {
      name: 'Client Focus',
      desc: 'Developing solutions tailored specifically to the functional needs and budget parameters of the client.',
    },
  ];

  return (
    <div className="pt-28 pb-20 space-y-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
            <span>ABOUT MACLOCK ASSOCIATES LTD</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-medium text-white tracking-tight leading-tight">
            BUILT WITH <br />
            <span className="text-[#C29B62] italic">PURPOSE.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-[#D0CFCB] font-light leading-relaxed">
            MACLOCK ASSOCIATES LTD is a professional construction and built-environment company based in Port Harcourt, Rivers State, Nigeria.
          </p>
        </div>
      </section>

      {/* Atmospheric Architectural Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-lg overflow-hidden border border-[#23252E]">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
              alt="Engineering and construction site execution"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.dataset.fallback) {
                  target.dataset.fallback = 'true';
                  target.src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded bg-[#0E0F12]/80 backdrop-blur-md border border-white/10 text-xs text-[#C6C5C0]">
              <span className="font-semibold text-white block mb-0.5">Physical Rigor & Oversight</span>
              Structured coordination and verified craftsmanship on site in Rivers State.
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                A Disciplined Approach to the Built Environment.
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#A0A2AA] leading-relaxed">
              At MACLOCK ASSOCIATES LTD, we approach projects through thoughtful planning, professional execution, attention to detail and client-focused delivery.
            </p>
            <p className="text-sm sm:text-base text-[#A0A2AA] leading-relaxed">
              We understand the specific environmental, hydrological, and geotechnical parameters of building in Port Harcourt and the Niger Delta. Rather than applying generic assumptions, we evaluate each site systematically to implement enduring structural solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded bg-[#14161C] border border-[#20222A]">
                <ShieldCheck className="w-5 h-5 text-[#C29B62] mb-2" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Standardized QA</h3>
                <p className="text-[11px] text-[#8E9098]">Material validation and continuous site inspection.</p>
              </div>
              <div className="p-4 rounded bg-[#14161C] border border-[#20222A]">
                <CheckCircle2 className="w-5 h-5 text-[#C29B62] mb-2" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1">Turnkey Delivery</h3>
                <p className="text-[11px] text-[#8E9098]">From concept design to handover.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-[#121317] py-20 border-y border-[#1E2026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
              OUR FOUNDATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              OUR VALUES
            </h2>
            <p className="text-sm sm:text-base text-[#A0A2AA]">
              Six fundamental pillars that govern our decisions, design standards, and operational conduct.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.name}
                className="p-6 rounded-lg bg-[#16181F] border border-[#22242D] space-y-3 hover:border-[#C29B62]/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C29B62]" />
                  <h3 className="text-lg font-heading font-bold text-white">
                    {v.name}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#9A9CA4] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Stand For / Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
            WHAT WE STAND FOR
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            BUILT ON PROFESSIONALISM.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRINCIPLES.map((p) => (
            <div
              key={p.id}
              className="p-8 rounded-lg bg-[#14161D] border border-[#20222B] space-y-3"
            >
              <div className="text-xs font-sora font-semibold text-[#C29B62]">
                PRINCIPLE {p.id}
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                {p.title}
              </h3>
              <p className="text-sm text-[#A0A2AA] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-lg bg-[#14161D] border border-[#23252E] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
              OUR BASE
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
              Based in Port Harcourt, Serving Rivers State.
            </h3>
            <p className="text-sm text-[#A0A2AA] max-w-xl leading-relaxed">
              Our central office is located at 9 Okeah Street in Port Harcourt. We welcome prospective clients, property developers, and diaspora investors to discuss upcoming developments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2 text-xs text-[#C6C5C0]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C29B62]" />
                <span>{COMPANY.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C29B62]" />
                <a href={`tel:${COMPANY.phoneRaw}`} className="hover:text-white font-medium">
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-start lg:justify-end">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-bold text-xs tracking-wider uppercase rounded transition-all text-center flex items-center justify-center gap-2"
            >
              <span>VISIT CONTACT PAGE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('consultation')}
              className="px-6 py-3.5 bg-[#1C1E24] hover:bg-[#252830] text-white font-medium text-xs tracking-wider uppercase rounded border border-[#2B2D38] transition-all text-center"
            >
              REQUEST A CONSULTATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
