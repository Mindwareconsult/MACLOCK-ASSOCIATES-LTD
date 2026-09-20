import React, { useState } from 'react';
import { PageId, ConsultationFormData } from '../types';
import { COMPANY, SERVICES } from '../data/siteData';
import { ArrowLeft, ArrowRight, CheckCircle2, Upload, Phone, Calendar, ShieldCheck, Sparkles } from 'lucide-react';

interface ConsultationViewProps {
  onNavigate: (page: PageId) => void;
}

export const ConsultationView: React.FC<ConsultationViewProps> = ({ onNavigate }) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 7;

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: 'Private Residential Villa',
    projectLocation: 'Port Harcourt, Rivers State',
    servicesRequired: ['Building Construction', 'Architectural Design'],
    projectScope: 'New Greenfield Development',
    estimatedBudget: 'Undisclosed / Discussion in Consultation',
    targetTimeline: 'Within 3 - 6 Months',
    projectDescription: '',
    uploadedFileName: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const steps = [
    { number: 1, title: 'Contact Information', subtitle: 'Who should our engineers address?' },
    { number: 2, title: 'Project Type', subtitle: 'What category of space are you planning?' },
    { number: 3, title: 'Project Location', subtitle: 'Where is the site or proposed plot?' },
    { number: 4, title: 'Services Required', subtitle: 'What engineering & design disciplines are needed?' },
    { number: 5, title: 'Project Scope', subtitle: 'The nature and scale of physical work.' },
    { number: 6, title: 'Budget & Timeline', subtitle: 'Estimated parameters (optional).' },
    { number: 7, title: 'Brief & Documents', subtitle: 'Sketches, survey plans or descriptions.' },
  ];

  const handleServiceToggle = (title: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(title);
      return {
        ...prev,
        servicesRequired: exists
          ? prev.servicesRequired.filter((s) => s !== title)
          : [...prev.servicesRequired, title],
      };
    });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        uploadedFileName: e.target.files![0].name,
      }));
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && (!formData.fullName || !formData.phone)) {
      alert('Please provide your name and contact phone number to continue.');
      return;
    }
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else {
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Top Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] text-[#C29B62] uppercase font-sora font-semibold">
          <span>STRUCTURED PROJECT INITIATION</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif-display font-medium text-white tracking-tight">
          REQUEST A <span className="text-[#C29B62] italic">CONSULTATION.</span>
        </h1>
        <p className="text-sm sm:text-base text-[#D0CFCB] max-w-xl mx-auto font-light">
          Follow our 7-step guided briefing flow to outline your project parameters for review by our engineering and design team at MACLOCK ASSOCIATES LTD.
        </p>
      </section>

      {/* Main Flow Container */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#14161E] border border-[#232530] rounded-xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Progress Indicator */}
          {!submitted && (
            <div className="mb-8 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#8E9098]">
                <span className="font-sora uppercase tracking-wider text-[#C29B62] font-semibold">
                  STEP 0{currentStep} OF 0{totalSteps}
                </span>
                <span className="text-white font-medium">{steps[currentStep - 1].title}</span>
              </div>
              <div className="w-full h-1 bg-[#20222B] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#C29B62] transition-all duration-300 rounded-full"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {submitted ? (
            /* Confirmation Screen */
            <div className="py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#C29B62]/20 border border-[#C29B62] flex items-center justify-center mx-auto text-[#C29B62]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C29B62] font-sora font-semibold">
                  CONSULTATION REQUEST CONFIRMED
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  Thank You, {formData.fullName}.
                </h2>
                <p className="text-sm text-[#C6C5C0] max-w-lg mx-auto leading-relaxed">
                  Your project consultation details have been registered at our central office (9 Okeah Street, Port Harcourt). An engineer will review your specifications and contact you via phone ({formData.phone}).
                </p>
              </div>

              {/* Summary recap */}
              <div className="p-6 rounded-lg bg-[#181A22] border border-[#22242C] text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="text-[#8E9098] uppercase tracking-wider font-sora text-[10px] mb-2">
                  Summary of Submission:
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E8088]">Project:</span>
                  <span className="text-white font-medium">{formData.projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E8088]">Location:</span>
                  <span className="text-white font-medium">{formData.projectLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7E8088]">Scope:</span>
                  <span className="text-white font-medium">{formData.projectScope}</span>
                </div>
                {formData.uploadedFileName && (
                  <div className="flex justify-between">
                    <span className="text-[#7E8088]">Attached:</span>
                    <span className="text-emerald-400 font-medium">{formData.uploadedFileName}</span>
                  </div>
                )}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onNavigate('home')}
                  className="px-6 py-3 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] text-xs font-bold uppercase tracking-wider rounded transition-colors"
                >
                  Return to Home
                </button>
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="px-6 py-3 bg-[#1C1E26] hover:bg-[#252832] text-white text-xs font-medium uppercase tracking-wider rounded border border-[#2A2D38] inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C29B62]" />
                  <span>Call Office Directly</span>
                </a>
              </div>
            </div>
          ) : (
            /* Multi-step form content */
            <div className="space-y-8">
              {/* STEP 1: Contact info */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Step 1: Contact Information
                    </h3>
                    <p className="text-xs text-[#8E9098]">
                      Please provide the primary contact details for this consultation.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C6C5C0]">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Chief O. Amadi"
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
                        placeholder="+234 803 ... or local mobile"
                        className="w-full bg-[#181A22] text-sm text-white placeholder-[#787A82] px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C6C5C0]">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="client@domain.com"
                        className="w-full bg-[#181A22] text-sm text-white placeholder-[#787A82] px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Project Type */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Step 2: Project Type
                    </h3>
                    <p className="text-xs text-[#8E9098]">
                      Select the primary classification of the proposed built structure.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      'Private Residential Villa',
                      'Multi-Unit Terraces / Apartments',
                      'Commercial / Office Complex',
                      'Industrial / Logistics Facility',
                      'Hospitality / Leisure Structure',
                      'Structural Renovation / Remodelling',
                    ].map((type) => {
                      const selected = formData.projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, projectType: type })
                          }
                          className={`p-4 rounded-lg text-left border transition-all text-xs font-semibold ${
                            selected
                              ? 'bg-[#1F222C] border-[#C29B62] text-white'
                              : 'bg-[#181A22] border-[#22242C] text-[#C6C5C0] hover:border-[#2C2F3A]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span>{type}</span>
                            {selected && (
                              <CheckCircle2 className="w-4 h-4 text-[#C29B62]" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Project Location */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Step 3: Project Location
                    </h3>
                    <p className="text-xs text-[#8E9098]">
                      Where is the property situated?
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C6C5C0]">
                        Location Description / District
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
                        placeholder="e.g. GRA Phase II, Old GRA, Peter Odili Road, Woji, Trans-Amadi, or other"
                        className="w-full bg-[#181A22] text-sm text-white placeholder-[#787A82] px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                      />
                    </div>

                    <div className="p-4 rounded bg-[#161820] border border-[#20222A] text-xs text-[#8E9098] space-y-1">
                      <div className="text-white font-medium">Local Geotechnical Reality:</div>
                      <p>
                        Different zones within Port Harcourt possess varying groundwater levels and soil stratigraphy. Noting the area helps us evaluate foundation considerations.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Services Required */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Step 4: Services Required
                    </h3>
                    <p className="text-xs text-[#8E9098]">
                      Select all professional disciplines you wish MACLOCK to handle.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SERVICES.map((srv) => {
                      const checked = formData.servicesRequired.includes(srv.title);
                      return (
                        <div
                          key={srv.id}
                          onClick={() => handleServiceToggle(srv.title)}
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            checked
                              ? 'bg-[#1E212A] border-[#C29B62] text-white'
                              : 'bg-[#161820] border-[#22242D] text-[#C6C5C0] hover:border-[#2A2D38]'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-semibold">
                            <span>{srv.title}</span>
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => {}}
                              className="accent-[#C29B62]"
                            />
                          </div>
                          <p className="text-[11px] text-[#8E9098] mt-1 line-clamp-2">
                            {srv.shortDescription}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 5: Project Scope */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Step 5: Project Scope
                    </h3>
                    <p className="text-xs text-[#8E9098]">
                      What is the physical stage and scale of work?
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      {
                        title: 'New Greenfield Construction',
                        desc: 'Bare land requiring initial survey, architectural design, foundations, and complete structural build.',
                      },
                      {
                        title: 'Construction of Existing Approved Design',
                        desc: 'Architectural drawings already completed and approved; seeking certified general contractor execution.',
                      },
                      {
                        title: 'Full Building Renovation / Modernisation',
                        desc: 'Existing building requiring structural alterations, facade upgrades, or interior overhaul.',
                      },
                      {
                        title: 'Pre-Construction Consultancy & BOQ Review',
                        desc: 'Technical advisory, bill of quantities review, cost appraisal, or buildability study.',
                      },
                    ].map((scope) => {
                      const selected = formData.projectScope === scope.title;
                      return (
                        <div
                          key={scope.title}
                          onClick={() =>
                            setFormData({ ...formData, projectScope: scope.title })
                          }
                          className={`p-4 rounded-lg border cursor-pointer transition-all ${
                            selected
                              ? 'bg-[#1E212A] border-[#C29B62] text-white'
                              : 'bg-[#161820] border-[#22242D] text-[#C6C5C0] hover:border-[#2A2D38]'
                          }`}
                        >
                          <div className="flex items-center justify-between text-sm font-semibold">
                            <span>{scope.title}</span>
                            {selected && (
                              <CheckCircle2 className="w-4 h-4 text-[#C29B62]" />
                            )}
                          </div>
                          <p className="text-xs text-[#8E9098] mt-1">
                            {scope.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 6: Budget & Timeline (Optional) */}
              {currentStep === 6 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Step 6: Estimated Budget & Timeline
                    </h3>
                    <p className="text-xs text-[#8E9098]">
                      Optional parameters to assist our feasibility and scheduling team.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C6C5C0]">
                        Target Commencement Timeline
                      </label>
                      <select
                        value={formData.targetTimeline}
                        onChange={(e) =>
                          setFormData({ ...formData, targetTimeline: e.target.value })
                        }
                        className="w-full bg-[#181A22] text-sm text-white px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                      >
                        <option value="Immediate / Within 30 Days">Immediate / Within 30 Days</option>
                        <option value="Within 3 - 6 Months">Within 3 - 6 Months</option>
                        <option value="Within 6 - 12 Months">Within 6 - 12 Months</option>
                        <option value="Exploratory / Long-Term Planning">Exploratory / Long-Term Planning</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C6C5C0]">
                        Budget Range Consideration (Optional)
                      </label>
                      <select
                        value={formData.estimatedBudget}
                        onChange={(e) =>
                          setFormData({ ...formData, estimatedBudget: e.target.value })
                        }
                        className="w-full bg-[#181A22] text-sm text-white px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                      >
                        <option value="Undisclosed / Discussion in Consultation">Undisclosed / Prefer Discussion in Consultation</option>
                        <option value="Under ₦50 Million">Under ₦50 Million</option>
                        <option value="₦50 Million – ₦150 Million">₦50 Million – ₦150 Million</option>
                        <option value="₦150 Million – ₦400 Million">₦150 Million – ₦400 Million</option>
                        <option value="Above ₦400 Million">Above ₦400 Million</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 7: Brief & Documents */}
              {currentStep === 7 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-white">
                      Step 7: Project Brief & Documents
                    </h3>
                    <p className="text-xs text-[#8E9098]">
                      Add notes, architectural goals or attach site survey documents.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C6C5C0]">
                        Project Description or Specific Instructions
                      </label>
                      <textarea
                        rows={4}
                        value={formData.projectDescription}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectDescription: e.target.value,
                          })
                        }
                        placeholder="Tell us about the desired architectural style, number of bedrooms, parking requirements, special security features..."
                        className="w-full bg-[#181A22] text-sm text-white placeholder-[#787A82] px-4 py-3 rounded border border-[#262832] focus:outline-none focus:border-[#C29B62]"
                      />
                    </div>

                    <div className="p-4 rounded bg-[#161820] border border-dashed border-[#2B2D38] space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-[#C6C5C0]">
                          <Upload className="w-4 h-4 text-[#C29B62]" />
                          <span>Upload Site Survey, Plan or References (Optional)</span>
                        </div>
                        <label className="px-3 py-1.5 bg-[#20232B] hover:bg-[#282B35] text-xs font-medium text-white rounded cursor-pointer border border-[#2E313C] transition-colors">
                          Browse
                          <input
                            type="file"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                      {formData.uploadedFileName && (
                        <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Attached: {formData.uploadedFileName}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Nav Controls */}
              <div className="pt-6 border-t border-[#20222B] flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-5 py-3 bg-[#1C1E26] hover:bg-[#242732] text-white text-xs font-semibold uppercase tracking-wider rounded border border-[#2A2D38] inline-flex items-center gap-2"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                <button
                  type="button"
                  id="consultation-next-step-btn"
                  onClick={handleNext}
                  className="px-8 py-3.5 bg-[#C29B62] hover:bg-[#B38D56] text-[#0E0F12] text-xs font-bold uppercase tracking-[0.15em] rounded inline-flex items-center gap-2 transition-all shadow-md"
                >
                  <span>
                    {currentStep === totalSteps
                      ? 'SUBMIT PROJECT ENQUIRY'
                      : 'NEXT STEP'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
