import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { About } from "@/components/sections/About";
import { Differentiators } from "@/components/sections/Differentiators";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { OnlineSystem } from "@/components/sections/OnlineSystem";
import { PainPoints } from "@/components/sections/PainPoints";
import { PgrPcmso } from "@/components/sections/PgrPcmso";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { SocialProof } from "@/components/sections/SocialProof";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <PgrPcmso />
        <OnlineSystem />
        <Process />
        <SocialProof />
        <Differentiators />
        <About />
        <Testimonials />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
