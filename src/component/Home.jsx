import React from "react";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";

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
            <span className="text-[#00B3A3] font-normal">for business</span>
          </h1>
          <p className="mt-4 text-[#C1C1C1] text-lg mb-8 font-light">
            Connect with 1500+ Verified Suppliers. Enjoy Flexible Financing
            &amp; Smart Logistics
          </p>
          <Link to="/contact">
            <button className="demo inline-block bg-[#005243] text-white px-8 py-3 rounded-lg font-semibold shadow-lg text-base hover:bg-[#008b7b] transition pointer-events-auto">
              JOIN US NOW
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
