import React, { useState } from "react";
import p1 from "/images/Placement1.jpg";
import p2 from "/images/Placement2.jpg";

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [p1, p2];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-gray-900">
      <div
        className="w-full h-full flex items-center justify-center"
        style={{ backgroundColor: "#1f2937" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            height={800}
            width={800}
            alt={`Carousel Image ${index + 1}`}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-black fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
