import React from "react";
import { Link } from "react-router-dom"; // ✅ Add this import

const About = () => {
  return (
    <section className="bg-[#000000] text-white w-full min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center h-full">
        {/* Left: Text */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            About <span className="text-[#00B3A3]">Our Company</span>
          </h2>
          <p className="text-lg text-[#C1C1C1] leading-relaxed">
            We are a global trading and distribution company dedicated to
            supplying industrial raw materials across various sectors. With
            years of experience and strong supplier networks, we specialize in
            offering high-quality steel, polymers, chemicals, non-ferrous
            metals, and construction materials.
          </p>
          <p className="text-[#C1C1C1] leading-relaxed">
            Our mission is to bridge the gap between international suppliers and
            local buyers with trust, transparency, and efficiency. We believe in
            building long-term partnerships and helping businesses scale with
            the best materials at the right price.
          </p>

          <div className="flex gap-6 mt-6">
            <Link to="/contact">
              <button className="px-6 py-3 bg-[#005243] hover:bg-[#007a68] text-white rounded-md font-semibold transition">
                Learn More
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-6 py-3 bg-[#00B3A3] hover:bg-[#009c93] text-white rounded-md font-semibold transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Spline Viewer */}
        <div className="flex flex-col gap-6">
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
            <spline-viewer
              url="https://prod.spline.design/NNSKaYWPNEw7M6yR/scene.splinecode"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "0.75rem",
              }}
            ></spline-viewer>

            {/* Overlay to hide logo */}
            <div className="absolute bottom-5 right-2 w-39 h-12 bg-[black] z-10 rounded-md mr-2 mt-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
