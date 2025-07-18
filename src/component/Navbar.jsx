import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // lightweight icon lib
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
   const navigate = useNavigate();

  return (
    <nav className="w-full bg-[#0A0A0A] shadow-sm postion: sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="text-white font-bold text-2xl">Marketplace</div>
        </Link>

        {/* Desktop Search Bar */}
        <div className="hidden md:flex items-center flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products or services..."
            className="w-full px-4 py-2 rounded-full bg-[#1F1F1F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
          />
        </div>

        {/* Desktop Links */}
    <div className="hidden lg:flex space-x-6 text-gray-300 font-medium">
  {[
    { name: "Home", href: "/" },
    { name: "Categories", href: "/categories" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    // {name:"Admin", href:"/admin"}
  ].map((item) => (
    <a key={item.name} href={item.href} className="hover:text-white">
      {item.name}
    </a>
  ))}
</div>


        {/* Action Buttons */}
        <div className="hidden sm:flex space-x-2 ml-4">
          <button 
         onClick={() => (window.location.href = "/login")}
          className="bg-[#1A1A1A] text-[#00B3A3] px-4 py-2 rounded-full font-medium hover:bg-[#00B3A3] text-[#fff] transition">
            Login
          </button>
         
        </div>

        {/* Hamburger Icon */}
        <button onClick={toggleMenu} className="lg:hidden text-white ml-4">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="lg:hidden px-4 pb-4 transition-all duration-300">
    <div className="flex flex-col space-y-3 text-white text-base font-medium">
      {[
        { name: "Home", path: "/" },
        { name: "Categories", path: "/categories" },
        { name: "Services", path: "/services" },
        { name: "Solutions", path: "/solutions" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
      ].map((item) => (
        <Link
          key={item.name}
          to={item.path}
          onClick={() => setIsOpen(false)} // menu close
          className="hover:text-[#00B3A3]"
        >
          {item.name}
        </Link>
      ))}
      <hr className="border-gray-700 my-2" />
      <button
        className="bg-[#1A1A1A] text-[#00B3A3] px-4 py-2 rounded-full font-medium hover:bg-[#232323] transition"
        onClick={() => {
          setIsOpen(false); // menu close
          navigate("/login");
        }}
      >
        Login
      </button>
    </div>
  </div>
)}

    </nav>
  );
}
