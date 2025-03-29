import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "../assets/hero.webp";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between h-screen px-6  md:px-12 pt-[6rem] md:pt-[8rem]"
    >
      {/* Left Side - Text Content */}
      <div className="max-w-2xl ">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          Get a{" "}
          <span className="relative inline-block px-2">
            <span
              className="absolute -left-1 -right-1  bottom-0 -z-10 rotate-[-4deg]"
              style={{
                background: "var(--lemon, #FFEB3B)", // Fallback color
                width: "calc(100% + 2px)",
                height: "70px",
              }}
            />
            FREE
          </span>{" "}
          AI-built sales pipeline in minutes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-gray-700"
        >
          A fully automated client acquisition system with ready-to-sell
          prospects & AI-driven booking. No upfront fees.
        </motion.p>

        {/* Call to Action Button */}
        {/* Call to Action Button */}
        <div className="mt-6 hidden md:flex justify-start">
          <Button
            variant="default"
            size="lg"
            className="px-10 py-7 text-xl font-semibold bg-pink-500 text-white rounded-md shadow-lg flex items-center gap-2 transition-all hover:bg-pink-600 hover:cursor-pointer group"
            onClick={() => scrollToSection(refs.footerRef)}
          >
            <span className="transition-all duration-300 ease-in-out pl-8 tracking-wide">
              Get Clients Now{" "}
            </span>
            <ArrowRight className="w-6 h-6 size-1.5 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            <span className="pr-4" />
          </Button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div>
        <img
          src={heroImg}
          alt="Hero Image"
          className="hidden md:block w-[600px] h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
