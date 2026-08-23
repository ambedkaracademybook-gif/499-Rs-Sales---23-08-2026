import React, { useState } from 'react';
import { Trophy, ArrowRight, CheckCircle2, AlertTriangle, Volume2, VolumeX, Sparkles, Calendar, Clock, MapPin, AlertCircle } from 'lucide-react';

interface Props {
  onOpenRegister: () => void;
}

export const Section1And2Hero: React.FC<Props> = ({ onOpenRegister }) => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section id="hero-section" className="relative pt-6 sm:pt-10 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
      
      {/* Top Hook Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#F5B94C]/40 text-[#FFD66E] font-bold text-xs sm:text-sm tracking-wide uppercase mb-4 shadow-[0_0_20px_rgba(245,185,76,0.15)] whitespace-nowrap">
        <Trophy className="w-4 h-4 text-[#F5B94C] shrink-0" />
        <span>TNPSC Cash Prize Model Exam</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#F5B94C] animate-pulse"></span>
      </div>

      {/* Main H1 Banner with 1 Lakh Cash Prize */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.15] mb-3">
        WIN <span className="gold-gradient-text">₹1,00,000 CASH PRIZE</span> IN TNPSC MODEL EXAM
      </h1>

      {/* Single-line Subtitle / Hook */}
      <p className="text-sm sm:text-lg md:text-xl font-semibold text-[#BDBDBD] max-w-2xl mx-auto mb-6">
        Your Hard Work &amp; Preparation Deserve Recognition.
      </p>

      {/* PROMINENT RED ATTENTION BOX - CLEAN, PUNCHY, MOBILE-FRIENDLY */}
      <div className="relative mb-5 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#2A0808] via-[#450A0A] to-[#2A0808] border border-red-500/90 shadow-[0_0_20px_rgba(239,68,68,0.35)] flex items-center justify-center gap-2 text-center">
        <AlertTriangle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-red-400 shrink-0 animate-bounce" />
        <p className="text-xs sm:text-sm md:text-base font-black text-white uppercase tracking-tight leading-tight">
          This 5 minutes will unlock <span className="text-[#FFD66E]">₹1 Lakh Cash Prize</span> challenge — <span className="text-red-400 font-black underline decoration-red-400 underline-offset-2">Don't Skip!</span>
        </p>
      </div>

      {/* CLEAN VIDEO CONTAINER - AUTOPLAYING WITH SOUND TOGGLE & ZERO DISTRACTION CONTROLS */}
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#161616] border-2 border-[#F5B94C]/60 shadow-[0_0_45px_rgba(245,185,76,0.3)] mb-6">
        <div className="relative w-full h-full bg-[#111111] overflow-hidden">
          <iframe
            key={isMuted ? 'muted' : 'unmuted'}
            src={`https://fast.wistia.net/embed/iframe/b3ubba1b09?autoPlay=true&muted=${isMuted ? 'true' : 'false'}&controlsVisibleOnLoad=false&playbar=false&playButton=false&smallPlayButton=false&wistiaLogo=false&settingsControl=false&fullscreenButton=false&volumeControl=false&qualityControl=false&playbackRateControl=false&endVideoBehavior=loop&plugin%5Bcaptions-v1%5D%5Bon%5D=false&plugin%5Bcaptions-v1%5D%5Bsubtitles%5D=false&plugin%5Bchapters%5D%5Bon%5D=false`}
            title="Ambedkar Academy TNPSC Video Player"
            allow="autoplay; fullscreen"
            className="w-full h-full border-0 absolute inset-0 pointer-events-auto object-cover"
          />

          {/* Interactive Shield / Barrier to prevent distracting third-party popups */}
          <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-auto bg-transparent z-20" />

          {/* Simple Floating Sound / Unmute Overlay */}
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30">
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/90 hover:bg-black text-white text-xs sm:text-sm font-bold border border-[#F5B94C]/60 backdrop-blur-md transition-all shadow-[0_0_20px_rgba(0,0,0,0.8)] cursor-pointer hover:scale-105"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-red-400 animate-pulse" />
                  <span className="text-red-300 whitespace-nowrap">Tap to Unmute Audio</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-[#F5B94C]" />
                  <span className="text-[#FFD66E] whitespace-nowrap">Sound On</span>
                </>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* CTA DIRECTLY BELOW VIDEO */}
      <div className="flex flex-col items-center justify-center gap-3 mb-8">
        <button
          id="hero-main-cta"
          onClick={onOpenRegister}
          className="btn-gold-cta w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4 text-[#0A0D14] text-base sm:text-lg font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl whitespace-nowrap"
        >
          <span>JOIN NOW — ₹499</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-xs text-[#BDBDBD]/75 max-w-md mx-auto">
          Instant Enrollment Access • Cash Prize Model Exam Eligibility
        </p>
      </div>

      {/* MANDATORY VENUE, DATE & TIME DETAILS CARD DIRECTLY BELOW VIDEO */}
      <div className="mb-10 bg-gradient-to-br from-[#1A1A1A] to-[#121212] border-2 border-[#F5B94C] rounded-3xl p-6 sm:p-8 shadow-[0_0_40px_rgba(245,185,76,0.15)] relative overflow-hidden text-left">
        <div className="absolute top-0 right-0 transform translate-x-6 -translate-y-6 w-48 h-48 bg-[#F5B94C]/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFD66E]/15 border border-[#F5B94C]/40 text-[#FFD66E] text-xs font-black uppercase tracking-wider mb-2">
              <AlertCircle className="w-4 h-4 text-[#F5B94C] animate-pulse" /> 100% Offline Exam Event — Not Online
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
              TNPSC 2026 Model Offline Examination
            </h3>
            <p className="text-xs sm:text-sm text-[#BDBDBD] mt-1">
              This complete event is happening strictly offline at designated TNPSC offline venues. Book your physical desk and get your hall ticket.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-[#F5B94C]/20">
          
          {/* Date Card */}
          <div className="bg-[#111111] border border-[#F5B94C]/30 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5B94C]/15 border border-[#F5B94C]/40 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-[#F5B94C]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#F5B94C] uppercase tracking-wider block mb-0.5">Exam Date</span>
              <h4 className="text-base font-extrabold text-white">September 21, 2026</h4>
              <p className="text-xs text-[#BDBDBD] mt-0.5">Reporting time: 08:30 AM</p>
            </div>
          </div>

          {/* Time Card */}
          <div className="bg-[#111111] border border-[#F5B94C]/30 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5B94C]/15 border border-[#F5B94C]/40 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-[#F5B94C]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#F5B94C] uppercase tracking-wider block mb-0.5">Timings</span>
              <h4 className="text-base font-extrabold text-white">9:00 AM to 1:00 PM</h4>
              <p className="text-xs text-[#BDBDBD] mt-0.5">Full Model Examination Duration</p>
            </div>
          </div>

          {/* Venue Card */}
          <div className="bg-[#111111] border border-[#F5B94C]/30 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5B94C]/15 border border-[#F5B94C]/40 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-[#F5B94C]" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#F5B94C] uppercase tracking-wider block mb-0.5">Exam Venue Area</span>
              <h4 className="text-base font-extrabold text-white">Ambedkar Academy Main Hall</h4>
              <p className="text-xs text-[#BDBDBD] mt-0.5">T. Nagar, Chennai • District Examination Centers across TN</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
