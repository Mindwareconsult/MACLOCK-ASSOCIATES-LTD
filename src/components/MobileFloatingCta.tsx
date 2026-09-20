import React from 'react';
import { PageId } from '../types';
import { COMPANY } from '../data/siteData';
import { Phone, Calendar } from 'lucide-react';

interface MobileFloatingCtaProps {
  onNavigate: (page: PageId) => void;
}

export const MobileFloatingCta: React.FC<MobileFloatingCtaProps> = ({ onNavigate }) => {
  return (
    <div
      id="mobile-floating-cta-bar"
      className="fixed bottom-0 left-0 w-full z-30 bg-[#0E0F12]/95 backdrop-blur-md border-t border-[#23252A] p-2.5 sm:hidden shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-2">
        <a
          id="mobile-call-now-btn"
          href={`tel:${COMPANY.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1C1E24] hover:bg-[#252830] text-white rounded text-xs font-semibold uppercase tracking-wider transition-colors border border-[#2B2D35]"
        >
          <Phone className="w-3.5 h-3.5 text-[#C29B62]" />
          <span>CALL NOW</span>
        </a>

        <button
          id="mobile-consult-btn"
          onClick={() => {
            onNavigate('consultation');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>CONSULTATION</span>
        </button>
      </div>
    </div>
  );
};
