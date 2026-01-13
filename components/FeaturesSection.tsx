'use client';

import { Swords, ChartCandlestick, Settings, Wallet, BarChart3, Target } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-6 md:p-8 transition-all duration-700 hover:border-[var(--accent-primary)] hover:shadow-[0_0_20px_rgba(153,69,255,0.2)] ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="mb-4 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-primary)]/20 text-[var(--accent-primary)]">
        {icon}
      </div>

      {/* Content */}
      <h3
        className="text-xl md:text-2xl font-semibold text-[var(--fg-primary)] mb-3"
        style={{ fontFamily: 'var(--font-display-heading)' }}
      >
        {title}
      </h3>
      <p
        className="text-base text-[var(--fg-secondary)] leading-relaxed"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {description}
      </p>
    </div>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      icon: <Swords className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Create & Join Duels',
      description:
        'Browse active challenges or create your own. Filter by wager amount, duration, and opponent rank. Find the perfect match for your skill level.',
    },
    {
      icon: <ChartCandlestick className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Live Performance Metrics',
      description:
        "Track your PNL percentage in real-time. See your opponent's performance. Every trade counts toward your final score.",
    },
    {
      icon: <Settings className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Customize Your Duel',
      description:
        'Set wager amounts from 0.1 SOL to 100+ SOL. Choose duration from 1 hour to 1 week. Negotiate terms that suit your strategy.',
    },
    {
      icon: <Wallet className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Seamless Solana Integration',
      description:
        'Connect Phantom, Solflare, or any Solana wallet. Trade directly through DuelFi. All transactions secured on-chain.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Deep Dive Analytics',
      description:
        'Comprehensive portfolio tracking across all your duels. Performance metrics, win rate, average PNL, and trading patterns.',
    },
    {
      icon: <Target className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Daily Missions',
      description:
        'Complete daily trading challenges. Maintain login streaks for bonus rewards. Compete in weekly tournaments.',
    },
  ];

  return (
    <section
      id="features"
      className="py-16 md:py-24 bg-[var(--bg-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fg-primary)] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display-heading)' }}
          >
            Built for Champions
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

