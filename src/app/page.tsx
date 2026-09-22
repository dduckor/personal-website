import { HeroSection } from "@/components/sections/hero";
import { MyWorkSection } from "@/components/sections/my-work";
import { PricingSection } from "@/components/sections/pricing";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MyWorkSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}