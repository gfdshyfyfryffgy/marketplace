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
    <section className="relative bg-[#000000] text-white py-24 px-6 md:px-16 overflow-hidden">
  {/* Background Accent Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#00B3A3]/10 to-[#C1C1C1]/10 pointer-events-none z-0"></div>

  <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 z-10">
    {/* Left Side - Contact Info */}
    <div className="space-y-10">
      <h2 className="text-5xl font-bold leading-tight">
        Let's Build Something <span className="text-[#00B3A3]">Great Together</span>
      </h2>
      <p className="text-lg text-[#C1C1C1] leading-relaxed">
        Have a project, product inquiry, or just want to say hello? We’re always ready to connect. Fill out the form or reach us directly.
      </p>

      <div className="border-l-4 border-[#00B3A3] pl-6 space-y-6">
        <div>
          <h4 className="text-[#00B3A3] font-semibold text-xl">Business Inquiries</h4>
          <p className="text-[#C1C1C1]">📧 contact@yourcompany.com</p>
          <p className="text-[#C1C1C1]">📞 +91 96535 44472</p>
        </div>

        <div>
          <h4 className="text-[#00B3A3] font-semibold text-xl">Visit Us</h4>
          <p className="text-[#C1C1C1]">🏢 3rd Floor, TechPark Tower</p>
          <p className="text-[#C1C1C1]">New Delhi, India - 110001</p>
        </div>
      </div>
    </div>

    {/* Right Side - Contact Form */}
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="bg-[#111111]/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-[#333] space-y-6"
    >
      <h3 className="text-2xl font-semibold text-white mb-4">📬 Send us a Message</h3>

      <div>
        <label className="block text-[#C1C1C1] mb-2">Your Name</label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Enter your name"
          className="w-full px-4 py-3 rounded-md bg-[#000000] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
        />
      </div>

      <div>
        <label className="block text-[#C1C1C1] mb-2">Email Address</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-md bg-[#000000] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
        />
      </div>

      <div>
        <label className="block text-[#C1C1C1] mb-2">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Type your message here..."
          className="w-full px-4 py-3 rounded-md bg-[#000000] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
        ></textarea>
      </div>

     <button
  type="submit"
  className="launch-on-hover w-full py-3 mt-4 rounded-full bg-gradient-to-r from-[#00B3A3] to-[#C1C1C1] font-semibold text-black shadow-md hover:scale-105 hover:shadow-[#C1C1C180] transition-all duration-300 active:scale-95 overflow-hidden flex items-center justify-center gap-2"
>
  <span className="rocket inline-block transform transition-transform duration-300">
    🚀
  </span>
  Send Message
</button>

    </form>
  </div>
</section>
  )
}

<style>
  {`
    @keyframes launch {
      0% { transform: translateY(0) rotate(0deg); opacity: 1; }
      30% { transform: translateY(-5px) rotate(-10deg); }
      60% { transform: translateY(-15px) rotate(10deg); }
      100% { transform: translateY(-50px) rotate(-20deg); opacity: 0; }
    }

    .launch-on-hover:hover .rocket {
      animation: launch 0.8s ease-out forwards;
    }
  `}
</style>

export default Contact;
