'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Send, Users, AtSign } from 'lucide-react';
import { addToWaitlist } from '@/lib/actions/waitlist';

// Animated counter component for waitlist count
const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span ref={ref} style={{ fontFamily: 'var(--font-mono)' }}>
      {count}
    </span>
  );
};

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Mock waitlist count - will be replaced with real data later
  const waitlistCount = 67;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await addToWaitlist(email, telegram);
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message,
        });
        // Clear form on success
        setEmail('');
        setTelegram('');
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="waitlist"
      ref={sectionRef}
      className={`py-16 md:py-24 bg-[var(--bg-primary)] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Waitlist Container - All content inside */}
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-6 md:p-8">
          {/* Section Title */}
          <div className="text-center mb-6">
            <h3
              className="text-sm md:text-base font-semibold text-[var(--accent-primary)] uppercase tracking-wider mb-4"
              style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.05em' }}
            >
              Be Among the First
            </h3>
          </div>

          {/* Headline */}
          <div className="text-center mb-4">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--fg-primary)] mb-3 tracking-tight"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              Join the DuelFi Waitlist
            </h2>
          </div>

          {/* Description */}
          <div className="text-center mb-6 md:mb-8">
            <p
              className="text-sm md:text-base text-[var(--fg-secondary)] max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              DuelFi is launching soon. Join our waitlist to get early access to
              the platform, exclusive updates, and priority access when we go
              live. Be ready to trade, duel, and dominate from day one.
            </p>
          </div>

          {/* Status Message */}
          <div className="text-center mb-6">
            <p
              className="text-xs md:text-sm text-[var(--fg-tertiary)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              MVP launching soon. Join now to secure your spot.
            </p>
          </div>

          {/* Waitlist Count */}
          <div className="flex items-center justify-center gap-2 mb-8 md:mb-10">
            <Users className="w-5 h-5 text-[var(--accent-cyan)]" strokeWidth={2} />
            <p
              className="text-sm md:text-base text-[var(--fg-secondary)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <AnimatedCounter target={waitlistCount} /> traders already waiting
            </p>
          </div>

          {/* Waitlist Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[var(--fg-secondary)] mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Email Address <span className="text-[var(--accent-danger)]">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--fg-tertiary)]" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--fg-primary)] placeholder:text-[var(--fg-tertiary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
            </div>

            {/* Telegram Field */}
            <div>
              <label
                htmlFor="telegram"
                className="block text-sm font-medium text-[var(--fg-secondary)] mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Telegram Username <span className="text-[var(--fg-tertiary)] text-xs">(optional)</span>
              </label>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--fg-tertiary)]" />
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={telegram}
                  onChange={(e) => setTelegram(e.target.value)}
                  placeholder="telegram_username"
                  className="w-full pl-11 pr-4 py-3 bg-[var(--bg-tertiary)] border border-[var(--border-primary)] rounded-[var(--radius-md)] text-[var(--fg-primary)] placeholder:text-[var(--fg-tertiary)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>
              <p
                className="mt-1 text-xs text-[var(--fg-tertiary)]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                For community access and updates
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-[var(--accent-primary)] rounded-[var(--radius-md)] hover:bg-[var(--accent-primary-hover)] transition-all duration-200 hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  <span>Joining...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" strokeWidth={2} />
                  <span>Join Waitlist Now</span>
                </>
              )}
            </button>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-[var(--radius-md)] text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-[var(--accent-success)]/20 text-[var(--accent-success)] border border-[var(--accent-success)]/30'
                    : 'bg-[var(--accent-danger)]/20 text-[var(--accent-danger)] border border-[var(--accent-danger)]/30'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

