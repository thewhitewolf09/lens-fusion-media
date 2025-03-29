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
      const navbarHeight = isScrolled ? 70 : 100; // Adjust height dynamically
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
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-lg border-b shadow-md"
          : "bg-transparent"
      }`}
      style={{
        height: isScrolled ? "70px" : "100px",
        transition: "height 0.3s ease-in-out",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className={`mx-auto flex max-w-7xl w-full items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-6"
        }`}
      >
        {/* Logo with Neon Glow */}
        <motion.div
          whileHover={{ cursor: "pointer" }}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-auto transition-all duration-300"
            style={{
              filter: isScrolled
                ? "invert(1)"
                : "invert(1) drop-shadow(0px 0px 15px rgba(180, 100, 255, 0.9))",
            }}
          />
        </motion.div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-4">
          {[
            { name: "Home", ref: refs.heroRef },
            { name: "Results", ref: refs.caseStudyRef },
            { name: "Core Offers", ref: refs.coreOfferRef },
            { name: "FAQ", ref: refs.faqRef },
            { name: "Vision", ref: refs.visionRef },
          ].map((link, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToSection(link.ref)}
              whileHover={{ color: "#A855F7", cursor: "pointer"}} // Purple hover effect
              className={`text-xl font-normal transition-all duration-300 mx-4 ${
                isScrolled ? "text-gray-900" : "text-black"
              }`}
            >
              {link.name}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button
            className="px-6 py-5 text-lg font-semibold bg-pink-500 text-white rounded-lg shadow-md transition-all hover:bg-pink-600 hover:cursor-pointer"
            onClick={() => scrollToSection(refs.footerRef)}
          >
            Get Clients Now
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
