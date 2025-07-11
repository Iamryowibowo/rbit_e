import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import ContactButton from "./ContactButton";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full left-1/2 py-5 px-5 md:px-20 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out ${`top-0 bg-[#110e05]`}`}
    >
      <div className=" mx-auto flex items-center justify-between">
        <a className="text-white-50 text-xl md:text-2xl font-semibold transition-transform duration-300">
          Ryo
        </a>
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group text-white-50 relative ">
                <a href={link}>
                  <span className="transition-colors duration-300 hover:text-white">
                    {name}
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="w-[100px] md:w-[130px]" />
      </div>
    </header>
  );
};

export default Navbar;
