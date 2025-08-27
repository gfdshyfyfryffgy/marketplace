import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const AnimatedCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add spring animation for trailing effect
  const springX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Detect if hovering interactive element
      const isHoveringClickable = e.target.closest(
        "a, button, input, textarea, select, [role='button'], [onclick]"
      );
      setIsPointer(!!isHoveringClickable);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <motion.div
      className={`fixed top-0 left-0 w-5 h-5 rounded-full z-[9999] pointer-events-none
                  ${isPointer ? "opacity-0" : "bg-[#00B3A3]"}`}
      style={{
        translateX: springX,
        translateY: springY,
      }}
    />
  );
};

export default AnimatedCursor;
