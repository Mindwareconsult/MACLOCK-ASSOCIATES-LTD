import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { SERVICES, PROJECTS, BLOG_POSTS, FAQS } from '../data/siteData';
import { Search, X, ArrowRight, Layers, Building, BookOpen, HelpCircle } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId, extraId?: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const matchedServices = SERVICES.filter(
    (s) =>
      cleanQuery &&
      (s.title.toLowerCase().includes(cleanQuery) ||
        s.shortDescription.toLowerCase().includes(cleanQuery) ||
        s.deliverables.some((d) => d.toLowerCase().includes(cleanQuery)))
  );

  const matchedProjects = PROJECTS.filter(
    (p) =>
      cleanQuery &&
      (p.title.toLowerCase().includes(cleanQuery) ||
        p.category.toLowerCase().includes(cleanQuery) ||
        p.location.toLowerCase().includes(cleanQuery) ||
        p.overview.toLowerCase().includes(cleanQuery))
  );

  const matchedArticles = BLOG_POSTS.filter(
    (b) =>
      cleanQuery &&
      (b.title.toLowerCase().includes(cleanQuery) ||
        b.category.toLowerCase().includes(cleanQuery) ||
        b.excerpt.toLowerCase().includes(cleanQuery) ||
        b.tags.some((t) => t.toLowerCase().includes(cleanQuery)))
  );

  const matchedFaqs = FAQS.filter(
    (f) =>
      cleanQuery &&
      (f.question.toLowerCase().includes(cleanQuery) ||
        f.answer.toLowerCase().includes(cleanQuery))
  );

  const totalResults =
    matchedServices.length +
    matchedProjects.length +
    matchedArticles.length +
    matchedFaqs.length;

  const handleSelect = (page: PageId, extraId?: string) => {
    onNavigate(page, extraId);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      id="search-modal-backdrop"
      className="fixed inset-0 z-50 bg-[#0E0F12]/80 backdrop-blur-md flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="search-modal-container"
        className="w-full max-w-2xl bg-[#14161B] border border-[#262830] rounded-lg shadow-2xl overflow-hidden mb-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#22242B] bg-[#181A20]">
          <Search className="w-5 h-5 text-[#C29B62] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services, architectural projects, insights, FAQs..."
            className="w-full bg-transparent text-white placeholder-[#787A82] text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8E9098] hover:text-white mr-1"
              aria-label="Clear query"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs text-[#8E9098] hover:text-white px-2 py-1 bg-[#202229] rounded border border-[#2E3038]"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {!cleanQuery ? (
            <div className="py-8 text-center space-y-2 text-[#7E8088]">
              <p className="text-xs uppercase tracking-widest font-sora">
                Quick Navigation & Search
              </p>
              <p className="text-sm text-[#A0A2AA]">
                Type a keyword such as &quot;construction&quot;, &quot;villa&quot;, &quot;Port Harcourt&quot;, or &quot;renovation&quot;.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
                {['Building Construction', 'Architectural Design', 'Port Harcourt', 'Renovation', 'Project Management'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 text-xs bg-[#1D1F26] hover:bg-[#252832] text-[#C6C5C0] rounded border border-[#262832]"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-10 text-center text-[#8E9098] space-y-1">
              <p className="text-sm font-medium text-[#C6C5C0]">
                No direct matches found for &quot;{query}&quot;
              </p>
              <p className="text-xs">
                Try searching for related architectural or construction terms, or submit an inquiry.
              </p>
            </div>
          ) : (
            <>
              {/* Matched Services */}
              {matchedServices.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-sora tracking-wider text-[#C29B62] uppercase font-semibold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Services ({matchedServices.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedServices.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleSelect('service-detail', s.id)}
                        className="w-full text-left p-2.5 rounded bg-[#181A20] hover:bg-[#20232B] border border-[#22242C] transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-[#C29B62]">
                            {s.title}
                          </div>
                          <div className="text-[11px] text-[#8E9098] line-clamp-1">
                            {s.shortDescription}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#7E8088] group-hover:text-white shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Projects */}
              {matchedProjects.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-sora tracking-wider text-[#C29B62] uppercase font-semibold">
                    <Building className="w-3.5 h-3.5" />
                    <span>Projects & Concepts ({matchedProjects.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedProjects.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => handleSelect('project-detail', p.id)}
                        className="w-full text-left p-2.5 rounded bg-[#181A20] hover:bg-[#20232B] border border-[#22242C] transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-[#C29B62]">
                            {p.title}
                          </div>
                          <div className="text-[11px] text-[#8E9098]">
                            {p.category} • {p.location}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#7E8088] group-hover:text-white shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched Articles */}
              {matchedArticles.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-sora tracking-wider text-[#C29B62] uppercase font-semibold">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Insights & Articles ({matchedArticles.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedArticles.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => handleSelect('blog-article', a.id)}
                        className="w-full text-left p-2.5 rounded bg-[#181A20] hover:bg-[#20232B] border border-[#22242C] transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-xs font-semibold text-white group-hover:text-[#C29B62]">
                            {a.title}
                          </div>
                          <div className="text-[11px] text-[#8E9098] line-clamp-1">
                            {a.excerpt}
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#7E8088] group-hover:text-white shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Matched FAQs */}
              {matchedFaqs.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-sora tracking-wider text-[#C29B62] uppercase font-semibold">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Frequently Asked Questions ({matchedFaqs.length})</span>
                  </div>
                  <div className="space-y-1.5">
                    {matchedFaqs.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => handleSelect('faq')}
                        className="w-full text-left p-2.5 rounded bg-[#181A20] hover:bg-[#20232B] border border-[#22242C] transition-colors"
                      >
                        <div className="text-xs font-semibold text-white">
                          {f.question}
                        </div>
                        <div className="text-[11px] text-[#8E9098] line-clamp-1 mt-0.5">
                          {f.answer}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
