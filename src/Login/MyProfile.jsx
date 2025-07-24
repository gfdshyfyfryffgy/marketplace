import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userPhone = localStorage.getItem("phone");

    if (!token || !userPhone) {
      navigate("/login"); // redirect if not logged in
    } else {
      setPhone(userPhone);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("phone");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white px-6">
      <div className="bg-[#1e1e1e] p-10 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4 text-center">👤 My Profile</h2>
        <p className="text-lg text-center mb-6">
          Logged in as: <br />
          <span className="text-[#00b3a3] font-semibold text-xl">{phone}</span>
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
