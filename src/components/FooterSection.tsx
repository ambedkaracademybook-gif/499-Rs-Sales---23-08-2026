import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldAlert, X } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const legalContent: Record<string, { title: string; body: string[] }> = {
    privacy: {
      title: "Privacy Policy",
      body: [
        "Ambedkar Academy values your privacy and is committed to protecting your personal data.",
        "1. Information We Collect: Name, WhatsApp phone number, email address, target TNPSC exam stream, and district solely for admissions, course delivery, and examination coordination.",
        "2. Use of Information: We use your data solely to grant course access, send test schedules, share performance reports, and communicate cash prize examination guidelines.",
        "3. Data Protection: Your information is stored securely and never sold, rented, or shared with unauthorized third parties.",
        "4. Contact: For privacy inquiries, email us at ambedkaracademybook@gmail.com or WhatsApp 6369626229.",
      ],
    },
    terms: {
      title: "Terms & Conditions",
      body: [
        "1. Enrollment: The ₹499 enrollment provides the participant access to the specified Ambedkar Academy TNPSC preparation resources, model tests, and examination benefits.",
        "2. Cash Prize Examination: Eligibility, participation rules, test timing, and prize disbursals are strictly governed by the official Cash Prize Model Examination regulations.",
        "3. Verification: Top rank holders will be subject to identity and attendance verification prior to prize disbursement.",
        "4. Intellectual Property: All study materials, tests, and proprietary frameworks belong exclusively to Ambedkar Academy.",
      ],
    },
    refund: {
      title: "Refund Policy",
      body: [
        "1. Commitment: Ambedkar Academy offers an affordable ₹499 digital access entry to facilitate high-quality TNPSC preparation for serious aspirants.",
        "2. Policy: As digital access and test resources are provisioned immediately upon enrollment, fees paid are non-refundable once platform access has been granted.",
        "3. Support: If you encounter any technical difficulty accessing your material or test links, our support team will resolve it via WhatsApp at 6369626229.",
      ],
    },
    contact: {
      title: "Contact Us",
      body: [
        "Ambedkar Academy — Dedicated TNPSC Preparation & Model Examination Centre",
        "WhatsApp / Call: +91 6369626229",
        "Official Email: ambedkaracademybook@gmail.com",
        "Support Hours: Monday – Sunday, 8:00 AM – 9:00 PM IST",
      ],
    },
  };

  return (
    <footer id="footer" className="py-14 px-4 sm:px-6 lg:px-8 border-t border-[#F5B94C]/20 bg-[#0c0c0c] text-[#BDBDBD]">
      
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Brand */}
        <h3 className="text-2xl sm:text-3xl font-black text-white tracking-wider uppercase mb-2">
          AMBEDKAR ACADEMY
        </h3>

        <p className="text-xs sm:text-sm font-extrabold text-[#F5B94C] uppercase tracking-widest mb-4">
          PREPARE • PRACTICE • PERFORM • GET RECOGNISED
        </p>

        <p className="text-xs sm:text-sm text-[#BDBDBD] mb-8 max-w-2xl mx-auto">
          TNPSC Preparation | Model Tests | Performance Analysis | Competitive Examination
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-white mb-10 font-semibold">
          <a
            href="tel:+916369626229"
            className="flex items-center gap-2 hover:text-[#F5B94C] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#F5B94C]" />
            <span>+91 6369626229</span>
          </a>
          <a
            href="mailto:ambedkaracademybook@gmail.com"
            className="flex items-center gap-2 hover:text-[#F5B94C] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#F5B94C]" />
            <span>ambedkaracademybook@gmail.com</span>
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-[#BDBDBD] mb-10 border-y border-white/5 py-4">
          <button
            onClick={() => setActiveModal('privacy')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button
            onClick={() => setActiveModal('terms')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Terms & Conditions
          </button>
          <span>•</span>
          <button
            onClick={() => setActiveModal('refund')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Refund Policy
          </button>
          <span>•</span>
          <button
            onClick={() => setActiveModal('contact')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        {/* CASH PRIZE DISCLAIMER */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#111111] border border-white/10 max-w-3xl mx-auto text-left sm:text-center text-[11px] sm:text-xs text-[#BDBDBD]/70 leading-relaxed mb-6">
          <span className="font-bold text-[#F5B94C] block uppercase mb-1">
            CASH PRIZE DISCLAIMER
          </span>
          Cash prizes are subject to the eligibility criteria, examination rules and terms applicable to the Cash Prize Model Examination. The ₹1,00,000 figure represents the advertised first prize and does not represent a guaranteed payment to every participant.
        </div>

        <p className="text-[11px] text-[#BDBDBD]/50">
          © {new Date().getFullYear()} Ambedkar Academy. All rights reserved. Designed for serious TNPSC aspirants.
        </p>

      </div>

      {/* Legal Content Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#1A1A1A] border border-[#F5B94C]/40 rounded-2xl max-w-lg w-full p-6 relative max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <h4 className="text-lg font-bold text-white uppercase">
                {legalContent[activeModal]?.title}
              </h4>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-lg bg-[#111111] text-white/70 hover:text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#BDBDBD] leading-relaxed">
              {legalContent[activeModal]?.body.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
