import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightIcon } from "lucide-react";

const Vision = ({ refs }) => {
  const marqueeItems = [
    {
      title: "Proven Results",
      description: "Data-backed strategies that drive measurable success.",
    },
    {
      title: "High-Quality Leads",
      description:
        "Connect with clients who are genuinely interested in your services.",
    },
    {
      title: "Automated Client Acquisition",
      description: "Smart automation that brings clients to you effortlessly.",
    },
    {
      title: "Scalable & Efficient",
      description: "A system designed to grow with your business seamlessly.",
    },
    {
      title: "ROI-Driven Strategies",
      description:
        "Every decision is optimized for maximum return on investment.",
    },
    {
      title: "24/7 AI Support",
      description: "Always-on assistance to streamline client interactions.",
    },
    {
      title: "Conversion Optimization",
      description:
        "Fine-tuned processes to maximize lead-to-client conversions.",
    },
    {
      title: "Customizable Workflows",
      description: "Adaptable systems tailored to your unique business needs.",
    },
  ];

  return (
    <section
      id="vision"
      className="relative flex flex-col items-center justify-center py-20 px-6 md:px-12 text-white text-center"
    >
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold text-gray-900"
      >
        Tried, Tested, & Ready to Scale Your Business.
      </motion.h2>

     {/* Scrolling Marquee - First Row */}
     <div className="mt-12 w-full max-w-6xl overflow-hidden">
        <Marquee gradient={false} speed={40} pauseOnHover>
          {marqueeItems.slice(0, marqueeItems.length / 2).map((item, index) => (
            <div
              key={index}
              className="mx-4 px-6 py-5 min-w-[300px] rounded-xl shadow-lg border border-gray-300 
                        bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-md
                        flex flex-col items-start justify-center text-left transition-all duration-300
                        hover:shadow-2xl hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">{item.title}</h3>
              <p className="text-md text-gray-700 mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Scrolling Marquee - Second Row */}
      <div className="mt-6 w-full max-w-6xl overflow-hidden">
        <Marquee gradient={false} speed={30} pauseOnHover direction="right">
          {marqueeItems.slice(marqueeItems.length / 2).map((item, index) => (
            <div
              key={index}
              className="mx-4 px-6 py-5 min-w-[300px] rounded-xl shadow-lg border border-gray-300 
                        bg-gradient-to-r from-white/60 to-white/30 backdrop-blur-md
                        flex flex-col items-start justify-center text-left transition-all duration-300
                        hover:shadow-2xl hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-900 tracking-tight">{item.title}</h3>
              <p className="text-md text-gray-700 mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Banner with Light Gradient Effect */}
      <div className="mt-16 relative w-full text-center py-12">
        {/* Headline */}
        <h3 className="relative text-3xl md:text-5xl mb-14  text-black font-extrabold">
          Join the{" "}
          <span className="relative inline-block px-2">
            <span
              className="absolute -left-1 -right-1 -top-1 bottom-0 -z-10 rotate-[-4deg] md:h-[55px] h-[45px]"
              style={{
                background: "var(--lemon, #FFEB3B)", // Fallback color
                width: "calc(100% + 2px)",
              }}
            />
            Future
          </span>{" "}
          of Lead Generation
        </h3>

        {/* Call to Action Button */}
        <div className="mt-6 flex justify-center">
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

      {/* Hide Scrollbars (global style) */}
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none;
          scrollbar-width: none;
        `}
      </style>
    </section>
  );
};

export default Vision;
