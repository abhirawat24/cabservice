import { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowTopBar(false);
      } else {
        setShowTopBar(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-md">
      {/* Top Bar */}
      <div
        className={`hidden lg:flex bg-yellow-400 text-black justify-between items-center px-6 text-sm transition-all duration-500 ease-in-out overflow-hidden`}
        style={{
          height: showTopBar ? "40px" : "0px",
          opacity: showTopBar ? 1 : 0,
        }}
      >
        <div className="flex items-center gap-6">
          <a
            href="tel:+917902129644"
            className="flex items-center gap-2 cursor-pointer hover:text-amber-100"
          >
            <FaPhoneAlt /> +91 7902129644
          </a>
          <a
            href="mailto:nainitalcabs2015@gmail.com?subject=Cab%20Booking%20Inquiry&body=Hi,%20I%20am%20interested%20in%20booking%20a%20ride%20with%20Nainital%20Cabs.%20Can%20you%20please%20share%20the%20available%20options%20and%20pricing?"
            className="flex items-center gap-2 cursor-pointer hover:text-amber-100 text-lg"
          >
            <FaEnvelope /> E-mail
          </a>
        </div>
      </div>


      {/* Main Navbar */}
<div className="bg-black text-white flex justify-between items-center px-6 py-2 relative">
  {/* Logo */}
  <div className="flex items-center gap-2">
    <img src="/logo.png" alt="logo" className="h-8" />
    <h1 className="font-bold text-base">
      <span className="text-yellow-400">Nainital Cabs</span> Service
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
            href="https://api.whatsapp.com/send/?phone=917302215985&text=Hi%2C+I+want+to+book+a+ride+with+Nainital+Cabs.+Can+you+please+share+the+options+and+pricing%3F&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="ml-6 px-6 py-2 font-semibold rounded-full border-2 border-yellow-400 bg-yellow-400 text-black cursor-pointer shadow-md hover:bg-black hover:text-yellow-400 transition-all duration-300">
              Book a Taxi
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
