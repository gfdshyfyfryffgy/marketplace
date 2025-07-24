import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check login state on mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-[#0A0A0A] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-2xl">
          Marketplace
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products or services..."
            className="w-full px-4 py-2 rounded-full bg-[#1F1F1F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 text-gray-300 font-medium">
          {navLinks.map((item) => (
            <Link key={item.name} to={item.path} className="hover:text-white">
              {item.name}
            </Link>
          ))}
          {isLoggedIn && (
            <Link to="/admin" className="hover:text-white">
              Admin
            </Link>
          )}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex space-x-2 ml-4">
          {!isLoggedIn ? (
            <button
              onClick={() => navigate("/login")}
              className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full font-medium hover:bg-[#00B3A3] transition"
            >
              Login
            </button>
          ) : (
            <>
              <Link
                to="/profile"
                className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full font-medium hover:bg-[#00B3A3] transition"
              >
                My Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
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
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#00B3A3]"
              >
                {item.name}
              </Link>
            ))}

            {isLoggedIn && (
              <Link
                to="/admin"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#00B3A3]"
              >
                Admin
              </Link>
            )}

            <hr className="border-gray-700 my-2" />

            {!isLoggedIn ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate("/login");
                }}
                className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full font-medium hover:bg-[#232323] transition"
              >
                Login
              </button>
            ) : (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full font-medium hover:bg-[#00B3A3] transition text-center"
                >
                  My Profile
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    handleLogout();
                  }}
                  className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
