import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import RankingSystemSection from '@/components/RankingSystemSection';
import TokenomicsSection from '@/components/TokenomicsSection';
import TokenUtilitySection from '@/components/TokenUtilitySection';
import RoadmapSection from '@/components/RoadmapSection';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';
import Alert from '@/components/Alert';

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <NavBar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <RankingSystemSection />
      <TokenomicsSection />
      <TokenUtilitySection />
      <RoadmapSection />
      <WaitlistSection />
      <Footer />
      <Alert />
    </div>
  );
}
