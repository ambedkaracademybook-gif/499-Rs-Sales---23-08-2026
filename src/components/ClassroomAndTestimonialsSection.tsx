import React from 'react';
import { Users, Star, Award, CheckCircle2, BookOpen, GraduationCap, Trophy, MapPin, Sparkles, Calendar, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import classroomImg from '../assets/images/classroom/ambedkar_classroom_1787489239300.jpg';
import workshopImg from '../assets/images/classroom/ambedkar_hall_1787489259369.jpg';

import review1 from '../assets/images/reviews/review_1.jpeg';
import review2 from '../assets/images/reviews/review_2.jpeg';
import review3 from '../assets/images/reviews/review_3.jpeg';
import review4 from '../assets/images/reviews/review_4.jpeg';
import review5 from '../assets/images/reviews/review_5.jpeg';
import review6 from '../assets/images/reviews/review_6.jpeg';
import review7 from '../assets/images/reviews/review_7.jpeg';
import review8 from '../assets/images/reviews/review_8.jpeg';
import review9 from '../assets/images/reviews/review_9.jpeg';
import review10 from '../assets/images/reviews/review_10.jpeg';

interface Props {
  onOpenRegister: () => void;
}

export const ClassroomAndTestimonialsSection: React.FC<Props> = ({ onOpenRegister }) => {
  const reviewImages = [
    review1, review2, review3, review4, review5,
    review6, review7, review8, review9, review10
  ];

  return (
    <section id="classroom-testimonials-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#F5B94C]/40 text-[#FFD66E] font-bold text-xs uppercase tracking-wider mb-3 shadow-md">
          <GraduationCap className="w-4 h-4 text-[#F5B94C]" />
          AMBEDKAR ACADEMY SESSIONS &amp; REVIEWS
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
          Inside Our <span className="gold-gradient-text">Classrooms &amp; Seminar Halls</span>
        </h2>
        <p className="text-xs sm:text-base text-[#BDBDBD] max-w-2xl mx-auto">
          Over 5,000+ aspirants have experienced our disciplined environment, structured test papers, and mentor guidance across Tamil Nadu.
        </p>
      </div>

      {/* Classroom & Seminar Hall Images Grid with Ambedkar Academy Prominent Branding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        
        {/* Card 1: Ambedkar Academy Classroom Session */}
        <div className="bg-[#161616] border border-[#F5B94C]/40 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.8)] group relative">
          <div className="relative aspect-video overflow-hidden bg-black">
            <img
              src={classroomImg}
              alt="Ambedkar Academy TNPSC Classroom Coaching with Students"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Top Brand Watermark Pill */}
            <div className="absolute top-3 left-3 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#F5B94C]/50 px-3 py-1 rounded-full flex items-center gap-1.5 z-10 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#F5B94C]" />
              <span className="text-[11px] font-black text-[#FFD66E] uppercase tracking-wider">
                Ambedkar Academy • Chennai
              </span>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F5B94C] text-[#111111] font-black text-[11px] uppercase tracking-wide w-fit mb-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Direct Classroom Batch
              </span>
              <p className="text-sm font-bold text-white leading-snug">
                Intensive Daily Syllabus Coverage &amp; Subject Masterclasses
              </p>
            </div>
          </div>
          
          <div className="p-4 sm:p-5 flex items-center justify-between text-xs text-[#BDBDBD] bg-[#121212]">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#F5B94C]" /> Real Exam Hall Atmosphere
            </span>
            <span className="flex items-center gap-1 text-[#F5B94C]">
              <MapPin className="w-3.5 h-3.5" /> T. Nagar Campus
            </span>
          </div>
        </div>

        {/* Card 2: Ambedkar Academy State Blueprint Seminar */}
        <div className="bg-[#161616] border border-[#F5B94C]/40 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.8)] group relative">
          <div className="relative aspect-video overflow-hidden bg-black">
            <img
              src={workshopImg}
              alt="Ambedkar Academy State Blueprint Workshop Seminar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Top Brand Watermark Pill */}
            <div className="absolute top-3 left-3 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#F5B94C]/50 px-3 py-1 rounded-full flex items-center gap-1.5 z-10 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD66E]" />
              <span className="text-[11px] font-black text-[#FFD66E] uppercase tracking-wider">
                Ambedkar Academy • Annual Seminar
              </span>
            </div>

            {/* Bottom Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FFD66E] text-[#111111] font-black text-[11px] uppercase tracking-wide w-fit mb-1.5">
                <Trophy className="w-3.5 h-3.5" /> State-Level Blueprint Workshop
              </span>
              <p className="text-sm font-bold text-white leading-snug">
                Strategy Sessions by Bureaucrats, Officers &amp; Senior Faculty
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 flex items-center justify-between text-xs text-[#BDBDBD] bg-[#121212]">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#FFD66E]" /> 1,000+ Aspirant Participation
            </span>
            <span className="flex items-center gap-1 text-[#FFD66E]">
              <MapPin className="w-3.5 h-3.5" /> Chennai Auditorium
            </span>
          </div>
        </div>
      </div>

      {/* Limited Seats Available — Date, Time & Venue Section */}
      <div className="mb-14 bg-gradient-to-br from-[#1A1A1A] to-[#121212] border-2 border-[#F5B94C] rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(245,185,76,0.15)] relative overflow-hidden">
        <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 w-48 h-48 bg-[#F5B94C]/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD66E]/15 border border-[#F5B94C]/40 text-[#FFD66E] text-xs font-black uppercase tracking-wider mb-2">
              <AlertCircle className="w-4 h-4 text-[#F5B94C] animate-pulse" /> Limited Seats Available — Register Now
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              TNPSC 2026 Model Exam &amp; Seminar <span className="gold-gradient-text">Schedule &amp; Venue</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#BDBDBD] mt-1 max-w-xl">
              Strict capacity limits apply per center. Book your physical desk and receive your hall ticket instantly upon enrollment.
            </p>
          </div>
          
          <button
            onClick={onOpenRegister}
            className="btn-gold-cta shrink-0 px-8 py-3.5 text-[#0A0D14] text-sm font-black uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
          >
            <span>Book Seat — ₹499</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-[#F5B94C]/20">
          
          {/* Date Card */}
          <div className="bg-[#111111] border border-[#F5B94C]/30 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5B94C]/15 border border-[#F5B94C]/40 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-[#F5B94C]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#F5B94C] uppercase tracking-wider block mb-0.5">Exam Date</span>
              <h4 className="text-base font-extrabold text-white">Sunday, May 24, 2026</h4>
              <p className="text-xs text-[#BDBDBD] mt-0.5">Reporting time: 09:00 AM</p>
            </div>
          </div>

          {/* Time Card */}
          <div className="bg-[#111111] border border-[#F5B94C]/30 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5B94C]/15 border border-[#F5B94C]/40 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-[#F5B94C]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#F5B94C] uppercase tracking-wider block mb-0.5">Timings</span>
              <h4 className="text-base font-extrabold text-white">09:30 AM – 12:30 PM</h4>
              <p className="text-xs text-[#BDBDBD] mt-0.5">Followed by Expert Seminar &amp; Cash Prize Meet</p>
            </div>
          </div>

          {/* Venue Card */}
          <div className="bg-[#111111] border border-[#F5B94C]/30 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5B94C]/15 border border-[#F5B94C]/40 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#F5B94C]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#F5B94C] uppercase tracking-wider block mb-0.5">Main Venue</span>
              <h4 className="text-base font-extrabold text-white">Ambedkar Academy Hall</h4>
              <p className="text-xs text-[#BDBDBD] mt-0.5">T. Nagar, Chennai • District Centers across TN</p>
            </div>
          </div>

        </div>
      </div>

      {/* Real Student Reviews & Aspirant Experiences Marquee */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Aspirant <span className="gold-gradient-text">Experiences &amp; Reviews</span>
            </h3>
            <p className="text-xs text-[#BDBDBD] mt-0.5">
              Honest feedback from students across Tamil Nadu • Hover over review snapshots to pause scrolling
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-[#F5B94C] font-bold text-xs bg-[#1A1A1A] px-3 py-1.5 rounded-full border border-[#F5B94C]/30">
            <Star className="w-4 h-4 fill-current" />
            <span>4.9 / 5 Rated by 200+ Reviews</span>
          </div>
        </div>

        {/* 10 Review Images Smooth Auto-Scrolling Marquee (Pauses on Hover) */}
        <div className="relative w-full overflow-hidden py-4 group">
          <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused] gap-5 items-center">
            {[...reviewImages, ...reviewImages].map((img, idx) => (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] h-[360px] sm:h-[400px] shrink-0 rounded-2xl overflow-hidden border border-[#F5B94C]/40 bg-[#121212] shadow-[0_4px_25px_rgba(0,0,0,0.8)] group/card hover:border-[#F5B94C] transition-all duration-300 flex items-center justify-center p-2"
              >
                <div className="w-full h-full relative flex items-center justify-center">
                  <img
                    src={img}
                    alt={`Ambedkar Academy Review ${(idx % 10) + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover/card:scale-[1.02] transition-transform duration-500 rounded-lg"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-md border border-[#F5B94C]/50 text-[#FFD66E] text-[11px] font-black uppercase tracking-wider shadow-md z-10">
                    Review #{ (idx % 10) + 1 }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
