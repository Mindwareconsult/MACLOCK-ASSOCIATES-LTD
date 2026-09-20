import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS, FALLBACK_IMAGE } from '../data/siteData';
import { ArrowRight, Image as ImageIcon, Sparkles } from 'lucide-react';

interface PortfolioViewProps {
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenLightbox: (images: string[], index: number, title: string) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Residential',
    'Commercial',
    'Construction',
    'Architecture',
    'Interior',
    'Renovation',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
            <span>PORTFOLIO & ARCHITECTURAL CONCEPTS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-medium text-white tracking-tight leading-tight">
            SELECTED <span className="text-[#C29B62] italic">WORK.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-[#D0CFCB] font-light leading-relaxed">
            A selection of projects demonstrating our approach to design, construction and project delivery.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 pb-6 border-b border-[#20222A]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#C29B62] text-[#0E0F12] shadow-sm'
                  : 'bg-[#14161D] text-[#A0A2AA] hover:text-white hover:bg-[#1D2028] border border-[#22242D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Editorial Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => onNavigate('project-detail', project.id)}
              className="group cursor-pointer rounded-lg overflow-hidden bg-[#14161D] border border-[#20222B] hover:border-[#C29B62]/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black">
                <img
                  src={project.heroImage}
                  alt={project.title}
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
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#0E0F12]/80 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#C29B62] font-semibold rounded border border-white/10">
                  {project.category}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenLightbox(project.galleryImages, 0, project.title);
                  }}
                  className="absolute bottom-3 right-3 p-2 bg-black/70 hover:bg-black text-white text-xs rounded border border-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
                  title="View Gallery Lightbox"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#C29B62]" />
                  <span className="text-[10px]">{project.galleryImages.length}</span>
                </button>
              </div>

              {/* Text Meta */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5">
                  <div className="text-[11px] text-[#8E9098] uppercase tracking-wider font-sora">
                    {project.location}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-[#C29B62] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#9A9CA4] line-clamp-2 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1E2028] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-wider text-[#7E8088] font-sora">
                    {project.status}
                  </span>
                  <span className="text-xs font-semibold text-[#C29B62] group-hover:underline inline-flex items-center gap-1">
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note on Showcase Entries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-lg bg-[#121317] border border-[#20222A] flex items-center gap-4 text-xs text-[#8E9098]">
          <Sparkles className="w-5 h-5 text-[#C29B62] shrink-0" />
          <p>
            Portfolio items represent architectural concepts, studio frameworks, and construction methodologies engineered for Nigerian climatic conditions and Rivers State terrain. Prospective clients may commission custom architectural or turnkey building contracts.
          </p>
        </div>
      </section>
    </div>
  );
};
