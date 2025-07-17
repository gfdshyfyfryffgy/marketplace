import {
  ShieldCheck,
  Truck,
  Shapes,
  BarChart3,
  CreditCard,
  LayoutGrid,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck className="text-[#00B3A3] w-12 h-12" />,
    title: "1500+ Verified Suppliers",
    description: "Trusted suppliers offering quality assurance across industries.",
  },
  {
    icon: <Truck className="text-[#00B3A3] w-12 h-12" />,
    title: "700+ Logistics Partners",
    description: "Nationwide network with real-time smart tracking.",
  },
  {
    icon: <Shapes className="text-[#00B3A3] w-12 h-12" />,
    title: "Wide Industrial Range",
    description: "One-stop access to a variety of industrial-grade products.",
  },
  {
    icon: <BarChart3 className="text-[#00B3A3] w-12 h-12" />,
    title: "Real-Time Analytics",
    description: "Data-driven insights to power better decisions.",
  },
  {
    icon: <CreditCard className="text-[#00B3A3] w-12 h-12" />,
    title: "Flexible Payments",
    description: "Part-payment and financing options to ease transactions.",
  },
  {
    icon: <LayoutGrid className="text-[#00B3A3] w-12 h-12" />,
    title: "Personalized Dashboard",
    description: "Custom tools and data views tailored for your needs.",
  },
];

export default function KeyFeatures() {
  return (
    <section className="bg-[#000000] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
