import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CircularText from "../animation/CircularText";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog"],
  },
  {
    title: "Products",
    links: ["Supplier Network", "Product Catalog", "Logistics", "Financing"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact Us", "FAQs"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
  {
    title: "Contact",
    links: ["+91 96535 44472", "sochinnovative19@gmail", "Model Town, Panipat, Haryana"],
  },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="relative overflow-hidden text-sm text-[#C1C1C1]">
      {/* 🔹 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a2a2a] to-black animate-gradient" />

      {/* 🔹 Top border with gradient animation */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00B3A3] via-[#005243] to-[#00B3A3] animate-border" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* 🌀 CircularText */}
        <div
          data-aos="fade-up"
          className="flex justify-center items-center col-span-2 lg:col-span-1"
        >
          <CircularText
            text="MarketPlace • Explore • Connect •"
            spinDuration={18}
            onHover="speedUp"
            className="text-[#00B3A3]"
          />
        </div>

        {/* 🔗 Footer links */}
        {footerLinks.map((section, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="break-words"
          >
            <h4 className="text-white font-semibold mb-3 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-[#00B3A3] after:transition-all hover:after:w-full">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="relative hover:text-[#00B3A3] transition duration-300 group"
                  >
                    {link}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#00B3A3] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 🔹 Social Icons */}
      <div className="relative flex justify-center gap-5 pb-8">
        {[FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#00B3A3] text-[#00B3A3] hover:bg-[#00B3A3] hover:text-black transition-all duration-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>

      {/* 🔹 Bottom note */}
      <div
        className="relative text-center py-6 border-t border-gray-800 text-xs text-[#419c9c]"
        data-aos="fade-up"
      >
        © {new Date().getFullYear()} Marketplace. All rights reserved.
      </div>

      {/* 🔹 Animations */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradientMove 10s ease infinite;
          }
          @keyframes borderMove {
            0% { background-position: 0% 0%; }
            100% { background-position: 200% 0%; }
          }
          .animate-border {
            background-size: 200% auto;
            animation: borderMove 3s linear infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
