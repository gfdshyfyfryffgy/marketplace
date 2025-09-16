import React, { createContext, useState, useContext } from "react";

const ProductsContext = createContext();

const initialData  = [
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Ghaziabad",
    price: "₹48,500/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Nagpur",
    price: "₹46,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Bhilai",
    price: "₹45,500/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Jamshedpur",
    price: "₹46,500/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Durgapur",
    price: "₹46,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "Primary TMT Fe 500D",
    location: "EX - Vijayanagar",
    price: "₹46,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Faridabad",
    price: "₹55,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Ludhiana",
    price: "₹56,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E250 BR",
    location: "EX - Ludhiana",
    price: "₹54,200/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E250 BR",
    location: "EX - Mumbai",
    price: "₹53,700/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Bangalore",
    price: "₹55,300/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Chennai",
    price: "₹55,400/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/form",
  },
];


export const ProductsProvider = ({ children }) => {
  const [data, setData] = useState(initialData);

  const updatePrice = (pIndex, sIndex, locIndex, newPrice) => {
    const updated = [...data];
    updated[pIndex].subProducts[sIndex].prices[locIndex].price = newPrice;
    setData(updated);
  };

  return (
    <ProductsContext.Provider value={{ data, updatePrice }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
