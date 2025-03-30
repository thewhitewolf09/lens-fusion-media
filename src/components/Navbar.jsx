import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../assets/logo.png";

const Navbar = ({ refs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      const navbarHeight = isScrolled ? 70 : 100;
      const sectionTop = sectionRef.current.offsetTop - navbarHeight;

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });

      setIsDrawerOpen(false); // Close drawer on navigation
    }
  };

  return (
    <>
      {/* Navbar */}
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
          {/* Left Side - Logo */}
          <motion.div whileHover={{ cursor: "pointer" }}>
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

          {/* Navigation Links - Desktop Only */}
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
                whileHover={{ color: "#A855F7", cursor: "pointer" }}
                className={`text-xl font-normal transition-all duration-300 mx-4 ${
                  isScrolled ? "text-gray-900" : "text-black"
                }`}
              >
                {link.name}
              </motion.button>
            ))}
          </div>

          {/* Right Side - CTA & Hamburger Menu */}
          <div className="flex items-center gap-4">
            {/* CTA Button - Desktop Only */}
            <div className="hidden md:flex">
              <Button
                className="px-6 py-5 text-lg font-semibold bg-pink-500 text-white rounded-lg shadow-md transition-all hover:bg-pink-600 hover:cursor-pointer"
                onClick={() => scrollToSection(refs.footerRef)}
              >
                Get Clients Now
              </Button>
            </div>

            {/* Hamburger Menu - Mobile Only */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-200 transition"
              onClick={() => setIsDrawerOpen(true)}
            >
              <Menu className="w-7 h-7 text-black" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Sidebar Drawer - Mobile Only */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isDrawerOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg z-50 flex flex-col items-center pt-20"
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 p-2 rounded-md hover:bg-gray-200 transition"
          onClick={() => setIsDrawerOpen(false)}
        >
          <X className="w-7 h-7 text-black" />
        </button>

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-6">
          {[
            { name: "Home", ref: refs.heroRef },
            { name: "Results", ref: refs.caseStudyRef },
            { name: "Core Offers", ref: refs.coreOfferRef },
            { name: "FAQ", ref: refs.faqRef },
            { name: "Vision", ref: refs.visionRef },
          ].map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.ref)}
              className="text-2xl font-semibold text-gray-900 hover:text-purple-500 transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-10 w-4/5 flex justify-center">
          <Button
            className="px-8 py-6 text-xl font-semibold bg-pink-500 text-white rounded-lg shadow-md transition-all hover:bg-pink-600"
            onClick={() => scrollToSection(refs.footerRef)}
          >
            Get Clients Now
          </Button>
        </div>
      </motion.div>

      {/* Overlay (Dim Background when Drawer Opens) */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/90 bg-opacity-50 z-40"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
