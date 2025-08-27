import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Steel from "../assets/steel.png";
import Chemicals from "../assets/Chamical.png"; 
import Bitumen from "../assets/bitumen.png";
import Pipes from "../assets/Pipes.webp";
import AgriCommodities from "../assets/agri.png";
import BricksBlocks from "../assets/BricksBlocks.webp";
import Polymers from "../assets/polymers.png";
import NonFerrous from "../assets/non-forcces.webp";

const categories = [
  { title: "Steel", desc: "High quality structural steel", image: Steel, link: "/steel" },
  { title: "Polymers", desc: "Industrial grade polymers", image: Polymers, link: "/polymers" },
  { title: "Bitumen", desc: "Road construction material", image: Bitumen, link: "/bitumen" },
  { title: "Non Ferrous", desc: "Aluminum, copper, zinc", image: NonFerrous, link: "/non-ferrous" },
  { title: "Pipes", desc: "Seamless & ERW pipes", image: Pipes, link: "/pipes" },
  { title: "Chemicals", desc: "Industrial & agri chemicals", image: Chemicals, link: "/chemicals" },
  { title: "Agri-Commodities", desc: "Export-quality grains", image: AgriCommodities, link: "/agri-commodities" },
  { title: "Bricks & Blocks", desc: "Fly ash & concrete bricks", image: BricksBlocks, link: "/bricks-blocks" },
];

export default function ProductCategories() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  // check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const onImgError = (e) => {
    e.currentTarget.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='300'><rect width='100%' height='100%' fill='#111'/><text x='50%' y='50%' fill='#C1C1C1' font-family='Arial' font-size='18' text-anchor='middle' dominant-baseline='middle'>Image not found</text></svg>`
      );
  };

  return (
    <section className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Product Categories
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Card = (
              <div
                key={category.title + index}
                className="relative bg-[#0f0f0f]/90 backdrop-blur-lg rounded-2xl overflow-hidden 
                           border border-[#1f1f1f] hover:border-[#00B3A3] 
                           shadow-lg hover:shadow-[#00B3A360] 
                           transition-all duration-500 flex flex-col group"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.title}
                    onError={onImgError}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60"></div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {category.title}
                    </h3>
                    <p className="text-sm text-[#C1C1C1] leading-relaxed">
                      {category.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => navigate(category.link)}
                    className="mt-6 relative px-6 py-2 rounded-full text-white font-semibold 
                               bg-gradient-to-r from-[#005243] to-[#00B3A3] 
                               shadow-lg shadow-[#00B3A350] 
                               transition-all duration-300 ease-out
                               hover:scale-105 hover:shadow-[#00B3A390]
                               active:scale-95 overflow-hidden group !cursor-pointer"
                  >
                    <span className="relative z-10">Enquire Now</span>
                  </button>
                </div>
              </div>
            );

            // If desktop → wrap with motion for animations
            if (!isMobile) {
              return (
                <motion.div
                  key={category.title + index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {Card}
                </motion.div>
              );
            }

            // If mobile → return plain card
            return Card;
          })}
        </div>
      </div>
    </section>
  );
}
