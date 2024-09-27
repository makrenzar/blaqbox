import React, { useEffect, useState } from "react";
import bgslider1 from "../../assets/bgsv1.jpg";
import bgslider2 from "../../assets/bgsv2.jpg";
import bgslider3 from "../../assets/bgsv3.jpg";

function HomeServices() {
  const images = Array(1000).fill([bgslider1, bgslider2, bgslider3]).flat();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden mt-8">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="min-w-full" key={index}>
            <img
              src={image}
              alt={`Carousel ${index}`}
              className="h-[900px] w-full"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20">
        <p className="transition-opacity duration-1000 text-[60px] title-font whitespace-pre-line">
          our services
        </p>
        <p className="mx-auto max-w-xl p-font">
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click to add your own content
          and make changes to the font.
        </p>
        <button className="bg-[#C1272D] border border-transparent hover:bg-transparent hover:border-white w-56 px-7 py-4 rounded-lg text-center transition duration-300 ease-in-out mt-7">
          <span className="text-[#ffffff] transform transition-transform duration-300 ease-in-out hover:scale-90 title-font flex items-center justify-center">
            More Info 
          </span>
        </button>
      </div>
    </div>
  );
}

export default HomeServices;
