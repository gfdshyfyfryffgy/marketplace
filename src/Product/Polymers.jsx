import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

// FAQ Data for Mild Steel
const faqData = [
  {
    question: "What is Mild Steel?",
    answer:
      "Mild Steel, also known as low carbon steel, is an alloy of iron and carbon with a low carbon content (typically 0.05% to 0.25%). It has a relatively high melting point (between 1450°C to 1520°C). Some commonly known Mild Steel Products are: MS Angle, MS Ingot, Primary TMT, CRC, MS Billets etc.",
  },
  {
    question: "What are the common applications of Mild Steel?",
    answer:
      "It is used in construction, automotive, and manufacturing industries.",
  },
  {
    question: "Where can I find the latest prices for Mild Steel products?",
    answer: "Check our website for updated prices.",
  },
  {
    question:
      "How often are the Mild Steel product prices updated on our platform?",
    answer: "Prices are updated every hour.",
  },
  {
    question: "Are there different grades of Mild Steel available?",
    answer: "Yes, there are various grades of Mild Steel.",
  },
  {
    question:
      "Can I get customized quotes for specific Mild Steel product variations or quantities?",
    answer: "Yes, contact us for a custom quote.",
  },
  {
    question:
      "What are the factors to consider when purchasing Mild Steel products?",
    answer: "Consider strength, price, and material specifications.",
  },
];

// Price List Data for Mild Steel
const priceData = [
  {
    product: "HRC E350 BR",
    location: "EX - Faridabad",
    price: "₹55,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "#login",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Ludhiana",
    price: "₹56,000/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
  {
    product: "HRC E250 BR",
    location: "EX - Ludhiana",
    price: "₹54,750/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
  {
    product: "HRC E250 BR",
    location: "EX - Mumbai",
    price: "₹53,900/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Bangalore",
    price: "₹55,300/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
  {
    product: "HRC E350 BR",
    location: "EX - Chennai",
    price: "₹55,400/MT",
    time: "2 hours ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
  {
    product: "HDPE PE100 BLACK",
    location: "EX - Delhi",
    price: "₹1,02,250/MT",
    time: "1 day ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
  {
    product: "HDPE IM",
    location: "EX - Delhi",
    price: "₹95,250/MT",
    time: "1 day ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
  {
    product: "HDPE HM FILMS",
    location: "EX - Ahmedabad",
    price: "₹96,750/MT",
    time: "1 day ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
  {
    product: "HDPE PE100 BLACK",
    location: "EX - Daman",
    price: "₹98,750/MT",
    time: "1 day ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
  {
    product: "HDPE PE100 BLACK",
    location: "EX - Bhiwandi",
    price: "₹99,250/MT",
    time: "1 day ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
  {
    product: "HDPE PE100 BLACK",
    location: "EX - Hyderabad",
    price: "₹1,01,750/MT",
    time: "1 day ago",
    actions: ["Buy", "Sell"],
    href: "/login",
  },
];


// FAQ Component
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    faqRefs.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.13,
          }
        );
      }
    });
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#111] py-12 px-6 md:px-12 rounded-xl shadow-lg mb-12">
      <h3 className="text-3xl font-bold text-center text-white mb-8">
        Mild Steel FAQs
      </h3>
      <div className="max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="mb-4"
            ref={(el) => (faqRefs.current[index] = el)}
          >
            <button
              className={`w-full flex justify-between items-center bg-[#222] text-white p-4 rounded-lg focus:outline-none transition-shadow ${
                activeIndex === index ? "shadow-lg" : "shadow"
              }`}
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-left text-base md:text-lg">
                {faq.question}
              </span>
              <span className="ml-4 text-xl">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="mt-2 bg-[#191919] p-4 rounded-b-lg shadow-inner animate-fade-in"
              >
                <p className="text-[#C1C1C1] text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Requirement Form Component with Buy/Sell Switch and GST field
const RequirementForm = () => {
  const formRef = useRef(null);

  const [mode, setMode] = useState("Buy");
  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    company: "",
    pincode: "",
    gst: "",
    email: "",
    mobile: "",
    countryCode: "+91",
  });

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" }
      );
    }
  }, []);

const validateForm = () => {
  if (!formData.product) return "Please select a product.";
  if (!formData.quantity || formData.quantity <= 0) return "Enter valid quantity.";
  if (!formData.company.trim()) return "Company name is required.";

  if (mode === "Buy" && (!formData.pincode || !/^\d{6}$/.test(formData.pincode))) {
    return "Enter a valid 6-digit Pincode.";
  }

  if (
    mode === "Sell" &&
    (!formData.gst || !/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(formData.gst))
  ) {
    return "Enter a valid GST number.";
  }

  if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
    return "Enter a valid email.";
  }

  if (!formData.mobile || !/^\d{10}$/.test(formData.mobile)) {
    return "Enter a valid 10-digit mobile number.";
  }

  return null; // valid
};



  // Handle input changes for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate form first
  const error = validateForm();
  if (error) {
    alert(error);
    return;
  }

  // Prepare payload
const payload = new URLSearchParams({
  product: formData.product,
  name: formData.company,
  quantity: formData.quantity,
  email: formData.email,
  mobile: formData.mobile,
  mode: mode,
  ...(mode === "Buy"
    ? { pincode: formData.pincode }
    : { gst: formData.gst })
});


  try {
    const res = await fetch(
      "https://script.google.com/macros/s/AKfycbzErc9Y9y3-r1GOZDLUbQ1cBp05i9R6Gjk8jK2YZw-x5Lhnf38lp_9WaqMmbxByl14/exec",
       {
        method: "POST",
        body: payload,
      }
    );

    const data = await res.json();

    if (data.result === "success") {
      alert("✅ Thank you! We'll contact you within 24 hours.");
      setFormData({
        product: "",
        quantity: "",
        company: "",
        pincode: "",
        gst: "",
        email: "",
        mobile: "",
        countryCode: "+91",
      });
    } else {
      alert("⚠️ Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("❌ Failed to submit form.");
    console.error(error);
  }
};



  return (
    <section
      id="login"
      className="login bg-[#111] py-10 px-6 rounded-xl shadow-lg mb-12"
    >
      <div className="max-w-2xl mx-auto text-white">
        <h2 className="text-3xl font-bold text-center mb-3">
          Tell Us Your Requirement
        </h2>
        <p className="text-center text-[#00B3A3] text-base mb-6 font-semibold">
          Best Rates | Working Capital | Delivery Anywhere
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-7">
          <div className="grid grid-cols-1 gap-6">
            {/* Buy/Sell Switch */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">
                Requirement Type
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    value="Buy"
                    checked={mode === "Buy"}
                    onChange={() => setMode("Buy")}
                    className="form-radio text-[#00B3A3]"
                  />
                  <span className="ml-2">Buy</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    value="Sell"
                    checked={mode === "Sell"}
                    onChange={() => setMode("Sell")}
                    className="form-radio text-[#00B3A3]"
                  />
                  <span className="ml-2">Sell</span>
                </label>
              </div>
            </div>

            {/* Common Fields */}
            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">
                Product
              </label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                required
              >
                <option value="">Select Product</option>
                <option value="Steel">Steel</option>
                <option value="Polymers">Polymers</option>
                <option value="Bitumen">Bitumen</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                placeholder="Enter Quantity"
                min={1}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                placeholder="Enter Company"
                required
              />
            </div>

            {/* Conditional Field: Pincode or GST */}
            {mode === "Buy" ? (
              <div>
                <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                  placeholder="Enter Pincode"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">
                  GST Number
                </label>
                <input
                  type="text"
                  name="gst"
                  value={formData.gst}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                  placeholder="Enter GST Number"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                placeholder="Enter Email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-[#C1C1C1]">
                Mobile Number
              </label>
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="w-30 px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3] "
                >
                  <option value="+1">+1 (USA, Canada)</option>
<option value="+7">+7 (Russia, Kazakhstan)</option>
<option value="+20">+20 (Egypt)</option>
<option value="+27">+27 (South Africa)</option>
<option value="+30">+30 (Greece)</option>
<option value="+31">+31 (Netherlands)</option>
<option value="+32">+32 (Belgium)</option>
<option value="+33">+33 (France)</option>
<option value="+34">+34 (Spain)</option>
<option value="+36">+36 (Hungary)</option>
<option value="+39">+39 (Italy)</option>
<option value="+40">+40 (Romania)</option>
<option value="+41">+41 (Switzerland)</option>
<option value="+43">+43 (Austria)</option>
<option value="+44">+44 (United Kingdom)</option>
<option value="+45">+45 (Denmark)</option>
<option value="+46">+46 (Sweden)</option>
<option value="+47">+47 (Norway)</option>
<option value="+48">+48 (Poland)</option>
<option value="+49">+49 (Germany)</option>
<option value="+51">+51 (Peru)</option>
<option value="+52">+52 (Mexico)</option>
<option value="+53">+53 (Cuba)</option>
<option value="+54">+54 (Argentina)</option>
<option value="+55">+55 (Brazil)</option>
<option value="+56">+56 (Chile)</option>
<option value="+57">+57 (Colombia)</option>
<option value="+58">+58 (Venezuela)</option>
<option value="+60">+60 (Malaysia)</option>
<option value="+61">+61 (Australia)</option>
<option value="+62">+62 (Indonesia)</option>
<option value="+63">+63 (Philippines)</option>
<option value="+64">+64 (New Zealand)</option>
<option value="+65">+65 (Singapore)</option>
<option value="+66">+66 (Thailand)</option>
<option value="+81">+81 (Japan)</option>
<option value="+82">+82 (South Korea)</option>
<option value="+84">+84 (Vietnam)</option>
<option value="+86">+86 (China)</option>
<option value="+90">+90 (Turkey)</option>
<option value="+91">+91 (India)</option>
<option value="+92">+92 (Pakistan)</option>
<option value="+93">+93 (Afghanistan)</option>
<option value="+94">+94 (Sri Lanka)</option>
<option value="+95">+95 (Myanmar)</option>
<option value="+98">+98 (Iran)</option>
<option value="+211">+211 (South Sudan)</option>
<option value="+212">+212 (Morocco)</option>
<option value="+213">+213 (Algeria)</option>
<option value="+216">+216 (Tunisia)</option>
<option value="+218">+218 (Libya)</option>
<option value="+220">+220 (Gambia)</option>
<option value="+221">+221 (Senegal)</option>
<option value="+222">+222 (Mauritania)</option>
<option value="+223">+223 (Mali)</option>
<option value="+224">+224 (Guinea)</option>
<option value="+225">+225 (Ivory Coast)</option>
<option value="+226">+226 (Burkina Faso)</option>
<option value="+227">+227 (Niger)</option>
<option value="+228">+228 (Togo)</option>
<option value="+229">+229 (Benin)</option>
<option value="+230">+230 (Mauritius)</option>
<option value="+231">+231 (Liberia)</option>
<option value="+232">+232 (Sierra Leone)</option>
<option value="+233">+233 (Ghana)</option>
<option value="+234">+234 (Nigeria)</option>
<option value="+235">+235 (Chad)</option>
<option value="+236">+236 (Central African Republic)</option>
<option value="+237">+237 (Cameroon)</option>
<option value="+238">+238 (Cape Verde)</option>
<option value="+239">+239 (São Tomé and Príncipe)</option>
<option value="+240">+240 (Equatorial Guinea)</option>
<option value="+241">+241 (Gabon)</option>
<option value="+242">+242 (Republic of the Congo)</option>
<option value="+243">+243 (DR Congo)</option>
<option value="+244">+244 (Angola)</option>
<option value="+245">+245 (Guinea-Bissau)</option>
<option value="+246">+246 (British Indian Ocean Territory)</option>
<option value="+248">+248 (Seychelles)</option>
<option value="+249">+249 (Sudan)</option>
<option value="+250">+250 (Rwanda)</option>
<option value="+251">+251 (Ethiopia)</option>
<option value="+252">+252 (Somalia)</option>
<option value="+253">+253 (Djibouti)</option>
<option value="+254">+254 (Kenya)</option>
<option value="+255">+255 (Tanzania)</option>
<option value="+256">+256 (Uganda)</option>
<option value="+257">+257 (Burundi)</option>
<option value="+258">+258 (Mozambique)</option>
<option value="+260">+260 (Zambia)</option>
<option value="+261">+261 (Madagascar)</option>
<option value="+262">+262 (Réunion)</option>
<option value="+263">+263 (Zimbabwe)</option>
<option value="+264">+264 (Namibia)</option>
<option value="+265">+265 (Malawi)</option>
<option value="+266">+266 (Lesotho)</option>
<option value="+267">+267 (Botswana)</option>
<option value="+268">+268 (Eswatini)</option>
<option value="+269">+269 (Comoros)</option>
<option value="+290">+290 (Saint Helena)</option>
<option value="+291">+291 (Eritrea)</option>
<option value="+297">+297 (Aruba)</option>
<option value="+298">+298 (Faroe Islands)</option>
<option value="+299">+299 (Greenland)</option>
<option value="+350">+350 (Gibraltar)</option>
<option value="+351">+351 (Portugal)</option>
<option value="+352">+352 (Luxembourg)</option>
<option value="+353">+353 (Ireland)</option>
<option value="+354">+354 (Iceland)</option>
<option value="+355">+355 (Albania)</option>
<option value="+356">+356 (Malta)</option>
<option value="+357">+357 (Cyprus)</option>
<option value="+358">+358 (Finland)</option>
<option value="+359">+359 (Bulgaria)</option>
<option value="+370">+370 (Lithuania)</option>
<option value="+371">+371 (Latvia)</option>
<option value="+372">+372 (Estonia)</option>
<option value="+373">+373 (Moldova)</option>
<option value="+374">+374 (Armenia)</option>
<option value="+375">+375 (Belarus)</option>
<option value="+376">+376 (Andorra)</option>
<option value="+377">+377 (Monaco)</option>
<option value="+378">+378 (San Marino)</option>
<option value="+379">+379 (Vatican City)</option>
<option value="+380">+380 (Ukraine)</option>
<option value="+381">+381 (Serbia)</option>
<option value="+382">+382 (Montenegro)</option>
<option value="+383">+383 (Kosovo)</option>
<option value="+385">+385 (Croatia)</option>
<option value="+386">+386 (Slovenia)</option>
<option value="+387">+387 (Bosnia and Herzegovina)</option>
<option value="+389">+389 (North Macedonia)</option>
<option value="+420">+420 (Czech Republic)</option>
<option value="+421">+421 (Slovakia)</option>
<option value="+423">+423 (Liechtenstein)</option>
<option value="+852">+852 (Hong Kong)</option>
<option value="+853">+853 (Macau)</option>
<option value="+855">+855 (Cambodia)</option>
<option value="+856">+856 (Laos)</option>
<option value="+880">+880 (Bangladesh)</option>
<option value="+886">+886 (Taiwan)</option>
<option value="+960">+960 (Maldives)</option>
<option value="+961">+961 (Lebanon)</option>
<option value="+962">+962 (Jordan)</option>
<option value="+963">+963 (Syria)</option>
<option value="+964">+964 (Iraq)</option>
<option value="+965">+965 (Kuwait)</option>
<option value="+966">+966 (Saudi Arabia)</option>
<option value="+967">+967 (Yemen)</option>
<option value="+968">+968 (Oman)</option>
<option value="+970">+970 (Palestine)</option>
<option value="+971">+971 (UAE)</option>
<option value="+972">+972 (Israel)</option>
<option value="+973">+973 (Bahrain)</option>
<option value="+974">+974 (Qatar)</option>
<option value="+975">+975 (Bhutan)</option>
<option value="+976">+976 (Mongolia)</option>
<option value="+977">+977 (Nepal)</option>
<option value="+992">+992 (Tajikistan)</option>
<option value="+993">+993 (Turkmenistan)</option>
<option value="+994">+994 (Azerbaijan)</option>
<option value="+995">+995 (Georgia)</option>
<option value="+996">+996 (Kyrgyzstan)</option>
<option value="+998">+998 (Uzbekistan)</option>

                </select>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#222] bg-[#191919] text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#00B3A3]"
                  placeholder="Enter Mobile"
                  required
                />
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#005243] text-white rounded-md hover:bg-[#007C60] shadow-lg font-semibold transition-colors duration-300"
            >
              Submit Requirement
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
// Price List Component
const PriceList = () => {
  const listRef = useRef([]);

  useEffect(() => {
    listRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            delay: i * 0.13,
          }
        );
      }
    });
  }, []);

  return (
    <section className="bg-[#111] py-10 px-6 rounded-xl shadow-lg mb-12">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-white mb-8">
          Polymers Most Viewed Prices
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto bg-[#191919] rounded-lg shadow">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">
                  Product
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">
                  Location
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">
                  Price
                </th>
                <th className="py-3 px-4 text-left text-xs font-semibold text-[#C1C1C1]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {priceData.map((item, index) => (
                <tr
                  key={index}
                  ref={(el) => (listRef.current[index] = el)}
                  className="border-t border-b border-[#222] hover:bg-[#171717] transition-colors duration-300 cursor-pointer"
                  onClick={() => (window.location.href = item.href)}
                  tabIndex={0}
                  style={{ outline: "none" }}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") window.location.href = item.href;
                  }}
                  title="View Product Details"
                >
                  <td className="py-4 px-4 text-sm text-white">
                    {item.product}
                  </td>
                  <td className="py-4 px-4 text-sm text-white">
                    {item.location}
                  </td>
                  <td className="py-4 px-4 text-sm text-white">{item.price}</td>
                  <td className="py-4 px-4 text-sm text-white">
                    <div className="flex flex-wrap gap-2">
                      {item.actions.map((action, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className={`px-4 py-1.5 text-sm rounded-md font-medium text-center 
          ${
             action === "Buy"
                            ? "bg-[#005243] text-white hover:bg-[#007C60]"
                            : action === "Sell"
                            ? "bg-[#d41818] text-white hover:bg-[#ff4d4d]"
                            : "bg-[#444] text-white hover:bg-[#666]"
          }`}
                          style={{ minWidth: "50px" }}
                        >
                          {action}
                        </a>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Optionally, you can add a view more button */}
        <div className="text-center">
          <button
            className="mt-8 bg-[#005243] text-white px-8 py-3 rounded-md hover:bg-[#007C60] font-semibold shadow-lg transition-colors duration-300"
            onClick={() => (window.location.href = "")}
          >
            View All Prices
          </button>
        </div>
      </div>
    </section>
  );
};

// Main Combined Section
const Steel = () => {
  const heroRef = useRef();
  const subRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    gsap.fromTo(
      subRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="bg-[#000] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Title */}
        <h1
          ref={heroRef}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center"
        >
          Polymers Products, Prices & FAQs
        </h1>
        <p
          ref={subRef}
          className="mb-10 text-center text-[#C1C1C1] text-lg max-w-2xl mx-auto"
        >
          Explore the latest prices, get your requirements fulfilled, and find
          answers to all your Polymers questions!
        </p>

        {/* Main Content: Prices left, Form right (desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <PriceList />
          <RequirementForm />
        </div>

        {/* FAQs */}
        <FAQ />
      </div>
      {/* GSAP animation keyframes for fade-in */}
      <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(15px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
            animation: fade-in 0.5s both;
          }
        `}
      </style>
    </div>
  );
};

export default Steel;
