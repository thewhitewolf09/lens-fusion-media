import { motion } from "framer-motion";
import { Target, Calendar, Briefcase, CheckCircle, TrendingUp } from "lucide-react";

const painkillers = [
  {
    icon: <Target size={44} className="text-neon-cyan drop-shadow-[0_0_10px_#00FFFF]" />,
    title: "AI-Powered Lead Generation",
    description: "We use AI & hyper-targeted data to find real, verified leads who actually need your mortgage services.",
    effect: "hover:shadow-[0_0_20px_#00FFFF] hover:scale-105",
    highlight: "🚀 3x More Qualified Leads",
  },
  {
    icon: <Calendar size={44} className="text-neon-magenta drop-shadow-[0_0_10px_#FF00FF]" />,
    title: "Automatic Appointment Booking",
    description: "Our system schedules warm leads directly into your calendar, so you only focus on closing deals.",
    effect: "hover:shadow-[0_0_20px_#FF00FF] hover:scale-105 hover:rotate-3",
    highlight: "📅 20+ Meetings Per Month",
  },
  {
    icon: <Briefcase size={44} className="text-neon-green drop-shadow-[0_0_10px_#00FF00]" />,
    title: "Done-for-You Client Conversions",
    description: "We handle everything from lead warming to follow-ups, so you only spend time with ready-to-buy clients.",
    effect: "hover:shadow-[0_0_20px_#00FF00] hover:scale-110",
    highlight: "💰 4-8 New Clients Monthly",
  },
];

const Painkillers = () => {
  return (
    <section id="painkillers" className="relative flex flex-col items-center justify-center py-20 px-6 md:px-12 text-white text-center z-10">
      
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
        Never Worry About Leads Again. <br /> More Appointments, More Clients.
      </motion.h2>

      {/* Three-Box Layout */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {painkillers.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col items-center justify-center p-8 rounded-2xl 
                        border border-white/20 backdrop-blur-xl bg-black/20 
                        transition-all shadow-lg ${item.effect}`}
          >
            {item.icon}
            <p className="mt-4 text-2xl font-bold text-white drop-shadow-[0_0_10px_#ffffff]">
              {item.title}
            </p>
            <p className="mt-2 text-md text-gray-300">{item.description}</p>

            {/* Highlighted Benefit */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 text-lg font-semibold text-neon-magenta drop-shadow-[0_0_10px_#FF00FF]"
            >
              {item.highlight}
            </motion.p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 Extra Proof Section – Dynamic Success Metrics */}
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl">
        {/* Metric 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center space-x-4 bg-black/30 p-6 rounded-xl backdrop-blur-md border border-white/20"
        >
          <TrendingUp size={36} className="text-neon-cyan drop-shadow-[0_0_15px_#00FFFF]" />
          <p className="text-2xl font-semibold text-neon-cyan drop-shadow-[0_0_15px_#00FFFF]">
            +250% Faster Growth 🚀
          </p>
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex items-center space-x-4 bg-black/30 p-6 rounded-xl backdrop-blur-md border border-white/20"
        >
          <CheckCircle size={36} className="text-neon-green drop-shadow-[0_0_15px_#00FF00]" />
          <p className="text-2xl font-semibold text-neon-green drop-shadow-[0_0_15px_#00FF00]">
            80% Less Time Wasted ⏳
          </p>
        </motion.div>
      </div>

    </section>
  );
};

export default Painkillers;
