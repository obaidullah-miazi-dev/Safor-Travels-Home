import Image from "next/image";
import Hero from "@/app/components/Hero";
import PartnerLogos from "@/app/components/PartnerLogos";
import TrendingDestinations from "@/app/components/TrendingDestinations";

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerLogos />
      <TrendingDestinations />
    </div>
  );
}
