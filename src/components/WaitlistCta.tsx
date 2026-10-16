import React, { useState } from 'react';

interface WaitlistCtaProps {
  onOpenWaitlist: (initialEmail?: string) => void;
}

export const WaitlistCta: React.FC<WaitlistCtaProps> = ({ onOpenWaitlist }) => {
  const [quickEmail, setQuickEmail] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenWaitlist(quickEmail.trim() || undefined);
  };

  return (
    <section
      className="py-20 md:py-28 bg-[#121411] dark:bg-[#070806] text-white relative overflow-hidden transition-colors"
      id="access"
    >
      {/* Glow Ambient Circle */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-green/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold font-sora text-white leading-tight mb-8">
          Join the waitlist now
        </h2>

        {/* Quick Email Trigger Form */}
        <form
          onSubmit={handleQuickSubmit}
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            value={quickEmail}
            onChange={(e) => setQuickEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-4 rounded-xl bg-[#222222] dark:bg-dark-card border border-stone-700/80 dark:border-dark-border text-white placeholder-stone-400 dark:placeholder-stone-500 focus:outline-none focus:border-brand-green text-sm sm:text-base font-normal transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-4 rounded-xl bg-brand-terra hover:bg-brand-terra-dark text-white font-semibold text-sm sm:text-base whitespace-nowrap active:scale-[0.98] transition-all"
          >
            Get early access
          </button>
        </form>

        <p className="text-xs text-stone-400 dark:text-dark-muted mt-4 font-mono">
          No spam. Get notified once levo launches
        </p>
      </div>
    </section>
  );
};
