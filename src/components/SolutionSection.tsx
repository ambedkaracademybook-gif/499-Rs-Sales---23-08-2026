import React from 'react';
import { BookOpen, Edit3, Award, BarChart3, TrendingUp, Users, Trophy, Sparkles } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "LEARN",
      icon: BookOpen,
      desc: "Core syllabus & concept clarity",
    },
    {
      step: "02",
      title: "PRACTICE",
      icon: Edit3,
      desc: "Targeted PYQ drills",
    },
    {
      step: "03",
      title: "TEST",
      icon: Award,
      desc: "Timed OMR model tests",
    },
    {
      step: "04",
      title: "ANALYSE",
      icon: BarChart3,
      desc: "Identify negative marks",
    },
    {
      step: "05",
      title: "IMPROVE",
      icon: TrendingUp,
      desc: "Targeted weak-area fix",
    },
    {
      step: "06",
      title: "COMPETE",
      icon: Users,
      desc: "State-level ranking",
    },
  ];

  return (
    <section id="solution-section" className="py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-8 sm:mb-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] border border-[#F5B94C]/40 text-[#FFD66E] text-xs font-bold uppercase tracking-wider mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-[#F5B94C]" /> The Proven Framework
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
          6-STAGE PREPARATION <span className="gold-gradient-text">CYCLE</span>
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#BDBDBD] max-w-xl mx-auto">
          A predictable, repeatable cycle that turns syllabus confusion into competitive rank.
        </p>
      </div>

      {/* 6-Column Grid Layout (Single Compact Row on Desktop, 3x2 on Tablet, 2x3 on Mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 mb-6">
        {steps.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-[#141414] border border-[#F5B94C]/25 hover:border-[#F5B94C] rounded-2xl p-3.5 sm:p-4 flex flex-col items-center text-center transition-all duration-300 group shadow-lg"
            >
              {/* Step Number Tag */}
              <span className="text-[10px] font-mono font-black text-[#F5B94C] bg-[#1A1A1A] border border-[#F5B94C]/30 px-2 py-0.5 rounded-full mb-2.5">
                STEP {item.step}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-[#F5B94C]/30 flex items-center justify-center text-[#F5B94C] group-hover:bg-[#F5B94C] group-hover:text-[#111111] transition-colors mb-2.5 shadow-inner">
                <Icon className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="text-xs sm:text-sm font-black text-white group-hover:text-[#FFD66E] uppercase tracking-wide mb-1">
                {item.title}
              </h3>

              {/* Concise Description */}
              <p className="text-[11px] text-[#BDBDBD] leading-snug">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recognition Milestone Box */}
      <div className="bg-quilted-luxury border border-[#F5B94C]/50 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-[#F5B94C] text-[#111111] flex items-center justify-center font-black shrink-0 shadow-[0_0_15px_rgba(245,185,76,0.35)]">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-black text-[#FFD66E] uppercase tracking-wider block">
              FINAL OUTCOME • STATE RANK RECOGNITION
            </span>
            <h4 className="text-sm sm:text-base font-black text-white uppercase">
              Eligible for Cash Prize Model Exam
            </h4>
          </div>
        </div>

        <div className="gold-badge-cut px-4 py-1.5 text-xs font-black text-[#0A0A0A] shrink-0">
          ₹1,00,000 PRIZE ELIGIBILITY
        </div>
      </div>

    </section>
  );
};
