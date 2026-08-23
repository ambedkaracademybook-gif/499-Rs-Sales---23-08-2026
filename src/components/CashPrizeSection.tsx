import React from 'react';
import { Trophy, Award, Gift, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Users, Building, Utensils } from 'lucide-react';
import cashPrizePoster from '../assets/images/cash-prize/cash_prize_poster_2026_1787489072571.jpg';

interface Props {
  onOpenRegister: () => void;
}

export const CashPrizeSection: React.FC<Props> = ({ onOpenRegister }) => {
  const prizeList = [
    { rank: "1ST PRIZE", amount: "₹ 1,00,000", isTop: true },
    { rank: "2ND PRIZE", amount: "₹ 50,000", isTop: false },
    { rank: "3RD PRIZE", amount: "₹ 25,000", isTop: false },
    { rank: "4TH PRIZE", amount: "₹ 15,000", isTop: false },
    { rank: "5TH PRIZE", amount: "₹ 10,000", isTop: false },
  ];

  return (
    <section id="cash-prize-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Container with Quilted Leather Background */}
      <div className="bg-quilted-luxury border-2 border-[#F5B94C]/60 rounded-3xl p-5 sm:p-10 shadow-[0_0_50px_rgba(245,185,76,0.25)] relative overflow-hidden">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#F5B94C]/15 blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#111111] border border-[#F5B94C] text-[#FFD66E] font-black text-xs uppercase tracking-wider mb-3 shadow-[0_0_20px_rgba(245,185,76,0.3)]">
            <Trophy className="w-4 h-4 text-[#F5B94C]" />
            STATE-LEVEL RECOGNITION
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-3">
            ₹2,00,000 TOTAL <span className="gold-gradient-text">CASH PRIZE POOL</span>
          </h2>
          <p className="text-xs sm:text-base text-[#BDBDBD] max-w-2xl mx-auto mb-6">
            Experience real TNPSC exam pressure and earn state-level recognition with tangible cash awards.
          </p>

          {/* 4 Key Exam Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto text-left">
            <div className="bg-[#111111]/90 border border-[#F5B94C]/40 p-3.5 rounded-2xl flex items-start gap-3 shadow-md">
              <div className="p-2 rounded-xl bg-[#F5B94C]/10 text-[#FFD66E] shrink-0">
                <Users className="w-4 h-4 text-[#F5B94C]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#F5B94C] uppercase tracking-wider block">Seat Limit</span>
                <p className="text-xs font-bold text-white leading-snug">Only 1000 Members Are allowed for this Cash prize model Exam</p>
              </div>
            </div>

            <div className="bg-[#111111]/90 border border-[#F5B94C]/40 p-3.5 rounded-2xl flex items-start gap-3 shadow-md">
              <div className="p-2 rounded-xl bg-[#F5B94C]/10 text-[#FFD66E] shrink-0">
                <Building className="w-4 h-4 text-[#F5B94C]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#F5B94C] uppercase tracking-wider block">Mode</span>
                <p className="text-xs font-bold text-white leading-snug">Complete OFFLINE model EXAM</p>
              </div>
            </div>

            <div className="bg-[#111111]/90 border border-[#F5B94C]/40 p-3.5 rounded-2xl flex items-start gap-3 shadow-md">
              <div className="p-2 rounded-xl bg-[#F5B94C]/10 text-[#FFD66E] shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#F5B94C]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#F5B94C] uppercase tracking-wider block">Evaluation</span>
                <p className="text-xs font-bold text-white leading-snug">Same Day Live Correction and Same day Result</p>
              </div>
            </div>

            <div className="bg-[#111111]/90 border border-[#F5B94C]/40 p-3.5 rounded-2xl flex items-start gap-3 shadow-md">
              <div className="p-2 rounded-xl bg-[#F5B94C]/10 text-[#FFD66E] shrink-0">
                <Utensils className="w-4 h-4 text-[#F5B94C]" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-[#F5B94C] uppercase tracking-wider block">Hospitality</span>
                <p className="text-xs font-bold text-white leading-snug">FREE Lunch Provided</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Poster & Authentic Chamfered Prize Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 relative z-10">
          
          {/* Left Column: Official Poster Graphic */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border-2 border-[#F5B94C] shadow-[0_0_35px_rgba(245,185,76,0.3)] group bg-black">
              <img
                src={cashPrizePoster}
                alt="TNPSC Model Exam ₹1,00,000 Cash Prize Winner"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm border border-[#F5B94C]/50 px-3 py-1 rounded-full text-[11px] font-black text-[#FFD66E] uppercase tracking-wide flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#F5B94C]" />
                Official Prize Trophy
              </div>
            </div>
            <p className="text-[11px] text-[#BDBDBD]/75 mt-3 text-center">
              State-level Tamil Nadu TNPSC Model Exam • Real OMR Evaluation
            </p>
          </div>

          {/* Right Column: Exact Authentic Prize Tags from Reference Image */}
          <div className="lg:col-span-7 bg-[#111111]/90 backdrop-blur-md p-5 sm:p-7 rounded-3xl border border-[#F5B94C]/40 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-5 h-5 text-[#F5B94C]" />
                Prize Distribution Matrix
              </h3>
              <span className="text-[11px] font-bold text-[#FFD66E] bg-[#F5B94C]/10 px-2.5 py-1 rounded border border-[#F5B94C]/30">
                Direct Cash Payouts
              </span>
            </div>

            {/* Prize Tags List Styled Exactly Like Reference Image */}
            <div className="space-y-3 pt-1">
              {prizeList.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-2xl transition-all ${
                    item.isTop
                      ? 'bg-gradient-to-r from-[#F5B94C]/15 via-[#F5B94C]/5 to-transparent border border-[#F5B94C]/50 shadow-[0_0_20px_rgba(245,185,76,0.15)]'
                      : 'bg-[#181818]/80 border border-white/10 hover:border-[#F5B94C]/40'
                  }`}
                >
                  {/* Left Label: 1ST PRIZE, 2ND PRIZE, etc. */}
                  <div className="flex items-center gap-2 sm:gap-3 pl-1 sm:pl-2">
                    <span className="text-xs sm:text-sm font-black text-white tracking-widest uppercase font-mono">
                      {item.rank}
                    </span>
                    {item.isTop && (
                      <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-[#F5B94C] text-[#111111]">
                        Mega Prize
                      </span>
                    )}
                  </div>

                  {/* Right Chamfered Cut-Corner Metallic Gold Tag */}
                  <div className="gold-badge-cut px-4 sm:px-6 py-2 sm:py-2.5 min-w-[140px] sm:min-w-[180px] text-center shadow-md">
                    <span className="text-base sm:text-xl font-black text-[#0A0A0A] italic tracking-tight font-display drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                      {item.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Cash Prize Box */}
            <div className="p-3.5 rounded-2xl bg-[#0A0A0A] border border-[#F5B94C]/25 text-xs text-[#BDBDBD] space-y-1 mt-3">
              <p className="font-bold text-white flex items-center gap-1.5 text-xs">
                <ShieldCheck className="w-4 h-4 text-[#F5B94C]" />
                Why We Offer Cash Prizes:
              </p>
              <p className="text-[11px] leading-relaxed text-[#BDBDBD]/80">
                When something valuable is at stake, you prepare harder, sit with 100% focus, and treat the paper like the actual final exam. It separates casual readers from serious achievers.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center pt-2 border-t border-white/10 relative z-10">
          <button
            onClick={onOpenRegister}
            className="btn-gold-cta px-8 sm:px-14 py-4 text-[#0A0D14] text-sm sm:text-base font-black uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 whitespace-nowrap"
          >
            <span>JOIN NOW — ₹99</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-[#BDBDBD]/70 mt-2">
            Includes all prep tools, syllabus breakdown, and Cash Prize Model Exam entry
          </p>
        </div>

      </div>
    </section>
  );
};
