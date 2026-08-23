import React from 'react';
import { Compass, Sparkles, Heart } from 'lucide-react';
import mentorRafiq from '../assets/images/mentors/mentor_rafiq.png';

export const FounderVisionSection: React.FC = () => {
  return (
    <section id="vision-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      <div className="bg-[#1A1A1A] border border-[#F5B94C]/30 rounded-3xl p-6 sm:p-10 text-center shadow-2xl">
        
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#F5B94C]/30 text-[#F5B94C] text-xs font-bold uppercase tracking-wider mb-6">
          <Compass className="w-3.5 h-3.5" /> Founder Vision
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-8">
          WHY AMBEDKAR ACADEMY?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 max-w-2xl mx-auto text-sm sm:text-base font-semibold text-white">
          <div className="p-3.5 rounded-xl bg-[#111111] border border-white/10">
            🏆 Sports have trophies.
          </div>
          <div className="p-3.5 rounded-xl bg-[#111111] border border-white/10">
            🎬 Entertainment has awards.
          </div>
          <div className="p-3.5 rounded-xl bg-[#111111] border border-white/10">
            🌟 Competitions have recognition.
          </div>
        </div>

        <p className="text-base sm:text-lg text-[#BDBDBD] max-w-2xl mx-auto mb-6 leading-relaxed">
          But thousands of students spend months and years preparing for competitive examinations.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-[#FFD66E] mb-8">
          <span className="px-3 py-1 rounded bg-[#111111] border border-[#F5B94C]/30">They study.</span>
          <span className="px-3 py-1 rounded bg-[#111111] border border-[#F5B94C]/30">They struggle.</span>
          <span className="px-3 py-1 rounded bg-[#111111] border border-[#F5B94C]/30">They write tests.</span>
          <span className="px-3 py-1 rounded bg-[#111111] border border-[#F5B94C]/30">They improve.</span>
          <span className="px-3 py-1 rounded bg-[#111111] border border-[#F5B94C]/30">They try again.</span>
        </div>

        <div className="p-4 rounded-xl bg-[#111111] border border-[#F5B94C]/30 inline-block max-w-md w-full mb-8 shadow-inner">
          <p className="text-xl sm:text-2xl font-black text-white uppercase tracking-wider">
            THEIR JOURNEY MATTERS TOO.
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#BDBDBD] max-w-2xl mx-auto mb-8 leading-relaxed">
          Ambedkar Academy was created with a vision to build a platform that doesn't simply teach aspirants.
        </p>

        {/* 3 Core Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10">
          <div className="p-4 rounded-xl bg-gradient-to-b from-[#20190d] to-[#111111] border border-[#F5B94C]/40 text-center">
            <p className="text-xs sm:text-sm font-black text-[#FFD66E] uppercase">
              WE WANT TO RECOGNISE THEM.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-b from-[#20190d] to-[#111111] border border-[#F5B94C]/40 text-center">
            <p className="text-xs sm:text-sm font-black text-[#FFD66E] uppercase">
              WE WANT TO MOTIVATE THEM.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-gradient-to-b from-[#20190d] to-[#111111] border border-[#F5B94C]/40 text-center">
            <p className="text-xs sm:text-sm font-black text-[#FFD66E] uppercase">
              WE WANT TO HELP THEM KEEP GOING.
            </p>
          </div>
        </div>

        {/* Founder Profile Badge */}
        <div className="inline-flex items-center gap-4 p-3 pr-6 rounded-full bg-[#111111] border border-[#F5B94C]/40 shadow-xl">
          <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#F5B94C] to-[#FFD66E]">
            <img
              src={mentorRafiq}
              alt="Mohammed Rafi - Founder"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-left">
            <h4 className="text-sm font-black text-white">Mohammed Rafi</h4>
            <p className="text-[11px] text-[#F5B94C] font-bold uppercase tracking-wider">
              Founder & Director, Ambedkar Academy
            </p>
          </div>
        </div>

      </div>

    </section>
  );
};
