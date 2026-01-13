'use client';

import { Rocket, Swords, Brain, Bot, Globe, LucideIcon, ChevronDown, Check, Hourglass, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface Milestone {
  text: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

interface Phase {
  number: number;
  icon: LucideIcon;
  title: string;
  milestones: Milestone[];
  isCurrent: boolean;
  isCompleted: boolean;
}

const PhaseCard = ({ 
  phase, 
  index, 
  isVisible, 
  isActive, 
  isExpanded, 
  onToggle 
}: { 
  phase: Phase; 
  index: number; 
  isVisible: boolean; 
  isActive: boolean;
  isExpanded: boolean;
  onToggle: () => void;
}) => {
  const isLeft = index % 2 === 0;
  const IconComponent = phase.icon;
  const statusColors = {
    completed: 'text-[var(--accent-success)]',
    'in-progress': 'text-[var(--accent-cyan)]',
    upcoming: 'text-[var(--fg-tertiary)]',
  };

  const StatusIcon = ({ status }: { status: 'completed' | 'in-progress' | 'upcoming' }) => {
    const iconProps = {
      className: `w-5 h-5 ${statusColors[status]}`,
      strokeWidth: 2,
    };

    switch (status) {
      case 'completed':
        return <Check {...iconProps} />;
      case 'in-progress':
        return <Wrench {...iconProps} />;
      case 'upcoming':
        return <Hourglass {...iconProps} />;
    }
  };

  return (
    <div className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} mb-12 lg:mb-16`}>
      {/* Icon Container - Centered on Timeline (Desktop only) */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 z-10">
        <div
          className={`w-16 h-16 lg:w-20 lg:h-20 rounded-lg bg-[var(--bg-secondary)] border-2 flex items-center justify-center transition-all duration-300 ${
            isActive
              ? 'border-[var(--accent-primary)] shadow-[0_0_15px_rgba(153,69,255,0.3)]'
              : 'border-[var(--border-primary)]'
          }`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.8)',
            transition: `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`,
          }}
        >
          <IconComponent
            className={`w-8 h-8 lg:w-10 lg:h-10 ${
              isActive ? 'text-[var(--accent-primary)]' : 'text-[var(--fg-secondary)]'
            }`}
            strokeWidth={2}
          />
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`w-full lg:w-[45%] bg-[var(--bg-secondary)] border-2 rounded-[var(--radius-lg)] overflow-hidden hover:border-[var(--accent-primary)] hover:shadow-[0_0_20px_rgba(153,69,255,0.2)] transition-all duration-300 cursor-pointer ${
          isExpanded 
            ? 'border-[var(--accent-primary)] shadow-[0_0_15px_rgba(153,69,255,0.3)]' 
            : 'border-[var(--border-primary)]'
        }`}
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: `opacity 0.6s ease-out ${index * 0.1 + 0.2}s, transform 0.6s ease-out ${index * 0.1 + 0.2}s`,
        }}
        onClick={onToggle}
      >
        {/* Phase Header - Always Visible */}
        <div className={`p-6 lg:p-8 ${isExpanded ? 'pb-4' : ''} transition-all duration-300`}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              {/* Mobile/Tablet Icon - Inside Card */}
              <div className="lg:hidden flex-shrink-0">
                <div
                  className={`w-12 h-12 rounded-lg bg-[var(--bg-tertiary)] border-2 flex items-center justify-center transition-all duration-300 ${
                    isExpanded
                      ? 'border-[var(--accent-primary)] shadow-[0_0_15px_rgba(153,69,255,0.3)]'
                      : 'border-[var(--border-primary)]'
                  }`}
                >
                  <IconComponent
                    className={`w-6 h-6 ${
                      isExpanded ? 'text-[var(--accent-primary)]' : 'text-[var(--fg-secondary)]'
                    }`}
                    strokeWidth={2}
                  />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div
                  className="text-sm font-semibold text-[var(--accent-primary)] mb-1"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Phase {phase.number}
                </div>
                <h3
                  className="text-xl lg:text-2xl font-bold text-[var(--fg-primary)]"
                  style={{ fontFamily: 'var(--font-display-heading)' }}
                >
                  {phase.title}
                </h3>
              </div>
            </div>
            <ChevronDown
              className={`w-5 h-5 lg:w-6 lg:h-6 text-[var(--fg-secondary)] flex-shrink-0 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
              strokeWidth={2}
            />
          </div>
        </div>

        {/* Milestones - Collapsible */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 lg:px-8 pb-6 lg:pb-8 pt-0 space-y-3">
            {phase.milestones.map((milestone, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="shrink-0 flex items-center">
                  <StatusIcon status={milestone.status} />
                </div>
                <p
                  className={`text-sm lg:text-base leading-relaxed ${
                    milestone.status === 'completed'
                      ? 'text-[var(--fg-secondary)]'
                      : milestone.status === 'in-progress'
                      ? 'text-[var(--fg-primary)]'
                      : 'text-[var(--fg-tertiary)]'
                  }`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {milestone.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RoadmapSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedPhaseIndex, setExpandedPhaseIndex] = useState<number | null>(0); // First phase expanded by default
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

  const phases: Phase[] = [
    {
      number: 1,
      icon: Rocket,
      title: 'Launch & MVP',
      isCurrent: true,
      isCompleted: false,
      milestones: [
        { text: 'Core duel system development', status: 'completed' },
        { text: 'Wallet integration (Phantom, Solflare)', status: 'completed' },
        { text: 'Basic PNL tracking', status: 'completed' },
        { text: 'Duel lobby & matching system', status: 'completed' },
        { text: '$DUELFI token launch on Pump.fun', status: 'in-progress' },
        { text: 'Community building', status: 'in-progress' },
        { text: 'Public beta launch', status: 'upcoming' },
      ],
    },
    {
      number: 2,
      icon: Swords,
      title: 'Battle-Ready',
      isCurrent: false,
      isCompleted: false,
      milestones: [
        { text: 'Gamified ranking system launch', status: 'upcoming' },
        { text: 'Advanced match filters & search', status: 'upcoming' },
        { text: 'Real-time notifications', status: 'upcoming' },
        { text: 'Token holder benefits activation', status: 'upcoming' },
        { text: 'First holder tournament', status: 'upcoming' },
      ],
    },
    {
      number: 3,
      icon: Brain,
      title: 'Intelligence Layer',
      isCurrent: false,
      isCompleted: false,
      milestones: [
        {
          text: 'AI Post-Match Analysis: Get AI-powered insights after each match. Understand what worked, what didn\'t, and how to improve your strategy.',
          status: 'upcoming',
        },
        {
          text: 'Portfolio Analytics Dashboard: Comprehensive portfolio tracking across all duels. Performance metrics, win rate, average PNL, trading patterns.',
          status: 'upcoming',
        },
        { text: 'Trading strategy insights', status: 'upcoming' },
        { text: 'Performance heatmaps', status: 'upcoming' },
        { text: 'Advanced statistics', status: 'upcoming' },
        { text: 'Social features (follow traders, share duels)', status: 'upcoming' },
      ],
    },
    {
      number: 4,
      icon: Bot,
      title: 'AI Revolution',
      isCurrent: false,
      isCompleted: false,
      milestones: [
        {
          text: 'AI Agent Battles: Create and train AI trading agents. Battle other AI agents in automated duels. Watch your algorithms compete 24/7.',
          status: 'upcoming',
        },
        { text: 'AI vs AI battle arena', status: 'upcoming' },
        { text: 'Automated trading strategies', status: 'upcoming' },
        { text: 'Machine learning improvements', status: 'upcoming' },
        { text: 'AI leaderboard', status: 'upcoming' },
        {
          text: 'Paper Trading Mode: Hone your skills with paper trading duels. Wager real SOL on paper trading matches. Perfect for testing strategies.',
          status: 'upcoming',
        },
      ],
    },
    {
      number: 5,
      icon: Globe,
      title: 'Ecosystem Expansion',
      isCurrent: false,
      isCompleted: false,
      milestones: [
        { text: 'Governance DAO', status: 'upcoming' },
        { text: 'Professional trading tools', status: 'upcoming' },
        { text: 'Institutional features', status: 'upcoming' },
        { text: 'Advanced community features', status: 'upcoming' },
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-16 lg:py-24 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 lg:mb-16">
          <h2
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[var(--fg-primary)] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-display-heading)' }}
          >
            The Path to Dominance
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={ref} className="relative max-w-5xl mx-auto pb-12">
          {/* Vertical Timeline Line - Centered */}
          <div 
            className="hidden lg:block absolute left-1/2 top-0 w-0.5 -translate-x-1/2"
            style={{
              height: 'calc(100%)', // Extend past the last card
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.3s',
            }}
          >
            {/* Background line (inactive) - solid portion */}
            <div 
              className="absolute top-0 left-0 w-full"
              style={{
                height: 'calc(100% - 50px)', // Leave space for fade-out
              }}
            >
              <div className="w-full h-full bg-[var(--border-primary)]" />
            </div>
            
            {/* Fade-out at the end of timeline */}
            <div 
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: '50px',
                background: 'linear-gradient(to bottom, var(--border-primary) 0%, rgba(255, 255, 255, 0.08) 30%, rgba(255, 255, 255, 0.04) 60%, transparent 100%)',
              }}
            />
            
            {/* Active portion of line (from top to expanded phase icon) */}
            {expandedPhaseIndex !== null && (
              <div
                className="absolute top-0 left-0 w-full transition-all duration-1000"
                style={{
                  height: isVisible 
                    ? `${((expandedPhaseIndex + 0.5) * (100 / phases.length))}%` 
                    : '0%',
                  opacity: isVisible ? 1 : 0,
                  transition: 'height 1.5s ease-out 0.5s, opacity 0.6s ease-out 0.5s',
                }}
              >
                {/* Solid line portion - extends most of the way */}
                <div 
                  className="absolute top-0 left-0 w-full bg-[var(--accent-primary)]"
                  style={{
                    height: 'calc(100% - 80px)', // Leave space for longer fade-out tip
                  }}
                />
                {/* Longer fade-out tip at the end with smooth gradient */}
                <div 
                  className="absolute bottom-0 left-0 w-full"
                  style={{
                    height: '80px',
                    background: 'linear-gradient(to bottom, var(--accent-primary) 0%, rgba(153, 69, 255, 0.8) 30%, rgba(153, 69, 255, 0.4) 60%, transparent 100%)',
                  }}
                />
              </div>
            )}
          </div>

          {/* Phase Cards */}
          <div className="relative">
            {phases.map((phase, index) => {
              const isExpanded = expandedPhaseIndex === index;
              // Icon glows if this phase or any previous phase is expanded
              const iconShouldGlow = expandedPhaseIndex !== null && index <= expandedPhaseIndex;
              
              const handleToggle = () => {
                if (isExpanded) {
                  setExpandedPhaseIndex(null);
                } else {
                  setExpandedPhaseIndex(index);
                }
              };
              
              return (
                <PhaseCard 
                  key={phase.number} 
                  phase={phase} 
                  index={index} 
                  isVisible={isVisible}
                  isActive={iconShouldGlow}
                  isExpanded={isExpanded}
                  onToggle={handleToggle}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Pulse Animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
            50% {
              opacity: 0.7;
              transform: translate(-50%, -50%) scale(1.2);
            }
          }
        `
      }} />
    </section>
  );
}

