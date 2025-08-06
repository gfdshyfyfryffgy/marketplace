import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
// FAQ Data
const faqData = [
  {
    question: "What are Bricks & Blocks?",
    answer:
      "Bricks & Blocks are construction materials used for building walls, pavements, and other elements in masonry construction. They come in various types such as clay bricks, fly ash bricks, concrete blocks, and AAC blocks.",
  },
  {
    question: "What are the common applications of Bricks & Blocks?",
    answer:
      "They are primarily used in the construction of residential, commercial, and industrial buildings.",
  },
  {
    question: "Where can I find the latest prices for Bricks & Blocks?",
    answer: "Check our website regularly for real-time price updates.",
  },
  {
    question: "How often are Bricks & Blocks prices updated?",
    answer: "Prices are updated on a daily basis.",
  },
  {
    question: "Are there different types of Bricks & Blocks available?",
    answer: "Yes, including clay bricks, fly ash bricks, hollow blocks, and AAC blocks.",
  },
  {
    question: "Can I get custom quotes for bulk orders?",
    answer: "Yes, please contact us directly for custom pricing on large orders.",
  },
  {
    question: "What factors affect the pricing of Bricks & Blocks?",
    answer: "Prices depend on type, quality, size, location, and quantity.",
  },
];


// Price List Data
const priceData = [
  {
    product: "Fly Ash Bricks",
    location: "EX - Faridabad",
    price: "₹6,000/1000 Bricks",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "#form",
  },
  {
    product: "Clay Bricks",
    location: "EX - Ludhiana",
    price: "₹5,500/1000 Bricks",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "AAC Blocks",
    location: "EX - Ludhiana",
    price: "₹3,800/CBM",
    time: "1 hour ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Hollow Concrete Blocks",
    location: "EX - Mumbai",
    price: "₹38/Block",
    time: "1 hour ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Solid Concrete Blocks",
    location: "EX - Bangalore",
    price: "₹42/Block",
    time: "1 hour ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Fly Ash Bricks",
    location: "EX - Chennai",
    price: "₹5,700/1000 Bricks",
    time: "1 hour ago",
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
    <section className="bg-[#111] py-12 px-6 md:px-12 rounded-xl shadow-lg mb-12">
      <h3 className="text-3xl font-bold text-center text-white mb-8">
        Bricks-Blocks FAQs
      </h3>
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="mb-4"
            ref={(el) => (faqRefs.current[index] = el)}
          >
            <button
              className={`w-full flex justify-between items-center bg-[#222] text-white p-4 rounded-lg focus:outline-none transition-shadow ${
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


// Price List Component
const PriceList = () => {
  const listRef = useRef([]);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAll, setShowAll] = useState(false); // <== NEW

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (listRef.current.length) {
      gsap.fromTo(
        listRef.current,
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
  }, [showAll]); // re-run animation on toggle

  // Limit items unless showAll is true
  const visibleData = showAll ? priceData : priceData.slice(0, 6);

  return (
    <section className="bg-[#111] py-10 px-6 rounded-xl shadow-lg mb-12 w-320">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-white mb-8 text-center ">
          Mild Steel Most Viewed Prices
        </h2>

        <div className="overflow-x-auto w-300 ml-[-260px] ">
          <table className="w-full table-auto bg-[#191919] rounded-lg shadow">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">
                  Product
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">
                  Location
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">
                  Price
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {visibleData.map((item, index) => (
                <tr
                  key={index}
                  ref={(el) => (listRef.current[index] = el)}
                  className="border-t border-b border-[#222] hover:bg-[#171717] transition-colors duration-300"
                >
                  <td className="py-4 px-4 text-sm text-white">{item.product}</td>
                  <td className="py-4 px-4 text-sm text-white">{item.location}</td>
                  <td className="py-4 px-4 text-sm text-white">
                    {index < 3 || isLoggedIn ? (
                      item.price
                    ) : (
                      <span style={{ color: "gray" }}>---- (Login to view)</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-sm text-white flex">
                    {index < 3 || isLoggedIn ? (
                      item.actions?.map((action, idx) => (
                        <button
                          key={idx}
                          className={`mr-2 px-4 py-2 rounded-md font-semibold transition-colors duration-300 text-xs !cursor-pointer ${
                            action === "Buy"
                              ? "bg-[#005243] text-white hover:bg-[#007C60]"
                              : "bg-[#d41818] text-white hover:bg-[#ff4d4d]"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/form?product=${encodeURIComponent(item.product)}`);
                          }}
                        >
                          {action}
                        </button>
                      ))
                    ) : (
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={() =>
                          navigate("/login", {
                            state: { from: window.location.pathname },
                          })
                        }
                        className="inline-block border border-[#005243] text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#00B3A3] hover:text-black transition-colors duration-300 !cursor-pointer focus:outline-none"
                      >
                        Login to view
                      </span>
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
            className="mt-6 relative px-6 py-2 rounded-full text-white font-semibold 
              bg-gradient-to-r from-[#005243] to-[#00B3A3] 
              shadow-lg shadow-[#00B3A350] 
              transition-all duration-300 ease-out
              hover:scale-105 hover:shadow-[#00B3A390]
              active:scale-95 overflow-hidden group cursor-pointer"
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
const BricksBlocks = () => {
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
          BricksBlocks Products, Prices & FAQs
        </h1>
        <p
          ref={subRef}
          className="mb-10 text-center text-[#C1C1C1] text-lg max-w-2xl mx-auto"
        >
          Explore the latest prices, get your requirements fulfilled, and find
          answers to all your Bricksblocks questions!
        </p>

        {/* Main Content: Prices left, Form right (desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <PriceList />
          
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

export default BricksBlocks;