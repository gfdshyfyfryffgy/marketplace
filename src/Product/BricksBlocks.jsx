import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

// FAQ Data
const faqData = [
  {
    question: "What types of bricks and blocks do you offer?",
    answer:
      "We offer clay bricks, fly ash bricks, AAC (Autoclaved Aerated Concrete) blocks, solid concrete blocks, and hollow blocks for construction.",
  },
  {
    question: "What is the difference between AAC blocks and regular bricks?",
    answer:
      "AAC blocks are lighter, provide better insulation, and are more eco-friendly compared to traditional clay bricks.",
  },
  {
    question: "Can I get a custom size or shape?",
    answer: "Yes, custom sizes and finishes can be arranged based on your requirement and order quantity.",
  },
  {
    question: "Do you provide delivery to construction sites?",
    answer: "Yes, we offer doorstep delivery to your project or construction site.",
  },
  {
    question: "Are your bricks and blocks ISI certified?",
    answer: "All our products comply with national construction standards including ISI certification.",
  },
  {
    question: "Can I request a bulk order quote?",
    answer: "Absolutely! Please fill out the requirement form and our team will contact you.",
  },
];

// Sample Price List
const priceData = [
  { product: "Fly Ash Bricks", location: "EX - Delhi", price: "₹6.20 / piece", time: "2 hours ago", actions: ["Buy"], href: "/products/fly-ash-bricks-delhi" },
  { product: "AAC Blocks", location: "EX - Hyderabad", price: "₹3,500 / m³", time: "1 hour ago", actions: ["Buy"], href: "/products/aac-blocks-hyd" },
  { product: "Red Clay Bricks", location: "EX - Kolkata", price: "Login to View", time: "", actions: ["Login to View"], href: "/products/clay-bricks-kolkata" },
  { product: "Solid Concrete Blocks", location: "EX - Mumbai", price: "Login to View", time: "", actions: ["Login to View"], href: "/products/solid-blocks-mumbai" },
];

// FAQ Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);

  useEffect(() => {
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
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#111] py-12 px-6 md:px-12 rounded-xl shadow-lg mb-12">
      <h3 className="text-3xl font-bold text-center text-white mb-8">Bricks & Blocks FAQs</h3>
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4" ref={(el) => (faqRefs.current[index] = el)}>
            <button
              className={`w-full flex justify-between items-center bg-[#222] text-white p-4 rounded-lg focus:outline-none transition-shadow ${activeIndex === index ? "shadow-lg" : "shadow"}`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-left text-base md:text-lg">{faq.question}</span>
              <span className="ml-4 text-xl">{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 bg-[#191919] p-4 rounded-b-lg shadow-inner animate-fade-in">
                <p className="text-[#C1C1C1] text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Price List Component
const PriceList = () => {
  const listRef = useRef([]);

  useEffect(() => {
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
  }, []);

  return (
    <section className="bg-[#111] py-10 px-6 rounded-xl shadow-lg mb-12">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-white mb-8">Bricks & Blocks Prices</h2>
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
                  ref={(el) => (listRef.current[index] = el)}
                  className="border-t border-b border-[#222] hover:bg-[#171717] transition-colors duration-300 cursor-pointer"
                  onClick={() => (window.location.href = item.href)}
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") window.location.href = item.href;
                  }}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = item.href;
                        }}
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
            onClick={() => (window.location.href = "/prices")}
          >
            View All Prices
          </button>
        </div>
      </div>
    </section>
  );
};

// Main Component
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
      <div className="max-w-7xl mx-auto px-4">
        <h1
          ref={heroRef}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center"
        >
          Bricks & Blocks – Prices & FAQs
        </h1>
        <p
          ref={subRef}
          className="mb-10 text-center text-[#C1C1C1] text-lg max-w-2xl mx-auto"
        >
          Explore our latest pricing and get all your questions answered about bricks, blocks, and building materials.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <PriceList />
          {/* Reuse the same <RequirementForm /> here if already created */}
        </div>

        <FAQ />
      </div>

      {/* Fade-in animation */}
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
