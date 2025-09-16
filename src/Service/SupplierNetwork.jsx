import React from "react";
import { useNavigate } from "react-router-dom";

// Example supplier data
const suppliers = [
  {
    name: "Global Feeds Ltd.",
    location: "Mumbai, India",
    products: "Fish Meal, Soy Meal",
    contact: "contact@globalfeeds.com",
  },
  {
    name: "AgriFeeds Co.",
    location: "Cape Town, South Africa",
    products: "Poultry Feed, Corn Meal",
    contact: "info@agrifeeds.co.za",
  },
  {
    name: "Fresh Farm Supplies",
    location: "Casablanca, Morocco",
    products: "Animal Feed, Supplements",
    contact: "sales@freshfarm.ma",
  },
];

const SupplierNetwork = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 md:px-16 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Supplier Network</h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          We partner with trusted suppliers across the globe to ensure quality and timely delivery of products.
        </p>
      </section>

      {/* Supplier Cards */}
      <section className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {suppliers.map((supplier, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-white mb-2">{supplier.name}</h2>
            <p className="text-gray-300 mb-1">
              <span className="font-semibold">Location:</span> {supplier.location}
            </p>
            <p className="text-gray-300 mb-1">
              <span className="font-semibold">Products:</span> {supplier.products}
            </p>
            <p className="text-[#00B3A3] font-semibold">
              <span className="font-semibold text-gray-300">Contact:</span> {supplier.contact}
            </p>
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

export default SupplierNetwork;
