import React from "react";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import { LiveDashboard } from "@/components/live-dashboard";
import SdksSection from "@/components/sdks-section";
import CodeExamplesSection from "@/components/code-examples-section";
import FrameworksSection from "@/components/frameworks-section";
import DocumentationSection from "@/components/documentation-section";
import CommunitySection from "@/components/community-section";
import DownloadSection from "@/components/download-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header />
      <HeroSection />
      <StatsSection />
      <LiveDashboard />
      <SdksSection />
      <CodeExamplesSection />
      <FrameworksSection />
      <DocumentationSection />
      <CommunitySection />
      <DownloadSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
