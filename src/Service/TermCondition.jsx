import React from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 md:px-16 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12 mt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>  
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Please read these terms and conditions carefully before using our website or services.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto space-y-8 text-gray-300">
        {/* Acceptance of Terms */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these terms and conditions and our Privacy Policy. If you do not agree, you must not use our services.
          </p>
        </div>

        {/* Use of Website */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Use of Website</h2>
          <p>
            You agree to use our website for lawful purposes only and not to engage in any activity that could harm our services or other users.
          </p>
        </div>

        {/* Intellectual Property */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Intellectual Property</h2>
          <p>
            All content, logos, graphics, and trademarks on this website are the property of the company and protected by applicable laws. You may not reproduce or use them without permission.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Limitation of Liability</h2>
          <p>
            We are not liable for any damages, losses, or claims arising from your use of our website or services.
          </p>
        </div>

        {/* Third-Party Links */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for the content or practices of these sites.
          </p>
        </div>

        {/* Modifications */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Updated terms will be effective immediately upon posting. It is your responsibility to review them regularly.
          </p>
        </div>

        {/* Governing Law */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Governing Law</h2>
          <p>
            These terms are governed by and interpreted in accordance with the laws of the applicable jurisdiction.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-2">Contact Us</h2>
          <p>
            For any questions regarding these Terms and Conditions, please contact us at{" "}
            <span className="text-[#00B3A3] font-semibold">support@yourdomain.com</span>.
          </p>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/")}
            className="bg-[#005243] hover:bg-[#00715a] text-white px-6 py-3 rounded-2xl font-semibold"
          >
            Back to Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
