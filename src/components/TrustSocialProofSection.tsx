import React from 'react';
import { Users, Star, Award, ShieldCheck, Quote } from 'lucide-react';

export const TrustSocialProofSection: React.FC = () => {
  const testimonials = [
    {
      quote: "I understood where I was making mistakes and how I needed to improve my preparation.",
      author: "M. Vignesh",
      tag: "TNPSC Aspirant",
    },
    {
      quote: "The test and preparation approach helped me take my TNPSC preparation more seriously.",
      author: "S. Divya",
      tag: "Group 2 Aspirant",
    },
    {
      quote: "Instead of collecting useless PDFs, I now have a systematic routine for regular tests and review.",
      author: "K. Karthik",
      tag: "Group 4 Aspirant",
    },
  ];

  return (
    <section id="trust-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#F5B94C]/30 text-[#F5B94C] text-xs font-bold uppercase tracking-wider mb-4">
          <Users className="w-3.5 h-3.5" /> Genuine Aspirant Community
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
          YOU ARE NOT PREPARING ALONE.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#BDBDBD] max-w-xl mx-auto">
          Ambedkar Academy is building a community around serious competitive-examination aspirants.
        </p>
      </div>

      {/* Verified Metrics Counter */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#F5B94C]/20 text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#FFD66E]">200+</div>
          <div className="text-xs font-bold text-white uppercase tracking-wider mt-1">WORKSHOP ASPIRANTS</div>
          <p className="text-[11px] text-[#BDBDBD] mt-0.5">Verified active attendees</p>
        </div>
        <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#F5B94C]/20 text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#FFD66E]">200+</div>
          <div className="text-xs font-bold text-white uppercase tracking-wider mt-1">5-STAR REVIEWS</div>
          <p className="text-[11px] text-[#BDBDBD] mt-0.5">Genuine participant feedback</p>
        </div>
        <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#F5B94C]/20 text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#FFD66E]">100%</div>
          <div className="text-xs font-bold text-white uppercase tracking-wider mt-1">TNPSC ORIENTED</div>
          <p className="text-[11px] text-[#BDBDBD] mt-0.5">Aligned with latest pattern</p>
        </div>
        <div className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#F5B94C]/20 text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#FFD66E]">₹2,00,000</div>
          <div className="text-xs font-bold text-white uppercase tracking-wider mt-1">CASH PRIZE POOL</div>
          <p className="text-[11px] text-[#BDBDBD] mt-0.5">Recognising merit effort</p>
        </div>
      </div>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#1A1A1A] border border-[#F5B94C]/20 flex flex-col justify-between"
          >
            <div>
              <Quote className="w-6 h-6 text-[#F5B94C]/40 mb-3" />
              <p className="text-sm sm:text-base text-white font-medium italic leading-relaxed mb-6">
                "{item.quote}"
              </p>
            </div>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-[#FFD66E]">
                — {item.author}
              </span>
              <span className="text-[11px] text-[#BDBDBD] px-2 py-0.5 rounded bg-[#111111] border border-white/10">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-xs text-[#BDBDBD]/70">
        Verified participant reviews • Published with student consent
      </p>

    </section>
  );
};
