import React, { useState } from 'react';
import { levoAssets, navLinks } from '../data/levoData';

interface HeaderProps {
  onOpenWaitlist: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWaitlist }) => {
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

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
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
