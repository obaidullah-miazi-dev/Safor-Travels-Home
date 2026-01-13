import Image from "next/image";
import React from "react";
import SearchWidget from "@/app/components/SearchWidget";

export default function Hero() {
  return (
    <div className="relative min-h-[85vh] w-full flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image is here */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30 z-10"></div>
        <Image
          alt="Scenic view of boats on crystal clear water in Sylhet Bangladesh"
          className="w-full h-full object-cover object-center"
          width={300}
          height={300}
          src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
      <div className="relative z-20 container mx-auto px-4 mt-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
            Explore the Unseen
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-xl">
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
          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto drop-shadow-md">
            Experience the joy of travel with our curated tours, luxury stays,
            and seamless visa assistance.
          </p>
        </div>

        <SearchWidget />
      </div>
    </div>
  );
}
