import React, { useState } from "react";

 const Admin = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: null,
    price: "",
    state: "Available",
    location: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, image: URL.createObjectURL(file) });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.image || !form.price) {
      alert("Please fill in all required fields.");
      return;
    }

    setProducts([...products, form]);
    setForm({
      name: "",
      description: "",
      image: null,
      price: "",
      state: "Available",
      location: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Admin Product Dashboard</h1>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#0f0f0f] p-8 rounded-lg border border-[#005243] space-y-6"
        >
          <div>
            <label className="block mb-1 text-[#C1C1C1]">Product Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full p-3 rounded bg-black border border-[#005243] text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#C1C1C1]">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
              placeholder="Describe the product"
              className="w-full p-3 rounded bg-black border border-[#005243] text-white"
            />
          </div>

          <div>
            <label className="block mb-1 text-[#C1C1C1]">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 rounded bg-black text-white file:bg-[#005243] file:text-white file:border-0 file:px-4 file:py-2"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 text-[#C1C1C1]">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="e.g. 5000"
                className="w-full p-3 rounded bg-black border border-[#005243] text-white"
              />
            </div>

            <div>
              <label className="block mb-1 text-[#C1C1C1]">Location</label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Maharashtra, India"
                className="w-full p-3 rounded bg-black border border-[#005243] text-white"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-[#C1C1C1]">Status</label>
            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              className="w-full p-3 rounded bg-black border border-[#005243] text-white"
            >
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-[#005243] hover:bg-[#007b63] text-white px-6 py-3 rounded w-full font-semibold"
          >
            Add Product
          </button>
        </form>

        {/* PREVIEW */}
        {products.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Product Preview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products.map((p, i) => (
                <div
                  key={i}
                  className="bg-[#0f0f0f] border border-[#005243] p-4 rounded-lg"
                >
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-48 object-cover rounded mb-4"
                    />
                  )}
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  <p className="text-[#C1C1C1] text-sm">{p.description}</p>
                  <p className="mt-2">💰 ₹{p.price}</p>
                  <p className="text-teal-400">📍 {p.location}</p>
                  <p className="text-yellow-400 mt-1">Status: {p.state}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};




export default Admin;