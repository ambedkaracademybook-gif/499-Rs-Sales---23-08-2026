import React from 'react';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export const AfterJoinJourneySection: React.FC = () => {
  const steps = [
    { step: "01", title: "JOIN FOR ₹99", desc: "Complete your enrollment." },
    { step: "02", title: "ACCESS YOUR PROGRAMME", desc: "Start using the available learning and preparation resources." },
    { step: "03", title: "PREPARE", desc: "Follow the structured preparation approach." },
    { step: "04", title: "PRACTICE", desc: "Solve questions and participate in tests." },
    { step: "05", title: "ANALYSE", desc: "Understand your performance." },
    { step: "06", title: "IMPROVE", desc: "Focus on your weak areas." },
    { step: "07", title: "COMPETE", desc: "Participate in eligible competitive examinations." },
    { step: "08", title: "GET RECOGNISED", desc: "Top performers may receive recognition and cash prizes according to the applicable examination terms." },
  ];

  return (
    <section id="journey-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-diamond-pattern">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#F5B94C]/30 text-[#F5B94C] text-xs font-bold uppercase tracking-wider mb-4">
          <Compass className="w-3.5 h-3.5" /> Clear Step-By-Step Roadmap
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
          WHAT HAPPENS AFTER YOU JOIN?
        </h2>
        <p className="mt-2 text-sm sm:text-base text-[#BDBDBD]">
          YOUR JOURNEY STARTS HERE
        </p>
      </div>

      {/* 8-Step Grid / List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#F5B94C]/20 hover:border-[#F5B94C]/50 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#F5B94C]">
                  STEP {item.step}
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#F5B94C]/70" />
              </div>
              <h3 className="text-base font-extrabold text-white uppercase tracking-wide mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#BDBDBD] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
