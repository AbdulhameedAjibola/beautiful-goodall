import React from 'react';
import { macroAccuracyData } from '../data/levoData';

export const MacroAccuracy: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-dark-card border-y border-brand-border dark:border-dark-border transition-colors">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="bg-[#FBFBFA] dark:bg-dark-elevated border border-brand-border dark:border-dark-border rounded-3xl p-8 sm:p-12 shadow-subtle dark:shadow-dark-subtle">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Copy */}
            <div className="md:col-span-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-500/30 text-brand-green text-xs font-semibold mb-4 font-mono">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  />
                </svg>
                {macroAccuracyData.badge}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark dark:text-dark-text mb-4 leading-tight font-sora">
                {macroAccuracyData.title}
              </h2>

              <p className="text-sm sm:text-base text-brand-muted dark:text-dark-muted leading-relaxed">
                {macroAccuracyData.description}
              </p>
            </div>

            {/* Right: Accuracy Verification Pillars */}
            <div className="md:col-span-6 bg-white dark:bg-dark-card p-6 rounded-2xl border border-brand-border dark:border-dark-border shadow-subtle dark:shadow-dark-subtle text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark dark:text-dark-text font-mono mb-4">
                Verified Accuracy Standards:
              </h4>

              <ul className="space-y-4">
                {macroAccuracyData.points.map((point) => (
                  <li key={point.title} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green/15 dark:bg-brand-green/20 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-brand-dark dark:text-dark-text font-sora">
                        {point.title}
                      </h5>
                      <p className="text-xs text-brand-muted dark:text-dark-muted mt-0.5 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
