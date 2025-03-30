import { motion } from "framer-motion";
import { TrendingUp, CheckCircle } from "lucide-react";
import pk1 from "../assets/pk1.webp";
import pk2 from "../assets/pk2.webp";
import pk3 from "../assets/pk3.webp";

const painkillers = [
  {
    image: pk1,
    title: "AI-Powered Lead Generation",
    description:
      "We use AI & hyper-targeted data to find real, verified leads who actually need your mortgage services.",
    highlight: "🚀 3x More Qualified Leads",
    bgColor: "#A4F755",
  },
  {
    image: pk2,
    title: "Automatic Appointment Booking",
    description:
      "Our system schedules warm leads directly into your calendar, so you only focus on closing deals.",
    highlight: "📅 20+ Meetings Per Month",
    bgColor: "#C69849",
  },
  {
    image: pk3,
    title: "Done-for-You Client Conversions",
    description:
      "We handle everything from lead warming to follow-ups, so you only spend time with ready-to-buy clients.",
    highlight: "💰 4-8 New Clients Monthly",
    bgColor: "#4BBCCC",
  },
];

const Painkillers = () => {
  return (
    <section
      id="painkillers"
      className="relative flex flex-col items-center justify-center py-20 px-6 md:px-12"
    >
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-black leading-snug drop-shadow-lg"
      >
        Never Worry About Leads Again.
        <br />
        <span className="text-[#860df8] drop-shadow-md">
          More Appointments, More Clients.
        </span>
      </motion.h2>

      
      <div className="hidden mt-12 md:grid grid-cols-1 gap-10 w-full max-w-5xl">
        {painkillers.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col w-full md:flex-row items-center justify-center p-6"
          >
            {index % 2 === 0 ? (
              <>
                {/* Image Box */}
                <div className="relative w-[60%] md:w-[55%] flex justify-center mr-8">
                  <div className="relative w-[100%] bg-black/10 backdrop-blur-md rounded-lg p-2 border border-black/20 shadow-lg">
                    <div className="absolute inset-0 transform -rotate-4 border-2 border-black/50 rounded-lg pointer-events-none"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="relative rounded-lg w-full h-auto max-h-[300px] object-contain"
                      style={{ backgroundColor: item.bgColor }}
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col w-1/2 md:pl-6 mt-4 md:mt-0 text-white">
                  <p className="text-4xl font-extrabold drop-shadow-md text-black">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xl text-gray-800">
                    {item.description}
                  </p>
                  <p className="mt-4 text-xl font-semibold text-[#860df8]">
                    {item.highlight}
                  </p>
                </div>
              </>
            ) : (
              <>
                {/* Text Content */}
                <div className="flex flex-col w-1/2 md:pr-6 mt-4 md:mt-0 text-white">
                  <p className="text-4xl font-extrabold drop-shadow-md text-black">
                    {item.title}
                  </p>
                  <p className="mt-2 text-xl text-gray-800">
                    {item.description}
                  </p>
                  <p className="mt-4 text-xl font-semibold text-[#860df8]">
                    {item.highlight}
                  </p>
                </div>

                {/* Image Box */}
                <div className="relative w-[60%] md:w-[55%] flex justify-center ml-8">
                  <div className="relative w-[100%] bg-black/10 backdrop-blur-md rounded-lg p-2 border border-black/20 shadow-lg">
                    <div className="absolute inset-0 transform rotate-4 border-2 border-black/50 rounded-lg pointer-events-none"></div>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="relative rounded-lg w-full h-auto max-h-[300px] object-contain"
                      style={{ backgroundColor: item.bgColor }}
                    />
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile Version of Painkillers Section */}
      <div className="md:hidden mt-12 grid grid-cols-1 gap-2 w-full max-w-5xl">
        {painkillers.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col w-full items-center justify-center p-6"
          >
            {/* Image Box */}
            <div className="relative w-full flex justify-center ">
              <div className="relative w-[100%] bg-black/10 backdrop-blur-md rounded-lg p-2 border border-black/20 shadow-lg">
                <div className="absolute inset-0 transform -rotate-4 border-2 border-black/50 rounded-lg pointer-events-none"></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="relative rounded-lg w-full h-auto max-h-[300px] object-contain"
                  style={{ backgroundColor: item.bgColor }}
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col w-full text-center mt-12 md:mt-0 text-white">
              <p className="text-4xl font-extrabold drop-shadow-md text-black">
                {item.title}
              </p>
              <p className="mt-2 text-xl text-gray-800">{item.description}</p>
              <p className="mt-4 text-xl font-semibold text-[#860df8]">
                {item.highlight}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Extra Proof Section – Dynamic Success Metrics */}
      {/* Metrics Section */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl">
        {/* Metric 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-4 bg-white/10 p-6 rounded-lg shadow-lg border border-[#860df8]/50 backdrop-blur-lg"
        >
          <TrendingUp size={36} className="text-cyan-500" />
          <p className="text-xl md:text-2xl font-semibold text-black">
            +250% Faster Growth 🚀
          </p>
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex items-center space-x-4 bg-white/10 p-6 rounded-lg shadow-lg border border-green-400/50 backdrop-blur-lg"
        >
          <CheckCircle size={36} className="text-green-500" />
          <p className="text-xl md:text-2xl font-semibold text-black">
            80% Less Time Wasted ⏳
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Painkillers;
