import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/hero-bg.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <div className="relative md:h-screen w-screen bg-cover bg-no-repeat">
      {/* Loader (visible while image loads) */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex justify-center items-center bg-black">
          <AiOutlineLoading3Quarters className="w-12 h-12 text-white animate-spin" />
        </div>
      )}

      {/* Background Image (only visible after loading) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 space-y-8 pt-40 text-white flex flex-col justify-center items-start h-full w-11/12 mx-auto">
        <h1 className="text-3xl md:w-1/2 md:text-5xl pt-8 font-extrabold leading-tight mb-6">
          Empowering Learners for a Brighter Tomorrow
        </h1>
        <p className="text-md md:text-lg max-w-3xl md:w-2/3 leading-relaxed mb-8">
          Atibule is a trusted hub for education, innovation, and personal growth, dedicated to equipping individuals 
          with the skills and knowledge they need to excel in business, leadership, IT, and digital inclusion. 
          Our courses are designed to inspire, empower, and transform lives through accessible, high-quality learning opportunities.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="/courses"
            className="bg-[#a3e635] hover:bg-[#008800] text-black/90 hover:text-white text-lg font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Explore Courses
          </a>
          <a
            href="/about"
            className="text-lg font-medium flex items-center gap-2 py-3 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Learn More <GoArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
