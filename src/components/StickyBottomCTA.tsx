import React from 'react';
import { ArrowRight, Trophy } from 'lucide-react';

interface Props {
  onOpenRegister: () => void;
}

export const StickyBottomCTA: React.FC<Props> = ({ onOpenRegister }) => {
  return (
    <aside 
      aria-label="Bottom enrollment bar"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0E0E0E]/98 backdrop-blur-lg border-t-2 border-[#F5B94C] py-2.5 sm:py-3 px-3 sm:px-6 shadow-[0_-8px_30px_rgba(0,0,0,0.9)]"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Side Program & Exam Details */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#1A1A1A] border border-[#F5B94C]/40 flex items-center justify-center shrink-0">
            <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#F5B94C]" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[11px] sm:text-xs font-black text-[#FFD66E] uppercase tracking-wide truncate whitespace-nowrap">
              TNPSC MODEL EXAM • ₹1 LAKH PRIZE
            </span>
            <span className="text-[10px] sm:text-xs text-[#BDBDBD] truncate whitespace-nowrap">
              Complete Preparation System
            </span>
          </div>
        </div>

        {/* Right Side Action Button */}
        <button
          id="sticky-enroll-button"
          type="button"
          onClick={onOpenRegister}
          className="btn-gold-cta min-h-[44px] sm:min-h-[48px] px-5 sm:px-8 py-2 sm:py-2.5 text-[#0A0D14] text-xs sm:text-base font-black uppercase tracking-wider flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer shrink-0 whitespace-nowrap"
        >
          <span>JOIN NOW — ₹99</span>
          <ArrowRight className="w-4 h-4 text-[#0A0D14] shrink-0" />
        </button>

      </div>
    </aside>
  );
};
