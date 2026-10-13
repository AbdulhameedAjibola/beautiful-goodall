import React from 'react';
import { roadmapItems } from '../data/levoData';

export const Roadmap: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FBFBFA] dark:bg-dark-bg transition-colors" id="coming-soon">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-left max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-mono">
            The Levo Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-dark-text mt-2 mb-4 leading-tight">
            What's next for Levo
          </h2>
          <p className="text-base sm:text-lg text-brand-muted dark:text-dark-muted">
            We are building the complete wellness ecosystem for the continent. Here is what our engineering team is rolling out next.
          </p>
        </div>

        {/* 6 Roadmap Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-dark-card p-7 rounded-2xl border border-brand-border dark:border-dark-border shadow-subtle dark:shadow-dark-subtle flex flex-col justify-between text-left hover:border-brand-gold/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-dark-highest flex items-center justify-center text-brand-dark dark:text-dark-text font-mono text-xs font-bold">
                    {item.step}
                  </span>
                  <span className="badge-pill inline-flex items-center text-[11px] font-bold text-brand-gold bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded-full border border-amber-200/60 dark:border-brand-gold/30">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-dark dark:text-dark-text mb-2 font-sora">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-muted dark:text-dark-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-brand-border/60 dark:border-dark-border text-[11px] text-brand-muted dark:text-dark-muted font-mono">
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
