import React from 'react';
import { communityData } from '../data/levoData';

export const Community: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FBFBFA] dark:bg-dark-bg transition-colors" id="community">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-left">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-dark-text mb-10 leading-tight">
          {communityData.title}
        </h2>

        {/* Feature Blocks: Accountability Partners & Squad Challenges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-brand-border dark:border-dark-border">
            <div className="w-10 h-10 rounded-xl bg-brand-green/10 dark:bg-brand-green/20 text-brand-green flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-base text-brand-dark dark:text-dark-text mb-2">
              {communityData.cards[0].title}
            </h3>
            <p className="text-sm text-brand-muted dark:text-dark-muted leading-relaxed">
              {communityData.cards[0].description}
            </p>
          </div>

          <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-brand-border dark:border-dark-border">
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 dark:bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="font-sora font-bold text-base text-brand-dark dark:text-dark-text mb-2">
              {communityData.cards[1].title}
            </h3>
            <p className="text-sm text-brand-muted dark:text-dark-muted leading-relaxed">
              {communityData.cards[1].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
