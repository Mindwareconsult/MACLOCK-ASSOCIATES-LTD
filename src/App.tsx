import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileFloatingCta } from './components/MobileFloatingCta';
import { SearchModal } from './components/SearchModal';
import { LightboxModal } from './components/LightboxModal';

// Views
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { ServiceDetailView } from './views/ServiceDetailView';
import { PortfolioView } from './views/PortfolioView';
import { ProjectDetailView } from './views/ProjectDetailView';
import { BlogView } from './views/BlogView';
import { BlogArticleView } from './views/BlogArticleView';
import { ContactView } from './views/ContactView';
import { ConsultationView } from './views/ConsultationView';
import { FaqView } from './views/FaqView';
import { LegalView } from './views/LegalViews';
import { NotFoundView } from './views/NotFoundView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [currentExtraId, setCurrentExtraId] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Lightbox Modal state
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: string[];
    activeIndex: number;
    title: string;
  }>({
    isOpen: false,
    images: [],
    activeIndex: 0,
    title: '',
  });

  // Navigation handler with scroll-to-top
  const handleNavigate = (page: PageId, extraId?: string) => {
    setCurrentPage(page);
    setCurrentExtraId(extraId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openLightbox = (images: string[], index: number = 0, title: string = '') => {
    setLightboxState({
      isOpen: true,
      images,
      activeIndex: index,
      title,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  // Keyboard shortcut: Cmd/Ctrl + K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0F12] text-[#F3F2EE] selection:bg-[#C29B62] selection:text-[#0E0F12] flex flex-col font-sans relative antialiased">
      {/* Top Fixed Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={handleNavigate}
            onOpenLightbox={openLightbox}
          />
        )}

        {currentPage === 'about' && (
          <AboutView onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesView onNavigate={handleNavigate} />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailView
            serviceId={currentExtraId || 'building-construction'}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioView
            onNavigate={handleNavigate}
            onOpenLightbox={openLightbox}
          />
        )}

        {currentPage === 'project-detail' && (
          <ProjectDetailView
            projectId={currentExtraId || 'port-harcourt-residence-1'}
            onNavigate={handleNavigate}
            onOpenLightbox={openLightbox}
          />
        )}

        {currentPage === 'blog' && (
          <BlogView onNavigate={handleNavigate} />
        )}

        {currentPage === 'blog-article' && (
          <BlogArticleView
            articleId={currentExtraId || 'engineering-foundations-niger-delta'}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactView onNavigate={handleNavigate} />
        )}

        {currentPage === 'consultation' && (
          <ConsultationView onNavigate={handleNavigate} />
        )}

        {currentPage === 'faq' && (
          <FaqView onNavigate={handleNavigate} />
        )}

        {currentPage === 'privacy-policy' && (
          <LegalView type="privacy" onNavigate={handleNavigate} />
        )}

        {currentPage === 'terms' && (
          <LegalView type="terms" onNavigate={handleNavigate} />
        )}

        {currentPage === 'not-found' && (
          <NotFoundView onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Buttons for Mobile */}
      <MobileFloatingCta onNavigate={handleNavigate} />

      {/* Global Search Overlay (Ctrl+K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Lightbox Modal for Imagery & Architectural Plans */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.activeIndex}
        title={lightboxState.title}
        onClose={closeLightbox}
        onPrev={() =>
          setLightboxState((prev) => ({
            ...prev,
            activeIndex:
              prev.activeIndex === 0
                ? prev.images.length - 1
                : prev.activeIndex - 1,
          }))
        }
        onNext={() =>
          setLightboxState((prev) => ({
            ...prev,
            activeIndex:
              prev.activeIndex === prev.images.length - 1
                ? 0
                : prev.activeIndex + 1,
          }))
        }
      />
    </div>
  );
}
