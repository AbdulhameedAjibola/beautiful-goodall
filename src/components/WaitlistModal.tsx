import React, { useState, useEffect } from 'react';
import {
  extractReferralFromUrl,
  submitWaitlist,
} from '../services/waitlistService';
import { levoAssets } from '../data/levoData';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessRedirect?: (data: {
    refCode: string;
    name: string;
    email: string;
    position: number;
  }) => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  onSuccessRedirect,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [featureSuggestion, setFeatureSuggestion] = useState('');
  const [hasUrlReferral, setHasUrlReferral] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // All-caps random 6 letters placeholder (e.g. KTZWPM)
  const [randomRefPlaceholder] = useState(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return code;
  });

  // Extract referral code on mount / when opened
  useEffect(() => {
    if (isOpen) {
      const detected = extractReferralFromUrl();
      if (detected) {
        setReferralCode(detected);
        setHasUrlReferral(true);
      }
      setErrorMessage(null);
    }
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsLoading(true);
    setErrorMessage(null);

    const result = await submitWaitlist({
      name: name.trim(),
      email: email.trim(),
      ref_by: referralCode.trim() || undefined,
      insights: featureSuggestion.trim() || undefined,
      insights_data: featureSuggestion.trim() || undefined,
      referralCode: referralCode.trim() || undefined,
      featureSuggestion: featureSuggestion.trim() || undefined,
    });

    setIsLoading(false);

    if (result.success) {
      onClose();
      const userSummary = {
        refCode: result.data?.refCode || '',
        name: name.trim(),
        email: email.trim(),
        position: (result.data?.position as number) || 14,
      };

      if (onSuccessRedirect) {
        onSuccessRedirect(userSummary);
      } else {
        const basePath = window.location.pathname.startsWith('/beautiful-goodall')
          ? '/beautiful-goodall'
          : '';
        window.history.pushState({}, '', `${basePath}/waitlist-success`);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    } else {
      setErrorMessage(result.message);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#161914] rounded-3xl border border-stone-200 dark:border-dark-border p-6 sm:p-8 text-left z-10 transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-stone-100 dark:bg-dark-elevated text-stone-500 dark:text-dark-muted hover:text-stone-800 dark:hover:text-dark-text flex items-center justify-center transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={levoAssets.submarkLogo}
            alt="Levo emblem"
            className="w-8 h-8 rounded-lg object-contain"
          />
          <span className="text-xs font-mono uppercase font-bold text-brand-green tracking-wider">
            Priority Early Access
          </span>
        </div>

        <h3
          id="modal-title"
          className="text-2xl sm:text-3xl font-extrabold font-sora text-brand-dark dark:text-dark-text leading-tight mb-2"
        >
          Join the Levo Explorer Waitlist
        </h3>

        <p className="text-sm text-brand-muted dark:text-dark-muted mb-6 leading-relaxed">
          Be among the first to experience nutrition tracking calibrated for real African dishes. Free to join, early access perks guaranteed.
        </p>

        {/* Error Banner */}
        {errorMessage && (
          <div className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs sm:text-sm font-medium">
            {errorMessage}
          </div>
        )}

        {/* Waitlist Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-brand-dark dark:text-dark-text mb-1.5">
              Full Name <span className="text-brand-terra">*</span>
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Chidi Okafor"
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-dark-card border border-stone-200 dark:border-dark-border text-brand-dark dark:text-dark-text placeholder-stone-400 dark:placeholder-stone-500 text-sm focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-brand-dark dark:text-dark-text mb-1.5">
              Email Address <span className="text-brand-terra">*</span>
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. chidi@example.com"
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-dark-card border border-stone-200 dark:border-dark-border text-brand-dark dark:text-dark-text placeholder-stone-400 dark:placeholder-stone-500 text-sm focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          {/* Referral Code Field */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-mono font-semibold uppercase text-brand-dark dark:text-dark-text">
                Referral Code <span className="text-stone-400 text-[10px] lowercase">(optional)</span>
              </label>
              {hasUrlReferral && (
                <span className="text-[10px] font-mono text-brand-green bg-brand-green/10 px-2 py-0.5 rounded">
                  Detected from invite link
                </span>
              )}
            </div>
            <input
              type="text"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
              placeholder={randomRefPlaceholder}
              disabled={isLoading}
              className="w-full px-4 py-3 rounded-xl bg-stone-50 dark:bg-dark-card border border-stone-200 dark:border-dark-border text-brand-dark dark:text-dark-text placeholder-stone-400 dark:placeholder-stone-500 text-sm font-mono tracking-wider uppercase focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          {/* Feature Suggestions Field (NEW) */}
          <div>
            <label className="block text-xs font-mono font-semibold uppercase text-brand-dark dark:text-dark-text mb-1.5">
              Feature Suggestions <span className="text-stone-400 text-[10px] lowercase">(optional)</span>
            </label>
            <textarea
              rows={2}
              value={featureSuggestion}
              onChange={(e) => setFeatureSuggestion(e.target.value)}
              placeholder="Tell us what features or Nigerian foods you'd love to see in Levo..."
              disabled={isLoading}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-50 dark:bg-dark-card border border-stone-200 dark:border-dark-border text-brand-dark dark:text-dark-text placeholder-stone-400 dark:placeholder-stone-500 text-sm focus:outline-none focus:border-brand-green transition-colors resize-none"
            />
          </div>

          {/* Submit CTA */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 rounded-xl bg-brand-terra hover:bg-brand-terra-dark text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 active:scale-[0.99] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                  </svg>
                  <span>Securing your spot...</span>
                </>
              ) : (
                <span>Get early access</span>
              )}
            </button>
          </div>

          <p className="text-[11px] text-center text-brand-muted dark:text-dark-muted font-mono pt-1">
            Zero spam. Get notified immediately once the app launches
          </p>
        </form>
      </div>
    </div>
  );
};
