import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Steel from "../assets/steel.png"; 
import Chemicals from "../assets/Chamical.png";
import Bitumen from "../assets/bitumen.png";
import Pipes from "../assets/Pipes.webp";
import AgriCommodities from "../assets/agri.png";
import BricksBlocks from "../assets/BricksBlocks.webp";
import Polymers from "../assets/polymers.png";
import NonFerrous from "../assets/non-forcces.webp";
// Replace with your actual images

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { title: "Steel", desc: "High quality structural steel", image: Steel, link: "/steel" }, // Add link here
  { title: "Polymers", desc: "Industrial grade polymers", image: Polymers, link: "/polymers" },
  { title: "Bitumen", desc: "Road construction material", image: Bitumen, link: "/bitumen" },
  { title: "Non Ferrous", desc: "Aluminum, copper, zinc", image: NonFerrous, link: "/non-ferrous" },
  { title: "Pipes", desc: "Seamless & ERW pipes", image: Pipes, link: "/pipes" },
  { title: "Chemicals", desc: "Industrial & agri chemicals", image: Chemicals, link: "/chemicals" },
  { title: "Agri-Commodities", desc: "Export-quality grains", image: AgriCommodities, link: "/agri-commodities" },
  { title: "Bricks & Blocks", desc: "Fly ash & concrete bricks", image: BricksBlocks, link: "/bricks-blocks" },
];

const ProductCategories = () => {
  const wrapperRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const totalWidth = scrollRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      gsap.to(scrollRef.current, {
        x: -scrollDistance,
        ease: "power1.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="w-full h-screen overflow-hidden bg-black text-white"
    >
      <div
        ref={scrollRef}
        className="flex gap-6 px-12 py-24 w-fit h-full"
      >
        {categories.map((category, index) => (
          <Link key={index} to={category.link}> {/* Wrap the entire card with Link */}
            <motion.div
              className="group bg-[#000000] border border-[#005243] text-white rounded-2xl shadow-lg flex-shrink-0 w-80 h-[28rem] overflow-hidden transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 flex flex-col justify-between h-[calc(100%-12rem)] group-hover:bg-[#0f0f0f] transition-colors duration-300">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">{category.title}</h3>
                  <p className="text-sm text-[#C1C1C1]">{category.desc}</p>
                </div>
                <button className="mt-4 bg-[#005243] text-white px-4 py-2 rounded-md hover:bg-[#007b63] transition">
                  Explore
                </button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
