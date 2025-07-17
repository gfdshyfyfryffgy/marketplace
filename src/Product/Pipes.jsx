import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

// FAQ Data for Pipes
const faqData = [
  {
    question: "What types of industrial pipes are available?",
    answer:
      "We supply a wide range of pipes including MS Pipes, GI Pipes, PVC Pipes, SS Pipes, and HDPE Pipes for both residential and industrial use.",
  },
  {
    question: "What are pipes commonly used for?",
    answer:
      "Pipes are primarily used in plumbing, construction, water supply systems, gas pipelines, and structural applications.",
  },
  {
    question: "How can I get the latest price of pipes?",
    answer:
      "Our platform lists real-time prices for various pipe categories across locations. Visit the prices section or contact us for a quote.",
  },
  {
    question: "Are pipe prices updated frequently?",
    answer:
      "Yes. Pipe prices are updated multiple times a day based on market trends and availability.",
  },
  {
    question: "Do you offer customized pipe sizes or bulk procurement options?",
    answer:
      "Absolutely. Submit your requirement and our sales team will provide you with best prices and delivery schedules based on volume and specifications.",
  },
  {
    question: "What factors affect the price of pipes?",
    answer:
      "Pricing is influenced by material type, thickness, diameter, length, coating (galvanized or not), and market demand.",
  },
];

// Sample Price Data for Pipes
const priceData = [
  {
    product: "MS Pipe (IS 1239)",
    location: "EX - Ghaziabad",
    price: "₹68,000/MT",
    time: "1 hour ago",
    actions: ["Buy"],
    href: "/products/ms-pipe-ghaziabad",
  },
  {
    product: "GI Pipe (Class B)",
    location: "EX - Ahmedabad",
    price: "₹72,500/MT",
    time: "2 hours ago",
    actions: ["Buy"],
    href: "/products/gi-pipe-ahmedabad",
  },
  {
    product: "PVC Pipe (4 inch)",
    location: "EX - Bengaluru",
    price: "Login to View",
    time: "",
    actions: ["Login to View"],
    href: "/products/pvc-pipe-bengaluru",
  },
  {
    product: "HDPE Water Pipe",
    location: "EX - Indore",
    price: "Login to View",
    time: "",
    actions: ["Login to View"],
    href: "/products/hdpe-pipe-indore",
  },
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
      <h3 className="text-3xl font-bold text-center text-white mb-8">Pipe FAQs</h3>
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
        <h2 className="text-3xl font-bold text-center mb-3">Submit Your Pipe Requirement</h2>
        <p className="text-center text-[#00B3A3] text-base mb-6 font-semibold">Bulk Orders | Custom Sizes | PAN India Dispatch</p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-7" onChange={handleChange}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Product</label>
              <select name="product" value={formData.product || ""} required className="w-full px-4 py-3 bg-[#191919] border border-[#222] text-white rounded-md">
                <option value="">Select Pipe Type</option>
                <option value="MS Pipe">MS Pipe</option>
                <option value="GI Pipe">GI Pipe</option>
                <option value="PVC Pipe">PVC Pipe</option>
                <option value="HDPE Pipe">HDPE Pipe</option>
                <option value="SS Pipe">SS Pipe</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Quantity (in MT or Units)</label>
              <input name="quantity" type="number" value={formData.quantity} className="w-full px-4 py-3 bg-[#191919] border border-[#222] text-white rounded-md" placeholder="Enter Quantity" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Company</label>
              <input name="company" type="text" value={formData.company} className="w-full px-4 py-3 bg-[#191919] border border-[#222] text-white rounded-md" placeholder="Enter Company Name" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Pincode</label>
              <input name="pincode" type="text" value={formData.pincode} className="w-full px-4 py-3 bg-[#191919] border border-[#222] text-white rounded-md" placeholder="Enter Delivery Pincode" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Email</label>
              <input name="email" type="email" value={formData.email} className="w-full px-4 py-3 bg-[#191919] border border-[#222] text-white rounded-md" placeholder="Enter Your Email" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">Mobile</label>
              <div className="flex">
                <select name="countryCode" value={formData.countryCode} className="bg-[#191919] border border-[#222] text-white px-4 py-3 rounded-l-md">
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input name="mobile" type="text" value={formData.mobile} className="flex-1 px-4 py-3 bg-[#191919] border border-[#222] text-white rounded-r-md" placeholder="Mobile Number" required />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="px-8 py-3 bg-[#005243] text-white rounded-md hover:bg-[#007C60] shadow-lg font-semibold transition-colors duration-300">Submit Requirement</button>
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
        <h2 className="text-2xl font-bold text-white mb-8">Pipe Prices (Most Viewed)</h2>
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

const Pipes = () => {
  const heroRef = useRef();
  const subRef = useRef();

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
    gsap.fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" });
  }, []);

  return (
    <div className="bg-[#000] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 ref={heroRef} className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center">
          Industrial Pipes: Prices, Requirements & FAQs
        </h1>
        <p ref={subRef} className="mb-10 text-center text-[#C1C1C1] text-lg max-w-2xl mx-auto">
          Get the most recent pipe rates, request bulk orders, and explore common buyer questions.
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

export default Pipes;