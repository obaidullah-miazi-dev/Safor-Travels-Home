import SearchWidget from "./SearchWidget";

export default function Hero() {
  return (
    <div className="relative py-36 min-h-[85vh] w-full flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/nature.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/30 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 mt-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
            Explore the Unseen
          </span>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight drop-shadow-xl">
            Discover the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-l from-teal-400 to-white">
              Beauty
            </span>{" "}
            of <br className="hidden md:block" />{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-400 to-white">
              Bangladesh
            </span>{" "}
            & Beyond
          </h1>

          <p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto drop-shadow-md">
            Experience the joy of travel with our curated tours, luxury stays,
            and seamless visa assistance.
          </p>
        </div>

        <SearchWidget />
      </div>
    </div>
  );
}
