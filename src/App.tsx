import React, { useState } from 'react';
import { Section1And2Hero } from './components/Section1And2Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { OfferDetailsSection } from './components/OfferDetailsSection';
import { ChooseProgrammeSection } from './components/ChooseProgrammeSection';
import { CashPrizeSection } from './components/CashPrizeSection';
import { RecognitionMattersSection } from './components/RecognitionMattersSection';
import { MeetYourSpeakersSection } from './components/MeetYourSpeakersSection';
import { FounderVisionSection } from './components/FounderVisionSection';
import { ClassroomAndTestimonialsSection } from './components/ClassroomAndTestimonialsSection';
import { WhoShouldJoinSection } from './components/WhoShouldJoinSection';
import { WhatMakesDifferentSection } from './components/WhatMakesDifferentSection';
import { ExamTargetsSection } from './components/ExamTargetsSection';
import { AfterJoinJourneySection } from './components/AfterJoinJourneySection';
import { TrustSocialProofSection } from './components/TrustSocialProofSection';
import { The499OfferSection } from './components/The499OfferSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
import { StickyBottomCTA } from './components/StickyBottomCTA';
import { StickyWhatsAppButton } from './components/StickyWhatsAppButton';
import { RegistrationModal } from './components/RegistrationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenRegister = () => {
    window.open('https://www.ambedkaracademy.in/courses/648764', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-[#FFFFFF] bg-ambient-glow relative pb-28 selection:bg-[#F5B94C] selection:text-[#111111]">
      
      {/* SECTION 1 & 2: TOP HOOK + HERO VIDEO ABOVE THE FOLD */}
      <Section1And2Hero onOpenRegister={handleOpenRegister} />

      {/* SECTION 3: THE PROBLEM */}
      <ProblemSection />

      {/* SECTION 4: THE SOLUTION */}
      <SolutionSection />

      {/* SECTION 5: WHAT YOU GET */}
      <OfferDetailsSection onOpenRegister={handleOpenRegister} />

      {/* SECTION 5.5: CHOOSE YOUR PROGRAMME (OFFLINE, ONLINE, TEST SERIES) */}
      <ChooseProgrammeSection onOpenRegister={handleOpenRegister} />

      {/* SECTION 6: CASH PRIZE MODEL EXAM WITH 1 LAKH GRAPHIC */}
      <CashPrizeSection onOpenRegister={handleOpenRegister} />

      {/* SECTION 7: WHY RECOGNITION MATTERS */}
      <RecognitionMattersSection />

      {/* WORKSHOP HOSTS & MEET YOUR SPEAKERS SECTION (5 Mentors + Blueprint Card) */}
      <MeetYourSpeakersSection onOpenRegister={handleOpenRegister} />

      {/* SECTION 8: FOUNDER VISION */}
      <FounderVisionSection />

      {/* CLASSROOM SESSIONS WITH STUDENTS & TESTIMONIALS */}
      <ClassroomAndTestimonialsSection onOpenRegister={handleOpenRegister} />

      {/* SECTION 9: WHO SHOULD JOIN? */}
      <WhoShouldJoinSection />

      {/* SECTION 10: WHAT MAKES THIS DIFFERENT? */}
      <WhatMakesDifferentSection />

      {/* SECTION 11: TNPSC TARGET */}
      <ExamTargetsSection />

      {/* SECTION 12: WHAT HAPPENS AFTER YOU JOIN? */}
      <AfterJoinJourneySection />

      {/* SECTION 13: TRUST / SOCIAL PROOF */}
      <TrustSocialProofSection />

      {/* SECTION 14: THE COMMITMENT OFFER */}
      <The499OfferSection onOpenRegister={handleOpenRegister} />

      {/* SECTION 15: FAQ */}
      <FAQSection />

      {/* SECTION 16: FINAL EMOTIONAL CTA */}
      <FinalCTASection onOpenRegister={handleOpenRegister} />

      {/* SECTION 17: FOOTER */}
      <FooterSection />

      {/* FLOATING WHATSAPP BUTTON (Sitting above sticky CTA) */}
      <StickyWhatsAppButton />

      {/* STICKY MOBILE & DESKTOP FOOTER */}
      <StickyBottomCTA onOpenRegister={handleOpenRegister} />

      {/* REGISTRATION & CHECKOUT MODAL */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

    </div>
  );
}
