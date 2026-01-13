'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface LeaderboardEntry {
  rank: number;
  username: string;
  totalPNL: number;
  wins: number;
  totalWagered: number;
  rankTier: 'Silver' | 'Gold' | 'Platinum' | 'Diamond' | 'Legend';
}

// Helper function to get rank image path
const getRankImage = (rankTier: string): string => {
  const rankMap: Record<string, string> = {
    Silver: '/ranks/silver.png',
    Gold: '/ranks/gold.png',
    Platinum: '/ranks/platinum.png',
    Diamond: '/ranks/diamond.png',
    Legend: '/ranks/legend.png',
  };
  return rankMap[rankTier] || '/icon.png';
};

const LeaderboardRow = ({ entry, delay }: { entry: LeaderboardEntry; delay: number }) => {
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

  const isTopThree = entry.rank <= 3;
  const pnlColor = entry.totalPNL >= 0 ? 'text-[var(--accent-success)]' : 'text-[var(--accent-danger)]';

  return (
    <div
      ref={ref}
      className={`flex items-center gap-4 p-4 rounded-[var(--radius-md)] border transition-all duration-500 ${
        isTopThree
          ? 'bg-[var(--bg-tertiary)] border-[var(--accent-primary)] shadow-[0_0_15px_rgba(153,69,255,0.2)]'
          : 'bg-[var(--bg-secondary)] border-[var(--border-primary)] hover:border-[var(--border-accent)]'
      } ${
        isVisible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Rank Number */}
      <div
        className={`text-lg md:text-xl font-bold w-8 text-center ${
          isTopThree ? 'text-[var(--accent-primary)]' : 'text-[var(--fg-tertiary)]'
        }`}
        style={{ fontFamily: 'var(--font-display-heading)' }}
      >
        #{entry.rank}
      </div>

      {/* Rank Badge */}
      <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
        <Image
          src={getRankImage(entry.rankTier)}
          alt={`${entry.rankTier} rank badge`}
          width={48}
          height={48}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Username */}
      <div className="flex-1 min-w-0">
        <div
          className="text-base md:text-lg font-semibold text-[var(--fg-primary)] truncate"
          style={{ fontFamily: 'var(--font-display-heading)' }}
        >
          {entry.username}
        </div>
      </div>

      {/* Stats */}
      <div className="hidden md:flex items-center gap-6 text-sm">
        {/* Total PNL */}
        <div className="text-right min-w-[80px]">
          <div className={`font-bold ${pnlColor}`} style={{ fontFamily: 'var(--font-mono)' }}>
            {entry.totalPNL >= 0 ? '+' : ''}
            {entry.totalPNL.toFixed(2)}%
          </div>
          <div className="text-xs text-[var(--fg-tertiary)]">PNL</div>
        </div>

        {/* Wins */}
        <div className="text-right min-w-[60px]">
          <div className="font-semibold text-[var(--fg-primary)]">{entry.wins}</div>
          <div className="text-xs text-[var(--fg-tertiary)]">Wins</div>
        </div>

        {/* Total Wagered */}
        <div className="text-right min-w-[80px]">
          <div className="font-semibold text-[var(--fg-primary)]" style={{ fontFamily: 'var(--font-mono)' }}>
            {entry.totalWagered.toFixed(1)}
          </div>
          <div className="text-xs text-[var(--fg-tertiary)]">SOL</div>
        </div>
      </div>

      {/* Mobile Stats */}
      <div className="md:hidden flex flex-col items-end gap-1 text-xs">
        <div className={`font-bold ${pnlColor}`} style={{ fontFamily: 'var(--font-mono)' }}>
          {entry.totalPNL >= 0 ? '+' : ''}
          {entry.totalPNL.toFixed(1)}%
        </div>
        <div className="text-[var(--fg-tertiary)]">
          {entry.wins}W • {entry.totalWagered.toFixed(1)} SOL
        </div>
      </div>
    </div>
  );
};

const RankBadge = ({ rankName, delay }: { rankName: string; delay: number }) => {
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
      className={`flex flex-col items-center transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-4 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 mb-2">
        <Image
          src={getRankImage(rankName)}
          alt={`${rankName} rank badge`}
          width={80}
          height={80}
          className="w-full h-full object-contain"
        />
      </div>
      <div
        className="text-sm md:text-base font-medium text-[var(--fg-secondary)]"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {rankName}
      </div>
    </div>
  );
};

export default function RankingSystemSection() {
  // Mock leaderboard data
  const leaderboardData: LeaderboardEntry[] = [
    {
      rank: 1,
      username: 'CryptoMaster',
      totalPNL: 847.32,
      wins: 42,
      totalWagered: 1250.5,
      rankTier: 'Legend',
    },
    {
      rank: 2,
      username: 'SolanaKing',
      totalPNL: 623.18,
      wins: 38,
      totalWagered: 980.2,
      rankTier: 'Legend',
    },
    {
      rank: 3,
      username: 'MemeTrader',
      totalPNL: 512.45,
      wins: 35,
      totalWagered: 750.8,
      rankTier: 'Legend',
    },
    {
      rank: 4,
      username: 'DuelChampion',
      totalPNL: 389.67,
      wins: 28,
      totalWagered: 620.3,
      rankTier: 'Legend',
    },
    {
      rank: 5,
      username: 'TradingPro',
      totalPNL: 298.91,
      wins: 25,
      totalWagered: 510.7,
      rankTier: 'Legend',
    },
    {
      rank: 6,
      username: 'SolanaElite',
      totalPNL: 234.56,
      wins: 22,
      totalWagered: 450.2,
      rankTier: 'Legend',
    },
    {
      rank: 7,
      username: 'CoinWarrior',
      totalPNL: 187.34,
      wins: 19,
      totalWagered: 380.5,
      rankTier: 'Legend',
    },
    {
      rank: 8,
      username: 'DuelFiHero',
      totalPNL: 156.78,
      wins: 16,
      totalWagered: 320.1,
      rankTier: 'Legend',
    },
    {
      rank: 9,
      username: 'MemeLord',
      totalPNL: 134.22,
      wins: 14,
      totalWagered: 280.9,
      rankTier: 'Legend',
    },
    {
      rank: 10,
      username: 'TraderX',
      totalPNL: 98.45,
      wins: 12,
      totalWagered: 240.3,
      rankTier: 'Legend',
    },
  ];

  const ranks = ['Silver', 'Gold', 'Platinum', 'Diamond', 'Legend'];

  return (
    <section
      id="ranking"
      className="py-16 md:py-24 bg-[var(--bg-primary)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side: Leaderboard */}
          <div className="order-2 lg:order-1">
            <div className="space-y-3">
              {leaderboardData.slice(0, 5).map((entry, index) => (
                <LeaderboardRow key={entry.rank} entry={entry} delay={index * 50} />
              ))}
            </div>
          </div>

          {/* Right Side: Title, Description, and Rank Badges */}
          <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
            {/* Section Title */}
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fg-primary)] mb-4 tracking-tight"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              Climb the Leaderboard
            </h2>

            {/* Description */}
            <p
              className="text-base md:text-lg text-[var(--fg-secondary)] leading-relaxed mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Earn ranks based on wins, total PNL, and wager volume. Unlock exclusive badges and prove you're the top trader.
            </p>

            {/* Rank Badges */}
            <div className="grid grid-cols-5 gap-4 md:gap-6 mb-6">
              {ranks.map((rank, index) => (
                <RankBadge key={rank} rankName={rank} delay={index * 100} />
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-[var(--border-primary)]">
                <div
                  className="text-xs md:text-sm text-[var(--fg-tertiary)] text-center leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Rank progression based on total wins, PNL percentage, and wager volume
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

