import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

const TypingText = () => {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((prev) => prev + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TypeAnimation
      key={cycle} // <--- hanya ini yang di-remount
      sequence={[
        "I’m Ryo, a web developer from Indonesia crafting seamless, animated, and user-focused digital experiences.",
        2000,
        "",
        500,
      ]}
      wrapper="p"
      speed={40}
      repeat={0}
      cursor={true}
      className="text-white-50 md:text-xl relative z-10 pointer-events-none max-sm:w-auto xl:w-[640px]"
    />
  );
};

export default TypingText;
