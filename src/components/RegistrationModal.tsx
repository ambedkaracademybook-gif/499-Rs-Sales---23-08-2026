import React, { useState } from 'react';
import { X, CheckCircle, Trophy, ShieldCheck, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { RegistrationFormData } from '../types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    phone: '',
    email: '',
    targetExam: 'Group 4',
    district: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Send formatted WhatsApp notification
    const msg = `*NEW ₹99 TNPSC ENROLLMENT - AMBEDKAR ACADEMY*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📱 *WhatsApp:* ${formData.phone}\n` +
      `🎯 *Target Exam:* ${formData.targetExam}\n` +
      `📍 *District:* ${formData.district || 'Tamil Nadu'}\n` +
      `💰 *Amount:* ₹99 ONLY\n\n` +
      `_I want to complete my ₹99 enrollment and receive access details._`;

    const whatsappUrl = `https://wa.me/916369626229?text=${encodeURIComponent(msg)}`;
    
    // Open in new tab or current
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#1A1A1A] border-2 border-[#F5B94C] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-[0_0_50px_rgba(245,185,76,0.3)] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#111111] border border-white/10 text-white/70 hover:text-white flex items-center justify-center cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6 pr-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] border border-[#F5B94C]/40 text-[#FFD66E] font-bold text-xs uppercase tracking-wider mb-2">
                <Trophy className="w-3.5 h-3.5 text-[#F5B94C]" />
                TNPSC Preparation Program
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                JOIN FOR <span className="gold-gradient-text">₹99 ONLY</span>
              </h3>
              <p className="text-xs text-[#BDBDBD] mt-1">
                Enter your details to secure your enrollment & exam eligibility.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#FFD66E] uppercase tracking-wider mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. S. Vignesh"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#F5B94C]/30 text-white placeholder-[#BDBDBD]/40 text-sm focus:outline-none focus:border-[#FFD66E]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#FFD66E] uppercase tracking-wider mb-1.5">
                  WhatsApp Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#F5B94C]/30 text-white placeholder-[#BDBDBD]/40 text-sm focus:outline-none focus:border-[#FFD66E]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#FFD66E] uppercase tracking-wider mb-1.5">
                    Target TNPSC Exam
                  </label>
                  <select
                    value={formData.targetExam}
                    onChange={(e) => setFormData({ ...formData, targetExam: e.target.value as any })}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#111111] border border-[#F5B94C]/30 text-white text-sm focus:outline-none focus:border-[#FFD66E]"
                  >
                    <option value="Group 4">Group 4 & VAO</option>
                    <option value="Group 2/2A">Group 2 / 2A</option>
                    <option value="Group 1">Group 1</option>
                    <option value="All TNPSC">All TNPSC Exams</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#FFD66E] uppercase tracking-wider mb-1.5">
                    District / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai / Madurai"
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-[#F5B94C]/30 text-white placeholder-[#BDBDBD]/40 text-sm focus:outline-none focus:border-[#FFD66E]"
                  />
                </div>
              </div>

              {/* Price Summary Bar */}
              <div className="p-3.5 rounded-xl bg-[#111111] border border-[#F5B94C]/30 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#BDBDBD] block">Total Enrollment Fee</span>
                  <span className="text-xl font-black text-[#FFD66E]">₹99 ONLY</span>
                </div>
                <span className="text-[11px] font-bold text-[#F5B94C] bg-[#F5B94C]/10 px-2.5 py-1 rounded border border-[#F5B94C]/30">
                  Instant Access
                </span>
              </div>

              <button
                type="submit"
                className="btn-gold-cta w-full py-4 text-[#0A0D14] text-base font-black uppercase tracking-wider cursor-pointer shadow-[0_6px_25px_rgba(245,199,61,0.5)] mt-2"
              >
                CONFIRM & PROCEED — ₹99
              </button>
            </form>

            <p className="text-[11px] text-center text-[#BDBDBD]/60 mt-4">
              Direct connection via WhatsApp • Support available at 6369626229
            </p>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#F5B94C] text-[#111111] flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(245,185,76,0.4)]">
              <CheckCircle className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase mb-2">
              REGISTRATION RECEIVED!
            </h3>
            <p className="text-sm text-[#BDBDBD] max-w-sm mx-auto mb-6">
              Thank you, <span className="text-[#FFD66E] font-bold">{formData.name}</span>. Our admission team is connecting with you on WhatsApp at <span className="text-white font-semibold">{formData.phone}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-[#111111] border border-[#F5B94C]/40 text-left mb-6 space-y-2 text-xs sm:text-sm">
              <div className="text-[#F5B94C] font-bold uppercase text-xs">Direct UPI Payment:</div>
              <div className="text-white font-mono bg-[#1A1A1A] p-2 rounded border border-white/10 select-all">
                ambedkaracademy@upi
              </div>
              <p className="text-[#BDBDBD] text-[11px]">
                Send screenshot on WhatsApp to <strong>6369626229</strong> for immediate activation.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/916369626229?text=${encodeURIComponent(`Hi Ambedkar Academy, I registered for ₹99. My name is ${formData.name}.`)}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm uppercase flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Us
              </a>
              <button
                onClick={handleReset}
                className="px-5 py-3 rounded-xl bg-[#111111] border border-white/20 text-white font-bold text-sm uppercase hover:bg-white/5"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
