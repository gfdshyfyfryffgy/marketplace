import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

// FAQ Data
const faqData = [
  {
    question: "What is Mild Steel?",
    answer:
      "Mild Steel, also known as low carbon steel, is an alloy of iron and carbon with a low carbon content (typically 0.05% to 0.25%). It has a relatively high melting point (between 1450°C to 1520°C). Some commonly known Mild Steel Products are: MS Angle, MS Ingot, Primary TMT, CRC, MS Billets etc.",
  },
  {
    question: "What are the common applications of Mild Steel?",
    answer: "It is used in construction, automotive, and manufacturing industries.",
  },
  {
    question: "Where can I find the latest prices for Mild Steel products?",
    answer: "Check our website for updated prices.",
  },
  {
    question: "How often are the Mild Steel product prices updated on our platform?",
    answer: "Prices are updated every hour.",
  },
  {
    question: "Are there different grades of Mild Steel available?",
    answer: "Yes, there are various grades of Mild Steel.",
  },
  {
    question: "Can I get customized quotes for specific Mild Steel product variations or quantities?",
    answer: "Yes, contact us for a custom quote.",
  },
  {
    question: "What are the factors to consider when purchasing Mild Steel products?",
    answer: "Consider strength, price, and material specifications.",
  },
];

// Price List Data
const priceData = [
  { product: "HRC E350 BR", location: "EX - Faridabad", price: "₹55,000/MT", time: "2 hours ago", actions: ["Buy", ], href: "/products/hrc-e350-br-faridabad" },
  { product: "HRC E350 BR", location: "EX - Ludhiana", price: "₹56,000/MT", time: "2 hours ago", actions: ["Buy",], href: "/products/hrc-e350-br-ludhiana" },
  { product: "HRC E250 BR", location: "EX - Ludhiana", price: "Login to View", time: "", actions: ["Login to View"], href: "/products/hrc-e250-br-ludhiana" },
  { product: "HRC E250 BR", location: "EX - Mumbai", price: "Login to View", time: "", actions: ["Login to View"], href: "/products/hrc-e250-br-mumbai" },
  { product: "HRC E350 BR", location: "EX - Bangalore", price: "Login to View", time: "", actions: ["Login to View"], href: "/products/hrc-e350-br-bangalore" },
  { product: "HRC E350 BR", location: "EX - Chennai", price: "Login to View", time: "", actions: ["Login to View"], href: "/products/hrc-e350-br-chennai" },
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
      <h3 className="text-3xl font-bold text-center text-white mb-8">Mild Steel FAQs</h3>
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

// Requirement Form Component
 // Requirement Form Component
const RequirementForm = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    company: "",
    pincode: "",
    email: "",
    mobile: "",
    countryCode: "+91",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      mobile: formData.countryCode + formData.mobile,
    };

try {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwLXuKxLzqn4l-SfZoTAT47TSSFujIKTUPwJOVBxinUp5ltPRBi0C0lcjakcZ8J1Rs3oQ/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );



      const result = await response.json();

      if (result.status === "success") {
        alert("✅ Requirement submitted successfully!");
        formRef.current.reset(); // clears the form
        setFormData({
          product: "",
          quantity: "",
          company: "",
          pincode: "",
          email: "",
          mobile: "",
          countryCode: "+91",
        });
      } else {
        alert("❌ Submission failed, please try again.");
      }
    } catch (error) {
      alert("🚫 Something went wrong!");
      console.error(error);
    }
  };

  return (
    <section className="bg-[#111] py-10 px-6 rounded-xl shadow-lg mb-12">
      <div className="max-w-2xl mx-auto text-white">
        <h2 className="text-3xl font-bold text-center mb-3">
          Tell Us Your Requirement
        </h2>
        <p className="text-center text-[#00B3A3] text-base mb-6 font-semibold">
          Best Rates | Working Capital | Delivery Anywhere
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Product</label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                required
              >
                <option value="">Select Product</option>
                <option value="Steel">Steel</option>
                <option value="Polymers">Polymers</option>
                <option value="Bitumen">Bitumen</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                placeholder="Enter Quantity"
                min={1}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                placeholder="Enter Company"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                placeholder="Enter Pincode"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Mobile Number</label>
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                  placeholder="Enter Mobile"
                  required
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#005243] text-white rounded-md hover:bg-[#007C60] shadow-lg font-semibold transition-colors duration-300"
            >
              Submit Requirement
            </button>
          </div>
        </form>
      </div>
    </section>
  );
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
          Mild Steel Most Viewed Prices
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
                            : action === "Whatsapp"
                            ? "bg-[#00B3A3] text-white hover:bg-[#00d1c1]"
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
        {/* Optionally, you can add a view more button */}
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

// Main Combined Section
const Polymers  = () => {
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
          Explore the latest prices, get your requirements fulfilled, and find answers to all your Mild Steel questions!
        </p>

        {/* Main Content: Prices left, Form right (desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <PriceList />
          <RequirementForm />
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

export default Polymers ;

