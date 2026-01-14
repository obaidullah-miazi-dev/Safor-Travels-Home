"use client";
import SearchWidget from "./SearchWidget";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef();
  const badge = useRef();
  const title = useRef();
  const description = useRef();
  const searchWidget = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badge.current, {
        y: -20,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          title.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
          },
          "-=0.4"
        )
        .from(
          description.current,
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          searchWidget.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.4"
        );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative py-36 min-h-[85vh] w-full flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="https://res.cloudinary.com/deur1k8sd/video/upload/v1768366113/nature_pjin1k.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 mt-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span
            ref={badge}
            className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm"
          >
            Explore the Unseen
          </span>

          <h1
            ref={title}
            className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight drop-shadow-xl font-serif"
          >
            Discover the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-l from-teal-400 to-white">
              Beauty
            </span>{" "}
            of <br className="hidden md:block" />{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-white">
              Bangladesh
            </span>{" "}
            & Beyond
          </h1>

          <p
            ref={description}
            className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto drop-shadow-md"
          >
            Experience the joy of travel with our curated tours, luxury stays,
            and seamless visa assistance.
          </p>
        </div>

        <div ref={searchWidget}>
          <SearchWidget />
        </div>
      </div>
    </div>
  );
}
