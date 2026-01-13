import React from 'react';
import Image from 'next/image';
import { X, Star, StarHalf, MapPin, Check } from 'lucide-react';

export default function HotelModal({ hotel, onClose }) {
    if (!hotel) return null;

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
        }
        if (hasHalfStar) {
            stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
        }
        return stars;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden relative flex flex-col md:flex-row animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-64 md:h-auto">
                    <Image
                        src={hotel.image}
                        alt={hotel.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent md:hidden"></div>
                    <div className="absolute bottom-4 left-4 text-white md:hidden">
                        <h3 className="text-2xl font-bold">{hotel.name}</h3>
                        <div className="flex items-center gap-1 mt-1">
                            {renderStars(hotel.rating)}
                            <span className="text-sm font-medium ml-1">({hotel.rating})</span>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col">
                    <div className="hidden md:block mb-6">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{hotel.name}</h2>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                                {renderStars(hotel.rating)}
                            </div>
                            <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">({hotel.rating} / 5)</span>
                        </div>
                    </div>

                    <div className="mb-6">
                        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">Excellent Location</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {hotel.description}
                        </p>
                    </div>

                    <div className="space-y-3 mb-8">
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wider">Amenities</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {['Free Wi-Fi', 'Swimming Pool', 'Spa & Wellness', 'Restaurant'].map((amenity, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                                    <Check className="w-4 h-4 text-green-500" />
                                    {amenity}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                        <div>
                            <span className="text-slate-400 text-sm block">Price per night</span>
                            <span className="text-3xl font-bold text-primary">${hotel.price}</span>
                        </div>
                        <button className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/25 transition-all transform active:scale-95">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
