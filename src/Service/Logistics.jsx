import React from "react";
import { useNavigate } from "react-router-dom";

// Example logistics data
const logisticsInfo = [
  {
    title: "Warehousing",
    description:
      "We maintain secure warehouses at strategic locations to ensure timely availability of products for our clients.",
  },
  {
    title: "Transportation",
    description:
      "Our fleet ensures safe and reliable transport of products across regions with real-time tracking.",
  },
  {
    title: "Inventory Management",
    description:
      "We provide accurate inventory monitoring and management to maintain supply efficiency.",
  },
  {
    title: "Customs & Documentation",
    description:
      "Our team handles all import/export documentation, customs clearance, and regulatory compliance efficiently.",
  },
];

const Logistics = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 md:px-16 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12 mt-15">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Logistics & Supply Chain</h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          We provide end-to-end logistics solutions to ensure your products reach the right place at the right time.
        </p>
      </section>

      {/* Logistics Cards */}
      <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {logisticsInfo.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">{item.title}</h2>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Back to Home Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => navigate("/")}
          className="bg-[#005243] hover:bg-[#00715a] text-white px-6 py-3 rounded-2xl font-semibold"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Logistics;
