"use client";

import React, { useState } from "react";
import {
  Plane,
  Hotel,
  Package,
  FileText,
  MapPin,
  Calendar,
  Users,
  Search,
} from "lucide-react";

export default function SearchWidget() {
  const [activeTab, setActiveTab] = useState("packages");

  return (
    <div className="rounded-2xl shadow-2xl p-2 md:p-6 max-w-5xl mx-auto backdrop-blur-md border border-white/20">
      {/* Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar border-b border-slate-200 dark:border-slate-700 px-2 gap-2 md:gap-8 mb-6">
        <button
          onClick={() => setActiveTab("flights")}
          className={`group flex items-center gap-2 px-4 py-3 border-b-[3px] transition-all ${
            activeTab === "flights"
              ? "border-primary bg-primary/5 rounded-t-lg"
              : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
          }`}
        >
          <Plane
            className={`w-5 h-5 ${
              activeTab === "flights"
                ? "text-primary"
                : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
            }`}
          />
          <span
            className={`font-bold text-sm ${
              activeTab === "flights"
                ? "text-primary"
                : "text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-white"
            }`}
          >
            Flights
          </span>
        </button>
        <button
          onClick={() => setActiveTab("hotels")}
          className={`group flex items-center gap-2 px-4 py-3 border-b-[3px] transition-all ${
            activeTab === "hotels"
              ? "border-primary bg-primary/5 rounded-t-lg"
              : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
          }`}
        >
          <Hotel
            className={`w-5 h-5 ${
              activeTab === "hotels"
                ? "text-primary"
                : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
            }`}
          />
          <span
            className={`font-bold text-sm ${
              activeTab === "hotels"
                ? "text-primary"
                : "text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-white"
            }`}
          >
            Hotels
          </span>
        </button>
        <button
          onClick={() => setActiveTab("packages")}
          className={`group flex items-center gap-2 px-4 py-3 border-b-[3px] transition-all ${
            activeTab === "packages"
              ? "border-primary bg-primary/5 rounded-t-lg"
              : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
          }`}
        >
          <Package
            className={`w-5 h-5 ${
              activeTab === "packages"
                ? "text-primary"
                : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
            }`}
          />
          <span
            className={`font-bold text-sm ${
              activeTab === "packages"
                ? "text-primary"
                : "text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-white"
            }`}
          >
            Packages
          </span>
        </button>
        <button
          onClick={() => setActiveTab("visa")}
          className={`group flex items-center gap-2 px-4 py-3 border-b-[3px] transition-all ${
            activeTab === "visa"
              ? "border-primary bg-primary/5 rounded-t-lg"
              : "border-transparent hover:border-slate-300 dark:hover:border-slate-600"
          }`}
        >
          <FileText
            className={`w-5 h-5 ${
              activeTab === "visa"
                ? "text-primary"
                : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
            }`}
          />
          <span
            className={`font-bold text-sm ${
              activeTab === "visa"
                ? "text-primary"
                : "text-slate-500 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-white"
            }`}
          >
            Visa
          </span>
        </button>
      </div>
      {/* Inputs Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-4 relative group">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1 ml-1">
            Destination
          </label>
          <div className="flex items-center bg-background-light   rounded-xl h-14 px-4 border border-primary transition-all">
            <MapPin className="w-5 h-5 text-slate-400 mr-3" />
            <input
              className="bg-transparent border-none w-full text-slate-300 placeholder-slate-400 font-semibold focus:ring-0 p-0 outline-none"
              placeholder="Where do you want to go?"
              type="text"
            />
          </div>
        </div>
        <div className="md:col-span-3 relative group">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1 ml-1">
            Date
          </label>
          <div className="flex items-center bg-background-light rounded-xl h-14 px-4 border border-primary transition-all">
            <Calendar className="w-5 h-5 text-slate-400 mr-3" />
            <input
              className="bg-transparent border-none w-full text-slate-300 placeholder-slate-400 font-semibold focus:ring-0 p-0 outline-none"
              placeholder="Add dates"
              type="text"
            />
          </div>
        </div>
        <div className="md:col-span-3 relative group">
          <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-1 ml-1">
            Travelers
          </label>
          <div className="flex items-center bg-background-light rounded-xl h-14 px-4 border border-primary transition-all">
            <Users className="w-5 h-5 text-slate-400 mr-3" />
            <input
              className="bg-transparent border-none w-full text-slate-300 font-semibold focus:ring-0 p-0 placeholder-slate-400 outline-none"
              placeholder="2 Guests"
              type="text"
            />
          </div>
        </div>
        <div className="md:col-span-2 flex items-end">
          <button className="w-full h-14 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-primary/25 flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer">
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
