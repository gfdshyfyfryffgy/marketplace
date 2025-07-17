import React from 'react'

const Service = () => {
  return (
    <section className="bg-[#000000] text-white px-6 md:px-16 py-20">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold">Our <span className="text-[#00B3A3]">Services</span></h2>
    <p className="text-[#C1C1C1] mt-4 text-lg">
      Delivering industrial-grade products with end-to-end sourcing, logistics, and compliance support.
    </p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {/* Service Card */}
    <div className="bg-[#1A1A1A] rounded-xl p-6 hover:-translate-y-1 transition duration-300 shadow-lg">
      <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">Steel & Metals Supply</h3>
      <p className="text-[#C1C1C1]">
        Structural steel, mild steel, and non-ferrous metals like copper, aluminum & zinc for industrial projects.
      </p>
    </div>

    <div className="bg-[#1A1A1A] rounded-xl p-6 hover:-translate-y-1 transition duration-300 shadow-lg">
      <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">Polymers Distribution</h3>
      <p className="text-[#C1C1C1]">
        Industrial-grade polymers for packaging, construction, and manufacturing.
      </p>
    </div>

    <div className="bg-[#1A1A1A] rounded-xl p-6 hover:-translate-y-1 transition duration-300 shadow-lg">
      <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">Bitumen & Pipes</h3>
      <p className="text-[#C1C1C1]">
        Bitumen for roadwork & seamless/ERW pipes for oil, water, and infrastructure pipelines.
      </p>
    </div>

    <div className="bg-[#1A1A1A] rounded-xl p-6 hover:-translate-y-1 transition duration-300 shadow-lg">
      <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">Chemicals Trading</h3>
      <p className="text-[#C1C1C1]">
        Safe and certified industrial and agricultural chemicals with reliable supply chains.
      </p>
    </div>

    <div className="bg-[#1A1A1A] rounded-xl p-6 hover:-translate-y-1 transition duration-300 shadow-lg">
      <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">Agri-Commodities</h3>
      <p className="text-[#C1C1C1]">
        Sourcing and exporting grains, pulses, and agri-products for global clients.
      </p>
    </div>

    <div className="bg-[#1A1A1A] rounded-xl p-6 hover:-translate-y-1 transition duration-300 shadow-lg">
      <h3 className="text-xl font-semibold text-[#FFFFFF] mb-2">Bricks & Construction Materials</h3>
      <p className="text-[#C1C1C1]">
        Fly ash bricks, concrete blocks, and durable building materials at scale.
      </p>
    </div>
  </div>

  {/* CTA Button */}
  <div className="text-center mt-16">
    <button className="px-8 py-3 bg-[#005243] hover:bg-[#007a68] text-white text-lg font-semibold rounded-md transition">
      Get in Touch for Bulk Orders
    </button>
  </div>
</section>

  )
}

export default Service
