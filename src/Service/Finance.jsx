import React from "react";
import { useNavigate } from "react-router-dom";

// Example finance services
const financeServices = [
  {
    title: "Credit Facilities",
    description:
      "We offer flexible credit facilities to help businesses manage cash flow and ensure uninterrupted supply.",
  },
  {
    title: "Payment Options",
    description:
      "Multiple payment options including bank transfers, digital wallets, and online payments for your convenience.",
  },
  {
    title: "Invoice Management",
    description:
      "Our finance team ensures accurate and timely invoicing, reducing errors and delays.",
  },
  {
    title: "Financial Consultation",
    description:
      "We provide financial guidance and consultation for bulk purchases and business partnerships.",
  },
];

const Finance = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 md:px-16 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Finance & Payment Solutions</h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          We provide flexible financial solutions to make purchasing and business transactions seamless.
        </p>
      </section>

      {/* Finance Cards */}
      <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {financeServices.map((service, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
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

export default Finance;
