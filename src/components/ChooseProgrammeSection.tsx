import React from 'react';
import { BookOpen, GraduationCap, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
  onOpenRegister: () => void;
}

export const ChooseProgrammeSection: React.FC<Props> = ({ onOpenRegister }) => {
  const programmes = [
    {
      title: "OFFLINE PROGRAMME",
      badge: "In-Person Classroom",
      regAmount: "Registration: ₹499",
      price: "₹2,000 × 6 Weeks",
      totalCalc: "Total Programme Value: ₹12,499 (₹499 Reg + ₹12,000)",
      desc: "Classroom preparation + guidance + tests",
      features: ["Physical classroom desk in Chennai / Centers", "Direct interaction with senior faculty", "Printed model test papers & OMR evaluation", "Access to Cash Prize Model Exam"],
      popular: true,
    },
    {
      title: "ONLINE PROGRAMME",
      badge: "Live & Recorded",
      regAmount: "Registration: ₹499",
      price: "₹1,000 × 6 Weeks",
      totalCalc: "Total Programme Value: ₹6,499 (₹499 Reg + ₹6,000)",
      desc: "Online preparation + guidance + tests",
      features: ["Live interactive masterclasses", "Recorded video library access", "Digital test series & feedback", "Access to Cash Prize Model Exam"],
      popular: false,
    },
    {
      title: "TEST SERIES",
      badge: "Exam Practice",
      regAmount: "Registration: ₹499",
      price: "₹500 × 4 Weeks",
      totalCalc: "Total Programme Value: ₹2,499 (₹499 Reg + ₹2,000)",
      desc: "Model tests + performance analysis",
      features: ["Curated TNPSC mock tests", "Detailed performance reports", "Weak area analysis dashboard", "Ranking among state aspirants"],
      popular: false,
    },
  ];

  return (
    <section id="choose-programme" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#F5B94C]/40 text-[#FFD66E] font-bold text-xs uppercase tracking-wider mb-3 shadow-md">
          <BookOpen className="w-4 h-4 text-[#F5B94C]" /> Flexible Learning Paths
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
          CHOOSE YOUR <span className="gold-gradient-text">PROGRAMME</span>
        </h2>
        <p className="text-xs sm:text-base text-[#BDBDBD] max-w-xl mx-auto">
          Standard registration is ₹499. Select your offline or online programme and view total calculated costs.
        </p>
      </div>

      {/* 3 Programme Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {programmes.map((prog, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
              prog.popular
                ? 'bg-gradient-to-b from-[#221c10] to-[#161616] border-2 border-[#F5B94C] shadow-[0_0_40px_rgba(245,185,76,0.2)] md:-translate-y-2'
                : 'bg-[#161616] border border-[#F5B94C]/30 hover:border-[#F5B94C]/60 shadow-lg'
            }`}
          >
            {prog.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#F5B94C] text-[#0A0D14] font-black text-[10px] sm:text-xs uppercase px-4 py-1 rounded-full shadow-md tracking-wider">
                Most Popular Choice
              </div>
            )}

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold text-[#F5B94C] bg-[#F5B94C]/10 px-3 py-1 rounded-full border border-[#F5B94C]/30 uppercase">
                  {prog.badge}
                </span>
                <span className="text-xs font-mono font-bold text-[#FFD66E] bg-[#FFD66E]/10 border border-[#FFD66E]/30 px-2.5 py-1 rounded">
                  {prog.regAmount}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3">
                {prog.title}
              </h3>

              <div className="mb-4 pb-4 border-b border-white/10">
                <span className="text-2xl sm:text-3xl font-black gold-gradient-text font-display block mb-1">
                  {prog.price}
                </span>
                <p className="text-xs text-[#FFD66E] font-bold mb-1">
                  {prog.totalCalc}
                </p>
                <p className="text-xs text-[#BDBDBD]">
                  {prog.desc}
                </p>
              </div>

              <ul className="space-y-2.5 mb-8">
                {prog.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E0E0E0]">
                    <CheckCircle2 className="w-4 h-4 text-[#F5B94C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenRegister}
              className={`w-full py-3.5 px-6 rounded-xl font-black uppercase text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all ${
                prog.popular
                  ? 'btn-gold-cta text-[#0A0D14] shadow-lg'
                  : 'bg-[#222222] hover:bg-[#2A2A2A] text-white border border-[#F5B94C]/40 hover:border-[#F5B94C]'
              }`}
            >
              <span>JOIN {prog.title.split(' ')[0]} — ₹499</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>
        ))}
      </div>

    </section>
  );
};
