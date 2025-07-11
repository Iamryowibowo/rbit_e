import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import TypingText from "../components/TypeAnimation";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="relative z-10 xl:mt-20 mt-32 md:h-dvh h-[80vh] flex xl:items-center items-start justify-center">
        {/* hero kontent sebelah kiri  */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5 ">
          <div className="flex flex-col gap-5">
            <div className="hero-text">
              <h1>
                <span className="slide max-sm:text-[1.68rem] xl:text-6xl xl:h-16 max-sm:h-10 md:text-4xl">
                  <span className="wrapper ">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-20 size-7 md:p-2 p-1 rounded-full bg-white "
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <br />
            </div>
            <h1>About Me</h1>
            {/* npm install react-type-animation */}
            <TypingText />
            <Button
              className="md:w-80 md:h-16 w-60 h-12 cursor-pointer"
              id="button"
              text="Explore My Work"
            />
          </div>
        </header>

        {/* hero kontent sebelah 3D models kanan  */}
        <figure>
          <div className=" xl:w-[60%] w-full h-full min-h-[50vh] absolute xl:-top-20 top-24 xl:-right-20 right-0 ">
            <HeroExperience />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
