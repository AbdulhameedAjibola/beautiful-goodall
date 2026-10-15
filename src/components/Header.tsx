import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { levoAssets, navLinks } from '../data/levoData';

interface HeaderProps {
  onOpenWaitlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWaitlist }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 dark:bg-[#0c0e0b]/90 backdrop-blur-md border-b border-brand-border dark:border-dark-border transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Levo Brandmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="p-1 px-2.5 sm:px-3 sm:py-1.5 rounded-xl transition-all dark:bg-white/95 dark:border dark:border-white/20">
            <img
              src={levoAssets.primaryLogo}
              alt="Levo"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-brand-muted dark:text-dark-muted">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-brand-dark dark:hover:text-dark-text transition-colors flex items-center gap-1.5"
            >
              <span>{link.label}</span>
              {link.hasBadge && (
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              )}
            </a>
          ))}
        </nav>

        {/* Right CTA + Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-stone-100 dark:bg-dark-card border border-stone-200 dark:border-dark-border text-brand-dark dark:text-dark-text text-xs font-mono font-medium hover:bg-stone-200 dark:hover:bg-dark-elevated transition-all"
          >
            {theme === 'dark' ? (
              <>
                <svg
                  className="w-4 h-4 text-brand-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="tracking-wide">Light</span>
              </>
            ) : (
              <>
                <svg
                  className="w-4 h-4 text-stone-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <span className="tracking-wide">Dark</span>
              </>
            )}
          </button>

          {/* Early Access Button -> Opens Waitlist Modal */}
          <button
            onClick={onOpenWaitlist}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-brand-dark dark:bg-brand-green dark:text-black dark:hover:bg-brand-green-bright text-white text-[14px] font-semibold tracking-wide hover:bg-black transition-all active:scale-[0.98]"
          >
            Get early access
          </button>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg bg-stone-100 dark:bg-dark-card border border-stone-200 dark:border-dark-border text-brand-gold"
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-brand-dark dark:text-dark-text hover:bg-brand-subtle dark:hover:bg-dark-card rounded-lg focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Collapsible Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-brand-border dark:border-dark-border bg-white dark:bg-dark-bg px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-medium text-brand-dark dark:text-dark-text">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-2 hover:text-brand-green flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.hasBadge && (
                  <span className="text-xs bg-amber-500/10 text-brand-gold px-2 py-0.5 rounded-full font-mono border border-brand-gold/30">
                    Roadmap
                  </span>
                )}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-brand-border dark:border-dark-border">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full text-center py-3.5 rounded-xl bg-brand-terra dark:bg-brand-green dark:text-black text-white font-semibold active:scale-[0.98] transition-all"
              >
                Get early access
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
