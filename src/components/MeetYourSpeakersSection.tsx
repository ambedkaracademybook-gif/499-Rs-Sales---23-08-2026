import React from 'react';
import { Calendar, Clock, MapPin, ArrowRight, Award, UserCheck, BookOpen, Calculator, Shield } from 'lucide-react';
import mentorRafiq from '../assets/images/mentors/mentor_rafiq.png';
import mentorVenkatachalapathy from '../assets/images/mentors/mentor_venkatachalapathy.png';
import mentorMohan from '../assets/images/mentors/mentor_mohan.jpeg';
import mentorRavichanthiran from '../assets/images/mentors/mentor_ravichanthiran.jpeg';
import mentorSabithAli from '../assets/images/mentors/mentor_sabith_ali.jpeg';

interface Props {
  onOpenRegister: () => void;
}

interface Speaker {
  name: string;
  badge: string;
  role: string;
  desc: string;
  avatar: string;
  badgeColor: string;
  icon: React.ReactNode;
}

export const MeetYourSpeakersSection: React.FC<Props> = ({ onOpenRegister }) => {
  const speakers: Speaker[] = [
    {
      name: "Mohammed Rafi",
      badge: "ACADEMY DIRECTOR",
      role: "Founder - Ambedkar Academy, Chennai",
      desc: "Dedicated to building a scientific preparation ecosystem for TNPSC aspirants through classroom coaching, mentorship schedules, testing tools, and real state-level model papers.",
      avatar: mentorRafiq,
      badgeColor: "text-[#F5B94C] border-[#F5B94C]/40 bg-[#F5B94C]/10",
      icon: <Award className="w-3.5 h-3.5 text-[#F5B94C]" />,
    },
    {
      name: "Venkatachalapathy",
      badge: "GUEST SPEAKER",
      role: "Deputy Secretary (Retd), Govt of India",
      desc: "The special guest officer will share practical civil preparation tips, effective exam day mindset drills, and general mental maths shortcuts to build confidence.",
      avatar: mentorVenkatachalapathy,
      badgeColor: "text-[#FFD66E] border-[#FFD66E]/40 bg-[#FFD66E]/10",
      icon: <Shield className="w-3.5 h-3.5 text-[#FFD66E]" />,
    },
    {
      name: "Mohan",
      badge: "SENIOR FACULTY",
      role: "Senior Faculty - TNPSC Expert",
      desc: "Veteran educator delivering in-depth syllabus analysis, core General Studies frameworks, and high-impact memory shortcuts for TNPSC exams.",
      avatar: mentorMohan,
      badgeColor: "text-[#F5B94C] border-[#F5B94C]/40 bg-[#F5B94C]/10",
      icon: <BookOpen className="w-3.5 h-3.5 text-[#F5B94C]" />,
    },
    {
      name: "P. Ravichanthiran",
      badge: "MATHS MENTOR",
      role: "M.Sc, M.Ed (Maths) - Assistant (TNEB)",
      desc: "Aptitude specialist and government officer teaching mental ability tricks, rapid formula shortcuts, and full 25/25 scoring tactics.",
      avatar: mentorRavichanthiran,
      badgeColor: "text-[#FFD66E] border-[#FFD66E]/40 bg-[#FFD66E]/10",
      icon: <Calculator className="w-3.5 h-3.5 text-[#FFD66E]" />,
    },
    {
      name: "Sabith Ali",
      badge: "GOVT OFFICIAL",
      role: "Junior Cashier, Government Central Press",
      desc: "Serving government official providing real exam clearance guidance, daily consistency strategies, and exam day mental composure.",
      avatar: mentorSabithAli,
      badgeColor: "text-[#F5B94C] border-[#F5B94C]/40 bg-[#F5B94C]/10",
      icon: <UserCheck className="w-3.5 h-3.5 text-[#F5B94C]" />,
    },
  ];

  return (
    <section id="speakers-mentors-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs sm:text-sm font-bold text-[#FFD66E] uppercase tracking-widest mb-2.5">
          WORKSHOP HOSTS &amp; MENTORS
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-3">
          Meet Your <span className="gold-gradient-text">Speakers</span>
        </h2>
        <p className="text-xs sm:text-base text-[#BDBDBD] max-w-2xl mx-auto leading-relaxed">
          Learn directly from accomplished academy directors, government officers, and seasoned subject specialists.
        </p>
      </div>

      {/* 5 Speakers Grid (3 on top, 2 centered below) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {speakers.slice(0, 3).map((speaker, idx) => (
          <div
            key={idx}
            className="bg-[#161616] border border-[#F5B94C]/30 rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center relative hover:border-[#F5B94C] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] group"
          >
            {/* Avatar with Gold Ring */}
            <div className="relative mb-3">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#F5B94C] to-[#FFD66E] shadow-[0_0_20px_rgba(245,185,76,0.3)]">
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full filter brightness-95 contrast-105"
                />
              </div>
            </div>

            {/* Name & Role */}
            <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#FFD66E] transition-colors mt-2 mb-1">
              {speaker.name}
            </h3>
            <p className="text-xs font-semibold text-[#F5B94C] mb-3 leading-snug">
              {speaker.role}
            </p>

            {/* Description */}
            <p className="text-xs text-[#BDBDBD] leading-relaxed">
              {speaker.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Row 2 (2 Speakers Centered) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        {speakers.slice(3, 5).map((speaker, idx) => (
          <div
            key={idx}
            className="bg-[#161616] border border-[#F5B94C]/30 rounded-3xl p-6 sm:p-7 flex flex-col items-center text-center relative hover:border-[#F5B94C] transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.6)] group"
          >
            {/* Avatar with Gold Ring */}
            <div className="relative mb-3">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-[#F5B94C] to-[#FFD66E] shadow-[0_0_20px_rgba(245,185,76,0.3)]">
                <img
                  src={speaker.avatar}
                  alt={speaker.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full filter brightness-95 contrast-105"
                />
              </div>
            </div>

            {/* Name & Role */}
            <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#FFD66E] transition-colors mt-2 mb-1">
              {speaker.name}
            </h3>
            <p className="text-xs font-semibold text-[#F5B94C] mb-3 leading-snug">
              {speaker.role}
            </p>

            {/* Description */}
            <p className="text-xs text-[#BDBDBD] leading-relaxed">
              {speaker.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Workshop Blueprint Card (as seen in reference) */}
      <div className="bg-quilted-luxury border-2 border-[#F5B94C]/60 rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(245,185,76,0.22)] text-center relative overflow-hidden">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] border border-[#F5B94C]/40 text-[#FFD66E] font-black text-[11px] uppercase tracking-wider mb-4 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#F5B94C] animate-pulse"></span>
          LIMITED SEATS AVAILABLE
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-3">
          Ready to Build Your <span className="gold-gradient-text">TNPSC Success Blueprint?</span>
        </h3>

        <p className="text-xs sm:text-sm text-[#BDBDBD] max-w-2xl mx-auto mb-8 leading-relaxed">
          This interactive strategy workshop is included with your preparation program. Seats are allotted strictly on a first-come, first-served basis due to venue capacity restrictions.
        </p>

        {/* Date, Time, Venue Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8">
          <div className="p-3.5 rounded-2xl bg-[#111111]/90 border border-[#F5B94C]/30 flex flex-col items-center">
            <span className="text-[10px] font-bold text-[#FFD66E] uppercase tracking-wider mb-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#F5B94C]" /> DATE
            </span>
            <span className="text-xs sm:text-sm font-black text-white whitespace-nowrap">
              21st September 2026
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#111111]/90 border border-[#F5B94C]/30 flex flex-col items-center">
            <span className="text-[10px] font-bold text-[#FFD66E] uppercase tracking-wider mb-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#F5B94C]" /> TIME
            </span>
            <span className="text-xs sm:text-sm font-black text-white whitespace-nowrap">
              11:00 AM - 1:00 PM
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#111111]/90 border border-[#F5B94C]/30 flex flex-col items-center">
            <span className="text-[10px] font-bold text-[#FFD66E] uppercase tracking-wider mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#F5B94C]" /> VENUE
            </span>
            <span className="text-xs sm:text-sm font-black text-white whitespace-nowrap">
              T. Nagar, Chennai
            </span>
          </div>
        </div>

        {/* Register CTA with exact requested CTA style */}
        <button
          onClick={onOpenRegister}
          className="btn-gold-cta w-full sm:w-auto px-8 sm:px-14 py-4 text-[#0A0D14] text-sm sm:text-base font-black uppercase tracking-wider cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap"
        >
          <span>REGISTER FREE NOW</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>

    </section>
  );
};
