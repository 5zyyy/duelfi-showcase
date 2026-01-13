'use client';

import { useState } from 'react';

export default function Alert() {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed z-50 transition-all duration-300 ease-in-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-full pointer-events-none'
      } ${
        // Mobile: stretched across bottom with padding, Desktop: bottom right
        'left-0 right-0 bottom-0 px-4 pb-4 md:left-auto md:right-4 md:bottom-4 md:px-0 md:pb-0 md:w-auto md:max-w-md lg:max-w-lg'
      }`}
    >
      <div
        className="flex items-start gap-3 px-4 py-3 md:px-6 md:py-4 bg-[var(--bg-secondary)] border-t md:border border-[var(--accent-warning)] rounded-[var(--radius-lg)] md:rounded-[var(--radius-md)] w-full md:w-auto"
      >
        {/* Warning Icon */}
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-[var(--accent-warning)] flex-shrink-0 mt-0.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>

        {/* Message */}
        <div className="flex-1 min-w-0">
          <p
            className="text-sm md:text-base font-medium text-[var(--accent-warning)] leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <span className="font-semibold">Warning:</span> DuelFi token has not launched yet. Do not purchase any tokens claiming to be DuelFi.
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 p-1 text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-elevated)] rounded-[var(--radius-sm)] transition-all duration-200 ml-2"
          aria-label="Dismiss alert"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

