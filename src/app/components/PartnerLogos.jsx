import React from "react";
import Marquee from "react-fast-marquee";

export default function PartnerLogos() {
  return (
    <div className="bg-white dark:bg-slate-900 py-10 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <Marquee autoFill>
            <div className="flex gap-12 justify-center">
              <div className="flex items-center gap-2 text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">airlines</span>{" "}
                Biman Bangladesh
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">flight</span>{" "}
                Emirates
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">apartment</span>{" "}
                Hilton
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">hotel</span>{" "}
                Marriott
              </div>
              <div className="flex items-center gap-2 text-xl font-bold text-slate-400 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined">
                  
                </span>{" "}
                Agoda
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
