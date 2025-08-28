import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);

  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-md">
      {/* Top Bar (Only lg and above) */}
      <div className="hidden lg:flex bg-yellow-400 text-black justify-between items-center px-6 py-2 text-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaPhoneAlt /> +91 7902129644
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope /> mylackcitycabsparkservice@gmail.com
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-black text-white flex justify-between items-center px-8 py-4 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-10" />
          <h1 className="font-bold text-lg">
            <span className="text-yellow-400">Lake City</span> CABS
          </h1>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="lg:hidden cursor-pointer text-2xl"
          onClick={() => setShowHamburger(!showHamburger)}
        >
          {showHamburger ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6 font-medium">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#vehicles" className="hover:text-yellow-400">Vehicles</a></li>
            <li><a href="#locations" className="hover:text-yellow-400">Locations</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>

          {/* WhatsApp Button */}
          <a 
            href="https://api.whatsapp.com/send/?phone=917302215985&text=Hi%2C+I+am+interested+in+booking+a+ride+with+LakeCity+Cabs&type=phone_number&app_absent=0" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-6 bg-yellow-400 text-black font-semibold px-6 py-2 relative">
              Book a Taxi
              <span className="absolute top-0 right-[-8px] bottom-0 w-2 bg-black skew-x-12"></span>
            </button>
          </a>
        </div>

        {/* Mobile Dropdown Menu */}
        <ul
          className={`lg:hidden absolute top-[100%] right-0 z-30 bg-yellow-600 w-1/2 h-auto text-white flex flex-col items-center gap-8 py-8 font-medium transform transition-all duration-500 ease-in-out ${
            showHamburger
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <li><a href="#home" onClick={() => setShowHamburger(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setShowHamburger(false)}>About Us</a></li>
          <li><a href="#vehicles" onClick={() => setShowHamburger(false)}>Vehicles</a></li>
          <li><a href="#locations" onClick={() => setShowHamburger(false)}>Locations</a></li>
          <li><a href="#contact" onClick={() => setShowHamburger(false)}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
