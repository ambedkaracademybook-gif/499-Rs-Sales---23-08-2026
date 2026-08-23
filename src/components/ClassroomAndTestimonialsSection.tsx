import React, { useState } from 'react';
import { Users, Star, Award, CheckCircle2, BookOpen, GraduationCap, Trophy, MapPin, Sparkles, Calendar, Clock, AlertCircle, ArrowRight, X, ZoomIn } from 'lucide-react';
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
  const [selectedReviewImg, setSelectedReviewImg] = useState<string | null>(null);

  const reviewImages = [
    review1, review2, review3, review4, review5,
    review6, review7, review8, review9, review10
  ];

  return (
    <section id="classroom-testimonials-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#F5B94C]/40 text-[#FFD66E] font-bold text-xs uppercase tracking-wider mb-3 shadow-md mx-auto">
          <GraduationCap className="w-4 h-4 text-[#F5B94C]" />
          AMBEDKAR ACADEMY SESSIONS &amp; REVIEWS
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3 text-center">
          Inside Our <span className="gold-gradient-text">Classrooms &amp; Seminar Halls</span>
        </h2>
        <p className="text-xs sm:text-base text-[#BDBDBD] max-w-2xl mx-auto text-center px-2">
          Over 5,000+ aspirants have experienced our disciplined environment, structured test papers, and mentor guidance across Tamil Nadu.
        </p>
      </div>

      {/* Classroom & Seminar Hall Images Grid with Prominent Mobile Visibility */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
        
        {/* Card 1: Ambedkar Academy Classroom Session */}
        <div className="bg-[#161616] border border-[#F5B94C]/40 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.8)] group relative">
          <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#F5B94C] text-[#111111] font-black text-[11px] uppercase tracking-wide w-fit mb-1.5">
                <BookOpen className="w-3.5 h-3.5" /> Direct Classroom Batch
              </span>
              <p className="text-sm sm:text-base font-bold text-white leading-snug">
                Intensive Daily Syllabus Coverage &amp; Subject Masterclasses
              </p>
            </div>
          </div>
          
          <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#BDBDBD] bg-[#121212] text-center sm:text-left">
            <span className="flex items-center gap-1.5 text-white font-semibold justify-center">
              <CheckCircle2 className="w-4 h-4 text-[#F5B94C]" /> Real Exam Hall Atmosphere
            </span>
            <span className="flex items-center gap-1 text-[#F5B94C] justify-center">
              <MapPin className="w-3.5 h-3.5" /> T. Nagar Campus
            </span>
          </div>
        </div>

        {/* Card 2: Ambedkar Academy State Blueprint Seminar */}
        <div className="bg-[#161616] border border-[#F5B94C]/40 rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.8)] group relative">
          <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FFD66E] text-[#111111] font-black text-[11px] uppercase tracking-wide w-fit mb-1.5">
                <Trophy className="w-3.5 h-3.5" /> State-Level Blueprint Workshop
              </span>
              <p className="text-sm sm:text-base font-bold text-white leading-snug">
                Strategy Sessions by Bureaucrats, Officers &amp; Senior Faculty
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#BDBDBD] bg-[#121212] text-center sm:text-left">
            <span className="flex items-center gap-1.5 text-white font-semibold justify-center">
              <CheckCircle2 className="w-4 h-4 text-[#FFD66E]" /> 1,000+ Aspirant Participation
            </span>
            <span className="flex items-center gap-1 text-[#FFD66E] justify-center">
              <MapPin className="w-3.5 h-3.5" /> Chennai Auditorium
            </span>
          </div>
        </div>
      </div>

      {/* Real Student Reviews & Aspirant Experiences Marquee */}
      <div>
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 mb-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Aspirant <span className="gold-gradient-text">Experiences &amp; Reviews</span>
            </h3>
            <p className="text-xs text-[#BDBDBD] mt-0.5">
              Honest feedback across Tamil Nadu • Hover to pause marquee • Click any review to zoom preview
            </p>
          </div>
          <div className="inline-flex items-center gap-1 text-[#F5B94C] font-bold text-xs bg-[#1A1A1A] px-3 py-1.5 rounded-full border border-[#F5B94C]/30 shadow-md">
            <Star className="w-4 h-4 fill-current" />
            <span>4.9 / 5 Rated by 200+ Reviews</span>
          </div>
        </div>

        {/* 10 Review Images Smooth Auto-Scrolling Marquee (Pauses on Hover & Click to Zoom) */}
        <div className="relative w-full overflow-hidden py-4 group">
          <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max animate-scroll-left group-hover:[animation-play-state:paused] gap-5 items-center cursor-pointer">
            {[...reviewImages, ...reviewImages].map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedReviewImg(img)}
                className="w-[280px] sm:w-[320px] h-[360px] sm:h-[400px] shrink-0 rounded-2xl overflow-hidden border border-[#F5B94C]/40 bg-[#121212] shadow-[0_4px_25px_rgba(0,0,0,0.8)] group/card hover:border-[#F5B94C] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center p-2 relative"
              >
                <div className="w-full h-full relative flex items-center justify-center">
                  <img
                    src={img}
                    alt={`Ambedkar Academy Review ${(idx % 10) + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-lg"
                  />
                  <div className="absolute top-3 left-3 bg-black/85 backdrop-blur-md px-3 py-1 rounded-md border border-[#F5B94C]/50 text-[#FFD66E] text-[11px] font-black uppercase tracking-wider shadow-md z-10 flex items-center gap-1.5">
                    <span>Review #{ (idx % 10) + 1 }</span>
                    <ZoomIn className="w-3.5 h-3.5 text-[#F5B94C]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Review Image Zoom Modal */}
      {selectedReviewImg && (
        <div 
          onClick={() => setSelectedReviewImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-[#161616] border-2 border-[#F5B94C] rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <span className="text-sm font-black text-[#FFD66E] uppercase tracking-wider flex items-center gap-2">
                <ZoomIn className="w-4 h-4 text-[#F5B94C]" /> Aspirant Review Zoom Preview
              </span>
              <button
                onClick={() => setSelectedReviewImg(null)}
                className="w-9 h-9 rounded-full bg-[#222] hover:bg-[#333] border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-[70vh] bg-black/60 rounded-2xl overflow-hidden flex items-center justify-center p-2">
              <img
                src={selectedReviewImg}
                alt="Zoomed Review Preview"
                referrerPolicy="no-referrer"
                className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
              />
            </div>

            <p className="text-xs text-[#BDBDBD] text-center mt-3">
              Click anywhere outside or the close button to exit zoom view.
            </p>
          </div>
        </div>
      )}

    </section>
  );
};

