import React from 'react';
import { PageId } from '../types';
import { COMPANY } from '../data/siteData';
import { ArrowLeft, ShieldCheck, FileText } from 'lucide-react';

interface LegalViewProps {
  type: 'privacy' | 'terms';
  onNavigate: (page: PageId) => void;
}

export const LegalView: React.FC<LegalViewProps> = ({ type, onNavigate }) => {
  const isPrivacy = type === 'privacy';

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Top back */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A0A2AA] hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#C29B62]" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
          {isPrivacy ? <ShieldCheck className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
          <span>LEGAL GOVERNANCE & COMPLIANCE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-display font-medium text-white tracking-tight">
          {isPrivacy ? 'PRIVACY POLICY' : 'TERMS & CONDITIONS'}
        </h1>
        <p className="text-sm text-[#8E9098]">
          Last Updated: 2025 • Operating Entity: {COMPANY.name} (Port Harcourt, Rivers State, Nigeria)
        </p>
      </header>

      {/* Body content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#C6C5C0] leading-relaxed">
        {isPrivacy ? (
          <>
            <section className="p-6 rounded-lg bg-[#14161D] border border-[#20222B] space-y-3">
              <h2 className="text-lg font-heading font-bold text-white">1. Introduction & Scope</h2>
              <p>
                {COMPANY.name} (&quot;MACLOCK&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects the confidentiality of personal data and proprietary project records entrusted to us. This Privacy Policy clarifies how we collect, process, and safeguard information submitted through our website and digital consultation forms.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-[#14161D] border border-[#20222B] space-y-3">
              <h2 className="text-lg font-heading font-bold text-white">2. Information We Collect</h2>
              <p>
                When you initiate a project enquiry, schedule a site evaluation, or upload architectural files, we may collect:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#9E9FA6]">
                <li>Contact Information: Full name, telephone number, and optional email address.</li>
                <li>Project Parameters: Plot location, proposed project type, target completion timeframe, and budget estimates.</li>
                <li>Site Documents: Survey plans, CAD/DWG drafts, topographical records, or architectural concept imagery uploaded by the client.</li>
              </ul>
            </section>

            <section className="p-6 rounded-lg bg-[#14161D] border border-[#20222B] space-y-3">
              <h2 className="text-lg font-heading font-bold text-white">3. How Your Information is Utilized</h2>
              <p>
                Submitted data is used exclusively to evaluate site feasibility, prepare itemized Bills of Quantities (BOQs), coordinate preliminary telephone consultations, and execute contractual obligations. We do not sell, rent, or trade client contact details or property ownership information to third parties.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-[#14161D] border border-[#20222B] space-y-3">
              <h2 className="text-lg font-heading font-bold text-white">4. Physical Address & Inquiries</h2>
              <p>
                For data protection questions or to request the deletion of uploaded preliminary site records, you may visit our central office at 9 Okeah Street, Port Harcourt, Rivers State, Nigeria, or call {COMPANY.phone}.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="p-6 rounded-lg bg-[#14161D] border border-[#20222B] space-y-3">
              <h2 className="text-lg font-heading font-bold text-white">1. Acceptance of Terms</h2>
              <p>
                By accessing and utilizing the web platform of {COMPANY.name}, you agree to abide by these Terms and Conditions. If you do not agree with any provision herein, you must refrain from utilizing our online services and forms.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-[#14161D] border border-[#20222B] space-y-3">
              <h2 className="text-lg font-heading font-bold text-white">2. Nature of Online Information</h2>
              <p>
                Architectural renderings, concept designs, and technical articles published on this platform serve an informative purpose. While we take every measure to ensure technical accuracy, physical construction work, structural foundation sizing, and material procurement are governed exclusively by signed, formal construction contracts and certified engineering calculations.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-[#14161D] border border-[#20222B] space-y-3">
              <h2 className="text-lg font-heading font-bold text-white">3. Intellectual Property</h2>
              <p>
                All structural schematics, photographic records, proprietary text, and branding elements displayed on this website belong to {COMPANY.name}. Unauthorized reproduction, commercial distribution, or mirror publication without written consent is strictly prohibited.
              </p>
            </section>

            <section className="p-6 rounded-lg bg-[#14161D] border border-[#20222B] space-y-3">
              <h2 className="text-lg font-heading font-bold text-white">4. Governing Law & Jurisdiction</h2>
              <p>
                These terms and any legal relationships arising from preliminary engagements are governed by the laws of the Federal Republic of Nigeria, with primary judicial jurisdiction seated in Rivers State.
              </p>
            </section>
          </>
        )}
      </main>
    </div>
  );
};
