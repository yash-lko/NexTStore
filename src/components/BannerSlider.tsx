"use client";

import Slider from "react-slick";
import Image from "next/image";

export default function BannerSlider() {
  const images = [
    "/images/slider/1.webp",
    "/images/slider/2.webp",
    "/images/slider/3.webp",
    "/images/slider/4.webp",
  ];

  const settings = {
    dots: false, 
    infinite: true,
    speed: 1000,        
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,  
    arrows: false,        
    pauseOnHover: true,
  };

  return (
    <div className="w-full overflow-hidden mt-4">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="relative w-full h-[250px] rounded-2xl overflow-hidden">
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              fill
              className="object-cover grayscale brightness-75 opacity-90 mix-blend-screen text-pink-500"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
