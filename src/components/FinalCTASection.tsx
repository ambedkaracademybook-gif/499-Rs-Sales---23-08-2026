import React from 'react';
import { Sparkles, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';

interface Props {
  onOpenRegister: () => void;
}

export const FinalCTASection: React.FC<Props> = ({ onOpenRegister }) => {
  const journeyLines = [
    "One decision.",
    "One study plan.",
    "One test.",
    "One improvement.",
    "Then another.",
    "And another.",
  ];

  return (
    <section id="final-cta-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      
      <div className="bg-quilted-luxury border-2 border-[#F5B94C] rounded-3xl p-8 sm:p-14 shadow-[0_0_60px_rgba(245,185,76,0.3)] relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#F5B94C]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#F5B94C]/50 text-[#FFD66E] font-bold text-xs uppercase tracking-wider mb-6">
            <Trophy className="w-4 h-4 text-[#F5B94C]" />
            Your Future Starts Today
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight max-w-3xl mx-auto mb-4">
            ONE DAY, YOU WANT TO SEE YOUR NAME IN THE GOVERNMENT SELECTION LIST.
          </h2>

          <p className="text-lg sm:text-2xl font-black text-[#FFD66E] uppercase tracking-wide mb-8">
            THAT JOURNEY STARTS MUCH EARLIER.
          </p>

          <p className="text-xs sm:text-sm font-bold text-[#BDBDBD] uppercase tracking-widest mb-4">
            It starts with:
          </p>

          {/* Flow of 6 Lines */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 max-w-2xl mx-auto mb-10 text-xs sm:text-sm font-bold text-white uppercase">
            {journeyLines.map((line, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-lg bg-[#111111] border border-[#F5B94C]/30 text-[#FFD66E]"
              >
                {line}
              </span>
            ))}
          </div>

          {/* Motivational Climax */}
          <div className="space-y-1 mb-10">
            <p className="text-lg sm:text-xl font-bold text-white uppercase">
              DON'T WAIT TO FEEL READY.
            </p>
            <p className="text-2xl sm:text-3xl font-black text-[#FFD66E] uppercase">
              START PREPARING.
            </p>
          </div>

          {/* Huge Join Line & Button */}
          <div className="max-w-xl mx-auto bg-[#111111] p-6 sm:p-8 rounded-2xl border-2 border-[#F5B94C]/50 shadow-[0_0_30px_rgba(245,185,76,0.2)]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase mb-6 leading-snug">
              JOIN AMBEDKAR ACADEMY FOR <span className="gold-gradient-text">₹499</span>
            </h3>

            <button
              id="final-cta-btn"
              onClick={onOpenRegister}
              className="btn-gold-cta w-full py-4 sm:py-5 px-8 text-[#0A0D14] text-lg sm:text-xl font-black uppercase tracking-wider cursor-pointer shadow-[0_6px_35px_rgba(245,199,61,0.55)] whitespace-nowrap flex items-center justify-center text-center"
            >
              JOIN NOW — ₹499
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
