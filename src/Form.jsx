import React, { useState } from "react";

const Deatils = () => {
  const [form, setForm] = useState({
    product: "",
    quantity: "",
    company: "",
    pincode: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new URLSearchParams({
      product: form.product,
      quantity: form.quantity,
      company: form.company,
      pincode: form.pincode,
      email: form.email,
      mobile: form.mobile,
    });

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbz8CqgnNOKvJrw1BtRZiUu81HcENut7bw068xeSLGGSwJbVrJ9HhX3zYzvkL-lFSo6ZgA/exec",
        {
          method: "POST",
          body: payload,
        }
      );

      const data = await res.json();

      if (data.result === "success") {
        alert("✅ Thank you! We'll contact you soon.");
        setForm({
          product: "",
          quantity: "",
          company: "",
          pincode: "",
          email: "",
          mobile: "",
        });
      } else {
        alert("⚠️ Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("❌ Failed to submit form.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold text-center">Product Enquiry</h2>

        <select
          name="product"
          value={form.product}
          onChange={handleChange}
          required
          className="w-full p-2 rounded bg-gray-700"
        >
          <option value="">Select Product</option>
          <option value="Bitumen">Bitumen</option>
          <option value="Rice">Rice</option>
          <option value="Steel">Steel</option>
        </select>

        <input
          type="number"
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
          className="w-full p-2 rounded bg-gray-700"
        />

        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company Name"
          required
          className="w-full p-2 rounded bg-gray-700"
        />

        <input
          type="text"
          name="pincode"
          value={form.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          required
          className="w-full p-2 rounded bg-gray-700"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full p-2 rounded bg-gray-700"
        />

        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
          className="w-full p-2 rounded bg-gray-700"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Deatils;
