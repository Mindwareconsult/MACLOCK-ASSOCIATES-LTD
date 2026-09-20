import React, { useState } from 'react';
import { PageId } from '../types';
import { FAQS, COMPANY } from '../data/siteData';
import { ChevronDown, ChevronUp, Search, HelpCircle, Phone, ArrowRight } from 'lucide-react';

interface FaqViewProps {
  onNavigate: (page: PageId) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter(
    (f) =>
      !searchQuery ||
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
            <span>CLIENT ASSISTANCE & TRANSPARENCY</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-medium text-white tracking-tight leading-tight">
            FREQUENTLY ASKED <br />
            <span className="text-[#C29B62] italic">QUESTIONS.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-[#D0CFCB] font-light leading-relaxed">
            Clear, honest answers regarding our construction methodologies, service areas, consultation processes and project governance.
          </p>
        </div>
      </section>

      {/* Search Input */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Search className="w-4 h-4 text-[#7E8088] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search answers (e.g. diaspora, location, timeline, permits)..."
            className="w-full bg-[#14161D] text-sm text-white placeholder-[#787A82] pl-11 pr-4 py-3.5 rounded-lg border border-[#22242D] focus:outline-none focus:border-[#C29B62]"
          />
        </div>
      </section>

      {/* Accordion FAQ List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="py-12 text-center text-[#8E9098] space-y-2">
            <HelpCircle className="w-8 h-8 text-[#C29B62] mx-auto opacity-70" />
            <p className="text-white font-medium">No answers match your search term</p>
            <p className="text-xs">Feel free to contact our office directly at {COMPANY.phone}.</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={faq.id}
                className="rounded-lg bg-[#14161D] border border-[#20222B] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#181B23] transition-colors"
                >
                  <span className="text-base sm:text-lg font-heading font-bold text-white">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded bg-[#1C1E26] text-[#C29B62] shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#A0A2AA] leading-relaxed border-t border-[#1C1E26] space-y-2">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Still Have Questions Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-lg bg-[#161820] border border-[#242632] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-heading font-bold text-white">
              Still have questions regarding your proposed site?
            </h3>
            <p className="text-xs text-[#9A9CA4] max-w-md">
              Our project directors are available for scheduled technical consultations or direct phone discussions.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="px-5 py-3 bg-[#1C1E26] hover:bg-[#252832] text-white text-xs font-semibold uppercase tracking-wider rounded border border-[#2B2E38] inline-flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C29B62]" />
              <span>Call Us</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] text-xs font-bold uppercase tracking-wider rounded inline-flex items-center gap-2"
            >
              <span>Contact Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
