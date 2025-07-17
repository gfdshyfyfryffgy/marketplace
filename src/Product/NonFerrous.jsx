import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const faqData = [
  {
    question: "What are Non-Ferrous metals?",
    answer:
      "Non-Ferrous metals are metals that do not contain significant amounts of iron. Common examples include aluminum, copper, brass, lead, zinc, and nickel.",
  },
  {
    question: "What are the applications of Non-Ferrous metals?",
    answer:
      "They are used in electrical wiring, roofing, industrial machinery, aviation, and automotive components due to their resistance to rust and corrosion.",
  },
  {
    question: "Where can I find the latest prices for Non-Ferrous metals?",
    answer:
      "Our website lists updated rates for Copper, Aluminium, Zinc, Lead, and more.",
  },
  {
    question: "Are Non-Ferrous metal prices updated regularly?",
    answer:
      "Yes, we update Non-Ferrous prices every few hours to reflect market trends.",
  },
  {
    question: "Can I request customized Non-Ferrous metal quotes?",
    answer:
      "Yes, please submit your requirement form for a custom quote.",
  },
  {
    question: "Why are Non-Ferrous metals more expensive than steel?",
    answer:
      "They typically have higher raw material costs and are used in specialized applications.",
  },
];

const priceData = [
  { product: "Copper Cathode", location: "EX - Delhi", price: "₹820,000/MT", time: "2 hours ago", actions: ["Buy"], href: "/products/copper-cathode-delhi" },
  { product: "Aluminium Ingot", location: "EX - Mumbai", price: "₹220,000/MT", time: "2 hours ago", actions: ["Buy"], href: "/products/aluminium-ingot-mumbai" },
  { product: "Zinc Slab", location: "EX - Ahmedabad", price: "Login to View", time: "", actions: ["Login to View"], href: "/products/zinc-slab-ahmedabad" },
  { product: "Lead Ingot", location: "EX - Kolkata", price: "Login to View", time: "", actions: ["Login to View"], href: "/products/lead-ingot-kolkata" },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      faqRefs.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.13, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="bg-[#111] py-12 px-6 md:px-12 rounded-xl shadow-lg mb-12">
      <h3 className="text-3xl font-bold text-center text-white mb-8">Non-Ferrous FAQs</h3>
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4" ref={el => faqRefs.current[index] = el}>
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`w-full flex justify-between items-center bg-[#222] text-white p-4 rounded-lg focus:outline-none transition-shadow ${activeIndex === index ? "shadow-lg" : "shadow"}`}
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

const RequirementForm = () => {
  const [formData, setFormData] = useState({ product: "", quantity: "", company: "", pincode: "", email: "", mobile: "", countryCode: "+91" });
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, mobile: formData.countryCode + formData.mobile };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbwLXuKxLzqn4l-SfZoTAT47TSSFujIKTUPwJOVBxinUp5ltPRBi0C0lcjakcZ8J1Rs3oQ/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.status === "success") {
        alert("✅ Requirement submitted successfully!");
        formRef.current.reset();
        setFormData({ product: "", quantity: "", company: "", pincode: "", email: "", mobile: "", countryCode: "+91" });
      } else {
        alert("❌ Submission failed, please try again.");
      }
    } catch (err) {
      alert("🚫 Something went wrong!");
      console.error(err);
    }
  };

  return (
    <section className="bg-[#111] py-10 px-6 rounded-xl shadow-lg mb-12">
      <div className="max-w-2xl mx-auto text-white">
        <h2 className="text-3xl font-bold text-center mb-3">Submit Your Non-Ferrous Requirement</h2>
        <p className="text-center text-[#00B3A3] text-base mb-6 font-semibold">Fast Quotes | Quality Suppliers | PAN India Delivery</p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
          <div className="grid grid-cols-1 gap-6">
            {/* ...form inputs same as before */}
          </div>
          <div className="text-center">
            <button type="submit" className="px-8 py-3 bg-[#005243] text-white rounded-md hover:bg-[#007C60] shadow-lg font-semibold transition-colors duration-300">
              Submit Requirement
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

const PriceList = () => {
  const listRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(listRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.13, ease: "power3.out" });
  }, []);

  return (
    <section className="bg-[#111] py-10 px-6 rounded-xl shadow-lg mb-12">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-white mb-8">Non-Ferrous Metal Prices</h2>
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
                <tr key={index} ref={el => listRef.current[index] = el} className="border-t border-b border-[#222] hover:bg-[#171717] transition-colors duration-300 cursor-pointer" onClick={() => window.location.href = item.href}>
                  <td className="py-4 px-4 text-sm text-white">{item.product}</td>
                  <td className="py-4 px-4 text-sm text-white">{item.location}</td>
                  <td className="py-4 px-4 text-sm text-white">{item.price}</td>
                  <td className="py-4 px-4 text-sm text-white">
                    {item.actions.map((action, idx) => (
                      <button key={idx} onClick={e => { e.stopPropagation(); window.location.href = item.href; }}
                        className={`mr-2 px-4 py-2 rounded-md font-semibold text-xs transition-colors duration-300 ${action === "Buy" ? "bg-[#005243] hover:bg-[#007C60]" : "bg-[#444] hover:bg-[#666]"}`}>{action}</button>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center">
          <button onClick={() => window.location.href = "/prices"} className="mt-8 bg-[#005243] text-white px-8 py-3 rounded-md hover:bg-[#007C60] font-semibold shadow-lg transition-colors duration-300">
            View All Prices
          </button>
        </div>
      </div>
    </section>
  );
};

const NonFerrous = () => {
  const heroRef = useRef();
  const subRef = useRef();

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
    gsap.fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" });
  }, []);

  return (
    <div className="bg-[#000] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 ref={heroRef} className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">Non-Ferrous Metals: Prices, Requirements & FAQs</h1>
        <p ref={subRef} className="mb-10 text-center text-[#C1C1C1] text-lg max-w-2xl mx-auto">
          Get the latest rates, submit bulk requirements, and explore our most asked Non-Ferrous metal queries.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <PriceList />
          <RequirementForm />
        </div>

        <FAQ />
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s both;
        }
      `}</style>
    </div>
  );
};

export default NonFerrous;
