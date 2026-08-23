import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Zap, ArrowRight } from 'lucide-react';

interface Props {
  onOpenRegister: () => void;
}

export const OfferDetailsSection: React.FC<Props> = ({ onOpenRegister }) => {
  const inclusions = [
    "Structured TNPSC Preparation",
    "Learning Support",
    "Premium Study Resources",
    "Exam-Oriented Preparation",
    "Practice & Model Tests",
    "Previous-Year-Question-Oriented Preparation",
    "Performance-Focused Learning",
    "Guidance for Better Preparation",
    "Competitive Examination Experience",
    "Eligibility to participate in the Ambedkar Academy Cash Prize Model Examination, subject to applicable terms",
  ];

  return (
    <section id="offer-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Container Card */}
      <div className="bg-[#1A1A1A] border-2 border-[#F5B94C] rounded-3xl p-6 sm:p-10 shadow-[0_0_50px_rgba(245,185,76,0.18)] relative overflow-hidden">
        
        {/* Decorative Top Pill */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#111111] border border-[#F5B94C]/40 text-[#FFD66E] font-bold text-xs sm:text-sm uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#F5B94C]" /> Complete Value Pack
          </span>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
            START YOUR TNPSC PREPARATION<br />
            <span className="gold-gradient-text">FOR JUST ₹499</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#BDBDBD] max-w-xl mx-auto">
            Your ₹499 enrollment gives you access to the advertised programme benefits.
          </p>
        </div>

        {/* What's Included List */}
        <div className="mb-12">
          <h3 className="text-sm font-bold text-[#F5B94C] uppercase tracking-widest mb-6 text-center sm:text-left border-b border-[#F5B94C]/20 pb-3">
            WHAT'S INCLUDED
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {inclusions.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-[#111111] border border-[#F5B94C]/15 hover:border-[#F5B94C]/40 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#F5B94C] shrink-0 mt-0.5" />
                <span className="text-white font-medium text-sm sm:text-base leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why ₹499 Subsection */}
        <div className="bg-[#111111] border border-[#F5B94C]/30 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#FFD66E] uppercase mb-2">
            WHY ₹499?
          </h3>
          <p className="text-sm sm:text-base text-[#BDBDBD] mb-6 leading-relaxed">
            Because starting your preparation shouldn't require a huge financial commitment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-extrabold text-white uppercase tracking-wider mb-8">
            <span className="px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#F5B94C]/20 text-[#FFD66E]">
              START SMALL.
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#F5B94C]/20 text-[#FFD66E]">
              PREPARE SERIOUSLY.
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#1A1A1A] border border-[#F5B94C]/20 text-[#FFD66E]">
              BUILD YOUR MOMENTUM.
            </span>
          </div>

          {/* Primary CTA */}
          <button
            id="offer-section-cta"
            onClick={onOpenRegister}
            className="btn-gold-cta w-full sm:w-auto px-12 py-4 text-[#0A0D14] text-base sm:text-lg font-black uppercase tracking-wider cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>JOIN NOW — ₹499</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
};
