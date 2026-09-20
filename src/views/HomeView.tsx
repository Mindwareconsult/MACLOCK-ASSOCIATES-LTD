import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY, PRINCIPLES, PROCESS_STEPS, SERVICES, PROJECTS, BLOG_POSTS, FALLBACK_IMAGE } from '../data/siteData';
import { ArrowRight, ArrowUpRight, ChevronDown, CheckCircle2, Building, ShieldCheck, Compass, Ruler } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenLightbox }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const featuredProjects = PROJECTS.slice(0, 3);
  const recentArticles = BLOG_POSTS.slice(0, 3);

  return (
    <div className="space-y-0">
      {/* SECTION 8: HOMEPAGE HERO (Cinematic Fullscreen Hero) */}
      <section
        id="hero-section"
        className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Fullscreen Architectural Background with Subtle Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85"
            alt="Modern luxury architectural residence"
            className="w-full h-full object-cover object-center scale-105 transform transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.dataset.fallback) {
                target.dataset.fallback = 'true';
                target.src = FALLBACK_IMAGE;
              }
            }}
          />
          {/* Subtle multi-layer architectural overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-[#0E0F12]/60 to-[#0E0F12]/50" />
          <div className="absolute inset-0 bg-black/25" />
        </div>

        {/* Top spacer */}
        <div className="relative z-10" />

        {/* Hero Content Center / Lower Third */}
        <div className="relative z-10 max-w-7xl mx-auto w-full py-12">
          <div className="max-w-4xl space-y-6">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[1.5px] w-8 bg-[#C29B62]" />
              <span className="text-xs sm:text-sm tracking-[0.28em] font-sora font-semibold text-[#DCD9D2] uppercase">
                {COMPANY.name}
              </span>
            </div>

            {/* Main Headline with Serif Display & Architectural Gold Contrast */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-display font-medium tracking-tight text-white leading-[1.06]">
              BUILDING <br />
              <span className="text-[#C29B62] font-semibold italic">YOUR VISION.</span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-xl md:text-2xl text-[#E0DFDC] font-light max-w-2xl leading-relaxed">
              {COMPANY.supportingStatement}
            </p>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-start-project-btn"
                onClick={() => onNavigate('consultation')}
                className="px-8 py-4 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase rounded transition-all shadow-lg text-center flex items-center justify-center gap-2"
              >
                <span>START YOUR PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-explore-work-btn"
                onClick={() => onNavigate('portfolio')}
                className="px-8 py-4 bg-black/30 hover:bg-black/60 text-white font-medium text-xs sm:text-sm tracking-[0.16em] uppercase rounded border border-white/40 hover:border-white transition-all text-center backdrop-blur-sm"
              >
                EXPLORE OUR WORK
              </button>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar & Scroll Indicator */}
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#C6C5C0] gap-4">
          <div className="flex items-center gap-6">
            <span className="tracking-widest uppercase font-sora text-[#C29B62] text-[11px]">
              PORT HARCOURT, NIGERIA
            </span>
            <span className="hidden md:inline text-[#8E9098]">•</span>
            <span className="hidden md:inline text-[#D0CFCB]">9 Okeah Street, Rivers State</span>
          </div>

          <a
            href="#who-we-are"
            className="inline-flex items-center gap-2 text-[#E2E1DD] hover:text-[#C29B62] transition-colors group"
          >
            <span className="tracking-widest uppercase text-[10px] font-sora">SCROLL TO DISCOVER</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* SECTION 9: HOMEPAGE INTRODUCTION (Spacious Editorial Split Layout) */}
      <section id="who-we-are" className="py-24 sm:py-32 bg-[#121317] border-b border-[#1E2026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Label + Large Heading */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
                <span>01</span>
                <span className="h-[1px] w-6 bg-[#C29B62]" />
                <span>WHO WE ARE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.15]">
                BUILT WITH PURPOSE.
              </h2>
            </div>

            {/* Right Column: Supporting Copy + Discover Link */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg sm:text-xl text-[#D0CFCB] font-light leading-relaxed">
                MACLOCK ASSOCIATES LTD approaches construction and built-environment projects with an emphasis on thoughtful planning, professional execution, quality and attention to detail.
              </p>
              <p className="text-sm sm:text-base text-[#9A9CA4] leading-relaxed">
                Operating from Port Harcourt, Rivers State, our multidisciplinary team coordinates every phase of the project lifecycle—from initial architectural concept through civil works, structural engineering, and refined turnkey handover. We balance aesthetic architectural ambition with pragmatic construction rigor.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  id="intro-discover-btn"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1C1E25] hover:bg-[#252832] text-white font-semibold text-xs tracking-[0.16em] uppercase rounded border border-[#2B2D38] transition-all group"
                >
                  <span>DISCOVER MACLOCK</span>
                  <ArrowRight className="w-4 h-4 text-[#C29B62] group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 text-xs text-[#8E9098]">
                  <CheckCircle2 className="w-4 h-4 text-[#C29B62]" />
                  <span>Port Harcourt & Rivers State Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 & 11: SERVICES SECTION (Large Editorial Horizontal Blocks) */}
      <section id="services-section" className="py-24 sm:py-32 bg-[#0E0F12] border-b border-[#1E2026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1E2026]">
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
                OUR DISCIPLINE
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
                WHAT WE DO
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#A0A2AA] max-w-md">
              Professional solutions designed around the requirements of each project.
            </p>
          </div>

          {/* Desktop/Tablet: Interactive Editorial Stack */}
          <div className="space-y-4">
            {SERVICES.map((srv) => {
              const isActive = activeServiceId === srv.id;
              return (
                <div
                  key={srv.id}
                  onMouseEnter={() => setActiveServiceId(srv.id)}
                  onClick={() => onNavigate('service-detail', srv.id)}
                  className={`group cursor-pointer rounded-lg border transition-all duration-300 p-6 sm:p-8 ${
                    isActive
                      ? 'bg-[#16181F] border-[#C29B62]/40 shadow-xl'
                      : 'bg-[#121317] border-[#20222A] hover:border-[#2F323D]'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    {/* Number + Title */}
                    <div className="lg:col-span-4 flex items-baseline gap-4">
                      <span className="text-sm sm:text-base font-sora font-semibold text-[#C29B62]">
                        {srv.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-[#C29B62] transition-colors">
                        {srv.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <div className="lg:col-span-5">
                      <p className="text-sm text-[#B0AFAB] leading-relaxed">
                        {srv.shortDescription}
                      </p>
                    </div>

                    {/* Action & Preview Thumbnail */}
                    <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-4">
                      <div className="w-16 h-12 rounded overflow-hidden hidden sm:block border border-[#2B2D38]">
                        <img
                          src={srv.image}
                          alt={srv.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#C29B62] group-hover:underline">
                        <span>EXPLORE SERVICE</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>

                  {/* Expanded detail when active */}
                  {isActive && (
                    <div className="mt-6 pt-6 border-t border-[#232530] grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#9E9FA6]">
                      <div>
                        <span className="text-[#D0CFCB] font-medium block mb-1">Core Deliverables:</span>
                        <ul className="space-y-1 list-disc list-inside">
                          {srv.deliverables.slice(0, 3).map((d, i) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col justify-between items-start md:items-end">
                        <span className="text-[#8E9098] italic">Tailored for Port Harcourt & regional developments</span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onNavigate('service-detail', srv.id);
                          }}
                          className="mt-3 px-4 py-2 bg-[#C29B62] text-[#0E0F12] font-semibold tracking-wider rounded uppercase text-[11px]"
                        >
                          View Full Specifications →
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <button
              id="view-all-services-btn"
              onClick={() => onNavigate('services')}
              className="px-8 py-3.5 bg-[#1C1E25] hover:bg-[#252832] text-white text-xs tracking-[0.16em] uppercase rounded font-semibold border border-[#2B2D38] inline-flex items-center gap-2 transition-colors"
            >
              <span>VIEW ALL SERVICES & METHODOLOGY</span>
              <ArrowUpRight className="w-4 h-4 text-[#C29B62]" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 12: WHY MACLOCK (Built on Professionalism - 4 Principles) */}
      <section id="why-maclock-section" className="py-24 sm:py-32 bg-[#121317] border-b border-[#1E2026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
              <span>02</span>
              <span className="h-[1px] w-6 bg-[#C29B62]" />
              <span>CORE VALUES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              BUILT ON PROFESSIONALISM.
            </h2>
            <p className="text-sm sm:text-base text-[#A0A2AA]">
              We govern every engagement through structured engineering discipline and client accountability.
            </p>
          </div>

          {/* 4 Large Architectural Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRINCIPLES.map((principle, index) => {
              const icons = [Compass, Ruler, Building, ShieldCheck];
              const IconComp = icons[index % icons.length];
              return (
                <div
                  key={principle.id}
                  className="p-8 rounded-lg bg-[#16181F] border border-[#22242D] space-y-5 hover:border-[#C29B62]/50 transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-sora font-semibold text-[#C29B62]">
                        {principle.id}
                      </span>
                      <IconComp className="w-5 h-5 text-[#C29B62]" />
                    </div>
                    <h3 className="text-lg font-heading font-bold text-white tracking-tight">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-[#9A9CA4] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-[#232530] text-[11px] text-[#7E8088] uppercase tracking-wider font-sora">
                    MACLOCK STANDARD
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13: PROCESS SECTION (From Vision to Reality - Horizontal on desktop, vertical on mobile) */}
      <section id="process-section" className="py-24 sm:py-32 bg-[#0E0F12] border-b border-[#1E2026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
              <span>03</span>
              <span className="h-[1px] w-6 bg-[#C29B62]" />
              <span>METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
              FROM VISION TO REALITY.
            </h2>
            <p className="text-sm sm:text-base text-[#A0A2AA]">
              A structured six-stage execution pathway ensuring clarity, precision and quality from concept to final keys.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative p-6 rounded-lg bg-[#14161D] border border-[#20222B] space-y-4 hover:border-[#C29B62]/40 transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="text-2xl font-serif-display font-semibold text-[#C29B62]">
                    {step.number}
                  </div>
                  <h3 className="text-base font-heading font-bold text-white tracking-tight group-hover:text-[#C29B62] transition-colors">
                    {step.name}
                  </h3>
                  <p className="text-xs text-[#9A9CA4] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#1F212A] text-[10px] text-[#7E8088] font-sora uppercase">
                  PHASE 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14: FEATURED PROJECTS (Selected Work - Large Editorial Layout) */}
      <section id="featured-projects-section" className="py-24 sm:py-32 bg-[#121317] border-b border-[#1E2026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E2026]">
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
                PORTFOLIO & STUDIO SHOWCASES
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
                SELECTED WORK
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#A0A2AA] max-w-md">
              A selection of projects demonstrating our approach to design, construction and project delivery.
            </p>
          </div>

          {/* Asymmetric Editorial Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Primary Hero Project (Col 1-7) */}
            {featuredProjects[0] && (
              <div
                onClick={() => onNavigate('project-detail', featuredProjects[0].id)}
                className="lg:col-span-7 group cursor-pointer rounded-lg overflow-hidden bg-[#16181F] border border-[#22242D] hover:border-[#C29B62]/60 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={featuredProjects[0].heroImage}
                    alt={featuredProjects[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#0E0F12]/80 backdrop-blur-md text-[11px] uppercase tracking-wider text-[#C29B62] font-semibold rounded border border-white/10">
                    {featuredProjects[0].category}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenLightbox(
                          featuredProjects[0].galleryImages,
                          0,
                          featuredProjects[0].title
                        );
                      }}
                      className="px-3 py-1.5 bg-black/70 hover:bg-black text-white text-xs rounded border border-white/20 backdrop-blur-sm"
                    >
                      View Gallery ({featuredProjects[0].galleryImages.length})
                    </button>
                  </div>
                </div>

                <div className="p-8 space-y-3">
                  <div className="text-xs text-[#8E9098] tracking-wider uppercase font-sora">
                    {featuredProjects[0].location}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white group-hover:text-[#C29B62] transition-colors">
                    {featuredProjects[0].title}
                  </h3>
                  <p className="text-sm text-[#A0A2AA] line-clamp-2">
                    {featuredProjects[0].overview}
                  </p>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C29B62] group-hover:underline">
                      <span>VIEW PROJECT SPECIFICATIONS</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Two Secondary Projects (Col 8-12) */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              {featuredProjects.slice(1, 3).map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onNavigate('project-detail', proj.id)}
                  className="group cursor-pointer rounded-lg overflow-hidden bg-[#16181F] border border-[#22242D] hover:border-[#C29B62]/60 transition-all flex flex-col"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={proj.heroImage}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 bg-[#0E0F12]/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#C29B62] font-semibold rounded border border-white/10">
                      {proj.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <div className="text-[11px] text-[#8E9098] tracking-wider uppercase font-sora">
                      {proj.location}
                    </div>
                    <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#C29B62] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#9A9CA4] line-clamp-2">
                      {proj.overview}
                    </p>
                    <div className="pt-1">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#C29B62] group-hover:underline">
                        <span>VIEW PROJECT</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center pt-4">
            <button
              id="view-all-projects-btn"
              onClick={() => onNavigate('portfolio')}
              className="px-8 py-3.5 bg-[#1C1E25] hover:bg-[#252832] text-white text-xs tracking-[0.16em] uppercase rounded font-semibold border border-[#2B2D38] inline-flex items-center gap-2 transition-colors"
            >
              <span>EXPLORE COMPLETE PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4 text-[#C29B62]" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 18: EDITORIAL INSIGHTS PREVIEW */}
      <section id="insights-preview-section" className="py-24 sm:py-32 bg-[#0E0F12] border-b border-[#1E2026]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#1E2026]">
            <div className="space-y-3">
              <span className="text-[11px] tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
                INDUSTRY KNOWLEDGE
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
                INSIGHTS & PUBLICATIONS
              </h2>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C29B62] hover:underline inline-flex items-center gap-1.5"
            >
              <span>VIEW ALL ARTICLES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentArticles.map((art) => (
              <article
                key={art.id}
                onClick={() => onNavigate('blog-article', art.id)}
                className="group cursor-pointer rounded-lg overflow-hidden bg-[#14161D] border border-[#20222B] hover:border-[#C29B62]/50 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={art.featuredImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0E0F12]/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#C29B62] font-semibold rounded">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-[11px] text-[#7E8088] font-sora">
                      {art.date} • {art.readTime}
                    </div>
                    <h3 className="text-base font-heading font-bold text-white group-hover:text-[#C29B62] transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#9A9CA4] line-clamp-2">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1F212A]">
                    <span className="text-xs font-semibold text-[#C29B62] group-hover:underline inline-flex items-center gap-1">
                      Read article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 20 & CTA: DEDICATED PRE-FOOTER CONSULTATION BANNER */}
      <section id="cta-banner-section" className="py-24 bg-[#14161C] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
              START THE CONVERSATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif-display font-medium text-white tracking-tight leading-tight">
              Have a project in mind? <br />
              <span className="italic text-[#C29B62]">Let&apos;s build it with purpose.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#C6C5C0] font-light leading-relaxed">
              Whether you are planning a private residential villa, a commercial facility, or require structural consultancy in Port Harcourt, we are ready to assist.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="home-cta-consult-btn"
                onClick={() => onNavigate('consultation')}
                className="px-8 py-4 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-bold text-xs tracking-[0.16em] uppercase rounded transition-all shadow-md text-center"
              >
                REQUEST A CONSULTATION
              </button>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="px-6 py-4 bg-[#1C1E26] hover:bg-[#232630] text-white font-medium text-xs tracking-[0.16em] uppercase rounded border border-[#2B2E38] transition-all text-center flex items-center justify-center gap-2"
              >
                <span>CALL: {COMPANY.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
