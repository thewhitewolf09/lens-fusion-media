import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";

const Navbar = ({ refs }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scrolling function
  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      const navbarHeight = 100; // Adjust this if your navbar is taller
      const sectionTop = sectionRef.current.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed left-0 top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        isScrolled ? "bg-black/80 shadow-lg" : "bg-black/50"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <img
            src={logo}
            alt="MortgagePro Logo"
            className="h-20 w-auto brightness-110 contrast-125 drop-shadow-[0_0_10px_#00FFFF]"
          />
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden gap-6 md:flex">
          {[
            { name: "Home", ref: refs.heroRef },
            { name: "Results", ref: refs.caseStudyRef },
            { name: "How It Works", ref: refs.coreOfferRef },
            { name: "FAQ", ref: refs.faqRef },
            { name: "Vision", ref: refs.visionRef },
          ].map((link, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(link.ref)}
              whileHover={{
                color: "#00FFFF",
                textShadow: "0px 0px 8px #00FFFF",
              }}
              className="relative text-lg text-white after:absolute after:bottom-0 after:left-0 
                         after:h-[2px] after:w-0 after:transition-all after:duration-300 
                         hover:after:w-full after:bg-neon-cyan"
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu size={28} color="#00FFFF" />
        </div>

        {/* CTA Button - ShadCN */}
        <Button
          variant="ghost"
          className="hidden md:flex items-center justify-center px-6 py-3 text-lg font-semibold tracking-wide 
             text-[#00eaff] border border-[#00eaff] rounded-xl transition-all 
             bg-black/20 shadow-[0px_0px_15px_#00eaff] 
             hover:bg-[#00111f] hover:text-[#80faff] hover:shadow-[0px_0px_25px_#00eaff] hover:scale-105"
          onClick={() => scrollToSection(refs.footerRef)}
        >
          🚀 Get Clients Now
        </Button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
