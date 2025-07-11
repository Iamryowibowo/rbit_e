import React from "react";

const Button = ({ text, className = "", targetId = "counter" }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById(targetId);
    if (target) {
      const offset = window.innerHeight * 0.15;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`relative flex items-center justify-center px-6 py-3 rounded-full overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-gray-500 group-hover:bg-gray-600 transition-all duration-300 rounded-full scale-105 z-0" />
      <p className="relative text-white font-medium z-10">{text}</p>
    </button>
  );
};

export default Button;
