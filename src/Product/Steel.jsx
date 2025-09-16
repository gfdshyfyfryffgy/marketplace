import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import "../index.css";
// import { useProducts } from "../context/ProductsContext";


//  const { data } = useProducts();
// FAQ Data
const faqData = [
  {
    question: "What is Mild Steel?",
    answer:
      "Mild Steel, also known as low carbon steel, is an alloy of iron and carbon with a low carbon content (typically 0.05% to 0.25%). It has a relatively high melting point (between 1450°C to 1520°C). Some commonly known Mild Steel Products are: MS Angle, MS Ingot, Primary TMT, CRC, MS Billets etc.",
  },
  {
    question: "What are the common applications of Mild Steel?",
    answer:
      "It is used in construction, automotive, and manufacturing industries.",
  },
  {
    question: "Where can I find the latest prices for Mild Steel products?",
    answer: "Check our website for updated prices.",
  },
  {
    question:
      "How often are the Mild Steel product prices updated on our platform?",
    answer: "Prices are updated every hour.",
  },
  {
    question: "Are there different grades of Mild Steel available?",
    answer: "Yes, there are various grades of Mild Steel.",
  },
  {
    question:
      "Can I get customized quotes for specific Mild Steel product variations or quantities?",
    answer: "Yes, contact us for a custom quote.",
  },
  {
    question:
      "What are the factors to consider when purchasing Mild Steel products?",
    answer: "Consider strength, price, and material specifications.",
  },
];

// Price List Data
const priceData = [
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Ghaziabad",
    price: "₹48,500/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Nagpur",
    price: "₹46,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Bhilai",
    price: "₹45,500/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Jamshedpur",
    price: "₹46,500/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Durgapur",
    price: "₹46,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Vijayanagar",
    price: "₹46,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Faridabad",
    price: "₹55,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Ludhiana",
    price: "₹56,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E250 BR",
    location: "EX - Ludhiana",
    price: "₹54,200/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E250 BR",
    location: "EX - Mumbai",
    price: "₹53,700/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Bangalore",
    price: "₹55,300/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Chennai",
    price: "₹55,400/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
];

// FAQ Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    if (faqRefs.current.length) {
      gsap.fromTo(
        faqRefs.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.13,
          ease: "power3.out",
        }
      );
    }
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#111] py-12 px-6 md:px-12 rounded-xl shadow-lg mb-12 ">
      <h3 className="text-3xl font-bold text-center text-white mb-8 ">
        Mild Steel FAQs
      </h3>
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="mb-4"
            ref={(el) => (faqRefs.current[index] = el)}
          >
            <button
              className={`w-full flex justify-between items-center bg-[#222] text-white p-4 rounded-lg focus:outline-none transition-shadow !cursor-pointer ${
                activeIndex === index ? "shadow-lg" : "shadow"
              }`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-left text-base md:text-lg">
                {faq.question}
              </span>
              <span className="ml-4 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="mt-2 bg-[#191919] p-4 rounded-b-lg shadow-inner animate-fade-in"
              >
                <p className="text-[#C1C1C1] text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Requirement Form Component with Buy/Sell Switch and GST field

const PriceList = () => {
  const listRef = useRef([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Check login status
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // Animate rows with GSAP
  useEffect(() => {
    if (listRef.current.length) {
      gsap.killTweensOf(listRef.current);
      gsap.fromTo(
        listRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    }
  }, [showAll]);

  const visibleData = showAll ? priceData : priceData.slice(0, 6);

  return (
    <section
      className="bg-[#111] py-6 px-3 sm:px-4 md:px-6 rounded-xl shadow-lg mb-12 
             w-full sm:w-[90%] md:w-[700px] lg:w-[900px] xl:w-[1200px] mx-auto"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
          Mild Steel Most Viewed Prices
        </h2>

        {/* Table Wrapper */}
        <div className="overflow-x-auto rounded-lg border border-[#222] shadow-md">
          <table className="w-full table-auto bg-[#191919] rounded-lg">
            <thead className="sticky top-0 bg-[#191919] z-10">
              <tr>
                {["Product", "Location", "Price", "Actions"].map(
                  (header, i) => (
                    <th
                      key={i}
                      className="py-3 px-4 text-left text-xs sm:text-sm md:text-base font-semibold text-[#C1C1C1] break-words"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {visibleData.map((item, index) => (
                <tr
                  key={index}
                  ref={(el) => (listRef.current[index] = el)}
                  className="border-t border-b border-[#222] hover:bg-[#171717] transition-colors duration-300"
                >
                  {/* Product */}
                  <td className="py-3 px-4 text-xs sm:text-sm md:text-base text-white break-words">
                    {item.product}
                  </td>

                  {/* Location */}
                  <td className="py-3 px-4 text-xs sm:text-sm md:text-base text-white break-words">
                    {item.location}
                  </td>

                  {/* Price */}
                  <td className="py-3 px-4 text-xs sm:text-sm md:text-base text-white break-words">
                    {index < 3 || isLoggedIn ? (
                      item.price
                    ) : (
                      <span className="text-gray-500">
                        ---- (Login to view)
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-3 px-4 flex flex-col sm:flex-row gap-2 min-w-0">
                    {index < 3 || isLoggedIn ? (
                      item.actions?.map((action, idx) => (
                        <button
                          key={idx}
                          className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white font-semibold 
      text-xs sm:text-sm md:text-base transition-all duration-300 ease-out shadow-md cursor-pointer ${
        action === "Buy"
          ? "bg-gradient-to-r from-[#005243] to-[#00B3A3] hover:scale-105"
          : action === "Sell"
          ? "bg-gradient-to-r from-[#8B0000] to-[#d41818] hover:scale-105"
          : "bg-gray-500 cursor-not-allowed"
      }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            // Navigate to form with product and action type
                            navigate(
                              `/form?product=${encodeURIComponent(
                                item.product
                              )}&action=${action.toLowerCase()}`
                            );
                          }}
                        >
                          {action}
                        </button>
                      ))
                    ) : (
                      <button
                        onClick={() =>
                          navigate("/login", {
                            state: { from: window.location.pathname },
                          })
                        }
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm md:text-base font-semibold bg-gradient-to-r from-[#005243] to-[#00B3A3] hover:scale-105 transition-all duration-300"
                      >
                        Login to view
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Toggle View All / View Less */}
        <div className="text-center">
          <button
            className="mt-6 px-5 py-2 rounded-full text-white font-semibold text-sm sm:text-base md:text-lg bg-gradient-to-r from-[#005243] to-[#00B3A3] shadow-lg hover:scale-105 transition-all duration-300"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "View Less" : "View All Prices"}
          </button>
        </div>
      </div>
    </section>
  );
};

// Main Combined Section
const Steel = () => {
  const heroRef = useRef();
  const subRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-[#000] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 mt-10">
        {/* Hero Title */}
        <h1
          ref={heroRef}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center"
        >
          Mild Steel Products, Prices & FAQs
        </h1>
        <p
          ref={subRef}
          className="mb-10 text-center text-[#C1C1C1] text-lg max-w-2xl mx-auto"
        >
          Explore the latest prices, get your requirements fulfilled, and find
          answers to all your Mild Steel questions!
        </p>

        {/* Main Content: Prices left, Form right (desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <PriceList />
          {/* <RequirementForm /> */}
        </div>

        {/* FAQs */}
        <FAQ />
      </div>
      {/* GSAP animation keyframes for fade-in */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(15px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.5s both;
          }
        `}
      </style>
    </div>
  );
};

export default Steel;
