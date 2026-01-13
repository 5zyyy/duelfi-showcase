'use client';

import { AuroraBackground } from '@/components/ui/shadcn-io/aurora-background';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Floating PNL numbers component
const FloatingPNL = ({ value, delay }: { value: string; delay: number }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const x = Math.random() * 80 + 10; // 10% to 90%
    const y = Math.random() * 60 + 20; // 20% to 80%
    setPosition({ x, y });
  }, []);

  const isPositive = value.startsWith('+');
  const color = isPositive ? 'var(--accent-success)' : 'var(--accent-danger)';

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        animationDelay: `${delay}s`,
        color,
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
        fontWeight: 600,
        textShadow: `0 0 10px ${color}40`,
        opacity: 0,
        animation: `float 8s ease-in-out infinite, fadeInOut 8s ease-in-out infinite`,
      }}
    >
      {value}
    </div>
  );
};

// Scroll Indicator component
const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
      <span className="text-[var(--fg-secondary)] text-xs font-medium">
        Scroll
      </span>
      <svg
        className="w-5 h-5 text-[var(--fg-secondary)]"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  );
};

export default function HeroSection() {
  const pnlNumbers = ['+15.3%', '-8.7%', '+42.1%', '-12.4%', '+28.9%', '-5.2%'];

  return (
    <section id="home" className="relative">
      <AuroraBackground
        className="h-screen"
        showRadialGradient={true}
      >
        {/* Floating PNL Numbers */}
        {pnlNumbers.map((value, index) => (
          <FloatingPNL key={index} value={value} delay={index * 1.2} />
        ))}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 h-full pt-16 md:pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            {/* Main Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[var(--fg-primary)] leading-[1.1] tracking-tight"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              Trade. Duel. Win.
            </h1>

            {/* Subheadline */}
            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-[var(--fg-primary)] leading-tight"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              The Ultimate Meme Coin Trading Arena
            </h2>

            {/* Description */}
            <p
              className="text-base sm:text-lg md:text-xl text-[var(--fg-secondary)] max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Challenge traders head-to-head in high-stakes Solana meme coin
              duels. Wager your SOL, prove your skills, and claim victory. Only
              the best traders survive.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href="#waitlist"
                className="inline-block px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white bg-[var(--accent-primary)] rounded-[var(--radius-md)] hover:bg-[var(--accent-primary-hover)] transition-all duration-200 hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] hover:scale-105"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Join Waitlist
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <ScrollIndicator />
        </div>
      </AuroraBackground>
    </section>
  );
}

