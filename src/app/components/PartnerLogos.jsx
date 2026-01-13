import React from "react";
import Brands from "./Brands";

export default function PartnerLogos() {
  return (
    <div className="bg-white dark:bg-white/70 py-10 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <Brands />
        </div>
      </div>
    </div>
  );
}
