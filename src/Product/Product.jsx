import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import Brand from "../component/Brand";
import { Globe } from "lucide-react";
import {motion } from "framer-motion";


// ✅ Correct image imports
import Steel from "../assets/steel.png";
import Chemicals from "../assets/Chamical.png";
import Bitumen from "../assets/bitumen.png";
import Pipes from "../assets/Pipes.webp";
import AgriCommodities from "../assets/agri.png";
import BricksBlocks from "../assets/BricksBlocks.webp";
import Polymers from "../assets/polymers.png";
import NonFerrous from "../assets/non-forcces.webp";

// ✅ Category list with correct images
const categories = [
  {
    title: "Steel",
    desc: "High quality structural steel",
    image: Steel,
    link: "/steel",
  },
  {
    title: "Polymers",
    desc: "Industrial grade polymers",
    image: Polymers,
    link: "/polymers",
  },
  {
    title: "Bitumen",
    desc: "Road construction material",
    image: Bitumen,
    link: "/bitumen",
  },
  {
    title: "Non Ferrous",
    desc: "Aluminum, copper, zinc",
    image: NonFerrous,
    link: "/non-ferrous",
  },
  {
    title: "Pipes",
    desc: "Seamless & ERW pipes",
    image: Pipes,
    link: "/pipes",
  },
  {
    title: "Chemicals",
    desc: "Industrial & agri chemicals",
    image: Chemicals,
    link: "/chemicals",
  },
  {
    title: "Agri-Commodities",
    desc: "Export-quality grains",
    image: AgriCommodities,
    link: "/agri-commodities",
  },
  {
    title: "Bricks & Blocks",
    desc: "Fly ash & concrete bricks",
    image: BricksBlocks,
    link: "/bricks-blocks",
  },
];

const Product = () => {
  return (
    <div className="bg-[#000000] text-white">
      {/* Hero Swiper Section */}
      <section className="w-full h-screen overflow-hidden relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="w-full h-full"
        >
          {categories.map((item, i) => (
            <SwiperSlide key={i} className="relative w-full h-full ">
              <div className="w-full h-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-60 px-10 py-20 flex items-center">
                <div className="max-w-2xl text-left space-y-6">
                  <h1 className="text-5xl font-bold text-white">
                    {item.title}
                  </h1>
                  <p className="text-xl text-[#C1C1C1]">{item.desc}</p>
                  <div className="flex gap-4">
                    <Link to={item.link}>
                      <button className="w-[180px] h-full bg-[#005243] hover:bg-[#006b5a] text-white rounded-2xl font-semibold transition">
                        Buy
                      </button>
                    </Link>
                    <Link to={item.link}>
                      <button className="w-[180px] h-full bg-[#00B3A3] hover:bg-[#009c93] text-white rounded-2xl font-semibold transition">
                        Sell
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Info Section */}
      <section className="px-6 md:px-16 py-20 grid md:grid-cols-2 gap-10 items-center bg-[#111111]">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight text-white">
            Local & International Products
          </h1>
          <p className="text-lg text-[#C1C1C1]">
            Discover an extraordinary online shopping experience with our
            collection that spans from local designers to leading international
            brands, featuring a captivating array of clothing and industrial
            materials.
          </p>
          <p className="text-[#00B3A3] font-medium text-xl">
            For Business Inquiries
          </p>
        </div>

        {/* Animated Info Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-black p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
        >
          <div className="bg-white p-4 rounded-full mb-4">
            <Globe className="text-[#005243] w-10 h-10" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Global Reach
          </h3>
          <p className="text-white text-sm">
            Bridging local innovation with international quality.
          </p>
        </motion.div>
      </section>

      {/* Product Grid */}
      <section className="bg-black px-6 md:px-16 py-16 w-full">
        <h2 className="text-white text-4xl font-bold mb-8 text-center">
          Explore Our Products
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <Link to={item.link} key={index}>
              <div className="bg-[#1A1A1A] rounded-xl overflow-hidden hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300 ease-in-out shadow-md hover:shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-[#C1C1C1] text-sm">{item.desc}</p>
                  <button className="mt-2 px-4 py-2 bg-[#005243] text-white rounded-full hover:bg-[#007a68] transition">
                    Enquire Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Section */}
      <Brand />
    </div>
  );
};

export default Product;
