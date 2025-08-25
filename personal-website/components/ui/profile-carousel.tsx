"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const ProfileCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/profile1.jpeg", "/profile2.jpeg", "/profile3.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-80 h-80 flex-shrink-0">
      {/* Main image container */}
      <div className="relative w-full h-full bg-black overflow-hidden">
        {images.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Profile ${index + 1}`}
              fill
              className="object-cover"
              style={{ objectPosition: '30% 50%' }}
              priority={index === 0}
            />
          </div>
        ))}
      </div>
      
      {/* Pixelated border - matching 8-bit card style */}
      <div className="absolute -top-1.5 w-1/2 left-1.5 h-1.5 bg-border" />
      <div className="absolute -top-1.5 w-1/2 right-1.5 h-1.5 bg-border" />
      <div className="absolute -bottom-1.5 w-1/2 left-1.5 h-1.5 bg-border" />
      <div className="absolute -bottom-1.5 w-1/2 right-1.5 h-1.5 bg-border" />
      <div className="absolute top-0 left-0 size-1.5 bg-border" />
      <div className="absolute top-0 right-0 size-1.5 bg-border" />
      <div className="absolute bottom-0 left-0 size-1.5 bg-border" />
      <div className="absolute bottom-0 right-0 size-1.5 bg-border" />
      <div className="absolute top-1.5 -left-1.5 h-2/3 w-1.5 bg-border" />
      <div className="absolute top-1.5 -right-1.5 h-2/3 w-1.5 bg-border" />
      
      {/* Top shadow */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-foreground/20" />
      <div className="absolute top-1.5 left-0 w-3 h-1.5 bg-foreground/20" />

      {/* Bottom shadow */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-foreground/20" />
      <div className="absolute bottom-1.5 right-0 w-3 h-1.5 bg-foreground/20" />
    </div>
  );
};

export default ProfileCarousel;
