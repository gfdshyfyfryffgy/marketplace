import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1gio3we",    // Replace with your actual EmailJS service ID
        "template_vmr8k2a",   // Replace with your template ID
        formRef.current,
        "DPXwOwjIRRQRdSBNQ"     // Replace with your public key
      )
      .then(
        () => {   // Email sent successfully result
          alert("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section className="bg-[#000000] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side - Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="text-lg text-[#C1C1C1] leading-relaxed">
            Whether you have a question about our products, pricing, or anything else,
            our team is ready to answer all your inquiries. Fill out the form or reach
            out directly-we're here to help your business grow.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="text-[#00B3A3] font-semibold text-xl">For Business Inquiries</h4>
              <p className="text-[#C1C1C1]">Email: contact@yourcompany.com</p>
              <p className="text-[#C1C1C1]">Phone: +91 96535 44472</p>
            </div>

            <div>
              <h4 className="text-[#00B3A3] font-semibold text-xl">Our Address</h4>
              <p className="text-[#C1C1C1]">3rd Floor, TechPark Tower, Industrial Area</p>
              <p className="text-[#C1C1C1]">New Delhi, India - 110001</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-[#1A1A1A] p-8 rounded-xl shadow-lg space-y-6"
        >
          <div>
            <label className="block text-[#C1C1C1] mb-2">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-md bg-[#000000] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#005243]"
            />
          </div>

          <div>
            <label className="block text-[#C1C1C1] mb-2">Email Address</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md bg-[#000000] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#005243]"
            />
          </div>

          <div>
            <label className="block text-[#C1C1C1] mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Type your message here..."
              className="w-full px-4 py-3 rounded-md bg-[#000000] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#005243]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#005243] hover:bg-[#007a68] text-white rounded-md font-semibold transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
