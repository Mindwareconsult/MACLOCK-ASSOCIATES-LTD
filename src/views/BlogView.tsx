import React, { useState } from 'react';
import { PageId } from '../types';
import { BLOG_POSTS, FALLBACK_IMAGE } from '../data/siteData';
import { Search, ArrowRight, BookOpen, Clock } from 'lucide-react';

interface BlogViewProps {
  onNavigate: (page: PageId, extraId?: string) => void;
}

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Construction',
    'Architecture',
    'Project Management',
    'Renovation',
  ];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCat =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
            <span>TECHNICAL KNOWLEDGE & THOUGHT LEADERSHIP</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-medium text-white tracking-tight leading-tight">
            INSIGHTS.
          </h1>
          <p className="text-lg sm:text-2xl text-[#D0CFCB] font-light leading-relaxed">
            Practical perspectives on structural engineering, architecture, project governance and property development in Nigeria.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-lg bg-[#14161D] border border-[#20222B] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#C29B62] text-[#0E0F12]'
                    : 'bg-[#1C1E26] text-[#A0A2AA] hover:text-white border border-[#262832]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#7E8088] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full bg-[#181A22] text-xs text-white placeholder-[#787A82] pl-9 pr-3 py-2 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
            />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPosts.length === 0 ? (
          <div className="py-16 text-center text-[#8E9098] space-y-2">
            <BookOpen className="w-8 h-8 text-[#C29B62] mx-auto opacity-80" />
            <p className="text-base text-white font-medium">No articles found matching your criteria</p>
            <p className="text-xs">Try searching for other construction or architectural topics.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => onNavigate('blog-article', post.id)}
                className="group cursor-pointer rounded-lg overflow-hidden bg-[#14161D] border border-[#20222B] hover:border-[#C29B62]/60 transition-all flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
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
                    {post.category}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-[11px] text-[#7E8088] font-sora">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-heading font-bold text-white group-hover:text-[#C29B62] transition-colors leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-xs text-[#9A9CA4] line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#1E2028] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((t, idx) => (
                        <span key={idx} className="text-[10px] text-[#7E8088] bg-[#181A22] px-2 py-0.5 rounded">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-[#C29B62] group-hover:underline inline-flex items-center gap-1">
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
