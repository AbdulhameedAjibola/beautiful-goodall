import React from 'react';
import { keyFeatures } from '../data/levoData';

export const Features: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FBFBFA] dark:bg-dark-bg transition-colors" id="features">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-dark-text leading-tight">
            What Levo brings to you
          </h2>
        </div>

        {/* 4-Card Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {keyFeatures.map((feature) => (
            <div
              key={feature.id}
              className="bg-white dark:bg-dark-card p-7 sm:p-8 rounded-2xl border border-brand-border dark:border-dark-border transition-all duration-200 text-left"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  feature.accent === 'green'
                    ? 'bg-brand-green/10 dark:bg-brand-green/20 text-brand-green'
                    : feature.accent === 'terra'
                    ? 'bg-brand-terra/10 dark:bg-brand-terra/20 text-brand-terra'
                    : feature.accent === 'gold'
                    ? 'bg-brand-gold/10 dark:bg-brand-gold/20 text-brand-gold'
                    : 'bg-stone-100 dark:bg-dark-elevated text-brand-dark dark:text-dark-text'
                }`}
              >
                {feature.iconType === 'database' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                )}
                {feature.iconType === 'log' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
                {feature.iconType === 'recipes' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                )}
                {feature.iconType === 'analytics' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                )}
              </div>

              <h3 className="text-xl font-bold text-brand-dark dark:text-dark-text mb-2.5 font-sora">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-brand-muted dark:text-dark-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
