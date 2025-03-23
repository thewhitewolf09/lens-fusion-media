import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-12 text-white pt-[6rem] md:pt-[8rem]"
    >
      {/* Left Side - Text Content */}
      <div className="text-center md:text-left max-w-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-neon-cyan drop-shadow-[0_0_15px_#00FFFF]"
        >
          UK Mortgage Advisers: Fill Your Pipeline with Consistent Clients
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-neon-magenta drop-shadow-[0_0_10px_#FF00FF]"
        >
          Get 25-40 appointments & 4-8 clients per month—on a pay-on-completion
          basis.
        </motion.p>

        {/* CTA Button */}

        <Button
        asChild
        className="mt-6 px-8 py-3 text-lg font-bold text-white 
                   bg-gradient-to-r from-purple-600 to-indigo-500 
                   rounded-full shadow-lg transition-all 
                   hover:from-purple-500 hover:to-indigo-400 
                   hover:shadow-[0_0_20px_#9B5DE5] hover:animate-pulse"
      >
        <a href="#book-a-call">Start Growing Your Client Base</a>
      </Button>
      </div>

      {/* Right Side - Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative mt-10 md:mt-0 md:ml-12 w-full max-w-2xl rounded-xl bg-white/10 backdrop-blur-lg shadow-[0_0_20px_#00FFFF] hover:scale-105 transition-transform overflow-hidden"
      >
        <iframe
          className="w-full h-[250px] md:h-[350px] rounded-xl"
          src="https://www.youtube.com/embed/Z3T0FqtEpck"
          title="A-Z of Generating €4 Mortgage Leads – My Exact Strategy"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Hero;
