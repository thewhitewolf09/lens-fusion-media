import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Background = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoverIntensity, setHoverIntensity] = useState(0);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setHoverIntensity(1);
    };

    const resetIntensity = () => {
      setHoverIntensity(0);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseleave", resetIntensity);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseleave", resetIntensity);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-r from-white via-purple-200 to-purple-400">
      {/* Cursor Glow Effect */}
      <motion.div
        className="absolute w-60 h-60 rounded-full bg-purple-500 blur-3xl"
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
          scale: hoverIntensity ? 1.8 : 1, // Expands smoothly
          opacity: hoverIntensity ? 0.7 : 0.4, // Becomes more intense on hover
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.15, // Faster response, but no shimmer
        }}
      />
    </div>
  );
};

export default Background;
