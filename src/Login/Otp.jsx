import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Otp = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [sent, setSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
 const location = useLocation();
  const navigate = useNavigate();
  const fromPage = location.state?.from || "/";
 

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setVerified(true);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const validatePhone = () => {
    const isValid = /^[0-9]{10}$/.test(phone);
    if (!isValid) {
      setError("Please enter a valid 10-digit mobile number.");
      return false;
    }
    return true;
  };

  const sendOTP = async () => {
    setError("");
    if (!validatePhone()) return;

    setLoading(true);
    setTimer(20); // ⏳ start 20 sec countdown

    try {
      const response = await axios.post("https://backend-39h3.onrender.com/send-otp", {
        phone: "+91" + phone,
      });

      setSent(true);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
  setError("");
  try {
    const response = await axios.post("https://backend-39h3.onrender.com/verify-otp", {
      phone: "+91" + phone,
      otp,
    });

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("phone", "+91" + phone);

    setVerified(true);

    // ✅ Redirect to the previous page instead of always "/"


    setTimeout(() => window.location.reload(), 500);
    navigate(fromPage, { replace: true });
  } catch (err) {
    setError(err.response?.data?.message || "Invalid OTP");
  }
};


  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setPhone(value);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setVerified(false);
    setPhone("");
    setOtp("");
    setSent(false);
  };

  return (
    <div className="bg-[#000000] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-[#111111] p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          {verified ? "✅ Verified!" : "OTP Verification"}
        </h2>
        <p className="text-[#00B3A3] font-medium text-center mb-6">
          For Business Verification
        </p>

        {!verified ? (
          <>
            <label className="block text-[#C1C1C1] mb-2 text-sm">
              Mobile Number
            </label>
            <input
              type="text"
              maxLength="10"
              className="w-full mb-4 px-4 py-3 rounded-md border border-[#222] bg-[#191919] text-white focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
              placeholder="Enter 10-digit number"
              value={phone}
              onChange={handlePhoneChange}
            />

            {sent && (
              <>
                <label className="block text-[#C1C1C1] mb-2 text-sm">
                  Enter OTP
                </label>
                <input
                  type="text"
                  className="w-full mb-4 px-4 py-3 rounded-md border border-[#222] bg-[#191919] text-white focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </>
            )}

            {loading && (
              <p className="text-yellow-400 text-sm text-center mb-3">
                📤 Sending OTP... Please wait
              </p>
            )}

            {timer > 0 && !loading && (
              <p className="text-blue-400 text-sm text-center mb-3">
                ⏳ Waiting... {timer}s
              </p>
            )}

            {error && (
              <p className="text-red-500 text-sm text-center mb-3">{error}</p>
            )}

            {!sent ? (
              <button
                onClick={sendOTP}
                disabled={loading}
className="w-95 inline-block text-xs font-semibold px-5 py-2 rounded-full 
text-white bg-gradient-to-r from-[#005243] to-[#00B3A3] 
hover:from-[#00B3A3] hover:to-[#005243] hover:text-white 
shadow-md hover:shadow-lg transition-all duration-300 
cursor-pointer focus:outline-none relative overflow-hidden group"              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            ) : (
              <button
                onClick={verifyOTP}
className="inline-block text-xs font-semibold px-5 py-2 rounded-full 
text-white bg-gradient-to-r from-[#005243] to-[#00B3A3] 
hover:from-[#00B3A3] hover:to-[#005243] hover:text-white 
shadow-md hover:shadow-lg transition-all duration-300 
cursor-pointer focus:outline-none relative overflow-hidden group"              >
                Verify OTP
              </button>
            )}
          </>
        ) : (
          <div className="text-center text-white mt-6">
            <p className="text-lg mb-2">Your number has been verified.</p>
            <p className="text-[#C1C1C1] text-sm">
              You can now access the platform.
            </p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Otp;
