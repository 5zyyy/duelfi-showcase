# DuelFi - Landing Page Showcase

A modern, responsive landing page for DuelFi, a decentralized trading platform built on Solana. This project showcases a complete marketing website with interactive components, animations, and a clean design system.

## Project Overview

DuelFi is a trading platform where users can engage in head-to-head trading duels with meme coins on Solana. This landing page demonstrates the platform's features, tokenomics, roadmap, and user interface.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB (for waitlist functionality)
- **Icons**: Lucide React, React Icons

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Components**: Animated sections with scroll-triggered effects
- **Waitlist System**: MongoDB integration for email collection
- **Modern UI**: Custom design system with CSS variables
- **Performance Optimized**: Next.js Image optimization and code splitting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (if using MongoDB):
```bash
# Create a .env.local file
MONGODB_URI=your_mongodb_connection_string
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main landing page
│   ├── faq/              # FAQ page
│   └── legal/            # Legal pages
├── components/            # React components
│   ├── NavBar.tsx        # Navigation bar
│   ├── HeroSection.tsx   # Hero section
│   ├── Footer.tsx        # Footer component
│   └── ...               # Other section components
└── lib/                  # Utility functions
    ├── actions/          # Server actions
    └── mongodb/         # Database connection
```

## Build for Production

```bash
npm run build
npm start
```

## Notes

This is a showcase project for client presentation. All external links and contract addresses have been removed for demonstration purposes.

**Important**: The waitlist functionality will not work in the live demo site as the MongoDB database connection is not available. The waitlist form is displayed for visual purposes only.
