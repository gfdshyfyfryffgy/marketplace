import {React,useState} from "react";
import { Link } from "react-router-dom";
import map from "../assets/map.jpg"; // Correct import syntax
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Steel from "../assets/steel.png";
import Chemicals from "../assets/Chamical.png";
import Bitumen from "../assets/bitumen.png";
import AOS from 'aos';
import 'aos/dist/aos.css';



const statsData = [
  { value: 205, suffix: "%", label: "CAGR FY22 - FY24" },
  { value: 650, suffix: "k+", label: "Total Enquiries recorded (in MT)" },
  { value: 4500, suffix: "+", label: "Total Stakeholders Connected" },
  { value: 1000, suffix: "+", label: "Total SKUs Served" },
  { value: 10, suffix: "+", label: "Partner ScrapYards" },
  { value: 37, suffix: "+", label: "Cloud Factories Onboarded" },
];
const team = [
  { name: "John Doe", role: "CEO", image: Steel },
  { name: "Jane Smith", role: "Web Developer", image: Chemicals },
  { name: "John Smith", role: "Marketing Manager", image: Bitumen },
];

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.8, // 80% of the component must be visible
    triggerOnce: true,
  });



  return (
    <section className="bg-[#000000] text-white w-full px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Intro Section */}
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
              <button className="mt-6 relative px-6 py-2 rounded-full text-white font-semibold 
             bg-gradient-to-r from-[#005243] to-[#00B3A3] 
             shadow-lg shadow-[#00B3A350] 
             transition-all duration-300 ease-out
             hover:scale-105 hover:shadow-[#00B3A390]
             active:scale-95 overflow-hidden group !cursor-pointer">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Spline Viewer */}
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
      </div>

      {/* Our Mission Section */}
      <div className="mt-24 max-w-4xl mx-auto text-center space-y-4">
        <h3 className="text-3xl font-bold text-[#00B3A3]">Our Mission</h3>
        <p className="text-[#C1C1C1] text-lg">
          To simplify the global supply chain by connecting quality
          manufacturers with trusted buyers, promoting sustainability and
          efficiency.
        </p>
      </div>

      {/* What We Offer */}
      <div className="mt-20 grid md:grid-cols-4 gap-6 text-center">
        {[
          {
            title: "Steel & Alloys",
            desc: "Reliable sourcing of structural and industrial steel products.",
          },
          {
            title: "Polymers",
            desc: "Supplying HDPE, LDPE, PP and other versatile polymers.",
          },
          {
            title: "Chemicals",
            desc: "Industrial and specialty chemicals for various applications.",
          },
          {
            title: "Non-Ferrous Metals",
            desc: "Aluminum, copper, and other strategic metals.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#111111] rounded-xl p-6 hover:bg-[#1b1b1b] transition"
          >
            <h4 className="text-xl font-semibold text-[#00B3A3]">
              {item.title}
            </h4>
            <p className="text-[#C1C1C1] mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Global Reach */}
      <div className="mt-24 text-center space-y-4 relative">
        <h3 className="text-3xl font-bold text-[#00B3A3]">
          Our Global Presence
        </h3>
        <p className="text-[#C1C1C1] text-lg">
          Serving clients in over{" "}
          <span className="text-white font-bold">30+ countries</span> with
          strategic warehouses and logistics partners.
        </p>
        <div className="mt-6 relative w-full max-w-6xl mx-auto">
          <img
            src={map}
            alt="World Map"
            className="ml-15 w-[999px] h-150 rounded-xl "
          />
         
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-24 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Trusted Network",
            desc: "We collaborate with top manufacturers and vetted suppliers.",
          },
          {
            title: "Competitive Pricing",
            desc: "We ensure fair pricing by removing unnecessary middlemen.",
          },
          {
            title: "On-Time Delivery",
            desc: "Our logistics network ensures reliable and prompt delivery worldwide.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="bg-[#111111] p-6 rounded-xl hover:bg-[#1b1b1b] transition"
          >
            <h4 className="text-xl font-semibold text-[#00B3A3]">
              {feature.title}
            </h4>
            <p className="text-[#C1C1C1] mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Our Team Roles Section */}

      <div className="mt-24 max-w-4xl flex flex-row items-center justify-between mx-auto">
        <div className="mt-24 text-left space-y-4 flex flex-col items-start ml-[-150px]">
          <h3 className="text-7xl bold font-size-20px font-bold">
            Ready to Order ?
          </h3>
          <p>
            Get in touch with us to learn more about our products and services.
          </p>
        </div>

        <div className="text-center mt-16 ml-40">
  {/* Contact Us Button - Green Teal Gradient */}
  <Link to="/contact">
    <button className="mt-6 mr-2 relative px-6 py-2 rounded-full text-white font-semibold 
      bg-gradient-to-r from-[#005243] to-[#00B3A3] 
      shadow-lg shadow-[#00B3A350] 
      transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-[#00B3A390]
      active:scale-95 overflow-hidden group cursor-pointer">
      Contact Us
    </button>
  </Link>

  {/* View Products Button - Teal to Gray Gradient */}
  <Link to="/categories">
    <button className="mt-6 mr-8.5 relative px-6 py-2 rounded-full text-white font-semibold 
      bg-gradient-to-r from-[#00B3A3] to-[#C1C1C1] 
      shadow-lg shadow-[#C1C1C140] 
      transition-all duration-300 ease-out
      hover:scale-105 hover:shadow-[#C1C1C180]
      active:scale-95 overflow-hidden group cursor-pointer">
      View Products
    </button>
  </Link>
</div>

      </div>

      {/* Statistics Section */}

      <div ref={ref} className="mt-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className=" bg-[#005243] shadow-md p-6 rounded-xl text-center"
            >
              <h3 className="text-4xl font-extrabold text-white">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                {stat.suffix}
              </h3>
              <p className="mt-2 text-sm font-medium text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex felx-row justify-between items-center mt-24 max-w-7xl mx-auto">
        <div className="mt-24 relative w-full max-w-md mx-auto h-[400px]">
          {/* Bottom image */}
          <img
            src={Steel}
            alt="Steel"
            className="w-92 h-114 rounded-3xl absolute top-0 left-0 z-10 border-8 border-[black] shadow-lg"
          />

          {/* Middle image (overlapping slightly) */}
          <img
            src={Chemicals}
            alt="Chemicals"
            className="w-82 h-80 rounded-3xl absolute top-34 left-20 z-20 border-8 border-[black] shadow-lg"
          />

          {/* Top small circular image */}
          <img
            src={Bitumen}
            alt="Bitumen"
            className="w-52 h-40 rounded-2xl absolute top-74 left-55 z-20 border-8 border-[black] shadow-lg"
          />
        </div>

        <div className="mt-24 max-w-4xl ml-20 space-y-6 text-left bg-black p-8 rounded-lg">
          {/* Tag */}
          <span className="inline-block bg-[#005243] text-white text-sm px-4 py-1 rounded-full font-medium tracking-wide">
            ⚡ Who We Are
          </span>

          {/* Main Text */}
          <p className="text-white leading-relaxed text-lg">
            As a vertically integrated player, we provide a spectrum of
            <span className="text-[#00B3A3] font-medium">
              {" "}
              Value Added Services
            </span>
            . Our mission is to unite all stakeholders onto a single network
            through partnerships and technology. We strive to minimize
            environmental impact by optimizing resource utilization and promote
            a
            <span className="text-[#00B3A3] font-medium">
              {" "}
              Sustainable Future
            </span>{" "}
            in the
            <span className="text-[#00B3A3] font-medium">
              {" "}
              Metal Supply Chain
            </span>
            .
            <br />
            <br />
            <span className="text-[#C1C1C1]">
              Our services span from
              <span className="text-[#00B3A3] font-medium"> Sourcing</span>{" "}
              premium finished and recycled goods, providing
              <span className="text-[#00B3A3] font-medium">
                {" "}
                Fabricated
              </span>{" "}
              products,
              <span className="text-[#00B3A3] font-medium">
                {" "}
                Financing
              </span>{" "}
              solutions, and end-to-end
              <span className="text-[#00B3A3] font-medium"> Logistics</span>.
            </span>
          </p>
        </div>
      </div>

    

     
  
    </section>
  );
};

export default About;
