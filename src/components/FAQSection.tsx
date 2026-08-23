import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const faqs = [
    {
      q: "1. Who is this programme for?",
      a: "This programme is designed for aspirants preparing for TNPSC examinations, including Group 1, Group 2, Group 2A and Group 4, depending on the programme coverage.",
    },
    {
      q: "2. What is the price?",
      a: "The current landing-page offer is ₹499.",
    },
    {
      q: "3. What do I get for ₹499?",
      a: "You receive access to the benefits specifically included in the advertised programme, including the applicable preparation resources, learning support and examination-related benefits.",
    },
    {
      q: "4. Is the ₹1,00,000 cash prize guaranteed for every student?",
      a: "No. The ₹1,00,000 amount is the 1st Prize of the Cash Prize Model Examination. Prize eligibility, participation requirements and selection are subject to the applicable examination terms.",
    },
    {
      q: "5. Do I have to pay separately for the Cash Prize Model Examination?",
      a: "Eligible programme participants can participate according to the applicable programme and examination terms. Final eligibility rules and schedules are shared with enrolled students.",
    },
    {
      q: "6. Is this suitable for beginners?",
      a: "Yes. Beginners can use the structured preparation approach to build their foundation and develop regular study and testing habits.",
    },
    {
      q: "7. I am already preparing for TNPSC. Can I join?",
      a: "Yes. The programme can also be useful for aspirants who already study independently but want more structured practice, testing and performance-focused preparation.",
    },
    {
      q: "8. Is this online or offline?",
      a: "Your ₹499 enrollment provides access to the programme described on this page. Please check the programme details before completing payment.",
    },
    {
      q: "9. When can I start?",
      a: "After successful enrollment, you will receive the instructions required to access the programme immediately.",
    },
    {
      q: "10. How can I get support?",
      a: "For questions about enrollment, programme access or eligibility, contact Ambedkar Academy through WhatsApp at 6369626229.",
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
          Everything you need to know about the ₹499 enrollment & examination terms.
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
