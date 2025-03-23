import { motion } from "framer-motion";
import { TrendingUp, CalendarCheck, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp size={40} className="text-neon-magenta drop-shadow-[0_0_8px_#FF00FF]" />,
    title: "🔥 60-100 Leads per Month",
    effect: "hover:scale-105 hover:drop-shadow-[0_0_20px_#FF00FF]",
  },
  {
    icon: <CalendarCheck size={40} className="text-neon-cyan drop-shadow-[0_0_8px_#00FFFF]" />,
    title: "📅 25-40 Appointments Booked",
    effect: "hover:scale-105 hover:rotate-3 hover:drop-shadow-[0_0_20px_#00FFFF]",
  },
  {
    icon: <CheckCircle size={40} className="text-neon-green drop-shadow-[0_0_8px_#00FF00]" />,
    title: "💰 4-8 New Clients Closed",
    effect: "hover:scale-110 hover:drop-shadow-[0_0_20px_#00FF00]",
  },
];

const CoreOffer = () => {
  return (
    <section
      id="core-offer"
      className="relative flex flex-col items-center justify-center py-20 px-6 md:px-12 text-white text-center"
    >
      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-5xl font-extrabold text-center 
             bg-gradient-to-r from-[#FF00FF] via-[#00FFFF] to-[#FF00FF] 
             bg-clip-text text-transparent 
             drop-shadow-[0_0_25px_#00FFFF] animate-flicker"
      >
         60-100 Leads. 25-40 Appointments. 4-8 New Clients Monthly.
      </motion.h2>

      {/* Stats Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col items-center justify-center p-6 rounded-xl 
                        bg-transparent border border-white/20 backdrop-blur-md 
                        transition-all shadow-lg ${stat.effect}`}
          >
            {stat.icon}
            <p className="mt-4 text-lg font-semibold text-white drop-shadow-[0_0_10px_#ffffff]">
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreOffer;
