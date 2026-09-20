import React, { useState } from 'react';
import { PageId } from '../types';
import { BLOG_POSTS, COMPANY, FALLBACK_IMAGE } from '../data/siteData';
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, Check, ArrowUpRight } from 'lucide-react';

interface BlogArticleViewProps {
  articleId: string;
  onNavigate: (page: PageId, extraId?: string) => void;
}

export const BlogArticleView: React.FC<BlogArticleViewProps> = ({
  articleId,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);
  const article = BLOG_POSTS.find((b) => b.id === articleId) || BLOG_POSTS[0];
  const relatedArticles = BLOG_POSTS.filter((b) => b.id !== article.id).slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Top Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('blog')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A0A2AA] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#C29B62]" />
          <span>Back to Insights</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#1A1C24] text-xs font-sora uppercase font-semibold text-[#C29B62] rounded border border-[#2B2D38]">
              {article.category}
            </span>
            <div className="flex items-center gap-2 text-xs text-[#8E9098]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
              <span>•</span>
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight leading-[1.2]">
            {article.title}
          </h1>

          <p className="text-base sm:text-xl text-[#D0CFCB] font-light leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Share Button & Editorial Attribution */}
        <div className="pt-4 pb-2 border-y border-[#20222B] flex items-center justify-between">
          <div className="text-xs text-[#9E9FA6]">
            By <span className="text-white font-medium">MACLOCK Technical Advisory</span> • Port Harcourt
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#1A1C24] hover:bg-[#242732] text-xs text-[#C6C5C0] hover:text-white border border-[#2B2D38] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-[#C29B62]" />
                <span>Share Article</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-[#22242D] shadow-2xl">
          <img
            src={article.featuredImage}
            alt={article.title}
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
        </div>
      </div>

      {/* Article Body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-sm sm:text-base text-[#D0CFCB] leading-relaxed">
        {article.content.map((paragraph, idx) => (
          <p key={idx} className="leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Tags */}
        <div className="pt-8 pb-4 border-t border-[#20222B] flex flex-wrap items-center gap-2">
          <span className="text-xs text-[#7E8088] uppercase tracking-wider font-sora">
            Filed under:
          </span>
          {article.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-[#14161D] text-xs text-[#A0A2AA] rounded border border-[#20222A]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* In-Article Consultation Box */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-lg bg-[#14161E] border border-[#242632] space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
            PROFESSIONAL CONSULTATION
          </span>
          <h3 className="text-xl font-heading font-bold text-white">
            Planning a project involving these considerations?
          </h3>
          <p className="text-xs sm:text-sm text-[#A0A2AA] leading-relaxed">
            {COMPANY.name} offers pre-construction feasibility audits, soil investigation coordination, and architectural planning for developments in Rivers State.
          </p>
          <button
            onClick={() => onNavigate('consultation')}
            className="px-6 py-3 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-bold text-xs tracking-wider uppercase rounded inline-flex items-center gap-2 transition-all shadow-md"
          >
            <span>REQUEST A CONSULTATION</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#1E2026] pt-16 space-y-8">
        <h3 className="text-2xl font-heading font-bold text-white">
          Related Technical Insights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => {
                onNavigate('blog-article', art.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-6 rounded-lg bg-[#14161D] border border-[#20222B] hover:border-[#C29B62]/50 cursor-pointer transition-colors group space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-[10px] text-[#C29B62] uppercase tracking-wider font-sora">
                  {art.category}
                </span>
                <h4 className="text-base font-heading font-bold text-white group-hover:text-[#C29B62] transition-colors line-clamp-2">
                  {art.title}
                </h4>
                <p className="text-xs text-[#9A9CA4] line-clamp-2">
                  {art.excerpt}
                </p>
              </div>
              <div className="pt-2 text-xs font-semibold text-[#C29B62] inline-flex items-center gap-1 group-hover:underline">
                <span>Read Insight</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
