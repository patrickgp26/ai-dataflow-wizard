import HeroSection from "@/components/landing/HeroSection";
import VisualProofSection from "@/components/landing/VisualProofSection";
import ArchitectureSection from "@/components/landing/ArchitectureSection";
import TargetAudienceSection from "@/components/landing/TargetAudienceSection";
import ObjectionsSection from "@/components/landing/ObjectionsSection";
import CurriculumSection from "@/components/landing/CurriculumSection";
import OfferSection from "@/components/landing/OfferSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import GuaranteeSection from "@/components/landing/GuaranteeSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

const Index = () => (
  <main className="overflow-x-hidden">
    <HeroSection />
    <VisualProofSection />
    <ArchitectureSection />
    <TargetAudienceSection />
    <ObjectionsSection />
    <CurriculumSection />
    <OfferSection />
    <TestimonialsSection />
    <GuaranteeSection />
    <FAQSection />
    <FinalCTASection />
    <footer className="py-8 text-center">
      <p className="text-xs text-muted-foreground">
        © 2026 Pipeline de Dados. Todos os direitos reservados.
      </p>
    </footer>
  </main>
);

export default Index;
