import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY, SERVICES } from '../data/siteData';
import { Phone, MapPin, Clock, Send, Upload, CheckCircle2, Navigation, AlertCircle } from 'lucide-react';

interface ContactViewProps {
  onNavigate: (page: PageId) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Development',
    projectLocation: '',
    servicesRequired: [] as string[],
    message: '',
    fileName: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleCheckboxToggle = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(serviceTitle);
      return {
        ...prev,
        servicesRequired: exists
          ? prev.servicesRequired.filter((s) => s !== serviceTitle)
          : [...prev.servicesRequired, serviceTitle],
      };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        fileName: e.target.files![0].name,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
            <span>DIRECT ENGAGEMENT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-display font-medium text-white tracking-tight leading-tight">
            LET&apos;S BUILD <br />
            <span className="text-[#C29B62] italic">SOMETHING MEANINGFUL.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-[#D0CFCB] font-light leading-relaxed">
            Connect with our engineering and architectural practice in Port Harcourt to discuss prospective land developments, residential villas, commercial schemes, or renovations.
          </p>
        </div>
      </section>

      {/* Contact Grid: Details + Contact Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Office Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-lg bg-[#14161D] border border-[#22242D] space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
                  OFFICE LOCATION
                </span>
                <h2 className="text-2xl font-heading font-bold text-white">
                  {COMPANY.name}
                </h2>
              </div>

              <div className="space-y-4 text-sm text-[#C6C5C0]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C29B62] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Physical Address:</strong>
                    <span>{COMPANY.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C29B62] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Telephone:</strong>
                    <a
                      id="contact-page-phone-link"
                      href={`tel:${COMPANY.phoneRaw}`}
                      className="text-lg font-semibold text-white hover:text-[#C29B62] transition-colors inline-block"
                    >
                      {COMPANY.phone}
                    </a>
                    <span className="text-xs text-[#8E9098] block">Click to dial directly from your mobile device</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C29B62] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Hours of Operation:</strong>
                    <span>{COMPANY.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#20222B]">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=9+Okeah+Street+Port+Harcourt+Rivers+State+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#1C1E26] hover:bg-[#252832] text-white text-xs font-semibold uppercase tracking-wider rounded border border-[#2B2E38] inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#C29B62]" />
                  <span>GET DIRECTIONS VIA GOOGLE MAPS</span>
                </a>
              </div>
            </div>

            {/* Diaspora & Regional Clients Box */}
            <div className="p-6 rounded-lg bg-[#121318] border border-[#1E2028] space-y-3">
              <div className="flex items-center gap-2 text-xs font-sora uppercase font-semibold text-[#C29B62]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Diaspora & Out-of-State Clients</span>
              </div>
              <p className="text-xs text-[#9A9CA4] leading-relaxed">
                If you reside abroad or in other Nigerian states, we facilitate preliminary discovery via phone conferences, high-definition site video surveys, and structured digital reporting.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-lg bg-[#14161D] border border-[#22242D] shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#C29B62]/20 border border-[#C29B62] flex items-center justify-center mx-auto text-[#C29B62]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    Project Enquiry Received
                  </h3>
                  <p className="text-sm text-[#C6C5C0] max-w-md mx-auto">
                    Thank you, {formData.name}. Our project coordination desk at 9 Okeah Street, Port Harcourt has received your message and will review your specifications.
                  </p>
                  <p className="text-xs text-[#8E9098]">
                    For urgent site matters, please call directly at {COMPANY.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'Residential Development',
                        projectLocation: '',
                        servicesRequired: [],
                        message: '',
                        fileName: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 bg-[#1C1E26] hover:bg-[#252832] text-xs font-semibold uppercase tracking-wider text-white rounded border border-[#2A2D38]"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
                      INQUIRY FORM
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Send a Project Message
                    </h3>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C6C5C0]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Arc. Tamuno Briggs"
                        className="w-full bg-[#181A22] text-sm text-white placeholder-[#787A82] px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C6C5C0]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+234 ..."
                        className="w-full bg-[#181A22] text-sm text-white placeholder-[#787A82] px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                      />
                    </div>
                  </div>

                  {/* Email & Project Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C6C5C0]">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="yourname@domain.com"
                        className="w-full bg-[#181A22] text-sm text-white placeholder-[#787A82] px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C6C5C0]">
                        Project Location / City
                      </label>
                      <input
                        type="text"
                        value={formData.projectLocation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectLocation: e.target.value,
                          })
                        }
                        placeholder="e.g. GRA Phase II, Port Harcourt"
                        className="w-full bg-[#181A22] text-sm text-white placeholder-[#787A82] px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#C6C5C0]">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full bg-[#181A22] text-sm text-white px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                    >
                      <option value="Residential Development">Residential Development / Villa</option>
                      <option value="Commercial Development">Commercial / Office Complex</option>
                      <option value="Architectural Planning">Architectural Design & Planning</option>
                      <option value="Structural Construction">General Building Construction</option>
                      <option value="Renovation & Remodelling">Renovation & Structural Modernisation</option>
                      <option value="Construction Consultancy">Consultancy / BOQ Review</option>
                    </select>
                  </div>

                  {/* Services Required Checkboxes */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-[#C6C5C0] block">
                      Services Required (Select all that apply)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D0CFCB]">
                      {SERVICES.map((srv) => {
                        const checked = formData.servicesRequired.includes(srv.title);
                        return (
                          <label
                            key={srv.id}
                            className={`p-2.5 rounded border cursor-pointer flex items-center gap-2.5 transition-colors ${
                              checked
                                ? 'bg-[#1D2028] border-[#C29B62] text-white'
                                : 'bg-[#161820] border-[#22242D] hover:border-[#2C2E3A]'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => handleCheckboxToggle(srv.title)}
                              className="accent-[#C29B62]"
                            />
                            <span>{srv.title}</span>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#C6C5C0]">
                      Project Description or Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Outline your project scope, plot dimensions, expected commencement date or questions..."
                      className="w-full bg-[#181A22] text-sm text-white placeholder-[#787A82] px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                    />
                  </div>

                  {/* Optional File Upload */}
                  <div className="p-4 rounded bg-[#161820] border border-dashed border-[#2B2D38] space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-[#C6C5C0]">
                        <Upload className="w-4 h-4 text-[#C29B62]" />
                        <span>Upload project documents or reference images (Optional)</span>
                      </div>
                      <label className="px-3 py-1.5 bg-[#20232B] hover:bg-[#282B35] text-xs font-medium text-white rounded cursor-pointer border border-[#2E313C] transition-colors">
                        Browse Files
                        <input
                          type="file"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {formData.fileName && (
                      <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Selected file: {formData.fileName}</span>
                      </div>
                    )}
                  </div>

                  <button
                    id="submit-contact-enquiry-btn"
                    type="submit"
                    className="w-full py-4 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] font-bold text-xs tracking-[0.16em] uppercase rounded transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>SEND PROJECT ENQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps / Location Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
              MAP LOCATION
            </span>
            <h3 className="text-xl font-heading font-bold text-white">
              9 Okeah Street, Port Harcourt
            </h3>
          </div>
          <a
            href="https://www.google.com/maps/search/?api=1&query=9+Okeah+Street+Port+Harcourt+Rivers+State+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#C29B62] hover:underline uppercase tracking-wider font-semibold inline-flex items-center gap-1"
          >
            <span>Open in Maps</span>
            <Navigation className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Stylized Architectural Map Container */}
        <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden border border-[#242630] bg-[#121318]">
          <iframe
            title="MACLOCK ASSOCIATES LTD Location"
            src="https://maps.google.com/maps?q=9+Okeah+Street,+Port+Harcourt,+Rivers+State,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-75"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-4 p-4 rounded bg-[#0E0F12]/90 backdrop-blur-md border border-white/10 text-xs text-[#C6C5C0] max-w-xs space-y-1 shadow-2xl">
            <strong className="text-white block font-heading">MACLOCK ASSOCIATES LTD</strong>
            <div>9 Okeah Street, Port Harcourt, Rivers State</div>
            <div className="text-[#C29B62] font-medium">{COMPANY.phone}</div>
          </div>
        </div>
      </section>
    </div>
  );
};
