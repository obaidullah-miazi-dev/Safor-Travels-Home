import Image from "next/image";
import Hero from "@/app/components/Hero";
import PartnerLogos from "@/app/components/PartnerLogos";
import TrendingDestinations from "@/app/components/TrendingDestinations";
import MissionVision from "@/app/components/MissionVision";
import HajjUmrah from "@/app/components/HajjUmrah";
import Hotels from "@/app/components/Hotels";
import VisaAssistance from "@/app/components/VisaAssistance";
import Testimonials from "@/app/components/Testimonials";
import ContactUs from "@/app/components/ContactUs";
import CTA from "@/app/components/CTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerLogos />
      <TrendingDestinations />
      <MissionVision />
      <HajjUmrah />
      <Hotels />
      <VisaAssistance />
      <Testimonials />
      <CTA />
      <ContactUs />
    </div>
  );
}
