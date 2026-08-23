import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldAlert, X } from 'lucide-react';

export const FooterSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const legalContent: Record<string, { title: string; body: string[] }> = {
    privacy: {
      title: "Privacy Policy",
      body: [
        "Ambedkar Academy values your privacy and is committed to protecting your personal data.",
        "1. Information We Collect: Name, email address, target TNPSC exam stream, and district solely for admissions, course delivery, and examination coordination.",
        "2. Use of Information: We use your data solely to grant course access, send test schedules, share performance reports, and communicate cash prize examination guidelines.",
        "3. Data Protection: Your information is stored securely and never sold, rented, or shared with unauthorized third parties.",
        "4. Contact: For privacy inquiries, email us at ambedkaracademybook@gmail.com.",
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
        "3. Support: If you encounter any technical difficulty accessing your material or test links, our support team will resolve it via email.",
      ],
    },
    contact: {
      title: "Contact Us",
      body: [
        "Ambedkar Academy — Dedicated TNPSC Preparation & Model Examination Centre",
        "Official Email: ambedkaracademybook@gmail.com",
        "Support Hours: Monday – Sunday, 8:00 AM – 9:00 PM IST",
      ],
    },
  };

  return (
    <footer id="footer" className="py-14 px-4 sm:px-6 lg:px-8 border-t border-[#F5B94C]/20 bg-[#0c0c0c] text-[#BDBDBD]">
      
      <div className="max-w-5xl mx-auto text-center">

        {/* Legal Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-[#BDBDBD] mb-10 border-b border-white/5 pb-4">
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
