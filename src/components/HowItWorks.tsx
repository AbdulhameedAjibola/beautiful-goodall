import React from 'react';
import { howItWorksSteps } from '../data/levoData';

export const HowItWorks: React.FC = () => {
  return (
    <section
      className="py-20 md:py-28 bg-white dark:bg-dark-card border-y border-brand-border dark:border-dark-border transition-colors"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-dark-text">
            How Levo works in your day
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-surface dark:bg-dark-elevated border border-brand-border/80 dark:border-dark-border">
            <div className="w-10 h-10 rounded-full bg-brand-dark dark:bg-brand-green dark:text-black text-white font-mono font-bold text-sm flex items-center justify-center mb-6">
              01
            </div>

            {/* Graphic Card Mini-UI: Profile Setup */}
            <div className="w-full bg-white dark:bg-dark-card rounded-xl border border-brand-border dark:border-dark-border p-4 mb-6 text-left">
              <span className="text-[11px] font-mono text-brand-muted dark:text-dark-muted uppercase">
                Profile Setup
              </span>
              <p className="text-xs font-bold text-brand-dark dark:text-dark-text mt-1">
                Goal: Lean Muscle + Vitality
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                <span className="text-[10px] bg-brand-subtle dark:bg-dark-highest px-2 py-0.5 rounded text-brand-dark dark:text-dark-text font-medium">
                  Lagos Lifestyle
                </span>
                <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/60 text-brand-green px-2 py-0.5 rounded font-medium border border-emerald-500/20">
                  Lactose Intolerant
                </span>
                <span className="text-[10px] bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-brand-gold px-2 py-0.5 rounded font-medium border border-amber-500/20">
                  Low Sodium
                </span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-brand-dark dark:text-dark-text mb-2 font-sora">
              {howItWorksSteps[0].title}
            </h3>
            <p className="text-sm text-brand-muted dark:text-dark-muted leading-relaxed">
              {howItWorksSteps[0].description}
            </p>
          </div>

          {/* Step 2: Meal Logging with Food/Dish Visual Element */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-surface dark:bg-dark-elevated border border-brand-border/80 dark:border-dark-border">
            <div className="w-10 h-10 rounded-full bg-brand-dark dark:bg-brand-green dark:text-black text-white font-mono font-bold text-sm flex items-center justify-center mb-6">
              02
            </div>

            {/* Graphic Card Mini-UI: Meal Logging */}
            <div className="w-full bg-white dark:bg-dark-card rounded-xl border border-brand-border dark:border-dark-border p-4 mb-6 text-left">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-mono text-brand-terra uppercase font-semibold">
                  Quick Meal Log
                </span>
                <span className="text-[10px] font-mono text-brand-green bg-brand-green/10 px-1.5 py-0.5 rounded font-semibold">
                  Logged ✓
                </span>
              </div>
              <p className="text-xs font-bold text-brand-dark dark:text-dark-text">
                Goat Meat Peppersoup & Boiled Plantain
              </p>
              <p className="text-[10px] text-brand-muted dark:text-dark-muted mt-0.5">
                1 bowl (350ml) + 2 ripe plantain fingers
              </p>
              <div className="flex items-center justify-between text-[11px] font-mono text-brand-muted dark:text-dark-muted mt-2 pt-2 border-t border-stone-100 dark:border-dark-border">
                <span className="font-semibold text-brand-dark dark:text-dark-text">490 kcal</span>
                <span className="text-brand-green font-semibold">42g Protein</span>
                <span className="text-brand-terra font-semibold">14g Fats</span>
              </div>
            </div>

            <h3 className="text-lg font-bold text-brand-dark dark:text-dark-text mb-2 font-sora">
              {howItWorksSteps[1].title}
            </h3>
            <p className="text-sm text-brand-muted dark:text-dark-muted leading-relaxed">
              {howItWorksSteps[1].description}
            </p>
          </div>

          {/* Step 3: Streak & Progress */}
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-surface dark:bg-dark-elevated border border-brand-border/80 dark:border-dark-border">
            <div className="w-10 h-10 rounded-full bg-brand-dark dark:bg-brand-green dark:text-black text-white font-mono font-bold text-sm flex items-center justify-center mb-6">
              03
            </div>

            {/* Graphic Card Mini-UI: 14-Day Streak */}
            <div className="w-full bg-white dark:bg-dark-card rounded-xl border border-brand-border dark:border-dark-border p-4 mb-6 text-left">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-mono text-brand-muted dark:text-dark-muted uppercase">
                  14-Day Streak
                </span>
                <span className="text-xs font-bold text-brand-green font-mono">100%</span>
              </div>
              <div className="flex gap-1">
                <div className="h-6 flex-1 rounded bg-brand-green" />
                <div className="h-6 flex-1 rounded bg-brand-green" />
                <div className="h-6 flex-1 rounded bg-brand-green" />
                <div className="h-6 flex-1 rounded bg-brand-green" />
                <div className="h-6 flex-1 rounded bg-brand-green" />
                <div className="h-6 flex-1 rounded bg-brand-green" />
                <div className="h-6 flex-1 rounded bg-brand-green/80" />
              </div>
              <p className="text-[10px] text-brand-muted dark:text-dark-muted mt-2 font-medium">
                Down 1.8kg • Muscle definition up
              </p>
            </div>

            <h3 className="text-lg font-bold text-brand-dark dark:text-dark-text mb-2 font-sora">
              {howItWorksSteps[2].title}
            </h3>
            <p className="text-sm text-brand-muted dark:text-dark-muted leading-relaxed">
              {howItWorksSteps[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
