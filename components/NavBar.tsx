'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const navItems = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Tokenomics', href: '#tokenomics' },
  { label: 'Utility', href: '#token-utility' },
  { label: 'Roadmap', href: '#roadmap' },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Add class to body to prevent scrolling
      document.body.classList.add('overflow-hidden');
      // Prevent scroll on touch devices
      document.documentElement.style.overflow = 'hidden';
    } else {
      // Remove class when menu closes
      document.body.classList.remove('overflow-hidden');
      document.documentElement.style.overflow = '';
    }

    // Cleanup
    return () => {
      document.body.classList.remove('overflow-hidden');
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Get navbar height dynamically (h-16 = 64px on mobile/tablet, h-20 = 80px on desktop)
      const navHeight = window.innerWidth >= 1024 ? 80 : 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled || isMobileMenuOpen
            ? 'bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-primary)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 z-50">
              <Image
                src="/icon.png"
                alt="DuelFi Logo"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10"
                priority
              />
              <span
                className="text-xl md:text-2xl font-bold text-[var(--fg-primary)]"
                style={{ fontFamily: 'var(--font-display-heading)' }}
              >
                DuelFi
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Social Icons */}
              <div className="flex items-center gap-3 ml-2">
                <div
                  className="group flex items-center justify-center w-9 h-9 rounded-full text-[var(--fg-secondary)] hover:text-[var(--accent-primary)] transition-all duration-200 hover:bg-[var(--bg-elevated)]"
                  aria-label="Join Telegram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <div
                  className="group flex items-center justify-center w-9 h-9 rounded-full text-[var(--fg-secondary)] hover:text-[var(--accent-primary)] transition-all duration-200 hover:bg-[var(--bg-elevated)]"
                  aria-label="Follow on X"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </div>

              <Link
                href="#waitlist"
                onClick={(e) => handleNavClick(e, '#waitlist')}
                className="px-4 py-2 text-sm font-semibold text-white bg-[var(--accent-primary)] rounded-[var(--radius-md)] hover:bg-[var(--accent-primary-hover)] transition-all duration-200 hover:shadow-[0_0_20px_rgba(153,69,255,0.4)]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Join Waitlist
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-[var(--fg-primary)] hover:bg-[var(--bg-elevated)] rounded-[var(--radius-md)] transition-colors duration-200 z-50"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-16 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Outside nav to avoid stacking context issues */}
      <div
        className={`lg:hidden fixed left-0 right-0 bottom-0 top-16 transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ 
          backgroundColor: '#000000',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="flex flex-col px-6 py-8 space-y-6 h-full overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-base font-medium text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors duration-200 py-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#waitlist"
            onClick={(e) => handleNavClick(e, '#waitlist')}
            className="mt-4 px-6 py-3 text-base font-semibold text-white bg-[var(--accent-primary)] rounded-[var(--radius-md)] hover:bg-[var(--accent-primary-hover)] transition-all duration-200 text-center"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Join Waitlist
          </Link>
          
          {/* Mobile Social Icons */}
          <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-[var(--border-primary)]">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition-all duration-200 hover:bg-[var(--bg-elevated)]"
              aria-label="Join Telegram"
            >
              <svg
                className="w-6 h-6 text-[var(--fg-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </div>
            <div
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-primary)] hover:border-[var(--accent-primary)] transition-all duration-200 hover:bg-[var(--bg-elevated)]"
              aria-label="Follow on X"
            >
              <svg
                className="w-6 h-6 text-[var(--fg-secondary)] hover:text-[var(--accent-primary)] transition-colors duration-200"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
