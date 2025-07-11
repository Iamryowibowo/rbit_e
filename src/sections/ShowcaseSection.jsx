import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2 * (index + 1),
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="w-full mt-20 px-5 md:px-20 py-16 flex items-center justify-center bg-[#110E05] text-white"
    >
      <div className="w-full max-w-7xl">
        <div className="flex flex-col xl:flex-row justify-between gap-10">
          {/* Project Utama: Blog */}
          <div
            className="flex flex-col justify-between xl:w-[60%] bg-[#1a1a1a] rounded-2xl shadow-xl overflow-hidden"
            ref={project1Ref}
          >
            <div className="xl:h-[75vh] md:h-[60vh] h-[60vh] relative">
              <img
                className="w-full h-full object-contain rounded-t-2xl"
                src="/images/blog.png"
                alt="Dev Blog"
              />
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold">
                Dev Blog Platform – Share & Inspire
              </h3>
              <p className="text-neutral-400 text-base max-sm:text-[1.2rem] ">
                A modern blogging platform where I share stories, coding
                experience, and tech insights. Built with React (Vite), MongoDB,
                and TailwindCSS with a clean UI and lightweight UX.
              </p>
              <p className="text-sm text-neutral-500 ">
                Tech Stack: React (Vite) · MongoDB · TailwindCSS
              </p>
            </div>
          </div>

          {/* Dua Project Tambahan */}
          <div className="flex flex-col gap-8 xl:w-[40%]">
            {/* Anargya Export */}
            <div
              className="bg-[#1c1c1c] rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform"
              ref={project2Ref}
            >
              <div className="bg-[#ffefdb] h-56 w-full overflow-hidden">
                <img
                  src="/images/anargya.jpg"
                  alt="Anargya Export"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 space-y-2">
                <h4 className="text-lg font-medium">
                  Anargya Export – Company Profile Website
                </h4>
                <p className="text-sm text-neutral-400 max-sm:text-[1.2rem] ">
                  The official website for a spice export company (cloves,
                  coffee, etc.), designed with a minimalist style and focused on
                  branding and product catalog. Built with Vite and MongoDB.
                </p>
              </div>
            </div>

            {/* SDN 47 Kota Jambi */}
            <div
              className="bg-[#1c1c1c] rounded-2xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform"
              ref={project3Ref}
            >
              <div className="bg-[#ffefdb] h-56 w-full overflow-hidden">
                <img
                  src="/images/sd.jpg"
                  alt="SDN 47 Kota Jambi"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-4 space-y-2">
                <h4 className="text-lg font-medium">
                  SDN 47 Kota Jambi – Digital School Platform
                </h4>
                <p className="text-sm text-neutral-400 max-sm:text-[1.2rem] ">
                  A school website featuring profile, gallery, extracurriculars,
                  and academic information. Built with React + Laravel +
                  Inertia.js for better performance and ease of administration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
