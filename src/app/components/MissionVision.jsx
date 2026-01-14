"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Plane, Check, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MissionVision() {
  const container = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useGSAP(
    () => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        x: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section className="py-36 overflow-hidden" ref={container}>
      <div className="max-w-9/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 items-center">
          {/* Text Content */}
          <div
            ref={textRef}
            className="relative z-10 lg:pr-10 order-2 lg:order-1"
          >
            <div className="bg-background-light  p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 dark:border-slate-700 relative">
              <div className="absolute -top-6 -left-6 bg-accent text-white p-4 rounded-xl shadow-lg hidden md:block">
                <Plane className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-extrabold  mb-6">
                Redefining Travel Experiences Since 2015
              </h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                At Safor Travels, our mission is simple: to make world-class
                travel accessible to everyone. We believe travel is more than
                just moving from place to place—it&apos;s about the joy of
                discovery, the warmth of new cultures, and the memories you
                create.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-slate-400 font-medium">
                    Personalized itineraries for every traveler.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-slate-400 font-medium">
                    24/7 Support during your entire journey.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 dark:bg-green-900 p-1 rounded-full">
                    <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="text-slate-400 font-medium">
                    Best price guarantee on flights and hotels.
                  </span>
                </li>
              </ul>
              <button className="text-primary font-bold hover:text-blue-700 flex items-center gap-2">
                Learn more about us <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Image Collage */}
          <div
            ref={imageRef}
            className="relative order-1 lg:order-2 h-125 w-full"
          >
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-slate-200 rounded-3xl overflow-hidden shadow-lg rotate-3 z-0">
              <Image
                alt="Traveler looking at map in a city"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzt-8tAB7okr4aGng2JR62Q7UvhurkmD2mbWSEOjXlDQQr0vCco6zlf-H-qkjwcDP01WoNov6ElzSTArA1x4RDZLVDXUzFTT51M8BojYWLE_NtTqhBrTi87v0ad94MdI0KgPSCD2DHJ8IUMZ-nVOQ3VM57cZRig7NMyPAv6DHVaja0AetUYE8nV4K_P6BJjQ2Sw7ZjqCsJHI3wq3fLXTB0X_1RVrpUhWZzf-fBjxJ9A0xfLhu_iAmn3O_XiuQPjbfHNtZuktDigsdA"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 bg-slate-300 rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white ">
              <Image
                alt="Adventurous jeep tour in the desert"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwplPZ5ZapcosIXrtqPnLMxFLLF3-d8juPGNWHXn16iAqCm8Y35D-qWLls_y_-7NmudTXIqYfo9XA80qJeelt0dCNLexGOxp-H17EBHaF9MqQoTAo_AuhpdAi12TTBsPyzWAfXpUMiWyIoWd9Ss1oqTerdRwSvrud5x6Eu9Abs1DTOKjPQHL8zxe0lRmLnz1NwydNsRbhxQ1x_RwXMa7tmoNqFy_ZVG2O05DmA1DE1x_UpxFksv8vUCluh0WOMzbDxK8IW_oYXm_jX"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
