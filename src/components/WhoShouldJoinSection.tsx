import React from 'react';
import { UserCheck, Sparkles, BookOpen, RefreshCw, GraduationCap, Briefcase } from 'lucide-react';

export const WhoShouldJoinSection: React.FC = () => {
  const personas = [
    {
      title: "YOU ARE A BEGINNER",
      icon: Sparkles,
      desc: "You don't know exactly where to start. We help you move towards a structured preparation approach.",
    },
    {
      title: "YOU ARE ALREADY PREPARING",
      icon: BookOpen,
      desc: "You've been studying but aren't sure whether your preparation is actually improving your marks. Testing and analysis can help you identify gaps.",
    },
    {
      title: "YOU ARE A REPEATER",
      icon: RefreshCw,
      desc: "You've already attempted TNPSC and want to prepare more strategically this time.",
    },
    {
      title: "YOU ARE A COLLEGE STUDENT",
      icon: GraduationCap,
      desc: "You want to begin TNPSC preparation alongside your degree.",
    },
    {
      title: "YOU ARE A WORKING ASPIRANT",
      icon: Briefcase,
      desc: "You have limited time and need a more structured approach to your preparation.",
    },
  ];

  return (
    <section id="who-should-join-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#F5B94C]/30 text-[#F5B94C] text-xs font-bold uppercase tracking-wider mb-4">
          <UserCheck className="w-3.5 h-3.5" /> Tailored For Serious Aspirants
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight">
          THIS PROGRAM IS FOR YOU IF...
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#BDBDBD]">
          Regardless of your background or stage, structure transforms effort into results.
        </p>
      </div>

      {/* Personas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {personas.map((item, idx) => {
          const Icon = item.icon;
          const isSpan = idx === 4; // 5th item centered on wide screen if needed
          return (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-[#1A1A1A] border border-[#F5B94C]/20 hover:border-[#F5B94C]/50 transition-all flex flex-col justify-between ${
                isSpan ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#111111] text-[#F5B94C] border border-[#F5B94C]/30 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-extrabold text-white uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#BDBDBD] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
