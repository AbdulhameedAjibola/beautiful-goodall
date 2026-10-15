import React from 'react';
import { heroData } from '../data/levoData';
import { PhoneMockup } from './PhoneMockup';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  const handleScrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector('#how-it-works');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#FBFBFA] dark:bg-[#0c0e0b] transition-colors">
      {/* Decorative Background Blur Orbs */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-brand-green/10 dark:bg-brand-green/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-terra/10 dark:bg-brand-terra/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-brand-dark dark:text-dark-text leading-[1.12] tracking-tight mb-6">
              {heroData.headlineLead}
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-brand-muted dark:text-dark-muted leading-relaxed max-w-2xl mb-8 font-normal">
              {heroData.subheading}
            </p>

            {/* Dual Action CTAs */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onOpenWaitlist}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-brand-terra text-white font-semibold text-base hover:brightness-110 active:scale-[0.98] transition-all"
              >
                {heroData.primaryCtaText}
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href="#how-it-works"
                onClick={handleScrollToHowItWorks}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl bg-white dark:bg-dark-card border border-brand-border dark:border-dark-border text-brand-dark dark:text-dark-text font-semibold text-base hover:bg-brand-subtle dark:hover:bg-dark-elevated transition-all"
              >
                {heroData.secondaryCtaText}
              </a>
            </div>

            {/* Social Proof Pill */}
            <div className="flex items-center gap-4 text-xs font-medium text-brand-muted dark:text-dark-muted pt-2 border-t border-brand-border/70 dark:border-dark-border w-full sm:w-auto">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border-2 border-white dark:border-dark-card flex items-center justify-center text-[10px] font-bold text-emerald-800 dark:text-emerald-300">
                  KO
                </div>
                <div className="w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-950/80 border-2 border-white dark:border-dark-card flex items-center justify-center text-[10px] font-bold text-amber-800 dark:text-amber-300">
                  TA
                </div>
                <div className="w-7 h-7 rounded-full bg-orange-100 dark:bg-orange-950/80 border-2 border-white dark:border-dark-card flex items-center justify-center text-[10px] font-bold text-orange-800 dark:text-orange-300">
                  CE
                </div>
              </div>
              <p>
                Over <strong className="text-brand-dark dark:text-dark-text font-semibold">{heroData.socialProofCount}</strong> waiting across {heroData.socialProofCities}.
              </p>
            </div>
          </div>

          {/* Right Hero Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
