import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CircularText from "../animation/CircularText";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Careers", path: "/careers" },
   
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Supplier Network", path: "/supplier-network" },
      { name: "Product Catalog", path: "/products" },
      { name: "Logistics", path: "/logistics" },
      { name: "Financing", path: "/financing" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", path: "/help" },
      { name: "Contact Us", path: "/contact" },
      { name: "FAQs", path: "/faqs" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "+91 96535 44472", path: "tel:+919653544472" },
      { name: "sochinnovative19@gmail", path: "mailto:sochinnovative19@gmail.com" },
      { name: "Model Town, Panipat, Haryana", path: "https://goo.gl/maps/z4g2" },
    ],
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
            text="Supplix • Explore • Connect •"
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
            <h4 className="text-white font-semibold mb-3 relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[2px] after:bg-[#00B3A3] after:transition-all hover:after:w-full cursor-pointer">
              {section.title}
            </h4>

            <ul className="space-y-2 !cursor-pointer">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.path}
                    className="relative hover:text-[#00B3A3] transition duration-300 group !cursor-pointer"
                  >
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#00B3A3] group-hover:w-full transition-all duration-300 !cursor-pointer"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 🔹 Social Icons */}
      <div className="relative flex justify-center gap-5 pb-8 !cursor-pointer">
        {[
          { icon: FaFacebookF, url: "https://facebook.com" },
          { icon: FaInstagram, url: "https://instagram.com" },
          { icon: FaLinkedinIn, url: "https://linkedin.com" },
          { icon: FaTwitter, url: "https://twitter.com" },
        ].map((social, i) => (
          <a
            key={i}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-[#00B3A3] text-[#00B3A3] hover:bg-[#00B3A3] hover:text-black transition-all duration-300 !cursor-pointer"
          >
            <social.icon size={16} />
          </a>
        ))}
      </div>

      {/* 🔹 Bottom note */}
      <div
        className="relative text-center py-6 border-t border-gray-800 text-xs text-[#419c9c]"
        data-aos="fade-up"
      >
        © {new Date().getFullYear()} Supplix. All rights reserved.
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
