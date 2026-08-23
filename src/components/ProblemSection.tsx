import React from 'react';
import { HelpCircle, AlertTriangle, BookOpen, FileText, Video, Clock } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const confusionQuestions = [
    { text: "What should I study first?" },
    { text: "Am I actually improving?" },
    { text: "Where am I losing marks?" },
    { text: "Am I practising enough questions?" },
    { text: "How will I perform in a real exam?" },
    { text: "Is my preparation strategy actually working?" },
  ];

  return (
    <section id="problem-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-amber-500/30 text-[#F5B94C] text-xs font-bold uppercase tracking-wider mb-4">
          <AlertTriangle className="w-3.5 h-3.5" />
          The Critical Reality Check
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
          ARE YOU REALLY PREPARING...<br />
          <span className="text-[#FFD66E]">OR JUST STUDYING?</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#BDBDBD] max-w-2xl mx-auto">
          Many TNPSC aspirants spend months studying. But still don't know:
        </p>
      </div>

      {/* The 6 Confusions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {confusionQuestions.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3.5 p-4 sm:p-5 rounded-xl bg-[#1A1A1A] border border-[#F5B94C]/20 hover:border-[#F5B94C]/50 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#111111] text-[#F5B94C] border border-[#F5B94C]/30 flex items-center justify-center shrink-0 font-bold text-sm">
              ?
            </div>
            <p className="text-white font-semibold text-base sm:text-lg">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* The Dilemma Callout */}
      <div className="bg-[#1A1A1A] border-2 border-[#F5B94C]/30 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#BDBDBD] mb-6">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#111111] border border-white/10">
            <Video className="w-3.5 h-3.5 text-[#F5B94C]" /> Hundreds of videos
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#111111] border border-white/10">
            <FileText className="w-3.5 h-3.5 text-[#F5B94C]" /> Hundreds of PDFs
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#111111] border border-white/10">
            <BookOpen className="w-3.5 h-3.5 text-[#F5B94C]" /> Multiple books
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#111111] border border-white/10">
            <Clock className="w-3.5 h-3.5 text-[#F5B94C]" /> Hours of notes
          </span>
        </div>

        <p className="text-base sm:text-lg text-[#BDBDBD] leading-relaxed mb-4">
          You may watch hundreds of videos. Download hundreds of PDFs. Buy multiple books. Take notes. Study for hours.
        </p>

        <p className="text-sm sm:text-base text-[#BDBDBD] font-medium mb-3">
          But without regular testing and performance analysis...
        </p>

        <div className="p-4 rounded-xl bg-[#111111] border border-[#F5B94C]/40 inline-block w-full">
          <p className="text-lg sm:text-xl font-bold text-[#FFD66E]">
            You may still not know how prepared you really are.
          </p>
        </div>
      </div>

    </section>
  );
};
