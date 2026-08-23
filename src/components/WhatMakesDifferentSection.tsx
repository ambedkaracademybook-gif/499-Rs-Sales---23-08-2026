import React from 'react';
import { Layers, ArrowRight, CheckCircle2, RotateCw } from 'lucide-react';

export const WhatMakesDifferentSection: React.FC = () => {
  const loopSteps = ["STUDY", "PRACTICE", "TEST", "ANALYSE", "IMPROVE", "REPEAT"];

  return (
    <section id="difference-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-diamond-pattern">
      
      <div className="bg-[#1A1A1A] border-2 border-[#F5B94C]/30 rounded-3xl p-6 sm:p-10 text-center">
        
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#F5B94C]/30 text-[#F5B94C] text-xs font-bold uppercase tracking-wider mb-6">
          <Layers className="w-3.5 h-3.5" /> Measure To Master
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight mb-2">
          DON'T JUST COLLECT STUDY MATERIAL.
        </h2>
        
        <p className="text-xl sm:text-2xl font-black text-[#FFD66E] uppercase tracking-wide mb-8">
          KNOW YOUR PERFORMANCE.
        </p>

        {/* Contrast Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10 text-left">
          <div className="p-5 rounded-2xl bg-[#111111] border border-red-500/20">
            <span className="text-xs font-bold text-[#BDBDBD] uppercase block mb-1">
              Most Aspirants Ask:
            </span>
            <p className="text-base sm:text-lg font-bold text-[#BDBDBD]">
              "What should I study?"
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-br from-[#241c0f] to-[#111111] border border-[#F5B94C] shadow-[0_0_20px_rgba(245,185,76,0.15)]">
            <span className="text-xs font-bold text-[#F5B94C] uppercase block mb-1">
              We Also Want You To Ask:
            </span>
            <p className="text-base sm:text-lg font-extrabold text-[#FFD66E]">
              "HOW WELL AM I PERFORMING?"
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-[#BDBDBD] mb-6">
          That's why the preparation journey focuses on:
        </p>

        {/* Repeat Cycle Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-3xl mx-auto mb-10">
          {loopSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="px-4 py-2.5 rounded-xl bg-[#111111] border border-[#F5B94C]/40 text-xs sm:text-sm font-extrabold text-white tracking-wider">
                {step}
              </div>
              {idx < loopSteps.length - 1 && (
                <span className="text-[#F5B94C] font-bold text-sm hidden sm:inline">
                  ↓
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Core Value Statement */}
        <div className="p-5 rounded-2xl bg-[#111111] border border-[#F5B94C]/40 inline-block max-w-xl w-full">
          <p className="text-base sm:text-lg font-extrabold text-[#FFD66E] uppercase tracking-wide">
            CONSISTENT IMPROVEMENT COMES FROM MEASURING YOUR PREPARATION.
          </p>
        </div>

      </div>

    </section>
  );
};
