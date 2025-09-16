import React from "react";
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white px-4 md:px-16 py-12 ">
      {/* Hero Section */}
      <section className="text-center mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto space-y-8 text-gray-300">
        {/* Information Collection */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Information We Collect
          </h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and any other details you provide when using
            our services.
          </p>
        </div>

        {/* Use of Information */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            How We Use Your Information
          </h2>
          <p>
            Your information is used to provide and improve our services,
            communicate with you, and ensure a safe and personalized experience.
          </p>
        </div>

        {/* Sharing Information */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Sharing of Information
          </h2>
          <p>
            We do not sell your personal information. We may share information
            with trusted partners only to provide services you request or comply
            with legal obligations.
          </p>
        </div>

        {/* Security */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Security</h2>
          <p>
            We take reasonable measures to protect your data. However, no method
            of transmission over the internet is 100% secure.
          </p>
        </div>

        {/* Cookies */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Cookies & Tracking
          </h2>
          <p>
            We may use cookies and similar technologies to enhance your
            experience and gather analytical data.
          </p>
        </div>

        {/* Your Choices */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Your Choices
          </h2>
          <p>
            You can choose not to provide certain information, opt-out of
            marketing communications, or delete your account by contacting us.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Contact Us</h2>
          <p>
            For questions regarding this Privacy Policy, please contact us at{" "}
            <span className="text-[#00B3A3] font-semibold">
              support@yourdomain.com
            </span>
            .
          </p>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-12">
          <Link to="/">
            <button className="bg-[#005243] hover:bg-[#00715a] text-white px-6 py-3 rounded-2xl font-semibold">
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
