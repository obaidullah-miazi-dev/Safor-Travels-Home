"use client";
import React, { useRef } from "react";
import {
    Moon,
    HeartHandshake,
    FileCheck,
    Plane,
    Hotel,
    Users,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HajjUmrah() {
    const container = useRef();
    const headerRef = useRef();
    const cardsRef = useRef();
    const trustRef = useRef();

    useGSAP(
        () => {
            // Header Animation
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                },
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            });

            // Cards Animation
            const cards = cardsRef.current.children;
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 80%",
                },
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out",
            });

            // Trust Block Animation
            gsap.from(trustRef.current, {
                scrollTrigger: {
                    trigger: trustRef.current,
                    start: "top 80%",
                },
                scale: 0.95,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            });
        },
        { scope: container }
    );

    const features = [
        {
            icon: <Moon className="w-6 h-6 text-amber-500" />,
            title: "Complete Umrah Packages",
            description: "Tailored spiritual journeys with guided rituals.",
        },
        {
            icon: <FileCheck className="w-6 h-6 text-amber-500" />,
            title: "Visa & Documentation",
            description: "Hassle-free processing for your peace of mind.",
        },
        {
            icon: <Hotel className="w-6 h-6 text-amber-500" />,
            title: "Premium Accommodation",
            description: "Stay close to the Haram for ease and comfort.",
        },
        {
            icon: <Plane className="w-6 h-6 text-amber-500" />,
            title: "Travel Coordination",
            description: "Seamless flight and ground transport arrangements.",
        },
    ];

    return (
        <section className="py-36" ref={container}>
            <div className="max-w-11/12 mx-auto px-4">
                {/* Section Header */}
                <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold  mb-4">
                        Hajj & Umrah Services
                    </h2>
                    <p className="text-lg text-slate-600 font-medium italic">
                        “Guiding you on your sacred journey with care, trust, and devotion.”
                    </p>
                </div>

                {/* Feature Highlights */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
                >
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-t-4 border-amber-500/20 hover:border-amber-500"
                        >
                            <div className="mb-4 bg-amber-50 w-12 h-12 rounded-full flex items-center justify-center">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Trust & Guidance Block */}
                <div
                    ref={trustRef}
                    className="bg-emerald-900/20 rounded-3xl p-8 md:p-12 lg:p-16 border border-emerald-900/10 dark:border-emerald-500/20"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <HeartHandshake className="w-8 h-8 text-emerald-700 dark:text-emerald-400" />
                                <h3 className="text-2xl md:text-3xl font-serif font-bold ">
                                    Your Trusted Companion
                                </h3>
                            </div>
                            <p className="text-slate-500 text-lg leading-relaxed mb-8">
                                We understand the spiritual significance of this journey. Our
                                dedicated team provides step-by-step guidance, ensuring special
                                care for elderly travelers, families, and first-time pilgrims.
                                Focus on your worship while we handle the details with
                                professionalism and respect.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-slate-500">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                    Personalized guidance for rituals
                                </li>
                                <li className="flex items-center gap-3 text-slate-500 ">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                    24/7 on-ground support
                                </li>
                                <li className="flex items-center gap-3 text-slate-500 ">
                                    <div className="w-2 h-2 bg-amber-500 rounded-full" />
                                    Comfort-first accommodations
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
                            <Users className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-4" />
                            <h4 className="text-xl font-bold mb-2">Start Your Journey</h4>
                            <p className="text-slate-500 mb-6">
                                Speak with our specialized Hajj & Umrah consultants today.
                            </p>
                            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-emerald-700/20">
                                Plan Your Umrah Journey
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
