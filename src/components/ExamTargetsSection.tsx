import React from 'react';
import { Target, Award, CheckCircle } from 'lucide-react';

export const ExamTargetsSection: React.FC = () => {
  const exams = [
    { title: "GROUP 1", desc: "Deputy Collector, DSP & Top State Services" },
    { title: "GROUP 2", desc: "Sub-Registrar, Municipal Commissioner, Revenue Inspector" },
    { title: "GROUP 2A", desc: "Assistant, Junior Employment Officer, Executive Officer" },
    { title: "GROUP 4", desc: "Village Administrative Officer (VAO), Junior Assistant, Typist" },
  ];

  return (
    <section id="targets-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#F5B94C]/30 text-[#F5B94C] text-xs font-bold uppercase tracking-wider mb-4">
          <Target className="w-3.5 h-3.5" /> Complete Exam Coverage
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
          PREPARING FOR TNPSC?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#BDBDBD]">
          Whether your goal is:
        </p>
      </div>

      {/* 4 Exam Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {exams.map((exam, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#F5B94C]/25 hover:border-[#F5B94C]/60 transition-all text-center flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#111111] text-[#F5B94C] border border-[#F5B94C]/30 flex items-center justify-center mx-auto mb-4 font-black text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-black text-[#FFD66E] uppercase tracking-wide mb-2">
                {exam.title}
              </h3>
              <p className="text-xs text-[#BDBDBD] leading-relaxed">
                {exam.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Philosophy Box */}
      <div className="bg-[#1A1A1A] border border-[#F5B94C]/30 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto">
        <p className="text-sm sm:text-base text-[#BDBDBD] mb-4">
          Your preparation begins with understanding the examination, following a strategy and consistently testing yourself.
        </p>

        <div className="pt-2">
          <p className="text-base sm:text-lg font-bold text-white uppercase">
            YOUR GOAL MAY BE A GOVERNMENT JOB.
          </p>
          <p className="text-xl sm:text-2xl font-black text-[#FFD66E] uppercase mt-1">
            YOUR FIRST STEP IS BETTER PREPARATION.
          </p>
        </div>
      </div>

    </section>
  );
};
