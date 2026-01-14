import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The attention to detail and personalized itinerary made our honeymoon absolutely magical. Every destination was a dream come true.",
      name: "Sarah Chen",
      designation: "Travel Enthusiast",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "Adventure Seeker",
      src: "https://i.ibb.co.com/Pz3vWqnW/boy-cartoon-wallpaper.png",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Digital Nomad",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Family Traveler",
      src: "https://i.ibb.co.com/FbRjjxWK/7171-FCBope-L-AC-UY1100.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "Luxury Traveler",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <section className="py-20 ">
      <div className="mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">
          What Our Travelers Say
        </h2>
        <p className="text-center dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Discover why thousands of adventurers choose Safor for their journeys.
        </p>
        <div className="max-w-8/12 mx-auto">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
}
