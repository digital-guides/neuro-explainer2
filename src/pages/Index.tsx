import HeroSection from "@/components/advertorial/HeroSection";
import StorytellingSection from "@/components/advertorial/StorytellingSection";
import NotYourFaultSection from "@/components/advertorial/NotYourFaultSection";
import NervousSystemSection from "@/components/advertorial/NervousSystemSection";
import ActivationFlow from "@/components/advertorial/ActivationFlow";
import ScientificSection from "@/components/advertorial/ScientificSection";
import FunctionsChips from "@/components/advertorial/FunctionsChips";
import InsightBox from "@/components/advertorial/InsightBox";
import CTASection from "@/components/advertorial/CTASection";
import LegalFooter from "@/components/advertorial/LegalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-0">
        <HeroSection />
        <StorytellingSection />
        <NotYourFaultSection />
        <NervousSystemSection />
        <ActivationFlow />
        <ScientificSection />
        <FunctionsChips />
        <InsightBox />
        <CTASection />
      </main>
      <LegalFooter />
    </div>
  );
};

export default Index;
