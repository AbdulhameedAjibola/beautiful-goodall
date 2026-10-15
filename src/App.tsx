import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Community } from './components/Community';
import { MacroAccuracy } from './components/MacroAccuracy';
import { Roadmap } from './components/Roadmap';
import { Faq } from './components/Faq';
import { WaitlistCta } from './components/WaitlistCta';
import { WaitlistModal } from './components/WaitlistModal';
import { Footer } from './components/Footer';
import { WaitlistSuccessPage } from './components/WaitlistSuccessPage';

interface AppContentProps {
  onNavigateToSuccess: (data: {
    refCode: string;
    name: string;
    email: string;
    position: number;
  }) => void;
}

export const AppContent: React.FC<AppContentProps> = ({ onNavigateToSuccess }) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleOpenWaitlist = (_initialEmail?: string) => {
    setIsWaitlistOpen(true);
  };

  const handleCloseWaitlist = () => {
    setIsWaitlistOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] dark:bg-[#0c0e0b] text-[#121212] dark:text-[#f5f6f2] transition-colors duration-200">
      {/* Sticky Header */}
      <Header onOpenWaitlist={() => handleOpenWaitlist()} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 1. Hero with Interactive Phone Mockup */}
        <Hero onOpenWaitlist={() => handleOpenWaitlist()} />

        {/* 2. Trust Strip with Algorithmic Progress Tracking */}
        <TrustStrip />

        {/* 3. 4-Card Key Features Grid */}
        <Features />

        {/* 4. How It Works with Rapid Meal Logging Step 2 */}
        <HowItWorks />

        {/* 5. Community and Creators Showcase */}
        <Community />

        {/* 6. Section 7: Food & Macro Database Accuracy */}
        <MacroAccuracy />

        {/* 7. Product Roadmap */}
        <Roadmap />

        {/* 8. Frequently Asked Questions */}
        <Faq />

        {/* 9. Waitlist Call-to-Action */}
        <WaitlistCta onOpenWaitlist={handleOpenWaitlist} />
      </main>

      {/* Simplified Footer */}
      <Footer />

      {/* Early Access Waitlist Modal Popup */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={handleCloseWaitlist}
        onSuccessRedirect={onNavigateToSuccess}
      />
    </div>
  );
};

export const App: React.FC = () => {
  const getBasePath = () => {
    if (typeof window === 'undefined') return '';
    return window.location.pathname.startsWith('/beautiful-goodall')
      ? '/beautiful-goodall'
      : '';
  };

  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname;
    }
    return '/';
  });

  const [currentUserData, setCurrentUserData] = useState<{
    refCode: string;
    name: string;
    email: string;
    position: number;
  } | undefined>(undefined);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToSuccess = (data: {
    refCode: string;
    name: string;
    email: string;
    position: number;
  }) => {
    setCurrentUserData(data);
    const basePath = getBasePath();
    const target = `${basePath}/waitlist-success`;
    window.history.pushState({}, '', target);
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    const basePath = getBasePath();
    const target = `${basePath}/`;
    window.history.pushState({}, '', target);
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSuccessPage = currentPath.includes('/waitlist-success');

  return (
    <ThemeProvider>
      {isSuccessPage ? (
        <WaitlistSuccessPage
          onNavigateHome={navigateToHome}
          initialUserData={currentUserData}
        />
      ) : (
        <AppContent onNavigateToSuccess={navigateToSuccess} />
      )}
    </ThemeProvider>
  );
};

export default App;
