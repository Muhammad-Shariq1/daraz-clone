import React, { useState, useEffect } from "react";

import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import img5 from "../assets/img5.avif";
import d from "../assets/d.png";

const images = [img1, img2, img3, img4, img5];

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;

    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="max-w-6xl mx-auto flex gap-6 items-center">
      

      <div
        className="relative w-2/3 overflow-hidden rounded-xl shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[400px] flex-shrink-0 mt-10"
            />
          ))}
        </div>


        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          &#10094;
        </button>

        <button
          onClick={() =>
            setCurrentIndex((prev) => (prev + 1) % images.length)
          }
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div>

\      <div className="">
        <img
          src={d}
          alt="Side"
          className="h-[400px] w-full    shadow-md"
        />
      </div>
    </div>
  );
};

export default Carousal;
