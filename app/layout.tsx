import type { Metadata } from "next";
import { Inter, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

// Primary Font (Body & UI): Inter
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Display Font (Headings): Geist Sans (already in project)
const geistSans = Geist({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Monospace Font (Data/Code): JetBrains Mono
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "DuelFi - Meme Coin Trading Duels on Solana | Trade, Duel, Win",
  description: "Challenge traders in high-stakes Solana meme coin duels. Wager SOL, prove your skills, and claim victory. Only the best survive. Join DuelFi now.",
  keywords: [
    "Solana meme coin trading",
    "Crypto trading duels",
    "PNL competition",
    "Solana trading platform",
    "Meme coin wager",
    "Trading competition",
    "Solana DeFi",
  ],
  authors: [{ name: "DuelFi" }],
  openGraph: {
    title: "DuelFi - Meme Coin Trading Duels on Solana",
    description: "Challenge traders in high-stakes Solana meme coin duels. Wager SOL, prove your skills, and claim victory. Only the best survive.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DuelFi - Meme Coin Trading Duels on Solana",
    description: "Challenge traders in high-stakes Solana meme coin duels. Wager SOL, prove your skills, and claim victory.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
