import Image from "next/image";
import Hero from "@/app/components/Hero";
import PartnerLogos from "@/app/components/PartnerLogos";
import TrendingDestinations from "@/app/components/TrendingDestinations";
import MissionVision from "@/app/components/MissionVision";
import Hotels from "@/app/components/Hotels";

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerLogos />
      <TrendingDestinations />
      <MissionVision />
      <Hotels />
    </div>
  );
}
