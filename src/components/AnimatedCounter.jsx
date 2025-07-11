import React, { useEffect } from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";

const AnimatedCounter = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".cardRotate");

    const rotateStates = Array.from(cards).map((card) => ({
      el: card,
      angle: 0,
      direction: card.dataset.direction === "counter" ? -1 : 1,
    }));

    let frameId;

    const animate = () => {
      rotateStates.forEach((state) => {
        state.angle = (state.angle + state.direction * 1) % 360;
        state.el.style.setProperty("--rotate", `${state.angle}deg`);
      });

      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            className="cardRotate rounded-lg p-10 flex flex-col justify-center h-[265px] max-sm:h-[175px] "
            data-direction={index % 2 === 0 ? "clockwise" : "counter"}
          >
            <div
              key={item.label}
              className="counter-number text-black text-5xl font-bold mb-2"
            >
              <CountUp suffix={item.suffix} end={item.value} />
            </div>

            <div className="text-black text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
