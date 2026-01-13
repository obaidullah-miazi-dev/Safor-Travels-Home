import React from "react";
import Marquee from "react-fast-marquee";
import amazon from "@/assets/brands/amazon.png";
import casio from "@/assets/brands/casio.png";
import moonstar from "@/assets/brands/moonstar.png";
import randstad from "@/assets/brands/randstad.png";
import star from "@/assets/brands/star.png";
import start_people from "@/assets/brands/start_people.png";
import amazon_vector from "@/assets/brands/amazon_vector.png";
import Image from "next/image";

const Brands = () => {
  const brandLogos = [
    amazon,
    casio,
    moonstar,
    randstad,
    amazon_vector,
    star,
    start_people,
  ];
  return (
    <Marquee loop={0} autoFill>
      {brandLogos.map((brand, i) => (
        <Image
          key={i}
          src={brand}
          alt="logo"
          width={150}
          height={50}
          className="mx-8 grayscale-100"
        />
      ))}
    </Marquee>
  );
};

export default Brands;
