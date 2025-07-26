import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import axios from "axios";

// Import your images (or use dynamic data from axios)
import nike from "../assets/jjs.png";
import jj from "../assets/logo12.jpg";
import hh from "../assets/zz.webp";
import uu from "../assets/logo.svg";
import mc from "../assets/TEA-logo.jpg";
import it from "../assets/sstent-1.png";
import gg from "../assets/ss.avif";
import tt from "../assets/zz.webp";
import gp from "../assets/gp.png";

gsap.registerPlugin(ScrollTrigger);

const defaultImages = [nike, jj, hh, uu, mc, it, gg,tt,gp];

export default function Brand() {
  const containerRef = useRef();
  const logoRefs = useRef([]);
  const [logos, setLogos] = React.useState(
    Array.from({ length: 16 }, (_, i) => ({
      id: i + 1,
      src: defaultImages[i % defaultImages.length],
    }))
  );

  // Example: Axios fetch logos from API (optional)
  useEffect(() => {
    // Uncomment and replace with your API endpoint if needed
    // axios.get("/api/brands").then(res => {
    //   setLogos(res.data);
    // });
  }, []);

  useEffect(() => {
    // Set initial position (logos off-screen left)
    logoRefs.current.forEach((el, idx) => {
      gsap.set(el, { x: -150, opacity: 0 });
    });

    // Animate logos in and move horizontally on scroll
    gsap.to(logoRefs.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "top 30%",
        scrub: 1,
      },
    });

    // Animate logos out when scrolled past
    gsap.to(logoRefs.current, {
      x: 150,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.in",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 25%",
        end: "top 0%",
        scrub: 1,
      },
    });
  }, [logos]);

  return (
    <div
      ref={containerRef}
      className="flex flex-wrap gap-8 py-16 bg-black overflow-hidden justify-center items-center"
    >
      {logos.map((logo, index) => (
        <img
          key={logo.id}
          src={logo.src}
          alt={`logo-${logo.id}`}
          ref={(el) => (logoRefs.current[index] = el)}
          className="w-24 h-auto opacity-0"
        />
      ))}
    </div>
  );
}