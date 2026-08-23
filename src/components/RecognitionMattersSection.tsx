import React from 'react';
import { Target, HeartHandshake, Compass } from 'lucide-react';

export const RecognitionMattersSection: React.FC = () => {
  return (
    <section id="recognition-matters-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      <div className="bg-[#1A1A1A] border border-[#F5B94C]/30 rounded-3xl p-6 sm:p-10 text-center relative overflow-hidden">
        
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#F5B94C]/30 text-[#F5B94C] text-xs font-bold uppercase tracking-wider mb-6">
          <Target className="w-3.5 h-3.5" /> An Honest Truth About TNPSC
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-8">
          WHAT IF YOU MISS SELECTION BY JUST ONE MARK?
        </h2>

        {/* Narrative Flow */}
        <div className="space-y-3 text-base sm:text-lg text-[#BDBDBD] max-w-2xl mx-auto mb-8 font-medium">
          <p>You studied.</p>
          <p>You worked hard.</p>
          <p>You wrote tests.</p>
          <p>You waited for the result.</p>
          <p className="text-white font-bold pt-2">And sometimes...</p>
        </div>

        {/* Highlight Callout */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#111111] border-2 border-[#F5B94C]/40 mb-8 max-w-xl mx-auto">
          <p className="text-xl sm:text-2xl font-black text-[#FFD66E] uppercase tracking-wide">
            ONE MARK CAN CHANGE THE RESULT.
          </p>
        </div>

        <div className="space-y-4 text-sm sm:text-base text-[#BDBDBD] max-w-2xl mx-auto leading-relaxed mb-8">
          <p>
            But missing selection does not automatically mean you lacked talent.
          </p>
          <p>
            Competitive examinations are extremely demanding. Thousands of capable aspirants compete for limited opportunities.
          </p>
          <p className="text-white font-semibold pt-1">
            That's why Ambedkar Academy believes:
          </p>
        </div>

        {/* Core Philosophy Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#251e11] to-[#111111] border-2 border-[#F5B94C] max-w-2xl mx-auto shadow-[0_0_30px_rgba(245,185,76,0.2)]">
          <h3 className="text-lg sm:text-2xl font-black text-white uppercase leading-snug">
            AN ASPIRANT'S EFFORT SHOULD BE RECOGNISED DURING THE JOURNEY — <span className="gold-gradient-text">NOT ONLY AFTER SELECTION.</span>
          </h3>
          <p className="mt-4 text-xs sm:text-sm text-[#FFD66E] font-medium">
            The Cash Prize Model Examination is part of that vision.
          </p>
        </div>

      </div>

    </section>
  );
};
