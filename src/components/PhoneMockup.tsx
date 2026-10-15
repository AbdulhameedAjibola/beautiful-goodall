import React from 'react';
import { heroData, levoAssets } from '../data/levoData';

export const PhoneMockup: React.FC = () => {
  const { mockupMeal } = heroData;

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
      {/* Decorative Glow Halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 via-brand-terra/10 to-brand-gold/15 dark:from-brand-green/30 dark:to-brand-gold/20 rounded-[44px] filter blur-2xl transform scale-95 pointer-events-none" />

      {/* Phone Shell Frame */}
      <div className="relative bg-black dark:bg-[#080907] p-3.5 rounded-[44px] border border-black/80 dark:border-white/10">
        {/* Dynamic Island */}
        <div className="w-28 h-5 bg-black dark:bg-[#121411] rounded-full mx-auto mb-2 flex items-center justify-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#181818] dark:bg-[#20241e]" />
          <div className="w-2 h-2 rounded-full bg-[#0d2a15]/80" />
        </div>

        {/* Screen Canvas */}
        <div className="bg-white dark:bg-[#121411] rounded-[32px] overflow-hidden p-4 sm:p-5 text-left border border-stone-100 dark:border-dark-border">
          {/* App Bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img
                src={levoAssets.submarkLogo}
                alt="Levo Submark"
                className="w-7 h-7 rounded-lg object-contain"
              />
              <span className="text-xs font-bold font-sora text-brand-dark dark:text-dark-text tracking-tight">
                Today's Fuel
              </span>
            </div>
            <span className="badge-pill text-[10px] bg-brand-subtle dark:bg-dark-elevated text-brand-muted dark:text-dark-muted px-2 py-0.5 rounded-md font-mono">
              1:45 PM
            </span>
          </div>

          {/* Meal Card: Smokey Party Jollof */}
          <div className="bg-[#FBFBFA] dark:bg-[#181b16] rounded-2xl p-4 border border-brand-border dark:border-dark-border mb-4">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-brand-terra bg-brand-terra/10 dark:bg-brand-terra/20 px-2 py-0.5 rounded mb-1 font-mono">
                  Lunch Log
                </div>
                <h4 className="font-sora font-bold text-base text-brand-dark dark:text-dark-text leading-tight">
                  {mockupMeal.title}
                </h4>
                <p className="text-xs text-brand-muted dark:text-dark-muted mt-0.5">
                  {mockupMeal.portion}
                </p>
              </div>
              <div className="text-right">
                <span className="font-mono font-bold text-xl text-brand-dark dark:text-dark-text leading-none">
                  {mockupMeal.calories}
                </span>
                <span className="block text-[10px] text-brand-muted dark:text-dark-muted font-medium uppercase font-mono">
                  kcal
                </span>
              </div>
            </div>

            {/* Macro Breakdown Row */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-brand-border/60 dark:border-dark-border">
              {/* Protein */}
              <div className="bg-white dark:bg-[#121411] p-2 rounded-xl border border-stone-200/60 dark:border-dark-border">
                <span className="block text-[10px] text-brand-muted dark:text-dark-muted font-mono font-medium">
                  PROTEIN
                </span>
                <span className="font-mono font-bold text-sm text-brand-green">
                  {mockupMeal.macros.protein.grams}g
                </span>
                <div className="w-full bg-stone-100 dark:bg-dark-card h-1 rounded-full mt-1 overflow-hidden">
                  <div
                    className="bg-brand-green h-full rounded-full transition-all duration-500"
                    style={{ width: `${mockupMeal.macros.protein.pct}%` }}
                  />
                </div>
              </div>

              {/* Carbs */}
              <div className="bg-white dark:bg-[#121411] p-2 rounded-xl border border-stone-200/60 dark:border-dark-border">
                <span className="block text-[10px] text-brand-muted dark:text-dark-muted font-mono font-medium">
                  CARBS
                </span>
                <span className="font-mono font-bold text-sm text-brand-gold">
                  {mockupMeal.macros.carbs.grams}g
                </span>
                <div className="w-full bg-stone-100 dark:bg-dark-card h-1 rounded-full mt-1 overflow-hidden">
                  <div
                    className="bg-brand-gold h-full rounded-full transition-all duration-500"
                    style={{ width: `${mockupMeal.macros.carbs.pct}%` }}
                  />
                </div>
              </div>

              {/* Fats */}
              <div className="bg-white dark:bg-[#121411] p-2 rounded-xl border border-stone-200/60 dark:border-dark-border">
                <span className="block text-[10px] text-brand-muted dark:text-dark-muted font-mono font-medium">
                  FATS
                </span>
                <span className="font-mono font-bold text-sm text-brand-terra">
                  {mockupMeal.macros.fats.grams}g
                </span>
                <div className="w-full bg-stone-100 dark:bg-dark-card h-1 rounded-full mt-1 overflow-hidden">
                  <div
                    className="bg-brand-terra h-full rounded-full transition-all duration-500"
                    style={{ width: `${mockupMeal.macros.fats.pct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Daily Target Tracker */}
          <div className="bg-white dark:bg-[#181b16] rounded-2xl p-3.5 border border-brand-border dark:border-dark-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand-green/10 dark:bg-brand-green/20 flex items-center justify-center text-brand-green font-mono font-bold text-xs">
                {mockupMeal.dailyPct}%
              </div>
              <div>
                <p className="text-xs font-semibold text-brand-dark dark:text-dark-text">
                  Daily Target Progress
                </p>
                <p className="text-[11px] text-brand-muted dark:text-dark-muted font-mono">
                  {mockupMeal.dailyLogged} of {mockupMeal.dailyTotal} kcal logged
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-brand-green bg-emerald-50 dark:bg-emerald-950/60 px-2 py-1 rounded-lg border border-emerald-500/20">
              On Track
            </span>
          </div>

          {/* Trust Badge Pill */}
          <div className="mt-3 text-center">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-brand-muted dark:text-dark-muted bg-stone-100 dark:bg-dark-card px-3 py-1 rounded-full border border-stone-200/70 dark:border-dark-border">
              <svg className="w-3.5 h-3.5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                />
              </svg>
              Verified Nigerian Food Database
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
