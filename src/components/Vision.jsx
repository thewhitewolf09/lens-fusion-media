import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const Vision = () => {
  return (
    <section id="vision" className="relative flex flex-col items-center justify-center py-20 px-6 md:px-12 text-white text-center">
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#00FFFF] bg-clip-text text-transparent drop-shadow-[0_0_25px_#FF00FF] animate-flicker"
      >
        Tried, Tested, & Ready to Scale Your Business.
      </motion.h2>

      {/* Scrolling Marquee */}
      <div className="mt-12 w-full overflow-hidden">
        <Marquee>
          <p className="text-xl md:text-2xl font-semibold text-neon-cyan mx-4">
            Proven Results &bull; High-Quality Leads &bull; Automated Client Acquisition &bull; Scalable & Efficient
          </p>
        </Marquee>
      </div>

      {/* Banner with Light Ray Effect */}
      <div className="mt-16 relative w-full max-w-5xl py-12 px-6 bg-black/30 border border-neon-magenta rounded-xl backdrop-blur-md shadow-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/20 via-transparent to-[#FF00FF]/20 animate-light-rays"
        />
        <h3 className="relative text-2xl md:text-3xl font-bold text-white">
          Join the Future of Lead Generation
        </h3>
      </div>
    </section>
  );
};

export default Vision;
