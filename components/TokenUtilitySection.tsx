'use client';

import {
  Swords,
  Coins,
  Target,
  Flame,
  Trophy,
  Rocket,
  Users,
  Award,
  Gem,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface UtilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
  delay: number;
}

const UtilityCard = ({ icon, title, description, benefit, delay }: UtilityCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
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
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${delay}ms`, 
        perspective: '1000px',
        aspectRatio: '2.5 / 3.5',
      }}
    >
      <div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: 'preserve-3d' }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Card Container with Flip Effect */}
        <div
          className="absolute inset-0 w-full h-full transition-transform duration-700"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Front Side */}
          <div
            className="absolute inset-0 w-full h-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-6 flex flex-col items-center justify-center text-center hover:border-[var(--accent-primary)] hover:shadow-[0_0_20px_rgba(153,69,255,0.2)] transition-all duration-300"
            style={{ 
              backfaceVisibility: 'hidden', 
              WebkitBackfaceVisibility: 'hidden',
              animation: !isFlipped ? 'pulseGlow 2s ease-in-out infinite' : 'none',
            }}
          >
            <div className="mb-4">
              <Gem className="w-12 h-12 md:w-16 md:h-16 text-[var(--accent-primary)]" strokeWidth={2} />
            </div>
            <h3
              className="text-lg md:text-xl font-semibold text-[var(--fg-primary)] mb-2"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              {title}
            </h3>
            <p
              className="text-xs text-[var(--fg-tertiary)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Click to reveal
            </p>
          </div>

          {/* Back Side */}
          <div
            className="absolute inset-0 w-full h-full bg-[var(--bg-secondary)] border border-[var(--accent-primary)] rounded-[var(--radius-lg)] p-6 flex flex-col justify-center shadow-[0_0_20px_rgba(153,69,255,0.2)]"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            {/* Description */}
            <p
              className="text-sm md:text-base text-[var(--fg-secondary)] leading-relaxed mb-4 text-center"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {description}
            </p>

            {/* Benefit Badge */}
            <div className="inline-flex items-center px-3 py-1.5 rounded-[var(--radius-md)] bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 self-center">
              <span
                className="text-xs md:text-sm font-semibold text-[var(--accent-cyan)]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {benefit}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TokenUtilitySection() {
  const utilities = [
    {
      icon: <Swords className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Holders Create Duels',
      description:
        'Only $DUELFI holders can create wager listings. Free users can join existing duels, but creating requires holding $DUELFI tokens.',
      benefit: 'Requires minimum 2M $DUELFI',
    },
    {
      icon: <Coins className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Lower Fees for Holders',
      description:
        'Standard participation fee: 1% of wager. $DUELFI holders pay only 0.5%. More duels, less cost.',
      benefit: 'Save 50% on fees',
    },
    {
      icon: <Target className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Exclusive Challenges',
      description:
        'Complete missions to earn $DUELFI rewards and bonus multipliers.',
      benefit: '$DUELFI Rewards',
    },
    {
      icon: <Flame className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Streak Rewards',
      description:
        'Maintain daily login streaks. Holders get bonus multipliers on streak rewards.',
      benefit: 'Up to 5x rewards',
    },
    {
      icon: <Trophy className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Top Trader Prizes',
      description:
        'Weekly and monthly leaderboard rewards. Top 10 traders split a $DUELFI prize pool. Holders get bonus allocation.',
      benefit: 'Weekly & Monthly Prizes',
    },
    {
      icon: <Rocket className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'First to New Features',
      description:
        'Get early access to new features before public release. Test AI agents, advanced analytics, and more.',
      benefit: 'Beta access to all updates',
    },
    {
      icon: <Users className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Exclusive Discord',
      description:
        'Join the private $DUELFI holder Discord. Vote on project decisions, participate in special events, and connect with top traders.',
      benefit: 'Governance voting + exclusive events',
    },
    {
      icon: <Award className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />,
      title: 'Exclusive Tournaments',
      description:
        'Compete in exclusive tournaments reserved for token holders. Higher stakes, bigger prizes, legendary status.',
      benefit: 'Monthly $DUELFI holder championship',
    },
  ];

  return (
    <section
      id="token-utility"
      className="py-16 md:py-24 bg-[var(--bg-primary)]"
    >
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulseGlow {
            0%, 100% {
              box-shadow: 0 0 5px rgba(153, 69, 255, 0.15), 0 0 10px rgba(153, 69, 255, 0.1);
            }
            50% {
              box-shadow: 0 0 10px rgba(153, 69, 255, 0.3), 0 0 20px rgba(153, 69, 255, 0.2);
            }
          }
        `
      }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fg-primary)] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display-heading)' }}
          >
            Token Utility
          </h2>
        </div>

        {/* Utilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {utilities.map((utility, index) => (
            <UtilityCard
              key={index}
              icon={utility.icon}
              title={utility.title}
              description={utility.description}
              benefit={utility.benefit}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

