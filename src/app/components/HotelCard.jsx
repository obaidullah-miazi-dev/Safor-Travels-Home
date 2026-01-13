import React from 'react';
import Image from 'next/image';
import { Star, StarHalf } from 'lucide-react';

export default function HotelCard({ image, alt, price, name, rating, description, onViewDetails }) {
    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`star-${i}`} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<StarHalf key="half" className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />);
        }
        return stars;
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700 group">
            <div className="relative h-64 overflow-hidden">
                <Image
                    alt={alt}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    src={image}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-2 py-1 rounded text-xs font-bold shadow-sm z-10">
                    ${price}/night
                </div>
            </div>
            <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{name}</h3>
                    <div className="flex text-yellow-400 text-xs">
                        {renderStars(rating)}
                    </div>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">{description}</p>
                <button
                    onClick={onViewDetails}
                    className="w-full py-3 rounded-lg border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 text-sm shadow-sm hover:shadow-md active:scale-95"
                >
                    View Details
                </button>
            </div>
        </div>
    );
}
