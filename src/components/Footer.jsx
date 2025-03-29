import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Ensure this is your correct logo path

const Footer = () => {
  return (
    <footer className="relative py-6 px-12 border-t border-black/20 text-gray-800 text-base font-medium">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Left Side: Logo & Tagline */}
        <div className="flex flex-col items-start">
          <motion.div
            className="flex items-center cursor-pointer"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto"
              style={{
                filter: "invert(1) drop-shadow(0px 0px 15px rgba(180, 100, 255, 0.9))",
              }}
            />
          </motion.div>
          <p className="text-gray-600 mt-2 text-xs">© 2024 - All Rights Reserved</p>
        </div>

        {/* Middle: Links (Now Properly Centered) */}
        <div className="flex flex-col items-center space-y-2">
          <a href="/terms" className="underline text-lg hover:text-black transition-all hover:cursor-pointer">
            Terms of Service
          </a>
          <a href="/privacy" className="underline text-lg hover:text-black transition-all">
            Privacy Policy
          </a>
        </div>

        {/* Right Side: Contact Info */}
        <div className="flex flex-col items-end space-y-2">
          <a href="mailto:emmett@lensfusionn.com" className="text-lg font-semibold hover:text-black transition-all">
            📩 emmett@lensfusionn.com
          </a>
          <a href="tel:+447935592011" className="text-lg hover:text-black transition-all">
            📞 +44 7935 592011
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
