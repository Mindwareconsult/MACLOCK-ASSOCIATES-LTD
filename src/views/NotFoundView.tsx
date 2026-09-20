import React from 'react';
import { PageId } from '../types';
import { ArrowLeft, Home, Compass } from 'lucide-react';

interface NotFoundViewProps {
  onNavigate: (page: PageId) => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#181A22] border border-[#262832] flex items-center justify-center mx-auto text-[#C29B62]">
          <Compass className="w-8 h-8 animate-pulse" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
            ERROR 404 • UNLOCATED SCHEMATIC
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif-display font-medium text-white tracking-tight">
            PAGE NOT FOUND
          </h1>
          <p className="text-sm text-[#A0A2AA] max-w-md mx-auto leading-relaxed">
            The page or project documentation you requested does not exist or has been relocated within our construction archives.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-bold text-xs uppercase tracking-wider rounded inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>RETURN TO HOMEPAGE</span>
          </button>
          <button
            onClick={() => onNavigate('portfolio')}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#1C1E26] hover:bg-[#252832] text-white font-semibold text-xs uppercase tracking-wider rounded border border-[#2B2E38] inline-flex items-center justify-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#C29B62]" />
            <span>EXPLORE PORTFOLIO</span>
          </button>
        </div>
      </div>
    </div>
  );
};
