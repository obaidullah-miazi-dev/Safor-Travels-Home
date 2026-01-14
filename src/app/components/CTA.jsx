"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const container = useRef();
  const contentRef = useRef();

  useGSAP(
    () => {
      gsap.from(contentRef.current.children, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section className="relative py-36 overflow-hidden" ref={container}>
      <div className="absolute inset-0 z-0">
        <Image
          alt="Wide panoramic view of a tropical beach"
          className="w-full h-full  object-center"
          data-alt="Wide panoramic view of a tropical beach"
          fill
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtlea8onZWRJlkZEa9ejBBbVe-Yvb3Ye089gGr4cg1dVanbHI7NGYig4DL4NIF5cCnLLsLNXsRR_HA4P9SOZJrMe3iLbOceRorwbOnZ33rnTAbQpgCFfbITOpCBVkIb_g60I-2-Zzy6Xo6ZwFqtlSIp6yuxKvimT_2Svo8QM6BZ_tvs8tRxnUp_5IaveIh1vMvPCDTS_0lexEXzMQpaVQJZjWvoGWJKdvxeWhU9YP2qBjirRZLO7OuaflHwKw8vXpVbfoDBdWO7FyK"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
      </div>
      <div
        ref={contentRef}
        className="relative z-10 max-w-4xl mx-auto text-center px-4"
      >
        <h2 className="text-4xl md:text-5xl font-black font-serif text-white mb-6">
          Ready to Plan Your Custom Trip?
        </h2>
        <p className="text-xl text-white/90 mb-10 font-medium">
          Get a personalized itinerary tailored to your preferences and budget.
          No hidden fees, just pure adventure.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-primary px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:bg-slate-100 transition-colors">
            Plan My Trip
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-colors">
            Contact Agent
          </button>
        </div>
      </div>
    </section>
  );
}
