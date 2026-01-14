"use client";
import React, { useState, useRef } from "react";
import HotelCard from "./HotelCard";
import HotelModal from "./HotelModal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const hotels = [
    {
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCe1fM43NO2YelafC172mTpMqWBGsxCeHqUju-v8w3XPq4mppbndRx9HegzQlcMhhHwR7TukZqQx-wj_SxcsPOQQDv2lR6ct_F4obCgnoBA33uVj-u4DtU8X40BMJubGYYcOMy5D-Tv-Fg1BBjJSz4OnvND2bsumJS0xJT8blc4FdiOh6txM_1xF8AIoYhaBt1CprpjuGg-VkuyJAGMG9g4aOBA6kxRqTKjLgW-KyCR33Db4Zt_fDbm9UWMStD3_Zds5gELHKXEriR-",
        alt: "Luxury hotel pool with ocean view",
        price: 250,
        name: "Royal Tulip Sea Pearl",
        rating: 5,
        description:
            "Experience 5-star luxury right by the Inani Beach, Cox's Bazar. Includes spa access and breakfast.",
    },
    {
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD6nVLBFwMFBDWw3oSpP5kbCGndgtMcatUUdOEo3lA9GnKOWP9XIuS8CcLZk_GIv7YNEKzZYSrnekGcKBinpBnYHhEbC8lpFAOOUgvWeeSb-ptHBdzk83L2-S6z8wzgDJojl2BXLWR5ABJrHbM59JkH9nNmFIUiWsqrTnVSDMW7CTjeEkwUjtJXJKVh6UGJ9LIwTcZbYItwoESP_P8WfsquRCPvV-F7OV8Pf3-DwcE_Paz0Kjiux7YW02l7-RzG_14JJfqHdVgO8wEn",
        alt: "Modern hotel room interior",
        price: 180,
        name: "Grand Sultan Resort",
        rating: 4.5,
        description:
            "Nestled in the tea gardens of Srimangal. Perfect for a quiet, green getaway.",
    },
    {
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuC_yLzJKBWRZWPokYEBo36CJukxnRZIz-VqKPnp4qVWCOC-SWcdlae-00YrPw9T6a-tFclgxEK5z7pnLpduhDLDq9pI5AYhY_HdNGr5wWde_YcrTe8VQcOW8jKO0zYKZxbbQHGSzV4nvFQF-TVt7ZCoiJdP_zXxpPnNkLO32hTFd7khmmh_WKLQXUYgw8-ChM5sIxAGHFfn5EuIZ7lV90ZFgbFcSdpJjYtqLLCNtQWDKKSoiUrYopzsoBGXp7DSvokOwAmIrPzfIn1a",
        alt: "Luxury hotel lobby with grand lighting",
        price: 320,
        name: "Amari Dhaka",
        rating: 5,
        description:
            "Business and leisure luxury in the heart of Dhaka. Rooftop pool and premium dining.",
    },
    {
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD6nVLBFwMFBDWw3oSpP5kbCGndgtMcatUUdOEo3lA9GnKOWP9XIuS8CcLZk_GIv7YNEKzZYSrnekGcKBinpBnYHhEbC8lpFAOOUgvWeeSb-ptHBdzk83L2-S6z8wzgDJojl2BXLWR5ABJrHbM59JkH9nNmFIUiWsqrTnVSDMW7CTjeEkwUjtJXJKVh6UGJ9LIwTcZbYItwoESP_P8WfsquRCPvV-F7OV8Pf3-DwcE_Paz0Kjiux7YW02l7-RzG_14JJfqHdVgO8wEn",
        alt: "Resort pool at night",
        price: 280,
        name: "The Palace Luxury Resort",
        rating: 4.8,
        description:
            "A luxurious escape in Bahubal, Habiganj. Experience the largest resort in Bangladesh.",
    },
];

export default function Hotels() {
    const [selectedHotel, setSelectedHotel] = useState(null);
    const container = useRef();
    const headerRef = useRef();
    const gridRef = useRef();

    useGSAP(
        () => {
            gsap.from(headerRef.current, {
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
                y: 20,
                opacity: 0,
                duration: 0.6,
                ease: "power3.out",
            });

            const cards = gridRef.current.children;
            gsap.from(cards, {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
            });
        },
        { scope: container }
    );

    return (
        <section
            className="py-36 max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8"
            id="hotels"
            ref={container}
        >
            <div ref={headerRef} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight mb-4">
                    Luxury Stays
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto">
                    Experience world-class hospitality at our partner hotels and resorts.
                </p>
            </div>
            <div
                ref={gridRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {hotels.map((hotel, index) => (
                    <div key={index}>
                        <HotelCard {...hotel} onViewDetails={() => setSelectedHotel(hotel)} />
                    </div>
                ))}
            </div>

            {selectedHotel && (
                <HotelModal
                    hotel={selectedHotel}
                    onClose={() => setSelectedHotel(null)}
                />
            )}
        </section>
    );
}
