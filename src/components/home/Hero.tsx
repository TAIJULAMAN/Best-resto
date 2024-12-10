"use client";
import Image from "next/image";

import heroImage from "@/assets/image/hero/hero.png";
import line from "@/assets/image/hero/bg.png";
import HeroSearch from "./HeroSearch";

const Hero = () => {
  return (
    <div className="flex-center flex-col-reverse md:flex-row lg:gap-10 gap-5 relative">
      {/* Text content section */}
      <div className="flex-1">
        <div className="md:space-y-6 space-y-3">
          <h1 className="xl:text-5xl md:text-4xl text-2xl font-bold">
            Good <span className="text-primary-color">food</span>, great <br />
            memories
          </h1>
          <p className="max-w-md text-xl text-primary-black ml-0">
            Enable diners to customize their booking by requesting a specific
            table location or view.
          </p>
          <div>
            <HeroSearch />
          </div>
        </div>
      </div>

      {/* Hero section image */}
      <div className="flex-1 overflow-hidden">
        <Image src={heroImage} alt="hero_image" />
      </div>

      {/* Decorative line */}
      <div className="absolute xl:-top-10 2xl:top-0 lg:-top-10 md:-top-6 left-1/4 overflow-hidden hidden md:block">
        <Image
          src={line}
          alt="line"
          className="w-full max-w-[300px] md:max-w-[500px] xl:max-w-[700px] object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
