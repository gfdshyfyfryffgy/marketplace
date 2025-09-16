import React, { useState } from "react";

const productsData = [
  {
    name: "HRC",
    subProducts: [
      {
        name: "E350 BR",
        prices: [
          { location: "EX - Faridabad", price: "₹55,000/MT", time: "2 hours ago" },
          { location: "EX - Ludhiana", price: "₹56,000/MT", time: "2 hours ago" },
          { location: "EX - Bangalore", price: "₹55,300/MT", time: "2 hours ago" },
          { location: "EX - Chennai", price: "₹55,400/MT", time: "2 hours ago" },
        ],
      },
      {
        name: "E250 BR",
        prices: [
          { location: "EX - Ludhiana", price: "₹54,750/MT", time: "2 hours ago" },
          { location: "EX - Mumbai", price: "₹53,900/MT", time: "2 hours ago" },
        ],
      },
    ],
  },
  {
    name: "HDPE",
    subProducts: [
      {
        name: "PE100 BLACK",
        prices: [
          { location: "EX - Delhi", price: "₹1,02,250/MT", time: "1 day ago" },
          { location: "EX - Daman", price: "₹98,750/MT", time: "1 day ago" },
          { location: "EX - Bhiwandi", price: "₹99,250/MT", time: "1 day ago" },
          { location: "EX - Hyderabad", price: "₹1,01,750/MT", time: "1 day ago" },
        ],
      },
      {
        name: "IM",
        prices: [{ location: "EX - Delhi", price: "₹95,250/MT", time: "1 day ago" }],
      },
      {
        name: "HM FILMS",
        prices: [{ location: "EX - Ahmedabad", price: "₹96,750/MT", time: "1 day ago" }],
      },
    ],
  },
];

const Admin = () => {
  const [data, setData] = useState(productsData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);

  const handlePriceUpdate = (pIndex, sIndex, locIndex, newPrice) => {
    const updated = [...data];
    updated[pIndex].subProducts[sIndex].prices[locIndex].price = newPrice;
    setData(updated);
  };

  return (
    <div className="p-6 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">📊 Admin Dashboard</h1>

      {/* Step 1: Product Select */}
      <div className="mb-4">
        <label className="block mb-2">Select Product:</label>
        <select
          className="p-2 bg-[#111] border border-gray-600 rounded"
          onChange={(e) => {
            setSelectedProduct(Number(e.target.value));
            setSelectedSub(null);
          }}
        >
          <option value="">--Choose Product--</option>
          {data.map((p, i) => (
            <option key={i} value={i}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      {/* Step 2: Sub-product Select */}
      {selectedProduct !== null && (
        <div className="mb-4">
          <label className="block mb-2">Select Sub-Product:</label>
          <select
            className="p-2 bg-[#111] border border-gray-600 rounded"
            onChange={(e) => setSelectedSub(Number(e.target.value))}
          >
            <option value="">--Choose Sub-Product--</option>
            {data[selectedProduct].subProducts.map((s, i) => (
              <option key={i} value={i}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Step 3: Show Prices */}
      {selectedProduct !== null && selectedSub !== null && (
        <div className="bg-[#111] p-4 rounded-lg border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">
            {data[selectedProduct].name} -{" "}
            {data[selectedProduct].subProducts[selectedSub].name}
          </h2>

          {data[selectedProduct].subProducts[selectedSub].prices.map(
            (price, locIndex) => (
              <div key={locIndex} className="flex items-center gap-3 mb-2">
                <p className="w-40">{price.location}</p>
                <input
                  type="text"
                  value={price.price}
                  onChange={(e) =>
                    handlePriceUpdate(
                      selectedProduct,
                      selectedSub,
                      locIndex,
                      e.target.value
                    )
                  }
                  className="bg-black border border-gray-600 rounded px-2 py-1 text-white"
                />
                <button className="bg-[#00B3A3] px-3 py-1 rounded">
                  Save
                </button>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Admin;
