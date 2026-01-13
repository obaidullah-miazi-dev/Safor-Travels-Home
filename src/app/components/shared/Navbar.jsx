import React from "react";
import Logo from '@/assets/Logo.png'
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="text-primary p-2 bg-primary/10 rounded-lg"></div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              <Image className="w-26" src={Logo} width={60} height={60} alt="Safor Logo"/>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
              href="#"
            >
              Home
            </a>
            <a
              className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
              href="#packages"
            >
              Packages
            </a>
            <a
              className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
              href="#hotels"
            >
              Hotels
            </a>
            <a
              className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
              href="#"
            >
              Visa Assistance
            </a>
            <a
              className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-primary hover:bg-blue-600 hover:text-white border-2 border-black/0 shadow-sm px-5 py-2 rounded-md  text-sm font-bold transition-all">
              Login
            </button>
            <button className="bg-primary hover:bg-blue-600 hover:text-white border-2 border-blue-600 px-5 py-2 rounded-md  text-sm font-bold transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
