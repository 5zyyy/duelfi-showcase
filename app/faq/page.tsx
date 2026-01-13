'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is DuelFi?',
      answer: 'DuelFi is a decentralized trading platform built on Solana that allows users to engage in head-to-head trading duels with meme coins. Users can wager SOL tokens, compete against other traders, and climb the leaderboard based on their trading performance.',
    },
    {
      question: 'How do trading duels work?',
      answer: 'Trading duels are competitive matches where two traders compete to achieve the best PNL (Profit and Loss) percentage within a set time period. Each trader wagers SOL tokens, and the winner takes the pot (minus platform fees). Your performance is tracked and contributes to your ranking on the leaderboard.',
    },
    {
      question: 'What tokens can I trade?',
      answer: 'DuelFi focuses on meme coins available on the Solana blockchain. The specific tokens available for trading duels will be determined by the platform and may change over time. Always verify the token contract address before trading.',
    },
    {
      question: 'How much does it cost to participate?',
      answer: 'To participate in a trading duel, you need to wager SOL tokens. The minimum wager amount varies per duel. Additionally, the platform charges fees for facilitating duels, and you are responsible for Solana network gas fees for all transactions.',
    },
    {
      question: 'What are the platform fees?',
      answer: 'DuelFi charges platform fees on trading duels. The exact fee structure will be disclosed when you create or join a duel. All fees are non-refundable and are deducted from the wager pool. You are also responsible for Solana blockchain transaction fees (gas fees).',
    },
    {
      question: 'How do I connect my wallet?',
      answer: 'DuelFi is a decentralized platform that requires a Solana-compatible wallet (such as Phantom, Solflare, or Backpack). When you interact with the platform, you will be prompted to connect your wallet. Make sure you have SOL tokens in your wallet to cover wagers and transaction fees.',
    },
    {
      question: 'Is my wallet safe?',
      answer: 'DuelFi is a decentralized platform, which means you maintain full control of your wallet and private keys. We never have access to your private keys or funds. However, you are solely responsible for the security of your wallet. Always use reputable wallet software, never share your private keys, and be cautious of phishing attempts.',
    },
    {
      question: 'What happens if I lose a duel?',
      answer: 'If you lose a trading duel, your wager is forfeited to the winner (minus platform fees). All transactions on the blockchain are irreversible, so make sure you understand the risks before participating. Only wager funds you can afford to lose completely.',
    },
    {
      question: 'How does the ranking system work?',
      answer: 'The ranking system is based on your total wins, overall PNL percentage, and total wager volume. As you participate in more duels and improve your performance, you can climb through the ranks: Silver, Gold, Platinum, Diamond, and Legend. Higher ranks may unlock exclusive badges and benefits.',
    },
    {
      question: 'Can I withdraw my winnings immediately?',
      answer: 'Winnings from trading duels are automatically transferred to your connected wallet once a duel concludes. However, you are responsible for any Solana network fees associated with the transaction. Withdrawals are subject to blockchain confirmation times.',
    },
    {
      question: 'What is the $DUELFI token?',
      answer: 'The $DUELFI token is the native utility token of the DuelFi platform. The token has not been launched yet. When launched, it may provide various utilities within the platform ecosystem. Please note that the token has no intrinsic value and is not backed by any assets or guarantees.',
    },
    {
      question: 'Is DuelFi available in my country?',
      answer: 'DuelFi is a decentralized platform accessible globally via the internet. However, you are solely responsible for ensuring that your use of the platform complies with all applicable laws and regulations in your jurisdiction. Some jurisdictions may restrict or prohibit cryptocurrency trading activities.',
    },
    {
      question: 'What if I encounter a technical issue?',
      answer: 'If you experience technical issues with the platform, please contact our support team. However, we provide the platform "as is" and cannot guarantee uninterrupted, error-free service. We are not liable for any losses resulting from technical issues, bugs, or platform downtime.',
    },
    {
      question: 'Are there any age restrictions?',
      answer: 'Yes, you must be at least 18 years old and have the legal capacity to enter into binding agreements in your jurisdiction to use DuelFi. By using the platform, you represent and warrant that you meet these eligibility requirements.',
    },
    {
      question: 'Do I need to pay taxes on my winnings?',
      answer: 'You are solely responsible for determining and paying any taxes, duties, or fees that may apply to your use of the platform, including income taxes, capital gains taxes, and transaction taxes in your jurisdiction. We do not provide tax advice and recommend consulting with a qualified tax professional.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <NavBar />
      <main className="pt-16 md:pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold text-[var(--fg-primary)] mb-4"
              style={{ fontFamily: 'var(--font-display-heading)' }}
            >
              Frequently Asked Questions
            </h1>
            <p
              className="text-lg text-[var(--fg-secondary)]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Everything you need to know about DuelFi
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] overflow-hidden transition-all duration-200 hover:border-[var(--border-accent)]"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-4 md:px-8 md:py-5 flex items-center justify-between text-left gap-4 hover:bg-[var(--bg-elevated)] transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <h3
                    className="text-base md:text-lg font-semibold text-[var(--fg-primary)] flex-1"
                    style={{ fontFamily: 'var(--font-display-heading)' }}
                  >
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-[var(--fg-secondary)] flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 md:px-8 md:pb-5">
                    <p
                      className="text-sm md:text-base text-[var(--fg-secondary)] leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 md:mt-16">
            <div
              className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-[var(--radius-lg)] p-6 md:p-8 text-center"
            >
              <h3
                className="text-xl font-semibold text-[var(--fg-primary)] mb-4"
                style={{ fontFamily: 'var(--font-display-heading)' }}
              >
                Still have questions?
              </h3>
              <p
                className="text-[var(--fg-secondary)] mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Can't find the answer you're looking for? Please reach out to our support team.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[var(--accent-primary)] rounded-[var(--radius-md)] hover:bg-[var(--accent-primary-hover)] transition-all duration-200 hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] w-full sm:w-auto"
                  style={{ fontFamily: 'var(--font-body)' }}
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
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Support
                </div>
                <div
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-[var(--accent-primary)] rounded-[var(--radius-md)] hover:bg-[var(--accent-primary-hover)] transition-all duration-200 hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] w-full sm:w-auto"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Join Telegram
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

