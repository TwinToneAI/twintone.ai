import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/hero";
import { IntegrationMarquee } from "@/components/marquee";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { CallToAction } from "@/components/cta";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <IntegrationMarquee />
        <Features />
        <HowItWorks />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
