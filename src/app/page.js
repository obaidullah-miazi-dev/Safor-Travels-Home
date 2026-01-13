import Image from "next/image";
import Hero from "@/app/components/Hero";
import PartnerLogos from "@/app/components/PartnerLogos";

export default function Home() {
  return (
    <div>
      <Hero />
      <PartnerLogos />
    </div>
  );
}
