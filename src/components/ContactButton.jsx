import React from "react";

const ContactButton = ({ targetId = "contact", className = "" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = window.innerHeight * 0.1;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClick} className={`contact-btn ${className}`}>
      <div className="inner">
        <span>Contact me</span>
      </div>
    </button>
  );
};

export default ContactButton;
