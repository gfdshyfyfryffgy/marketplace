import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  const navigate = useNavigate();


  const services = [
    {
      title: "Steel & Metals Supply",
      description:
        "Structural steel, mild steel, and non-ferrous metals like copper, aluminum & zinc for industrial projects.",
    },
    {
      title: "Polymers Distribution",
      description:
        "Industrial-grade polymers for packaging, construction, and manufacturing.",
    },
    {
      title: "Bitumen & Pipes",
      description:
        "Bitumen for roadwork & seamless/ERW pipes for oil, water, and infrastructure pipelines.",
    },
    {
      title: "Chemicals Trading",
      description:
        "Safe and certified industrial and agricultural chemicals with reliable supply chains.",
    },
    {
      title: "Agri-Commodities",
      description:
        "Sourcing and exporting grains, pulses, and agri-products for global clients.",
    },
    {
      title: "Bricks & Construction Materials",
      description:
        "Fly ash bricks, concrete blocks, and durable building materials at scale.",
    },
  ];

  return (
    <section className="bg-[#000000] text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-[#00B3A3]">Services</span>
        </h2>
        <p className="text-[#C1C1C1] mt-4 text-lg">
          Delivering industrial-grade products with end-to-end sourcing, logistics, and compliance support.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <Tilt
            key={index}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            glareEnable={false}
          >
            <div
              className="bg-[#1A1A1A] rounded-xl p-6 hover:-translate-y-1 transition duration-300 shadow-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">{service.title}</h3>
              <p className="text-[#C1C1C1]">{service.description}</p>
            </div>
          </Tilt>
        ))}
      </div>

      <div className="text-center mt-16" data-aos="fade-up">
       <button
  onClick={() => navigate('/contact')}
  className="mt-6 relative px-6 py-2 rounded-full text-white font-semibold h-15
    bg-gradient-to-r from-[#005243] to-[#00B3A3] 
    shadow-lg shadow-[#00B3A350] 
    transition-all duration-300 ease-out
    hover:scale-105 hover:shadow-[#00B3A390]
    active:scale-95 overflow-hidden group !cursor-pointer"
>
  Get in Touch for Bulk Orders
</button>

      </div>
    </section>
  );
};

export default Service;
