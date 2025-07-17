import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CircularText from "../animation/CircularText";

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
    title: "Connect",
    links: ["87656861", "jhkdhfdhkfkf", "jfhufdhkfdfkdh"],
  },
];

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <footer className="bg-black text-[#C1C1C1] text-sm w-full overflow-hidden ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* 🌀 CircularText as first column */}
        <div
          data-aos="fade-up"
          className="flex justify-center items-center col-span-2 lg:col-span-1"
        >
          <CircularText
            text=" sagar " // change the text form her 
            spinDuration={20}
            onHover="speedUp"
            className="text-green-400"
          />
        </div>

        {/* 🔗 Other footer links */}
        {footerLinks.map((section, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="break-words"
          >
            <h4 className="text-white font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="hover:text-[#005243] transition duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div
        className="text-center py-6 border-t border-gray-800 text-xs text-[#419c9c]"
        data-aos="fade-up"
      
      >
        © {new Date().getFullYear()} Marketplace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
