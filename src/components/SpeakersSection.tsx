import React from 'react';
import imgRafiq from '../assets/images/mentors/mentor_rafiq.png';
import imgVenkatachalapathy from '../assets/images/mentors/mentor_venkatachalapathy.png';
import imgMohan from '../assets/images/mentors/mentor_mohan.jpeg';
import imgRavichanthiran from '../assets/images/mentors/mentor_ravichanthiran.jpeg';
import imgSabith from '../assets/images/mentors/mentor_sabith_ali.jpeg';

const speakers = [
  {
    name: 'Mohammed Rafi',
    role: 'ACADEMY DIRECTOR',
    title: 'Founder - Ambedkar Academy, Chennai',
    desc: 'Dedicated to building a scientific preparation ecosystem for TNPSC aspirants through classroom coaching, mentorship schedules, testing tools, and real state-level model papers.',
    image: imgRafiq
  },
  {
    name: 'Venkatachalapathy',
    role: 'GUEST SPEAKER',
    title: 'Deputy Secretary (Rtd) Govt of India',
    desc: 'The special guest officer will share practical civil preparation tips, effective exam-day mindset shifts, and general mental maths shortcuts to build confidence.',
    image: imgVenkatachalapathy
  },
  {
    name: 'Mohan',
    role: 'SENIOR FACULTY',
    title: 'Senior Faculty & TNPSC Expert',
    desc: 'Veteran educator delivering in-depth syllabus analysis, core General Studies frameworks, and high-impact memory shortcuts for TNPSC exams.',
    image: imgMohan
  },
  {
    name: 'P. Ravichanthiran',
    role: 'MATHS MENTOR',
    title: 'MSc, B.Ed (Maths) | Assistant (TNBE)',
    desc: 'Aptitude specialist and government officer teaching mental ability tricks, rapid formula shortcuts, and full 25/25 scoring tactics.',
    image: imgRavichanthiran
  },
  {
    name: 'Sabith Ali',
    role: 'GOVT OFFICIAL',
    title: 'Junior Cashier, Govt Central Press',
    desc: 'Serving government official providing real exam clearance guidance, daily consistency strategies, and exam-day mental composure.',
    image: imgSabith
  }
];

export const SpeakersSection: React.FC = () => {
  return (
    <section id="speakers-section" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="text-[#F5B94C] text-[10px] sm:text-xs font-black uppercase tracking-widest block mb-2">
          WORKSHOP HOSTS & MENTORS
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
          Meet Your Speakers
        </h2>
        <p className="text-sm sm:text-base text-[#BDBDBD] max-w-2xl mx-auto">
          Learn directly from accomplished academy directors, government officers, and
          seasoned subject specialists.
        </p>
      </div>

      {/* Speaker Cards Grid/Flex */}
      <div className="flex flex-wrap justify-center gap-6">
        {speakers.map((speaker, idx) => (
          <div
            key={idx}
            className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#111111] border border-[#F5B94C]/25 hover:border-[#F5B94C]/60 rounded-3xl p-8 flex flex-col items-center text-center transition-all duration-300 shadow-sm"
          >
            {/* Glowing Avatar */}
            <div className="relative mb-6 mt-2">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#F5B94C] shadow-[0_0_25px_rgba(245,185,76,0.35)] mx-auto relative z-10">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Role Badge */}
            <span className="inline-block px-3 py-1 border border-[#F5B94C] rounded text-[#F5B94C] text-[10px] font-bold uppercase tracking-wider mb-4">
              {speaker.role}
            </span>

            {/* Name & Title */}
            <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
              {speaker.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#F5B94C] font-semibold mb-5">
              {speaker.title}
            </p>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#BDBDBD] leading-relaxed">
              {speaker.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
