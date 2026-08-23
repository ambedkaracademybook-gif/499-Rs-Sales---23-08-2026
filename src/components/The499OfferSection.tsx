import React from 'react';
import { Sparkles, ShieldCheck, Check } from 'lucide-react';

interface Props {
  onOpenRegister: () => void;
}

export const The499OfferSection: React.FC<Props> = ({ onOpenRegister }) => {
  return (
    <section id="the-499-offer" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      <div className="bg-quilted-luxury border-2 border-[#F5B94C]/70 rounded-3xl p-8 sm:p-12 text-center shadow-[0_0_50px_rgba(245,185,76,0.25)] relative overflow-hidden">
        
        {/* Glow effect */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#F5B94C]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#111111] border border-[#F5B94C]/40 text-[#FFD66E] font-bold text-xs uppercase tracking-wider mb-6 shadow-md">
            <Sparkles className="w-4 h-4 text-[#F5B94C]" /> Unbeatable Value Offer
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-2">
            READY TO TAKE YOUR PREPARATION SERIOUSLY?
          </h2>

          <p className="text-base sm:text-lg text-[#BDBDBD] uppercase tracking-wide mb-6">
            START YOUR TNPSC JOURNEY FOR
          </p>

          {/* Big ₹499 Price in Metallic Cut Tag */}
          <div className="mb-6 flex justify-center">
            <div className="gold-badge-cut px-8 sm:px-12 py-3 sm:py-4 shadow-xl">
              <span className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0A0A0A] italic tracking-tight font-display drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                ₹499
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#BDBDBD] max-w-xl mx-auto leading-relaxed mb-8">
            Get access to the advertised programme benefits and begin preparing with a more structured approach.
          </p>

          {/* Motivation callout */}
          <div className="space-y-1 mb-8">
            <p className="text-base sm:text-lg font-bold text-white uppercase">
              YOU DON'T NEED TO WAIT FOR THE NEXT NOTIFICATION.
            </p>
            <p className="text-xl sm:text-2xl font-black text-[#FFD66E] uppercase">
              START PREPARING NOW.
            </p>
          </div>

          {/* CTA */}
          <button
            id="the-499-offer-cta"
            onClick={onOpenRegister}
            className="btn-gold-cta w-full sm:w-auto px-14 py-4 text-[#0A0D14] text-base sm:text-lg font-black uppercase tracking-wider cursor-pointer shadow-[0_6px_30px_rgba(245,199,61,0.5)] whitespace-nowrap"
          >
            JOIN NOW — ₹499
          </button>

          <p className="text-xs text-[#BDBDBD]/70 mt-6 max-w-lg mx-auto">
            Secure enrollment • Programme terms apply • Cash Prize Examination eligibility and prize terms apply
          </p>
        </div>

      </div>

    </section>
  );
};
