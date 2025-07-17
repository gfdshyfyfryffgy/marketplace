import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Globe,
  Truck,
  BarChart3,
  ShieldCheck,
  Leaf,
  Headphones,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    title: "1. Global Sourcing",
    description:
      "We help businesses source industrial raw materials like steel, polymers, and chemicals from trusted international manufacturers, ensuring consistent quality and optimized cost.",
    icon: <Globe className="w-12 h-12 md:w-16 md:h-16 text-[#00B3A3]" />,
  },
  {
    title: "2. Customized Procurement",
    description:
      "Our procurement team personalizes bulk and recurring orders based on your industry, timeline, and technical specs ensuring efficiency and savings.",
    icon: <ShieldCheck className="w-12 h-12 md:w-16 md:h-16 text-[#00B3A3]" />,
    reverse: true,
  },
  {
    title: "3. Logistics & Distribution",
    description:
      "We manage freight, customs, warehousing, and delivery giving you end-to-end logistical peace of mind.",
    icon: <Truck className="w-12 h-12 md:w-16 md:h-16 text-[#00B3A3]" />,
  },
  {
    title: "4. Market Insights",
    description:
      "Our platform delivers real-time commodity trends, pricing analytics, and insights to strengthen your sourcing strategies.",
    icon: <BarChart3 className="w-12 h-12 md:w-16 md:h-16 text-[#00B3A3]" />,
    reverse: true,
  },
  {
    title: "5. Sustainability Solutions",
    description:
      "From green steel to recycled polymers, we enable your business to transition toward sustainable materials.",
    icon: <Leaf className="w-12 h-12 md:w-16 md:h-16 text-[#00B3A3]" />,
  },
  {
    title: "6. After-Sales & Support",
    description:
      "Get dedicated account managers, certification help, documentation, and responsive support long after purchase.",
    icon: <Headphones className="w-12 h-12 md:w-16 md:h-16 text-[#00B3A3]" />,
    reverse: true,
  },
];

const SolutionBlock = ({ title, description, icon, reverse, imgRef, textRef }) => (
  <div
    className={`flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } items-center gap-12 md:gap-20 py-14 border-b border-[#1a1a1a] overflow-hidden`}
  >
    {/* Icon block with glass effect */}
    <div ref={imgRef} className="w-full md:w-1/2 flex justify-center ">
      <div className="p-6 md:p-8 bg-[#1A1A1A]/50 backdrop-blur-sm rounded-full shadow-md border border-[#2a2a2a] flex items-center justify-center">
        {icon}
      </div>
    </div>

    {/* Text content */}
    <div ref={textRef} className="w-full md:w-1/2 space-y-4 text-center md:text-left">
      <h3 className="text-2xl md:text-3xl font-semibold text-white">{title}</h3>
      <p className="text-[#C1C1C1] text-base md:text-lg leading-relaxed">{description}</p>
    </div>
  </div>
);

const SolutionsFullSection = () => {
  const imgRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    solutions.forEach((solution, i) => {
      gsap.fromTo(
        imgRefs.current[i],
        solution.reverse ? { opacity: 0, x: 100 } : { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRefs.current[i],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        textRefs.current[i],
        solution.reverse ? { opacity: 0, x: -100 } : { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRefs.current[i],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section className="bg-black text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our <span className="text-[#00B3A3]">Solutions</span>
        </h2>
        {solutions.map((solution, idx) => (
          <SolutionBlock
            key={idx}
            {...solution}
            imgRef={el => (imgRefs.current[idx] = el)}
            textRef={el => (textRefs.current[idx] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default SolutionsFullSection;
