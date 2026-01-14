"use client";
import React, { useRef } from "react";
import DestinationCard from "./DestinationCard";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcDL-M5gPDJoK8qIvp0kJUNeSVG1Vt5ZFEuO7D0znM76pVu2_f3Omy0CwvuOfTjfJunHYZd7Doj1agnUr4V9Z_yt59mkrozpDGm_94Nd7uCn05L1rtNGuwKxra_4b31xWp7D2CJNCTHZtWgIB44NJNolNSDQSHruxqCf7zWgHsowhTTWbE2Uo66HA9kU6yngYODXKol0I9R1LhrusqympjiILOvOZHXSsblyg-COSvt6f0nSGvnvgAEvsBlkTNOFsvsQQ4l0SebRGM",
    alt: "Beautiful sea beach with golden sand in Cox's Bazar",
    duration: "3 Days / 2 Nights",
    title: "Cox's Bazar",
    location: "Bangladesh",
    price: 150,
    originalPrice: 200,
    rating: 4.9,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCxUD9uSEvbMFkNkfAZs1BRy-rQx2rqHASTy6QgBiojZb2tbMN7ZJYMj0oQKppaA96sPUofG4heI7j0kRUaVFHOwJ2nDc94yo9oVlS1sjEy4HNI69o6eCc5-J-2u3ZqjDXQ72xACnqalQU1V5-k_qDaTSyHbls_X5GrTd1tru6fi-WMRecfNWQ1nja3IrHrAX3vg6Gm-sOBffjZ-zhM_9sVMyNacM5ocTf2nL0xVtpCXK84i9O7jNUEGlXUrEcNwWNnTNY-f2rgje_P",
    alt: "Traditional temple architecture in Bali Indonesia",
    duration: "5 Days / 4 Nights",
    title: "Bali Escape",
    location: "Indonesia",
    price: 550,
    isBestSeller: true,
    rating: 4.8,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRrK3oauvMI6wVj1lhymJrhEniIJhlWpNh0HndAQ5Ibbfw8XdI7K-_SuQGqXNbTjLbgDkfTYbKQr8MQFg5voKBnB6Jm96NR4RzVpIg7Oda189h13D2zJEqfe95tYHYyAgtIZf06i-boIj5oQNGL9oG-1f0x7wmyPEt86Fm_biO5RKGuO1QCX-XKSTmN9VRl1mISHe5q4esNAhAor_QSH7di6F3WBvjFmaFjPYZEmxKUniL3ATDLlp2mi_YDIJEFaf-Ornre0tHLJRT",
    alt: "Futuristic skyline of Dubai during sunset",
    duration: "4 Days / 3 Nights",
    title: "Dubai City Tour",
    location: "UAE",
    price: 420,
    rating: 3.7,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARl_82bNDB-jG4zJU_kmVONKpLS3X8hwMOv18NB9_32ljgN2eYDRZbQwvFyywcAZZgrvyQ3ujDX5FsPVlRemeMDdwG2eBAuoEHOsd8BwQH5mqaeK5w_Fupw5YU5M1qnq-tvyn-Q6BZ7iOIwhKhs4X_BUOMxKpy0YyR1TSshgV3hv0yQoST4ynE3rayuF1sCNyWxQwwaypIKfxfcrktusHoYY-rbLRqvdkiAkWLDM4-3MbiiTT7HB0cnz9i74jFUbz_5u9-yvQABFuu",
    alt: "Green tea gardens and hills in Sylhet Bangladesh",
    duration: "2 Days / 1 Night",
    title: "Sylhet Nature",
    location: "Bangladesh",
    price: 120,
    rating: 4.7,
  },
];

export default function TrendingDestinations() {
  const container = useRef();
  const headerRef = useRef();
  const gridRef = useRef();

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      const cards = gridRef.current.children;
      gsap.from(cards, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section
      className="py-36 max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8"
      id="packages"
      ref={container}
    >
      <div
        ref={headerRef}
        className="flex flex-col md:flex-row justify-between items-start mb-12 gap-4"
      >
        <div>
          <h2 className="text-4xl font-extrabold tracking-tight font-serif mb-2">
            Trending Destinations
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Curated tours for your next adventure.
          </p>
        </div>
        <a
          className="flex items-center gap-1 text-primary font-bold hover:underline decoration-2 underline-offset-4"
          href="#"
        >
          View all packages <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {destinations.map((dest, index) => (
          <div key={index}>
            <DestinationCard {...dest} />
          </div>
        ))}
      </div>
    </section>
  );
}
