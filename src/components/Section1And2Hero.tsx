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
          <span>JOIN NOW — ₹99</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <p className="text-xs text-[#BDBDBD]/75 max-w-md mx-auto">
          Instant Enrollment Access • Cash Prize Model Exam Eligibility
        </p>
      </div>



    </section>
  );
};
