import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "What is the ₹1,00,000 prize?",
      a: "It is the 1st Prize of the Cash Prize Model Examination.",
    },
    {
      q: "Is the prize guaranteed?",
      a: "No. Eligibility and prize distribution are subject to the applicable examination rules.",
    },
    {
      q: "Can beginners join?",
      a: "Yes. The programme is suitable for beginners and existing aspirants.",
    },
    {
      q: "Can I join only the Test Series?",
      a: "Yes. A separate Test Series option is available.",
    },
    {
      q: "What is the registration amount?",
      a: "₹99 only, followed by the applicable weekly payment for full programmes.",
    },
    {
      q: "How do I join?",
      a: "Select your programme and complete the registration.",
    },
    {
      q: "Who is this programme designed for?",
      a: "Aspirants preparing for TNPSC examinations, including beginners, existing aspirants, repeaters, college students, and working professionals.",
    },
    {
      q: "What do I get upon joining?",
      a: "Access to structured preparation, regular practice tests, performance analysis, government officer guidance, and eligibility to participate in the Cash Prize Model Examination.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#F5B94C]/30 text-[#F5B94C] text-xs font-bold uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5" /> Clear Answers
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#BDBDBD]">
          Everything you need to know about the ₹99 enrollment & examination terms.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-[#1A1A1A] border border-[#F5B94C]/20 overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-base sm:text-lg font-bold text-white leading-snug">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#F5B94C] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#FFD66E]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#BDBDBD] leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
};

