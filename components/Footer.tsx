'use client';

import Link from 'next/link';
import { FaXTwitter, FaTelegram, FaDiscord } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Left Column: About */}
          <div className="lg:col-span-1">
            <h3
              className="text-xl font-bold text-[var(--fg-primary)] mb-4"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              DuelFi
            </h3>
            <p
              className="text-sm text-[var(--fg-secondary)] leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              The ultimate meme coin trading arena on Solana. Trade, duel, and dominate.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Platform Links */}
              <div>
                <h4
                  className="text-sm font-semibold text-[var(--fg-primary)] mb-4 uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Platform
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#how-it-works"
                      className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#roadmap"
                      className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Roadmap
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#ranking"
                      className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Leaderboard
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Token Links */}
              <div>
                <h4
                  className="text-sm font-semibold text-[var(--fg-primary)] mb-4 uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Token
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#tokenomics"
                      className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Tokenomics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#token-utility"
                      className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Utility
                    </Link>
                  </li>
                  <li>
                    <span
                      className="text-sm text-[var(--fg-tertiary)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Buy $DUELFI <span className="text-xs">(Coming Soon)</span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h4
                  className="text-sm font-semibold text-[var(--fg-primary)] mb-4 uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Resources
                </h4>
                <ul className="space-y-3">
                  <li>
                    <span
                      className="text-sm text-[var(--fg-tertiary)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Documentation <span className="text-xs">(Coming Soon)</span>
                    </span>
                  </li>
                  <li>
                    <span
                      className="text-sm text-[var(--fg-tertiary)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Whitepaper <span className="text-xs">(Coming Soon)</span>
                    </span>
                  </li>
                  <li>
                    <span
                      className="text-sm text-[var(--fg-tertiary)]"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Blog <span className="text-xs">(Coming Soon)</span>
                    </span>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Legal & Social */}
          <div>
            {/* Legal Links */}
            <div className="mb-8">
              <h4
                className="text-sm font-semibold text-[var(--fg-primary)] mb-4 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/legal#terms"
                    className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal#privacy"
                    className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal#disclaimer"
                    className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4
                className="text-sm font-semibold text-[var(--fg-primary)] mb-4 uppercase tracking-wider"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Social
              </h4>
              <ul className="space-y-3">
                <li>
                  <span
                    className="flex items-center gap-2 text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <FaXTwitter className="w-4 h-4" />
                    X (Twitter)
                  </span>
                </li>
                <li>
                  <span
                    className="flex items-center gap-2 text-sm text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <FaTelegram className="w-4 h-4" />
                    Telegram
                  </span>
                </li>
                <li>
                  <span
                    className="flex items-center gap-2 text-sm text-[var(--fg-tertiary)]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <FaDiscord className="w-4 h-4" />
                    Discord <span className="text-xs">(Coming Soon)</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--border-primary)] pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            {/* Copyright */}
            <p
              className="text-xs text-[var(--fg-tertiary)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              © {currentYear} DuelFi. All rights reserved.
            </p>

            {/* Disclaimer & Chain */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <p
                className="text-xs text-[var(--fg-tertiary)]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Trading involves risk. Only trade what you can afford to lose.
              </p>
              <p
                className="text-xs text-[var(--fg-tertiary)]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Built on Solana
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

