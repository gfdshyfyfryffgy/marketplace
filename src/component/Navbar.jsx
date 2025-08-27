// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Check login state
  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };
    checkLogin();
    window.addEventListener("storage", checkLogin);
    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  // Scroll shrink effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
    <nav
      className={`w-full fixed top-0 z-50 transition-all duration-300 
      ${
        scrolled
          ? "py-2 bg-black/80 backdrop-blur-md shadow-md"
          : "py-4 bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="text-white font-bold text-2xl">
            Supplix
          </Link>
        </motion.div>

        {/* Search (Desktop) */}
        <div className="hidden md:flex items-center flex-1 mx-6">
          <input
            type="text"
            placeholder="Search products or services..."
            className="w-full px-4 py-2 rounded-full bg-[#1A1A1A] text-white 
            placeholder-[#C1C1C1] focus:outline-none focus:ring-2 focus:ring-[#00B3A3]
            transition-all duration-300 focus:w-[110%]"
          />
        </div>

        {/* Links (Desktop) */}
        <div className="hidden lg:flex space-x-6 text-[#C1C1C1] font-medium cursor-pointer">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative hover:text-white transition !cursor-pointer"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#00B3A3] transition-all duration-300 hover:w-full"></span>
            </Link>
          ))}
          {isLoggedIn && (
            <Link to="/admin" className="hover:text-white cursor-pointer">
              Admin
            </Link>
          )}
        </div>

        {/* Buttons (Desktop) */}
        <div className="hidden sm:flex space-x-2 ml-4">
          {!isLoggedIn ? (
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 10px #00B3A3" }}
              onClick={() => navigate("/login")}
              className="bg-[#005243] text-white px-4 py-2 rounded-full font-medium transition !cursor-pointer"
            >
              Login
            </motion.button>
          ) : (
            <>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/profile"
                  className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full font-medium hover:bg-[#00B3A3] transition"
                >
                  My Profile
                </Link>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-full font-medium hover:bg-red-700 transition"
              >
                Logout
              </motion.button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="lg:hidden text-white ml-4">
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden px-4 pb-4 bg-black/95 backdrop-blur-md"
          >
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
              <hr className="border-[#1A1A1A] my-2" />
              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate("/login");
                  }}
                  className="bg-[#005243] text-white px-4 py-2 rounded-full font-medium hover:bg-[#00B3A3] transition"
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
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
