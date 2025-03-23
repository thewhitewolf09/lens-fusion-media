import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // Ensure this is your correct logo path

const Footer = () => {
  return (
    <footer className="relative  py-6 px-10 flex flex-col md:flex-row items-center justify-between border-t border-white/10">
      {/* Left Side: Logo & Copyright */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Company Logo" className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition" />
        <p className="text-gray-400 text-sm tracking-wide">
          © 2024 - All Rights Reserved
        </p>
      </div>

      {/* Middle: Contact Info */}
      <div className="text-gray-300 text-sm flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
        <p className="flex items-center space-x-2">
          📩 
          <a href="mailto:emmett@lensfusionn.com" className="text-neon-magenta hover:text-white transition-all">
            emmett@lensfusionn.com
          </a>
        </p>
        <p className="flex items-center space-x-2">
          📞 
          <a href="tel:+447935592011" className="text-neon-cyan hover:text-white transition-all">
            +44 7935 592011
          </a>
        </p>
      </div>

      {/* Right Side: Terms & Privacy */}
      <div className="flex space-x-6 text-sm">
        <a href="/terms" className="relative group text-gray-400 hover:text-white transition">
          Terms of Service
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon-magenta scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
        <a href="/privacy" className="relative group text-gray-400 hover:text-white transition">
          Privacy Policy
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon-cyan scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
