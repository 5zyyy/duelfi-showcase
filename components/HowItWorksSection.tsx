'use client';

import { useEffect, useRef, useState } from 'react';

export default function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const steps = [
    {
      stepNumber: 1,
      title: 'Create or Join a Duel',
      description:
        'List your wager challenge or browse active duels. Set your terms—wager amount, duration (1 hour to 1 week), and wait for a worthy opponent.',
      imagePath: '/how-it-works/step-1.gif',
      imageAlt: 'User creating a duel listing with wager amount slider and duration selector',
    },
    {
      stepNumber: 2,
      title: 'Negotiate Terms',
      description:
        'Found a duel? Negotiate wager amount and duration directly with your opponent. Once both parties agree, the match begins.',
      imagePath: '/how-it-works/step-2.gif',
      imageAlt: 'Chat interface showing negotiation between two traders with terms being adjusted',
    },
    {
      stepNumber: 3,
      title: 'Connect Wallet & Trade',
      description:
        'Link your Solana wallet. Trade any meme coin on Solana during the duel period. Your PNL is tracked in real-time.',
      imagePath: '/how-it-works/step-3.gif',
      imageAlt: 'Wallet connection interface with trading screen showing live PNL counter',
    },
    {
      stepNumber: 4,
      title: 'Claim Victory',
      description:
        'When the timer ends, compare PNL percentages. The trader with the highest PNL wins the entire wager pool. Instant settlement on-chain.',
      imagePath: '/how-it-works/step-4.gif',
      imageAlt: 'Final PNL comparison screen with winner celebration and SOL transfer',
    },
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goToStep = (index: number) => {
    setCurrentStep(index);
  };

  // Touch handlers for swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextStep();
    }
    if (isRightSwipe) {
      prevStep();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevStep();
      } else if (e.key === 'ArrowRight') {
        nextStep();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentStepData = steps[currentStep];

  return (
    <section
      id="how-it-works"
      className="py-16 md:py-24 bg-[var(--bg-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fg-primary)] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display-heading)' }}
          >
            How DuelFi Works
          </h2>
        </div>

        {/* Main Box Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Left Arrow - Hidden on mobile/tablet, shown on desktop */}
          <button
            onClick={prevStep}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 lg:-translate-x-24 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)]/90 backdrop-blur-md border border-[var(--border-primary)] text-[var(--fg-primary)] hover:bg-[var(--bg-elevated)] hover:border-[var(--accent-primary)] transition-all duration-200 hover:scale-110"
            aria-label="Previous step"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow - Hidden on mobile/tablet, shown on desktop */}
          <button
            onClick={nextStep}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 lg:translate-x-24 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--bg-secondary)]/90 backdrop-blur-md border border-[var(--border-primary)] text-[var(--fg-primary)] hover:bg-[var(--bg-elevated)] hover:border-[var(--accent-primary)] transition-all duration-200 hover:scale-110"
            aria-label="Next step"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Content Box */}
          <div
            className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-6 md:p-8"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* GIF */}
            <div className="w-full mb-6 rounded-[var(--radius-md)] overflow-hidden border border-[var(--border-primary)] bg-[var(--bg-tertiary)]">
              <img
                src={currentStepData.imagePath}
                alt={currentStepData.imageAlt}
                className="w-full h-auto aspect-video object-cover"
              />
            </div>

            {/* Text */}
            <div className="text-center">
              <h3
                className="text-2xl md:text-3xl font-semibold text-[var(--fg-primary)] mb-4"
                style={{ fontFamily: 'var(--font-display-heading)' }}
              >
                {currentStepData.title}
              </h3>
              <p
                className="text-base md:text-lg text-[var(--fg-secondary)] leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {currentStepData.description}
              </p>
            </div>
          </div>

          {/* Page Indicator Dots */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentStep
                    ? 'w-8 h-2 bg-[var(--accent-primary)]'
                    : 'w-2 h-2 bg-[var(--fg-tertiary)] hover:bg-[var(--fg-secondary)]'
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

