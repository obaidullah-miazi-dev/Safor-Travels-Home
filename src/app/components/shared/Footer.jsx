import React from "react";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { Facebook, Twitter, Instagram, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src={Logo}
                alt="Safor Travels Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Your trusted partner for exploring Bangladesh and the world. We
              make travel simple, affordable, and memorable.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors"
                href="#"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors"
                href="#"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-colors"
                href="#"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* Links 1 */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>
          {/* Links 2 */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6">
              Support
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
                  href="#"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold text-lg mb-6">
              Newsletter
            </h4>
            <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
              Subscribe for latest updates and exclusive offers.
            </p>
            <div className="flex flex-col gap-2">
              <input
                className="w-full px-4 py-3 rounded-lg bg-background-light dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
                placeholder="Your email address"
                type="email"
              />
              <button className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Safor Travels Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400 text-sm">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" /> Dhaka, Bangladesh
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
