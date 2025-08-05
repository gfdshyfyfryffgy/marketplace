import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SiAxios } from "react-icons/si";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  { 
    title: "Predictive ETA Tool Now Available", 
    date: "May 15, 2025",
    description: "Our new predictive ETA tool lets you plan shipments with more accuracy and ease." 
  },
  { 
    title: "Marketplace Expands in Southeast Asia", 
    date: "May 10, 2025",
    description: "We are thrilled to bring our platform to key, high-growth Southeast Asian markets." 
  },
  { 
    title: "Guide to Optimizing Procurement Steps", 
    date: "May 05, 2025",
    description: "Read our latest guide on streamlining procurement for faster, smarter decisions." 
  },
];


const NewsUpdatesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0, y: 50, duration: 1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          opacity: 0, y: 40, scale: 0.92, duration: 0.6, delay: i * 0.13, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 90%" },
        });
      });

      const ax = sectionRef.current.querySelector(".axios-animate");
      if (ax) {
        gsap.fromTo(
          ax,
          { x: -40, opacity: 0, rotate: -25, scale: 0.8 },
          {
            x: 0, opacity: 1, rotate: 0, scale: 1, duration: 0.8, ease: "elastic.out(1, 0.7)",
            scrollTrigger: { trigger: sectionRef.current, start: "top 92%" },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0e0e0e] py-20 px-4 sm:px-8 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <span className="axios-animate inline-block">
            <SiAxios size={36} color="#62FFCB" />
          </span>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#62FFCB] to-[#3D5AFE]">
            Latest News & Updates
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, idx) => (
            <Tilt
              key={idx}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable
              glareMaxOpacity={0.15}
              glareColor="#00B3A3"
              glarePosition="all"
              transitionSpeed={700}
              className="rounded-xl"           // keep glare corners rounded
              style={{ willChange: "transform" }} // smoother
            >
              {/* Keep GSAP ref on the INNER card */}
              <div
                ref={(el) => (cardsRef.current[idx] = el)}
                className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-xl shadow-lg p-6 text-left
                           flex flex-col justify-between border border-[#262626] hover:shadow-xl transition duration-300"
              >
                <div className="hover:scale-105 transition-transform duration-300">
                  <h3 className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#62FFCB] to-[#3D5AFE] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{item.date}</p>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>

                <button className="mt-6 bg-gradient-to-r from-[#005243] to-[#00735E] text-white px-4 py-2 text-sm rounded-md hover:brightness-110 transition">
                  Read More
                </button>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsUpdatesSection;
