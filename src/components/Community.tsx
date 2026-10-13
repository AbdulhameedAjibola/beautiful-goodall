import React from 'react';
import { communityData } from '../data/levoData';

export const Community: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FBFBFA] dark:bg-dark-bg transition-colors" id="community">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Phone Mockup of Creator Community Page */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-[340px] bg-black dark:bg-[#080907] p-3.5 rounded-[44px] shadow-phone border border-black/80 dark:border-white/10">
              <div className="bg-white dark:bg-[#121411] rounded-[32px] overflow-hidden text-left border border-stone-100 dark:border-dark-border pb-4">
                {/* Creator Hero Banner in App */}
                <div className="relative bg-gradient-to-r from-stone-900 to-stone-800 dark:from-[#181b15] dark:to-[#22281e] p-5 text-white border-b dark:border-dark-border">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-green border-2 border-white dark:border-dark-border flex items-center justify-center font-bold text-sm text-black flex-shrink-0">
                      {communityData.coach.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-sora font-bold text-sm text-white">
                          {communityData.coach.name}
                        </h4>
                        <svg className="w-3.5 h-3.5 text-brand-green" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          />
                        </svg>
                      </div>
                      <p className="text-[11px] text-stone-300 dark:text-stone-400">
                        {communityData.coach.niche}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono border-t border-white/10 pt-2">
                    <span>{communityData.coach.members}</span>
                    <span className="bg-brand-green text-black font-semibold text-[10px] px-3 py-1 rounded-full">
                      Joined
                    </span>
                  </div>
                </div>

                {/* Feed Content inside Mockup */}
                <div className="p-4 space-y-3">
                  <div className="bg-[#FBFBFA] dark:bg-[#181b16] p-3 rounded-xl border border-brand-border dark:border-dark-border">
                    <span className="text-[10px] font-mono text-brand-terra font-bold uppercase">
                      Coach's Meal of the Day
                    </span>
                    <p className="text-xs font-semibold text-brand-dark dark:text-dark-text mt-0.5">
                      "{communityData.coach.mealTitle}"
                    </p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-200/50 dark:border-dark-border text-[10px] text-brand-muted dark:text-dark-muted">
                      <span>{communityData.coach.sharedTo}</span>
                      <span className="text-brand-green font-semibold">Log This Meal →</span>
                    </div>
                  </div>

                  {/* Squad Leaderboard Mini-Strip */}
                  <div className="bg-white dark:bg-[#181b16] p-3 rounded-xl border border-brand-border dark:border-dark-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand-dark dark:text-dark-text">
                        {communityData.squad.name}
                      </span>
                      <span className="text-[10px] font-mono text-brand-gold font-bold">
                        {communityData.squad.rank}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {communityData.squad.members.map((member) => (
                        <div key={member.name} className="flex items-center justify-between text-xs">
                          <span className="text-brand-dark dark:text-dark-text font-medium">
                            {member.name}
                          </span>
                          <span
                            className={`font-mono text-[11px] ${
                              member.highlight
                                ? 'text-brand-green font-bold'
                                : 'text-brand-muted dark:text-dark-muted'
                            }`}
                          >
                            {member.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hype micro bar */}
                  <div className="bg-amber-50/80 dark:bg-amber-950/40 border border-amber-200/60 dark:border-brand-gold/30 p-2.5 rounded-xl text-center">
                    <p className="text-[11px] text-amber-900 dark:text-brand-gold font-medium">
                      {communityData.squad.hypeText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Community Copy & Accountability Partners */}
          <div className="lg:col-span-7 flex flex-col text-left order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green font-mono">
              {communityData.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-dark-text mt-2 mb-5 leading-tight">
              {communityData.title}
            </h2>
            <p className="text-base sm:text-lg text-brand-muted dark:text-dark-muted leading-relaxed mb-8">
              {communityData.description}
            </p>

            {/* Feature Blocks: Accountability Partners & Squad Challenges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-subtle dark:shadow-dark-subtle">
                <div className="w-9 h-9 rounded-lg bg-brand-green/10 dark:bg-brand-green/20 text-brand-green flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-sora font-bold text-sm text-brand-dark dark:text-dark-text mb-1">
                  {communityData.cards[0].title}
                </h4>
                <p className="text-xs text-brand-muted dark:text-dark-muted leading-relaxed">
                  {communityData.cards[0].description}
                </p>
              </div>

              <div className="bg-white dark:bg-dark-card p-5 rounded-2xl border border-brand-border dark:border-dark-border shadow-subtle dark:shadow-dark-subtle">
                <div className="w-9 h-9 rounded-lg bg-brand-gold/10 dark:bg-brand-gold/20 text-brand-gold flex items-center justify-center mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h4 className="font-sora font-bold text-sm text-brand-dark dark:text-dark-text mb-1">
                  {communityData.cards[1].title}
                </h4>
                <p className="text-xs text-brand-muted dark:text-dark-muted leading-relaxed">
                  {communityData.cards[1].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
