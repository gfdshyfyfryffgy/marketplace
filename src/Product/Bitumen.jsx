import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

// FAQ Data
const faqData = [
  {
    question: "What is Bitumen?",
    answer:
      "Bitumen is a black, sticky, and highly viscous liquid or semi-solid form of petroleum. It is mainly used in road construction for paving and waterproofing applications.",
  },
  {
    question: "What are the common uses of Bitumen?",
    answer: "It is used for road surfacing, roofing, and waterproofing works.",
  },
  {
    question: "Where can I find the latest prices for Bitumen products?",
    answer: "Check our website for real-time updates on Bitumen prices.",
  },
  {
    question: "How often are the Bitumen prices updated on our platform?",
    answer: "Prices are updated hourly to ensure accuracy.",
  },
  {
    question: "Are there different grades of Bitumen available?",
    answer: "Yes, Bitumen comes in various grades like VG-10, VG-30, VG-40, and Emulsion.",
  },
  {
    question: "Can I get customized quotes for bulk Bitumen requirements?",
    answer: "Absolutely, please contact us with your specifications.",
  },
  {
    question: "What factors affect Bitumen pricing?",
    answer: "Crude oil prices, transportation, grade, and availability are key factors.",
  },
];

// Price List Data
const priceData = [
  { product: "VG-30 Bitumen", location: "EX - Panipat", price: "₹48,000/MT", time: "1 hour ago", actions: ["Buy"], href: "/products/vg30-panipat" },
  { product: "VG-10 Bitumen", location: "EX - Mumbai", price: "₹47,500/MT", time: "1 hour ago", actions: ["Buy"], href: "/products/vg10-mumbai" },
  { product: "VG-40 Bitumen", location: "EX - Chennai", price: "Login to View", time: "", actions: ["Login to View"], href: "/products/vg40-chennai" },
  { product: "Bitumen Emulsion", location: "EX - Kolkata", price: "Login to View", time: "", actions: ["Login to View"], href: "/products/emulsion-kolkata" },
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
          ease: "power3.out"
        }
      );
    }
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#111] py-12 px-6 md:px-12 rounded-xl shadow-lg mb-12">
      <h3 className="text-3xl font-bold text-center text-white mb-8">Bitumen FAQs</h3>
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4" ref={el => faqRefs.current[index] = el}>
            <button
              className={`w-full flex justify-between items-center bg-[#222] text-white p-4 rounded-lg focus:outline-none transition-shadow ${activeIndex === index ? "shadow-lg" : "shadow"}`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-left text-base md:text-lg">{faq.question}</span>
              <span className="ml-4 text-xl">{activeIndex === index ? "−" : "+"}</span>
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

// Reuse RequirementForm and update label if needed
const RequirementForm = () => {
  // ...same code from earlier, no need to repeat
};

// Price List Component
const PriceList = () => {
  const listRef = useRef([]);

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
          ease: "power3.out"
        }
      );
    }
  }, []);

  return (
    <section className="bg-[#111] py-10 px-6 rounded-xl shadow-lg mb-12">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-white mb-8">
          Bitumen Most Viewed Prices
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-[#191919] rounded-lg shadow">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">Product</th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">Location</th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">Price</th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr
                  key={index}
                  ref={el => listRef.current[index] = el}
                  className="border-t border-b border-[#222] hover:bg-[#171717] transition-colors duration-300 cursor-pointer"
                  onClick={() => window.location.href = item.href}
                  tabIndex={0}
                  style={{ outline: "none" }}
                  onKeyPress={e => { if (e.key === "Enter") window.location.href = item.href; }}
                  title="View Product Details"
                >
                  <td className="py-4 px-4 text-sm text-white">{item.product}</td>
                  <td className="py-4 px-4 text-sm text-white">{item.location}</td>
                  <td className="py-4 px-4 text-sm text-white">{item.price}</td>
                  <td className="py-4 px-4 text-sm text-white">
                    {item.actions.map((action, idx) => (
                      <button
                        key={idx}
                        className={`mr-2 px-4 py-2 rounded-md font-semibold transition-colors duration-300 text-xs ${
                          action === "Buy"
                            ? "bg-[#005243] text-white hover:bg-[#007C60]"
                            : "bg-[#444] text-white hover:bg-[#666]"
                        }`}
                        onClick={e => { e.stopPropagation(); window.location.href = item.href; }}
                      >
                        {action}
                      </button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button
            className="mt-8 bg-[#005243] text-white px-8 py-3 rounded-md hover:bg-[#007C60] font-semibold shadow-lg transition-colors duration-300"
            onClick={() => window.location.href = "/prices"}
          >
            View All Prices
          </button>
        </div>
      </div>
    </section>
  );
};

const Bitumen = () => {
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
      <div className="max-w-7xl mx-auto px-4">
        <h1
          ref={heroRef}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center"
        >
          Bitumen Products, Prices & FAQs
        </h1>
        <p
          ref={subRef}
          className="mb-10 text-center text-[#C1C1C1] text-lg max-w-2xl mx-auto"
        >
          Explore top Bitumen prices, get your requirements fulfilled, and discover everything about Bitumen usage and grades!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <PriceList />
          <RequirementForm />
        </div>

        <FAQ />
      </div>
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

export default Bitumen;
