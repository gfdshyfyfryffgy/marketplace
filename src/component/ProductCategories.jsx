import React from "react";
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

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
};

const ProductCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Product Categories
        </h2>

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
              key={index}
              variants={cardVariants}
              className="bg-[#0f0f0f] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-[#C1C1C1]">{category.desc}</p>
                </div>
                <button
                  onClick={() => navigate(category.link)}
                  className="mt-6 bg-green-700 hover:bg-green-600 text-white py-2 rounded-md transition-all"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
