'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface DonutChartProps {
  teamPercent: number;
  publicPercent: number;
  teamTokens: number;
  publicTokens: number;
  totalTokens: number;
  hoveredSegment: string | null;
  setHoveredSegment: (segment: string | null) => void;
}

const DonutChart = ({ teamPercent, publicPercent, teamTokens, publicTokens, totalTokens, hoveredSegment, setHoveredSegment }: DonutChartProps) => {
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

  const size = 360;
  const strokeWidth = 50;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const publicLength = (publicPercent / 100) * circumference;
  const teamLength = (teamPercent / 100) * circumference;
  // Public segment: starts at top (after -90deg rotation), shows publicLength
  const publicOffset = circumference - publicLength;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
    >
      {/* Total Supply */}
      <div className="text-center mb-6">
        <div
          className="text-2xl md:text-3xl font-bold text-[var(--fg-primary)] mb-2"
          style={{ fontFamily: 'var(--font-display-heading)' }}
        >
          Total Supply
        </div>
        <div
          className="text-xl md:text-2xl font-semibold text-[var(--accent-primary)]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          {totalTokens.toLocaleString()} $DUELFI
        </div>
      </div>

      {/* Donut Chart */}
      <div className="flex justify-center items-center mb-6">
          <div className="relative overflow-visible" style={{ width: size + 30, height: size + 30, padding: '15px' }}>
            <svg width={size} height={size} className="transform -rotate-90" style={{ overflow: 'visible' }}>
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="var(--bg-tertiary)"
                strokeWidth={strokeWidth}
              />
              {/* Public Supply segment */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={publicOffset}
                strokeLinecap="butt"
                className="transition-all duration-1000"
                style={{
                  strokeDashoffset: isVisible ? publicOffset : circumference,
                  filter: hoveredSegment === 'public' ? 'drop-shadow(0 0 10px var(--accent-primary))' : 'none',
                }}
                onMouseEnter={() => setHoveredSegment('public')}
                onMouseLeave={() => setHoveredSegment(null)}
              />
              {/* Team segment */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="var(--accent-cyan)"
                strokeWidth={strokeWidth}
                strokeDasharray={`0 ${publicLength} ${teamLength} ${circumference - publicLength - teamLength}`}
                strokeDashoffset={0}
                strokeLinecap="butt"
                className="transition-all duration-1000"
                style={{
                  strokeDashoffset: isVisible ? 0 : publicLength,
                  filter: hoveredSegment === 'team' ? 'drop-shadow(0 0 10px var(--accent-cyan))' : 'none',
                }}
                onMouseEnter={() => setHoveredSegment('team')}
                onMouseLeave={() => setHoveredSegment(null)}
              />
            </svg>
            {/* Center icon */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                left: '15px',
                top: '15px',
                width: size,
                height: size,
              }}
            >
              <Image
                src="/icon.png"
                alt="DuelFi Logo"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
        </div>
    </div>
  );
};

const Legend = ({
  teamPercent,
  publicPercent,
  teamTokens,
  publicTokens,
  hoveredSegment,
  setHoveredSegment,
}: {
  teamPercent: number;
  publicPercent: number;
  teamTokens: number;
  publicTokens: number;
  hoveredSegment: string | null;
  setHoveredSegment: (segment: string | null) => void;
}) => {
  return (
    <div className="space-y-3 mt-6 pt-6 border-t border-[var(--border-primary)]">
      {/* Team */}
      <div
        className={`flex items-center justify-between p-3 rounded-[var(--radius-md)] border transition-all ${
          hoveredSegment === 'team'
            ? 'bg-[var(--bg-tertiary)] border-[var(--accent-cyan)]'
            : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)]'
        }`}
        onMouseEnter={() => setHoveredSegment('team')}
        onMouseLeave={() => setHoveredSegment(null)}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: 'var(--accent-cyan)' }}
          />
          <div>
            <div
              className="font-semibold text-[var(--fg-primary)]"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              Team
            </div>
            <div
              className="text-xs text-[var(--fg-tertiary)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Locked
            </div>
          </div>
        </div>
        <div className="text-right">
          <div
            className="font-bold text-[var(--accent-cyan)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {teamPercent}%
          </div>
          <div
            className="text-xs text-[var(--fg-tertiary)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {teamTokens.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Public Supply */}
      <div
        className={`flex items-center justify-between p-3 rounded-[var(--radius-md)] border transition-all ${
          hoveredSegment === 'public'
            ? 'bg-[var(--bg-tertiary)] border-[var(--accent-primary)]'
            : 'bg-[var(--bg-tertiary)] border-[var(--border-primary)]'
        }`}
        onMouseEnter={() => setHoveredSegment('public')}
        onMouseLeave={() => setHoveredSegment(null)}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: 'var(--accent-primary)' }}
          />
          <div>
            <div
              className="font-semibold text-[var(--fg-primary)]"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              Public Supply
            </div>
            <div
              className="text-xs text-[var(--fg-tertiary)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Available
            </div>
          </div>
        </div>
        <div className="text-right">
          <div
            className="font-bold text-[var(--accent-primary)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {publicPercent}%
          </div>
          <div
            className="text-xs text-[var(--fg-tertiary)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {publicTokens.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

const BenefitItem = ({ title, description, delay }: { title: string; description: string; delay: number }) => {
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
      className={`flex gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[var(--accent-primary)] mt-2" />
      <div className="flex-1">
        <div
          className="font-semibold text-[var(--fg-primary)] mb-1"
          style={{ fontFamily: 'var(--font-display-heading)' }}
        >
          {title}
        </div>
        <div
          className="text-sm text-[var(--fg-secondary)] leading-relaxed"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default function TokenomicsSection() {
  const totalTokens = 1000000000; // 1 Billion
  const teamPercent = 2;
  const publicPercent = 98;
  const teamTokens = 20000000; // 20 Million
  const publicTokens = 980000000; // 980 Million
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  const benefits = [
    {
      title: 'Fair Launch',
      description: 'No presale, no whitelist - everyone has equal access from day one',
    },
    {
      title: 'Automatic Migration',
      description: 'Seamlessly migrates to PumpSwap when bonding curve completes',
    },
    {
      title: 'Instant Liquidity',
      description: 'Bonding curve provides immediate liquidity for trading',
    },
  ];

  return (
    <section
      id="tokenomics"
      className="py-16 md:py-24 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--fg-primary)] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display-heading)' }}
          >
            Tokenomics
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Side: Donut Chart */}
          <div className="flex flex-col justify-center">
            <DonutChart
              teamPercent={teamPercent}
              publicPercent={publicPercent}
              teamTokens={teamTokens}
              publicTokens={publicTokens}
              totalTokens={totalTokens}
              hoveredSegment={hoveredSegment}
              setHoveredSegment={setHoveredSegment}
            />
          </div>

          {/* Right Side: Launch Platform */}
          <div className="flex flex-col justify-center">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-6 md:p-8">
              {/* Platform Header */}
              <div className="mb-6">
                <div
                  className="text-xl md:text-2xl font-bold text-[var(--fg-primary)] mb-2"
                  style={{ fontFamily: 'var(--font-display-heading)' }}
                >
                  Launch Platform
                </div>
                <div
                  className="text-lg md:text-xl font-semibold text-[var(--accent-primary)] mb-4"
                  style={{ fontFamily: 'var(--font-display-heading)' }}
                >
                  Pump.fun
                </div>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <BenefitItem
                    key={index}
                    title={benefit.title}
                    description={benefit.description}
                    delay={index * 50}
                  />
                ))}
              </div>

              {/* Legend */}
              <Legend
                teamPercent={teamPercent}
                publicPercent={publicPercent}
                teamTokens={teamTokens}
                publicTokens={publicTokens}
                hoveredSegment={hoveredSegment}
                setHoveredSegment={setHoveredSegment}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

