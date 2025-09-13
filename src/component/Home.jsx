import React from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { Typewriter } from "react-simple-typewriter";
import "../index.css";
export default function Home() {
  return (
    <main className="flex flex-col md:flex-row w-full min-h-screen bg-black overflow-hidden items-center px-4 md:px-16">
  {/* Left Side: Text Content */}
  <div className="w-full md:w-1/2 flex flex-col justify-center z-10">
    <div className="max-w-xl">
      <h1 className="text-white text-5xl md:text-6xl font-semibold leading-tight mb-3">
        India’s Leading
        <br />
        B2B Marketplace
        <br />
        <span className="text-[#00B3A3] font-normal">
          <Typewriter
            words={["for business", "for suppliers", "for buyers"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>

      <p className="mt-4 text-[#C1C1C1] text-lg mb-8 font-light">
        Connect with 1500+ Verified Suppliers. Enjoy Flexible Financing & Smart Logistics
      </p>

      <Link to="/contact">
        <button className="mt-6 px-6 py-2 rounded-full text-white font-semibold 
          bg-gradient-to-r from-[#005243] to-[#00B3A3] 
          shadow-lg shadow-[#00B3A350] 
          transition-all duration-300 ease-out
          hover:scale-105 hover:shadow-[#00B3A390]
          active:scale-95 overflow-hidden group cursor-pointer">
          JOIN US NOW
        </button>
      </Link>
    </div>
  </div>

  {/* Right Side: Spline */}
  <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <spline-viewer
            url="https://prod.spline.design/NNSKaYWPNEw7M6yR/scene.splinecode"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "0.75rem",
            }}
          ></spline-viewer>
          <div className="absolute bottom-5 right-2 w-39 h-12 bg-black z-10 rounded-md mr-2 mt-3"></div>
        </div>
</main>

  );
}