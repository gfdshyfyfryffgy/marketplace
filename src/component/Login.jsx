import React, { useState } from "react";
import { auth, RecaptchaVerifier } from "./firebase";
import { signInWithPhoneNumber } from "firebase/auth";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");

  const configureRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          sendOTP();
        },
      },
      auth
    );
  };

  const sendOTP = async () => {
    configureRecaptcha();
    const phoneNumber = "+91" + phone;
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      window.confirmationResult = confirmationResult;
      setOtpSent(true);
      setMessage("OTP sent to " + phoneNumber);
    } catch {
      setMessage("Failed to send OTP");
    }
  };

  const verifyOTP = async () => {
    try {
      await window.confirmationResult.confirm(otp);
      setMessage("OTP verified! You're logged in.");
    } catch (error) {
      setMessage("Invalid OTP. Try again.");
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Phone Login</h2>

      {!otpSent ? (
        <>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 w-full"
          />
          <div id="recaptcha-container"></div>
          <button
            onClick={sendOTP}
            className="mt-2 bg-blue-500 text-white px-4 py-2"
          >
            Get OTP
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="border p-2 w-full"
          />
          <button
            onClick={verifyOTP}
            className="mt-2 bg-green-500 text-white px-4 py-2"
          >
            Verify OTP
          </button>
        </>
      )}

      {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
    </div>
  );
}
