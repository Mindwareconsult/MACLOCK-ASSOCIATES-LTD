import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY } from '../data/siteData';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, extraId?: string) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'blog', label: 'Blog' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0E0F12]/95 backdrop-blur-md border-b border-[#23252A] py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#0E0F12]/85 via-[#0E0F12]/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 lg:gap-6">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="text-left group flex flex-col focus:outline-none shrink-0"
            aria-label="MACLOCK ASSOCIATES LTD Home"
          >
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold tracking-tight text-lg sm:text-xl text-white group-hover:text-[#C29B62] transition-colors">
                MACLOCK
              </span>
              <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C29B62] uppercase border-l border-[#3E4048] pl-2">
                ASSOCIATES LTD
              </span>
            </div>
            <span className="text-[9px] tracking-[0.25em] text-[#8E9098] uppercase font-sora hidden sm:block">
              PORT HARCOURT • NIGERIA
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            className="hidden lg:flex items-center gap-3.5 xl:gap-6 2xl:gap-8 shrink-0"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[11px] xl:text-xs uppercase tracking-[0.12em] xl:tracking-[0.15em] font-medium transition-colors duration-200 py-1.5 px-0.5 relative whitespace-nowrap shrink-0 ${
                    active
                      ? 'text-[#C29B62] font-semibold'
                      : 'text-[#D0CFCB] hover:text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-[#C29B62] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-2.5 sm:gap-3 xl:gap-4 shrink-0">
            {/* Direct Phone link - Desktop */}
            <a
              id="header-phone-link"
              href={`tel:${COMPANY.phoneRaw}`}
              className="hidden xl:flex items-center gap-2 text-xs font-medium text-[#C6C5C0] hover:text-white px-2 py-1 transition-colors whitespace-nowrap shrink-0"
              title="Call MACLOCK ASSOCIATES LTD"
            >
              <Phone className="w-3.5 h-3.5 text-[#C29B62]" />
              <span className="tracking-wide">{COMPANY.phone}</span>
            </a>

            {/* Primary Consultation CTA */}
            <button
              id="header-consultation-btn"
              onClick={() => handleNavClick('consultation')}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 xl:px-4 xl:py-2.5 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-semibold text-[11px] xl:text-xs tracking-[0.1em] xl:tracking-[0.12em] uppercase rounded transition-all duration-200 whitespace-nowrap shrink-0 shadow-sm"
            >
              <span>REQUEST A CONSULTATION</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-[#1E2026] rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-30 bg-[#0E0F12] pt-24 pb-8 px-6 flex flex-col justify-between overflow-y-auto lg:hidden"
        >
          <div className="space-y-6">
            <div className="text-[10px] tracking-[0.25em] text-[#8E9098] uppercase font-sora">
              Navigation Menu
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const active = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-xl font-heading tracking-tight flex items-center justify-between py-2 border-b border-[#1E2026] ${
                      active ? 'text-[#C29B62] font-semibold' : 'text-[#E2E1DD]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#C29B62]" />}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="space-y-4 pt-8 border-t border-[#1E2026]">
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-3 text-sm text-[#F5F4F0] p-3 rounded bg-[#16181D] border border-[#23252A]"
            >
              <Phone className="w-4 h-4 text-[#C29B62]" />
              <div>
                <div className="text-[10px] text-[#8E9098] uppercase tracking-wider">Direct Telephone</div>
                <div className="font-medium">{COMPANY.phone}</div>
              </div>
            </a>

            <button
              onClick={() => handleNavClick('consultation')}
              className="w-full py-3.5 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-bold text-xs tracking-[0.15em] uppercase rounded text-center block"
            >
              REQUEST A CONSULTATION
            </button>
          </div>
        </div>
      )}
    </>
  );
};
