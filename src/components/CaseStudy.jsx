import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle, FileText, ZoomIn } from "lucide-react";
import { useState } from "react";
import ss1 from "../assets/ss1.jpg";
import ss2 from "../assets/ss2.jpg";
import ss3 from "../assets/ss3.jpg";
import ss4 from "../assets/ss4.jpg";

// Example before/after data
const caseStudyData = {
  before: {
    title: "Before: Struggling with Low Conversions",
    leadCost: "£45 per Lead",
    appointments: "5-10 Monthly Appointments",
    revenue: "£2,500 Monthly",
    bgColor: "bg-red-700/30 border-red-500",
  },
  after: {
    title: "After: Optimized & Scaled Growth",
    leadCost: "£12 per Lead",
    appointments: "25-40 Monthly Appointments",
    revenue: "£12,000+ Monthly",
    bgColor: "bg-green-700/30 border-green-500",
  },
};

// Screenshots for modal gallery
const screenshots = [ss1, ss2, ss3, ss4];

const CaseStudy = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="case-study"
      className="relative flex flex-col items-center justify-center py-20 px-6 md:px-12 text-white text-center"
    >
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold text-center 
             bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#00FFFF] 
             bg-clip-text text-transparent 
             drop-shadow-[0_0_25px_#FF00FF] animate-flicker"
      >
        5+ New Clients in Just 30 Days: See What’s Possible
      </motion.h2>
      {/* Before & After Comparison */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {Object.entries(caseStudyData).map(([key, data]) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: key === "before" ? 0.2 : 0.4 }}
            className={`relative flex flex-col items-center justify-center p-8 rounded-2xl 
                        border ${data.bgColor} backdrop-blur-xl bg-black/20 
                        transition-all shadow-lg hover:scale-105`}
          >
            <h3 className="text-2xl font-bold text-white">{data.title}</h3>
            <p className="mt-2 text-lg text-gray-300">
              📉 Lead Cost:{" "}
              <span className="font-semibold">{data.leadCost}</span>
            </p>
            <p className="mt-2 text-lg text-gray-300">
              📅 Appointments:{" "}
              <span className="font-semibold">{data.appointments}</span>
            </p>
            <p className="mt-2 text-lg text-gray-300">
              💰 Revenue: <span className="font-semibold">{data.revenue}</span>
            </p>
          </motion.div>
        ))}
      </div>
      {/* Testimonial Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-16 max-w-3xl bg-black/30 border border-neon-cyan p-8 rounded-xl backdrop-blur-md"
      >
        <FileText
          size={36}
          className="text-neon-cyan drop-shadow-[0_0_10px_#00FFFF] mx-auto mb-4"
        />
        <p className="text-lg text-gray-300 italic">
          "We struggled for months trying to get quality leads. This system
          changed everything – now we have <b>consistent clients every month</b>
          without wasting hours chasing leads."
        </p>
        <p className="mt-4 text-xl font-semibold text-neon-magenta">
          – John Doe, Mortgage Adviser
        </p>
      </motion.div>
      {/* Screenshot Proof Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
        {screenshots.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative cursor-pointer rounded-lg overflow-hidden border border-white/10"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Case Study ${index + 1}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <ZoomIn size={40} className="text-white" />
            </div>
          </motion.div>
        ))}
      </div>
      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage}
              alt="Expanded Screenshot"
              className="rounded-lg shadow-lg max-w-full max-h-screen"
            />
            <button
              className="absolute top-4 right-4 bg-white/20 p-3 rounded-full text-white"
              onClick={() => setSelectedImage(null)}
            >
              ❌
            </button>
          </div>
        </div>
      )}
      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Button
          asChild
          className="mt-6 px-8 py-3 text-lg font-bold text-white 
                   bg-gradient-to-r from-purple-600 to-indigo-500 
                   rounded-full shadow-lg transition-all 
                   hover:from-purple-500 hover:to-indigo-400 
                   hover:shadow-[0_0_20px_#9B5DE5] hover:animate-pulse"
        >
          <a href="#results">See More Results</a>
        </Button>
      </motion.div>
    </section>
  );
};

export default CaseStudy;
