import React, { useState } from 'react';
import { faqItems } from '../data/levoData';

export const Faq: React.FC = () => {
  // Open the first 2 questions by default as in the design
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    q1: true,
    q2: true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-dark-card border-y border-brand-border dark:border-dark-border transition-colors" id="faq">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark dark:text-dark-text">
            Frequently asked questions
          </h2>
        </div>

        {/* 7 FAQ Accordions */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className={`border border-brand-border dark:border-dark-border rounded-2xl overflow-hidden transition-all text-left ${
                  isOpen
                    ? 'bg-brand-surface dark:bg-dark-elevated'
                    : 'bg-white dark:bg-dark-card'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                >
                  <span className="font-sora font-bold text-base sm:text-lg text-brand-dark dark:text-dark-text">
                    {item.question}
                  </span>
                  <span
                    className={`ml-4 text-brand-muted dark:text-dark-muted transition-transform duration-200 text-2xl font-light ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    {isOpen ? '✕' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-brand-muted dark:text-dark-muted leading-relaxed animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
