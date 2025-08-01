import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";
import TechIcons from "../components/Models/TechLogos/TechIcons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });
  return (
    <div
      id="skills"
      className="flex justify-center items-center px-5 md:px-10 md:mt-40 mt-20 "
    >
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title=" My Preferred Tech Stack"
          sub="💪 The skills i bring to the table"
        />
        <div className="tech-grid">
          {techStackIcons.map((techStackIcons) => (
            <div
              key={techStackIcons.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcons model={techStackIcons} />
                </div>

                <div className="padding-x w-full">
                  <p>{techStackIcons.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
