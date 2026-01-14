"use client";
import React, { useState } from "react";
import Logo from "@/assets/Logo.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full  backdrop-blur-md">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <Image
              className="w-26"
              src={Logo}
              width={150}
              height={60}
              alt="Safor Logo"
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold  transition-colors">
            <a href="#">Home</a>
            <a href="#packages">Packages</a>
            <a href="#hotels">Hotels</a>
            <a href="#">Visa Assistance</a>
            <a href="#">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button className="bg-primary hover:bg-blue-600 hover:text-white border-2 border-black/0 shadow-sm px-5 py-2 rounded-md text-white  text-sm font-bold transition-all">
              Login
            </button>
            <button className=" hover:bg-blue-600 hover:text-white border-2 border-blue-600 px-5 py-2 rounded-md  text-sm font-bold transition-all">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden  border-t border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 shadow-lg">
          <div className="flex flex-col space-y-4 mt-4 text-base font-semibold hover:text-primary transition-colors">
            <a href="#" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#packages" onClick={() => setIsOpen(false)}>
              Packages
            </a>
            <a href="#hotels" onClick={() => setIsOpen(false)}>
              Hotels
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              Visa Assistance
            </a>
            <a href="#" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-center mb-2">
                <ThemeToggle />
              </div>
              <button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary px-5 py-3 rounded-lg text-sm font-bold transition-all">
                Login
              </button>
              <button className="w-full bg-primary hover:bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-bold transition-all shadow-md shadow-primary/20">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
