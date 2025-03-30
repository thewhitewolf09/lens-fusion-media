import { motion } from "framer-motion";
import {
  TrendingUp,
  CalendarCheck,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: <TrendingUp size={40} className="text-white" />,
    title: "Consistent Lead Generation",
    description: "Get 60-100 quality leads every month to grow your business.",
  },
  {
    icon: <CalendarCheck size={40} className="text-white" />,
    title: "Automated Scheduling",
    description: "Book 25-40 appointments monthly with zero hassle.",
  },
  {
    icon: <CheckCircle size={40} className="text-white" />,
    title: "High Conversion Rates",
    description: "Close 4-8 new clients every month with ease.",
  },
];

const CoreOffer = () => {
  return (
    <section
      id="core-offer"
      className="relative flex flex-col items-center justify-center py-20 px-6 md:px-12 text-black  bg-white"
    >
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold"
      >
        Core Offers
      </motion.h2>

      {/* Stats Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-row md:flex-col items-start justify-start md:p-6 p-2
                  transition-all "
          >
            {/* Icon Container with Green Background */}
            <div className="w-1/4 md:w-full flex items-center justify-center">  
              <div className="flex items-center justify-center w-18 h-18 md:w-24 md:h-24 rounded-lg bg-[#A855F7]">
              {stat.icon}
            </div>
            </div>
            

            <div className="flex flex-col items-center justify-center pl-4 md:pl-0">
              {/* Title */}
              <p className=" md:pt-0 md:mt-8 text-2xl font-extrabold text-black md:text-center">
                {stat.title}
              </p>

              {/* Description */}
              <p className="mt-2 text-normal text-black-700 md:text-center">
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="mt-6  md:flex justify-center">
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

export default CoreOffer;
