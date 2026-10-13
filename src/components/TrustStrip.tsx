import React from 'react';
import { trustPoints } from '../data/levoData';

export const TrustStrip: React.FC = () => {
  return (
    <section className="border-y border-brand-border dark:border-dark-border bg-white dark:bg-dark-card py-6 transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-brand-border/70 dark:divide-dark-border">
          {trustPoints.map((point, index) => (
            <div
              key={point.id}
              className={`flex items-center gap-3.5 ${
                index === 0
                  ? 'pt-0 px-0'
                  : 'pt-4 sm:pt-0 sm:px-4'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-xl bg-brand-subtle dark:bg-dark-elevated flex items-center justify-center flex-shrink-0 ${
                  point.iconType === 'food'
                    ? 'text-brand-green'
                    : point.iconType === 'fast'
                    ? 'text-brand-terra'
                    : 'text-brand-gold'
                }`}
              >
                {point.iconType === 'food' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                )}
                {point.iconType === 'fast' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                )}
                {point.iconType === 'algorithm' && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                )}
              </div>
              <div>
                <h3 className="text-sm font-bold text-brand-dark dark:text-dark-text font-sora">
                  {point.title}
                </h3>
                <p className="text-xs text-brand-muted dark:text-dark-muted mt-0.5 leading-snug">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
