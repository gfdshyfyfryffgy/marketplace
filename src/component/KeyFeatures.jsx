import {
  ShieldCheck,
  Truck,
  Shapes,
  BarChart3,
  CreditCard,
  LayoutGrid,
} from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const features = [
  {
    icon: <ShieldCheck className="text-[#00B3A3] w-12 h-12" />,
    title: "1500+ Verified Suppliers",
    description: "Reliable, vetted suppliers delivering quality and trust worldwide.",
  },
  {
    icon: <Truck className="text-[#00B3A3] w-12 h-12" />,
    title: "700+ Logistics Partners",
    description: "Nationwide delivery network with live shipment tracking services.",
  },
  {
    icon: <Shapes className="text-[#00B3A3] w-12 h-12" />,
    title: "Wide Industrial Range",
    description: "One-stop access to diverse, high-grade industrial products.",
  },
  {
    icon: <BarChart3 className="text-[#00B3A3] w-12 h-12" />,
    title: "Real-Time Analytics",
    description: "Powerful insights and reporting to guide your key decisions.",
  },
  {
    icon: <CreditCard className="text-[#00B3A3] w-12 h-12" />,
    title: "Flexible Payments",
    description: "Easy part-payment plans and finance options for smooth deals.",
  },
  {
    icon: <LayoutGrid className="text-[#00B3A3] w-12 h-12" />,
    title: "Personalized Dashboard",
    description: "Tailored tools and views built to fit your business workflow.",
  },
];


export default function KeyFeatures() {
  return (
    <section className="bg-[#000000] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} glareEnable={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111111] rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#C1C1C1]">{feature.description}</p>
            </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}
