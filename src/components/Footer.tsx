import React from 'react';
import { PageId } from '../types';
import { COMPANY, SERVICES } from '../data/siteData';
import { Phone, MapPin, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, extraId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId, extraId?: string) => {
    onNavigate(page, extraId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0A0B0E] border-t border-[#1C1E24] text-[#8E9098] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Statement & Consultation Banner */}
        <div className="pb-16 border-b border-[#1C1E24] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[11px] tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
              BUILT-ENVIRONMENT EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white tracking-tight">
              Ready to bring architectural vision to physical completion?
            </h2>
            <p className="text-sm sm:text-base text-[#B0AFAB] max-w-2xl">
              From land appraisal and concept design to structural engineering and turnkey building execution in Port Harcourt and across Rivers State.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3">
            <button
              id="footer-cta-btn"
              onClick={() => handleNav('consultation')}
              className="px-6 py-3.5 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-semibold text-xs tracking-[0.14em] uppercase rounded inline-flex items-center gap-2 transition-all shadow-md"
            >
              <span>REQUEST A CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              id="footer-call-link"
              href={`tel:${COMPANY.phoneRaw}`}
              className="text-xs text-[#D6D5D0] hover:text-white inline-flex items-center gap-2 pt-1 font-medium transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C29B62]" />
              <span>Or call directly: {COMPANY.phone}</span>
            </a>
          </div>
        </div>

        {/* Multi-column Directory */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                MACLOCK
              </span>
              <span className="text-[10px] tracking-[0.2em] font-semibold text-[#C29B62] uppercase border-l border-[#2B2D34] pl-2">
                ASSOCIATES LTD
              </span>
            </div>
            <p className="text-sm text-[#B0AFAB] leading-relaxed max-w-sm">
              Building your vision with purpose, precision and professionalism. Focused on thoughtful design, quality construction and carefully managed project delivery.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#8E9098]">
              <ShieldCheck className="w-4 h-4 text-[#C29B62]" />
              <span>Registered Built-Environment Practice in Nigeria</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white font-sora">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition-colors"
                >
                  About MACLOCK
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-white transition-colors"
                >
                  Portfolio & Showcases
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="hover:text-white transition-colors"
                >
                  Insights & Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faq')}
                  className="hover:text-white transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white font-sora">
              Services
            </h3>
            <ul className="space-y-2 text-xs">
              {SERVICES.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNav('service-detail', srv.id)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-white font-sora">
              Office & Contact
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C29B62] shrink-0 mt-0.5" />
                <span className="text-[#C6C5C0] leading-relaxed">
                  {COMPANY.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C29B62] shrink-0" />
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="text-white hover:text-[#C29B62] font-medium transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C29B62] shrink-0 mt-0.5" />
                <span className="text-[#8E9098]">{COMPANY.hours}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="text-xs text-[#C29B62] hover:underline uppercase tracking-wider font-semibold inline-flex items-center gap-1"
              >
                <span>View location on map</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-[#1C1E24] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 {COMPANY.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-[#7E8088]">
            <button
              onClick={() => handleNav('privacy-policy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleNav('terms-conditions')}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={() => handleNav('contact')}
              className="hover:text-white transition-colors"
            >
              Port Harcourt Office
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
