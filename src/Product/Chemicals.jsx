import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
// FAQ Data
const faqData = [
  {
    question: "What are Chemicals in the context of industry?",
    answer:
      "Chemicals refer to basic industrial, agricultural, and specialty chemicals used in manufacturing, processing, agriculture, pharmaceuticals, and cleaning products.",
  },
  {
    question: "What are common applications of Chemicals?",
    answer:
      "Chemicals are used in agriculture, manufacturing, pharmaceuticals, construction, and consumer products.",
  },
  {
    question: "Where can I find the latest prices for Chemical products?",
    answer: "Check our platform regularly for real-time chemical prices and market updates.",
  },
  {
    question:
      "How often are chemical prices updated?",
    answer: "Chemical prices are updated in real-time or daily, depending on the product and market.",
  },
  {
    question: "Are there different types of Chemicals available?",
    answer: "Yes, including basic chemicals, specialty chemicals, agrochemicals, and consumer chemicals.",
  },
  {
    question:
      "Can I get custom chemical blends or bulk quotes?",
    answer: "Yes, reach out to our team with your requirements.",
  },
  {
    question:
      "What factors influence Chemical product pricing?",
    answer: "Raw material costs, demand, supply chain logistics, and purity grade.",
  },
];

// Price List Data
const priceData = [
  {
    product: "Sulphur Powder",
    location: "EX - Ahmedabad",
    price: "₹9,200/MT",
    time: "1 hour ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Caustic Soda Flakes",
    location: "EX - Gujarat",
    price: "₹35,000/MT",
    time: "3 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  
  {
    product: "Methanol - Imported (Bulk)",
    location: "EX - Kandla",
    price: "₹23.40/KG",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Methanol - Imported (Bulk)",
    location: "EX - Mumbai",
    price: "₹23.65/KG",
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
    <section className="bg-[#111] py-12 px-6 md:px-12 rounded-xl shadow-lg mb-12 w-320">
      <h3 className="text-3xl font-bold text-center text-white mb-8">
        Chemicals FAQs
      </h3>
      <div className="max-w-4xl mx-auto w-300 ml-[-260px]">
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // ✅ now actions and price will be visible after login
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
  }, []);

  return (
    <section className="bg-[#111] py-10 px-6 rounded-xl shadow-lg mb-12 w-320">
  <div className="max-w-2xl mx-auto w-full">
    <h2 className="text-2xl font-bold text-white mb-8 text-center">
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
  {priceData.map((item, index) => (
    <tr
      key={index}
      ref={(el) => (listRef.current[index] = el)}
      className="border-t border-b border-[#222] hover:bg-[#171717] transition-colors duration-300"
    >
      <td className="py-4 px-4 text-sm text-white">{item.product}</td>
      <td className="py-4 px-4 text-sm text-white">{item.location}</td>

      <td className="py-4 px-4 text-sm text-white">
        {(index < 3 || isLoggedIn) ? (
          item.price
        ) : (
          <span style={{ color: 'gray' }}>---- (Login to view)</span>
        )}
      </td>

      <td className="py-4 px-4 text-sm text-white flex">
        {(index < 3 || isLoggedIn) ? (
          item.actions?.map((action, idx) => (
            <button
              key={idx}
              className={`mr-2 px-4 py-2 rounded-md font-semibold transition-colors duration-300 text-xs cursor-pointer ${
                action === "Buy"
                  ? "bg-[#005243] text-white hover:bg-[#007C60]"
                  : action === "Sell"
                  ? "bg-[#d41818] text-white hover:bg-[#ff4d4d]"
                  : "bg-[#444] text-white hover:bg-[#666]"
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
          // ✅ Show clickable "Login to view"
<span
  onClick={() => navigate("/login", { state: { from: window.location.pathname } })}
  className="inline-block border border-[#005243] text-[#fff] text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#00B3A3] hover:text-black transition-colors duration-300 cursor-pointer"
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
        {/* Optionally, you can add a view more button */}
        <div className="text-center">
          <button
            className="mt-8 bg-[#005243] text-white px-8 py-3 rounded-md hover:bg-[#007C60] font-semibold shadow-lg transition-colors duration-300"
            onClick={() => (window.location.href = "")}
          >
            View All Prices
          </button>
        </div>
      </div>
    </section>
  );
};

// Main Combined Section
const Chemicals = () => {
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
          Chemicals Products, Prices & FAQs
        </h1>
        <p
          ref={subRef}
          className="mb-10 text-center text-[#C1C1C1] text-lg max-w-2xl mx-auto"
        >
          Explore the latest prices, get your requirements fulfilled, and find
          answers to all your chemicals questions!
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

export default Chemicals;