import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Steel from "../assets/steel.png";
import Chemicals from "../assets/Chamical.png"; // ⚠️ confirm filename
import Bitumen from "../assets/bitumen.png";
import Pipes from "../assets/Pipes.webp";
import AgriCommodities from "../assets/agri.png";
import BricksBlocks from "../assets/BricksBlocks.webp";
import Polymers from "../assets/polymers.png";
import NonFerrous from "../assets/non-forcces.webp"; // ⚠️ confirm filename

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

// Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.2 } },
};

export default function ProductCategories() {
  const navigate = useNavigate();

  // optional image fallback
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

        {/* Motion container + grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title + index}
              variants={cardVariants}
              className="relative bg-[#0f0f0f]/90 backdrop-blur-lg rounded-2xl overflow-hidden 
                         border border-[#1f1f1f] hover:border-[#00B3A3] 
                         shadow-lg hover:shadow-[#00B3A360] 
                         transition-all duration-500 flex flex-col group"
            >
              {/* Floating Image */}
              <div className="overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.title}
                  onError={onImgError}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Top Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 opacity-50 group-hover:opacity-70 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-[#00B3A3] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-[#C1C1C1] leading-relaxed">
                    {category.desc}
                  </p>
                </div>

                {/* Enquire Button */}
                <button
                  onClick={() => navigate(category.link)}
                  className="mt-6 relative px-6 py-2 rounded-full text-white font-semibold 
                             bg-gradient-to-r from-[#005243] to-[#00B3A3] 
                             shadow-lg shadow-[#00B3A350] 
                             transition-all duration-300 ease-out
                             hover:scale-105 hover:shadow-[#00B3A390]
                             active:scale-95 overflow-hidden group"
                >
                  <span className="relative z-10">Enquire Now</span>
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-[#00B3A3] to-[#005243]
                               opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300"
                  />
                  <span
                    className="absolute top-0 left-[-75%] w-[50%] h-full 
                               bg-gradient-to-r from-transparent via-white/30 to-transparent
                               transform skew-x-12 animate-shimmer"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* local CSS for shimmer */}
      <style>
        {`
          @keyframes shimmer {
            0% { left: -75%; }
            100% { left: 125%; }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
        `}
      </style>
    </section>
  );
}
