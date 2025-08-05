import React from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { Typewriter } from "react-simple-typewriter";
export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-black overflow-hidden flex items-center">
      {/* Left Side: Text Content */}
      <div className="absolute left-0 top-0 h-full w-full flex flex-col justify-center pl-16 z-10 pointer-events-none">
        <div className="max-w-xl">
          <h1 className="text text-white text-5xl md:text-6xl font-semibold leading-tight mb-3">
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
  Connect with 1500+ Verified Suppliers. Enjoy Flexible Financing &amp; Smart Logistics
</p>
          <Link to="/contact">
           <button
                  onClick={() => navigate(category.link)}
                  className="mt-6 relative px-6 py-2 rounded-full text-white font-semibold 
                             bg-gradient-to-r from-[#005243] to-[#00B3A3] 
                             shadow-lg shadow-[#00B3A350] 
                             transition-all duration-300 ease-out
                             hover:scale-105 hover:shadow-[#00B3A390]
                             active:scale-95 overflow-hidden group"
                >
                  <span className="relative z-10">JOIN US NOW</span>
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
          </Link>
        </div>
      </div>

      {/* Right Side: Spline Animation */}
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <Spline
          scene="https://prod.spline.design/NNSKaYWPNEw7M6yR/scene.splinecode"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "0.75rem",
            marginLeft: "280px",
          }}
        />
        {/* Overlay to hide logo */}
        <div className="absolute bottom-5 right-2 w-39 h-12 bg-black z-10 rounded-md mr-2 mt-3"></div>
      </div>
    </main>
  );
}
