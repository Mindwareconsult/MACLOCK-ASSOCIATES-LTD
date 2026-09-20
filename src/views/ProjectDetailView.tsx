import React from 'react';
import { PageId } from '../types';
import { PROJECTS, FALLBACK_IMAGE } from '../data/siteData';
import { ArrowLeft, ArrowRight, MapPin, CheckCircle2, Eye, Compass, Calendar } from 'lucide-react';

interface ProjectDetailViewProps {
  projectId: string;
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  projectId,
  onNavigate,
  onOpenLightbox,
}) => {
  const project = PROJECTS.find((p) => p.id === projectId) || PROJECTS[0];
  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Top back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('portfolio')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A0A2AA] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#C29B62]" />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* PROJECT HERO (Large full-width project photograph) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] sm:aspect-[21/8] rounded-lg overflow-hidden border border-[#23252E] shadow-2xl">
          <img
            src={project.heroImage}
            alt={project.title}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E0F12] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C29B62] font-sora font-semibold block mb-1">
                {project.category}
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight">
                {project.title}
              </h1>
            </div>
            <button
              onClick={() => onOpenLightbox(project.galleryImages, 0, project.title)}
              className="px-4 py-2.5 bg-black/70 hover:bg-black text-white text-xs font-semibold uppercase tracking-wider rounded border border-white/20 backdrop-blur-sm inline-flex items-center gap-2 shrink-0"
            >
              <Eye className="w-4 h-4 text-[#C29B62]" />
              <span>View Fullscreen Gallery ({project.galleryImages.length})</span>
            </button>
          </div>
        </div>
      </section>

      {/* PROJECT INFORMATION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-lg bg-[#14161D] border border-[#22242D] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#7E8088] font-sora block mb-1">
              Category
            </span>
            <span className="text-sm sm:text-base font-semibold text-white">
              {project.category}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#7E8088] font-sora block mb-1">
              Location
            </span>
            <span className="text-sm sm:text-base font-semibold text-white flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C29B62]" />
              {project.location}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#7E8088] font-sora block mb-1">
              Status
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#C29B62]">
              {project.status}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#7E8088] font-sora block mb-1">
              Project Scope
            </span>
            <span className="text-xs sm:text-sm font-medium text-[#D0CFCB]">
              {project.scope}
            </span>
          </div>
        </div>
      </section>

      {/* DETAILED BODY: OVERVIEW, BRIEF, OUR APPROACH, SCOPE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main narrative */}
          <div className="lg:col-span-8 space-y-12">
            {/* PROJECT OVERVIEW */}
            <div className="space-y-4">
              <h2 className="text-2xl font-heading font-bold text-white tracking-tight">
                Project Overview
              </h2>
              <p className="text-base text-[#D0CFCB] leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* PROJECT BRIEF */}
            <div className="p-8 rounded-lg bg-[#14161D] border border-[#22242D] space-y-3">
              <div className="text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
                THE PROJECT BRIEF
              </div>
              <p className="text-sm sm:text-base text-[#E2E1DD] leading-relaxed">
                {project.brief}
              </p>
            </div>

            {/* OUR APPROACH */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
                <Compass className="w-4 h-4" />
                <span>OUR APPROACH</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Contextual Design & Structural Rigor
              </h3>
              <p className="text-sm sm:text-base text-[#A0A2AA] leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* SCOPE OF WORK */}
            <div className="space-y-4">
              <h3 className="text-xl font-heading font-bold text-white">
                Detailed Scope of Work
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.workScope.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded bg-[#161820] border border-[#22242D] flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C29B62] shrink-0 mt-0.5" />
                    <span className="text-xs text-[#D0CFCB]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar: Consultation Callout */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-lg bg-[#161820] border border-[#242632] space-y-6 sticky top-28">
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C29B62] font-sora font-semibold">
                  COMMISSIONING
                </span>
                <h4 className="text-xl font-heading font-bold text-white">
                  Have a similar project in mind?
                </h4>
                <p className="text-xs text-[#A0A2AA] leading-relaxed">
                  We invite clients to discuss architectural concepts, feasibility appraisals, or general contracting for sites in Port Harcourt and Rivers State.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => onNavigate('consultation')}
                  className="w-full py-3.5 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-bold text-xs tracking-wider uppercase rounded text-center transition-all shadow-md"
                >
                  START A CONSULTATION
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-3 bg-[#1C1E26] hover:bg-[#22252E] text-white text-xs tracking-wider uppercase rounded border border-[#2A2D38] transition-colors"
                >
                  SPEAK WITH AN ENGINEER
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT GALLERY (Large Immersive Images) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
              VISUAL RECORD
            </span>
            <h3 className="text-2xl font-heading font-bold text-white">
              Project Gallery
            </h3>
          </div>
          <span className="text-xs text-[#8E9098]">
            Click any view to open high-resolution gallery
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox(project.galleryImages, idx, project.title)}
              className="group cursor-pointer relative aspect-[16/10] rounded-lg overflow-hidden border border-[#20222B] bg-black"
            >
              <img
                src={img}
                alt={`${project.title} view ${idx + 1}`}
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
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/70 backdrop-blur-md rounded border border-white/20 text-xs text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-3.5 h-3.5 text-[#C29B62]" />
                <span>Expand View</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED PROJECTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1E2026] pt-16 space-y-8">
        <h3 className="text-2xl font-heading font-bold text-white">
          Related Projects & Concepts
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((p) => (
            <div
              key={p.id}
              onClick={() => {
                onNavigate('project-detail', p.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-4 rounded-lg bg-[#14161D] border border-[#20222B] hover:border-[#C29B62]/50 cursor-pointer transition-colors group space-y-3"
            >
              <div className="aspect-[16/10] rounded overflow-hidden">
                <img
                  src={p.heroImage}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              <div className="space-y-1">
                <span className="text-[10px] text-[#C29B62] uppercase tracking-wider font-sora">
                  {p.category}
                </span>
                <h4 className="text-base font-heading font-bold text-white group-hover:text-[#C29B62] transition-colors line-clamp-1">
                  {p.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
