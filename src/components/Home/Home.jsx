import React, { useState, useEffect } from "react";

function Home() {
  const texts = [
    "Immersive Multimedia. \n Captive Stories.",
    "Photography, \n Videography, and more.",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeOutDuration = 5000; // Time before fade out starts
    const fadeInDuration = 1500; // Fade in duration

    const timer1 = setTimeout(() => {
      setIsFadingOut(true); // Start fading out
    }, fadeOutDuration);

    const timer2 = setTimeout(() => {
      setIsFadingOut(false); // Start fading in
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Update text index
    }, fadeOutDuration + fadeInDuration); // Wait for fade out and fade in

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }; // Cleanup
  }, [textIndex]); // Dependency array includes textIndex to reset effect on change

  return (
    <>
      <div className="  overflow-hidden ">
        <video
          className="absolute top-0 left-0  w-full mx-auto object-cover z-[-10]"
          autoPlay
          loop
          muted
        >
          <source src="src/assets/bg.mp4" type="video/mp4" />
        </video>
        <div className="relative flex items-center justify-center h-screen">
          <div className="text-center">
            <p
              className={`transition-opacity duration-1000 ${
                isFadingOut ? "opacity-0" : "opacity-100"
              }`}
            >
              <span className="text-white text-[80px] title-font whitespace-pre-line">
                {texts[textIndex]}
              </span>
            </p>

            <button className="bg-[#C1272D] border border-transparent hover:bg-transparent hover:border-white w-56 px-7 py-4 rounded-lg text-center transition duration-300 ease-in-out mt-5">
              <span className="text-[#ffffff] transform transition-transform duration-300 ease-in-out hover:scale-90 title-font flex items-center justify-center">
                get started
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
