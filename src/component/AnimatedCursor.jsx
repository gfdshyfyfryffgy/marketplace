// AnimatedCursor.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none; }`}</style>

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: mousePos.x - 12,
          y: mousePos.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="w-6 h-6 rounded-full border-2 border-[#00B3A3]"></div>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-[#00B3A3]"></div>
      </motion.div>
    </>
  );
}
