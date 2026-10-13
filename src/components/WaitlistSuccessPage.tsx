import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { levoAssets } from '../data/levoData';
import {
  fetchLeaderboardAndPosition,
  generateShareUrl,
  getStoredUserWaitlistData,
  LeaderboardEntry,
} from '../services/waitlistService';

interface WaitlistSuccessPageProps {
  onNavigateHome: () => void;
  initialUserData?: {
    refCode: string;
    name: string;
    email: string;
    position: number;
  };
}

export const WaitlistSuccessPage: React.FC<WaitlistSuccessPageProps> = ({
  onNavigateHome,
  initialUserData,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [userData, setUserData] = useState(() => {
    if (initialUserData && initialUserData.refCode) {
      return initialUserData;
    }
    return getStoredUserWaitlistData();
  });
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [position, setPosition] = useState<number>(() => {
    return initialUserData?.position || userData.position || 14;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  const shareUrl = generateShareUrl(userData.refCode);

  useEffect(() => {
    let isMounted = true;
    const current =
      initialUserData && initialUserData.refCode
        ? initialUserData
        : getStoredUserWaitlistData();
    setUserData(current);
    if (current.position) {
      setPosition(current.position);
    }

    async function loadData() {
      setIsLoading(true);
      try {
        // Make the GET request passing the current user's email as query param: ?email=...
        const response = await fetchLeaderboardAndPosition(current.email);

        if (isMounted) {
          setLeaderboard(response.leaderboard);
          if (typeof response.userPosition === 'number') {
            setPosition(response.userPosition);
          }
        }
      } catch (err) {
        console.error('Error loading leaderboard:', err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = shareUrl;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.warn('Clipboard write failed:', err);
    }
  };

  const tweetText = encodeURIComponent(
    `I just joined the early access waitlist for Levo—the first fitness and nutrition app built for real Nigerian meals! Join me here: ${shareUrl}`
  );
  const whatsappText = encodeURIComponent(
    `Hey! Check out Levo, the nutrition & fitness app built for Nigerian foods. Join early access with my invite: ${shareUrl}`
  );

  return (
    <div className="min-h-screen bg-[#FBFBFA] dark:bg-[#0c0e0b] text-brand-dark dark:text-dark-text transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 dark:bg-[#0c0e0b]/90 backdrop-blur-md border-b border-brand-border dark:border-dark-border">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <img
              src={levoAssets.primaryLogo}
              alt="Levo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02] filter dark:brightness-110"
            />
          </button>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-dark-card border border-stone-200 dark:border-dark-border text-brand-dark dark:text-dark-text text-xs font-mono font-medium hover:bg-stone-200 dark:hover:bg-dark-elevated transition-all"
            >
              {theme === 'dark' ? (
                <>
                  <svg className="w-4 h-4 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>Light</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                  <span>Dark</span>
                </>
              )}
            </button>

            <button
              onClick={onNavigateHome}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-stone-100 dark:bg-dark-card border border-stone-200 dark:border-dark-border text-xs font-semibold hover:bg-stone-200 dark:hover:bg-dark-elevated transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        {/* Success Confirmation Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-16 h-16 rounded-full bg-brand-green/15 text-brand-green flex items-center justify-center mx-auto mb-5 shadow-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold font-sora text-brand-dark dark:text-dark-text tracking-tight mb-3">
            You have successfully joined the waitlist!
          </h1>

          <p className="text-base sm:text-lg text-brand-muted dark:text-dark-muted leading-relaxed">
            Welcome to the Levo community{userData.name ? `, ${userData.name.split(' ')[0]}` : ''}. We have reserved your pioneer spot. Refer friends to climb the leaderboard and unlock complimentary access to premium coaching squads.
          </p>
        </div>

        {/* Share Your Link Now Section */}
        <section className="bg-white dark:bg-dark-card border border-brand-border dark:border-dark-border rounded-3xl p-6 sm:p-8 shadow-subtle dark:shadow-dark-subtle mb-10 text-left">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg sm:text-xl font-bold font-sora text-brand-dark dark:text-dark-text">
              Share your link now
            </h2>
            {userData.refCode && (
              <span className="badge-pill text-[11px] font-mono text-brand-gold bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-brand-gold/30 px-2.5 py-0.5 rounded-full font-bold">
                Code: {userData.refCode}
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-brand-muted dark:text-dark-muted mb-4">
            Invite workout partners, gym buddies, and foodies. Every referral advances your position on the leaderboard:
          </p>

          {/* Link Box + Copy Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="w-full px-4 py-3.5 rounded-xl bg-stone-50 dark:bg-dark-elevated border border-stone-200 dark:border-dark-border text-brand-dark dark:text-dark-text text-xs sm:text-sm font-mono select-all focus:outline-none"
              />
            </div>
            <button
              onClick={handleCopyLink}
              className={`px-6 py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm whitespace-nowrap active:scale-[0.98] ${
                copied
                  ? 'bg-brand-green text-black font-bold'
                  : 'bg-brand-dark dark:bg-brand-green dark:text-black text-white hover:brightness-110'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Link Copied!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Social Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-stone-100 dark:border-dark-border text-xs">
            <span className="text-brand-muted dark:text-dark-muted font-medium">Quick share:</span>
            <a
              href={`https://wa.me/?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 font-medium hover:bg-emerald-100 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${tweetText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-dark-elevated text-brand-dark dark:text-dark-text font-medium hover:bg-stone-200 transition-colors"
            >
              X / Twitter
            </a>
          </div>
        </section>

        {/* Leaderboard Table Container */}
        <section className="bg-white dark:bg-dark-card border border-brand-border dark:border-dark-border rounded-3xl overflow-hidden shadow-subtle dark:shadow-dark-subtle mb-6 text-left">
          <div className="p-6 sm:p-8 border-b border-brand-border dark:border-dark-border">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-green font-mono">
                  Pioneer Rankings
                </span>
                <h3 className="text-2xl font-extrabold font-sora text-brand-dark dark:text-dark-text mt-1">
                  Waitlist Leaderboard
                </h3>
              </div>
              <span className="text-xs font-mono text-brand-muted dark:text-dark-muted bg-stone-100 dark:bg-dark-elevated px-3 py-1.5 rounded-lg border border-stone-200 dark:border-dark-border">
                Top 20 Pioneers
              </span>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-brand-border/70 dark:border-dark-border bg-stone-50/70 dark:bg-dark-elevated/50 text-[11px] font-mono uppercase text-brand-muted dark:text-dark-muted">
                  <th className="py-3.5 px-6 font-semibold w-20">Rank</th>
                  <th className="py-3.5 px-6 font-semibold">Name</th>
                  <th className="py-3.5 px-6 font-semibold text-right">Referrals</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/50 dark:divide-dark-border text-sm">
                {isLoading ? (
                  <tr>
                    <td colSpan={3} className="py-12 text-center text-brand-muted dark:text-dark-muted font-mono text-xs">
                      <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-brand-green border-t-transparent mb-2" />
                      <div>Loading pioneer leaderboard...</div>
                    </td>
                  </tr>
                ) : (
                  leaderboard.slice(0, 20).map((entry) => {
                    const isUser = entry.isCurrentUser || entry.rank === position;
                    return (
                      <tr
                        key={entry.rank}
                        className={`transition-colors ${
                          isUser
                            ? 'bg-brand-green/10 dark:bg-brand-green/15 font-bold text-brand-dark dark:text-white'
                            : 'hover:bg-stone-50 dark:hover:bg-dark-elevated/40'
                        }`}
                      >
                        <td className="py-4 px-6 font-mono text-xs">
                          {entry.rank === 1 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-gold text-black font-bold text-xs">
                              1
                            </span>
                          ) : entry.rank === 2 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-stone-300 text-stone-900 font-bold text-xs">
                              2
                            </span>
                          ) : entry.rank === 3 ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-700 text-white font-bold text-xs">
                              3
                            </span>
                          ) : (
                            <span className="text-brand-muted dark:text-dark-muted">
                              #{entry.rank}
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <span>{entry.name}</span>
                          {isUser && (
                            <span className="text-[10px] bg-brand-green text-black font-mono font-bold px-2 py-0.5 rounded-full uppercase">
                              You
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-6 text-right font-mono font-semibold">
                          <span className={isUser ? 'text-brand-green' : 'text-brand-dark dark:text-dark-text'}>
                            {entry.referrals}
                          </span>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </section>

        {/* Position Callout Directly Beneath the Leaderboard */}
        <div className="bg-gradient-to-r from-stone-900 to-black dark:from-[#181b16] dark:to-[#121411] border border-stone-800 dark:border-dark-border text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left mb-10">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-brand-gold font-bold mb-1">
              Your Current Status
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold font-sora text-white">
              You are at: <span className="text-brand-green">#{position}!</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 dark:text-stone-400 mt-1">
              Every friend who joins using your link moves you up the ranks.
            </p>
          </div>

          <button
            onClick={handleCopyLink}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-green hover:bg-brand-green-bright text-black font-bold text-xs sm:text-sm whitespace-nowrap active:scale-[0.98] transition-all"
          >
            {copied ? 'Copied Link!' : 'Boost Your Rank'}
          </button>
        </div>

        {/* Back to Home Button */}
        <div className="text-center pt-2">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-muted dark:text-dark-muted hover:text-brand-dark dark:hover:text-dark-text transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Return to Levo Home</span>
          </button>
        </div>
      </main>
    </div>
  );
};
