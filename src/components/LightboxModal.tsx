import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  title?: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  images,
  currentIndex,
  title,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top Header */}
      <div
        className="flex items-center justify-between text-white pb-3 border-b border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-0.5">
          <div className="text-xs uppercase tracking-widest text-[#C29B62] font-sora">
            Architectural View
          </div>
          {title && <div className="text-sm font-medium text-white/90">{title}</div>}
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-white/60">
            {currentIndex + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={title || `View ${currentIndex + 1}`}
          className="max-h-[82vh] max-w-full object-contain rounded select-none shadow-2xl transition-all duration-300"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.dataset.fallback) {
              target.dataset.fallback = 'true';
              target.src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80';
            }
          }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white/80 hover:text-white border border-white/20 transition-all backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Bottom Thumbnail Strip */}
      <div
        className="flex items-center justify-center gap-2 overflow-x-auto py-2"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              const diff = idx - currentIndex;
              if (diff > 0) {
                for (let i = 0; i < diff; i++) onNext();
              } else if (diff < 0) {
                for (let i = 0; i < Math.abs(diff); i++) onPrev();
              }
            }}
            className={`w-14 h-10 rounded overflow-hidden border transition-all shrink-0 ${
              idx === currentIndex
                ? 'border-[#C29B62] scale-105 opacity-100'
                : 'border-white/20 opacity-50 hover:opacity-80'
            }`}
          >
            <img
              src={img}
              alt=""
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
