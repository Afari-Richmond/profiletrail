import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { ProductPanel } from "@/components/landing/ProductPanel";
import { StatementSection } from "@/components/landing/StatementSection";
import { FeatureCarousel } from "@/components/landing/FeatureCarousel";
import { TrustSection } from "@/components/landing/TrustSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductPanel />
        <StatementSection eyebrow="The problem">
          Employment records get lost in email threads, paper files, and HR
          systems that disappear the day you leave.
        </StatementSection>
        <FeatureCarousel />
        <StatementSection tone="dark" eyebrow="How it works" id="how-it-works">
          Issue → Sign → Share → Verify. One workflow, independently checkable
          at every step.
        </StatementSection>
        <TrustSection />
      </main>
      <Footer />
    </>
  );
}
