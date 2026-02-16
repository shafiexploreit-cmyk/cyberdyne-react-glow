import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MarqueeBanner from "@/components/home/MarqueeBanner";
import IntroSection from "@/components/home/IntroSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Index = () => (
  <Layout>
    <HeroSection />
    <MarqueeBanner />
    <IntroSection />
    <ServicesOverview />
    <TestimonialsSection />
  </Layout>
);

export default Index;
