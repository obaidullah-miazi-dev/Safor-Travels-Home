import Image from "next/image";
import React from "react";
import { Star, MapPin } from "lucide-react";

export default function DestinationCard({
  image,
  alt,
  duration,
  title,
  location,
  price,
  originalPrice,
  rating,
  isBestSeller,
}) {
  return (
    <div className="group relative h-105 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
      <Image
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        src={image}
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

      {rating && (
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-white flex items-center gap-1">
          <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />{" "}
          {rating}
        </div>
      )}

      {isBestSeller && (
        <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide">
          Best Seller
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-full p-6">
        <span className="text-accent text-sm font-bold uppercase tracking-wider mb-1 block">
          {duration}
        </span>
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="text-white/80 text-sm flex items-center gap-1">
            <MapPin className="w-4 h-4" />{" "}
            {location}
          </div>
          <div className="text-white font-bold text-xl">
            ${price}{" "}
            {originalPrice && (
              <span className="text-sm font-normal text-white/70 line-through">
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
