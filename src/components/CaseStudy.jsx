import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingDown,
  TrendingUp,
  Calendar,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ss from "../assets/ss.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slick1 from "../assets/slick1.webp";
import slick2 from "../assets/slick2.webp";
import slick3 from "../assets/slick3.webp";
import slick4 from "../assets/slick4.webp";
import slick5 from "../assets/slick5.webp";
import slick6 from "../assets/slick6.webp";
import { useState, useRef } from "react";

const CaseStudy = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false, // Hide next/prev buttons (optional)
    appendDots: (dots) => (
      <div>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
    beforeChange: (current, next) => setDotActive(next),
  };

  const images = [slick1, slick2, slick3, slick4, slick5, slick6];

  return (
    <section className="py-16 px-6 md:px-12  bg-white text-black">
      {/* Heading */}

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-extrabold text-center"
      >
        What customers say
      </motion.h2>
      <p className="mt-2 text-lg text-gray-600 text-center">
        Join a list of satisfied customers!
      </p>

      {/* Image Section */}
      <div className="w-full hidden md:flex justify-center mt-6">
        <img src={ss} alt="Case Study Success" className=" w-full  h-auto" />
      </div>

      <div className="w-full max-w-3xl mx-auto mt-10 mb-16 md:hidden">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto  object-cover"
              />
            </div>
          ))}
        </Slider>

        {/* Custom Dot Styling */}
        <style>
          {`
          .custom-dots li button:before {
            color: ${dotActive ? "#A855F7" : "gray"} !important;
            font-size: 12px;
          }
          .custom-dots li.slick-active button:before {
            color: #A855F7 !important;
            font-size: 14px;
          }
        `}
        </style>
      </div>

      {/* Case Study: Mortgage Advisers Scaling Fast */}
      <section className="relative flex flex-col items-center text-center mt-8 px-6">
        {/* Elegant Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight"
        >
          Scaling to 5+ Clients in 30 Days
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl">
          How{" "}
          <span className="text-[#A855F7] font-semibold">
            Niche Financial Solutions
          </span>{" "}
          transformed their business with{" "}
          <span className="text-[#A855F7] font-semibold">
            60+ booked appointments
          </span>{" "}
          and a predictable client acquisition system.
        </p>

        {/* Accent Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-[#A855F7] to-purple-400 rounded-full mt-4"></div>
      </section>

      {/* High-End Side-by-Side Case Study */}
      <div className="relative mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          {
            title: "Before: Unstructured Growth",
            description:
              "Struggled with inconsistent lead flow, unpredictable revenue, and lack of scalable client acquisition.",
            stats: [
              {
                icon: <TrendingDown className="w-6 h-6 text-red-500" />,
                text: "Lead Cost: £0 (No System)",
              },
              {
                icon: <Calendar className="w-6 h-6 text-gray-700" />,
                text: "Appointments: Inconsistent & Manual",
              },
              {
                icon: <DollarSign className="w-6 h-6 text-gray-700" />,
                text: "Revenue: Low & Unpredictable",
              },
            ],
            bgColor: "bg-white border border-gray-200",
            textColor: "text-gray-800",
            delay: 0.2,
          },
          {
            title: "After: Predictable, Scalable System",
            description:
              "Achieved sub-£4 leads, 60+ appointments monthly, and 5-7 new clients within the first 4 weeks.",
            stats: [
              {
                icon: <TrendingUp className="w-6 h-6 text-green-500" />,
                text: "Lead Cost: £3.80 (Hyper-Optimized)",
              },
              {
                icon: <Calendar className="w-6 h-6 text-[#A855F7]" />,
                text: "Appointments: 60+ Monthly",
              },
              {
                icon: <DollarSign className="w-6 h-6 text-[#A855F7]" />,
                text: "Revenue: 5-7 New Clients",
              },
            ],
            bgColor: "bg-gray-50 border border-gray-300 shadow-xl",
            textColor: "text-gray-900",
            delay: 0.4,
          },
        ].map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: data.delay }}
            className={`relative flex flex-col items-start p-8 rounded-xl transition-all duration-300 
                  hover:shadow-2xl ${data.bgColor}`}
          >
            {/* Section Title */}
            <h3 className={`text-2xl font-semibold ${data.textColor}`}>
              {data.title}
            </h3>
            <p className="mt-2 text-lg text-gray-700">{data.description}</p>

            {/* Divider */}
            <div className="mt-4 w-full border-t border-gray-300 pt-4 space-y-3">
              {data.stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  {stat.icon}
                  <p className="text-lg text-gray-800">{stat.text}</p>
                </div>
              ))}
            </div>

            {/* Elegant Bottom Accent Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#A855F7] to-purple-400 rounded-b-xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-16  flex justify-center">
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
    </section>
  );
};

export default CaseStudy;
