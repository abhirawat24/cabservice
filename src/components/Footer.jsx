import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-16 px-6 md:px-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_#facc15,_transparent_40%),radial-gradient(circle_at_bottom_right,_#facc15,_transparent_40%)]"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-yellow-400">Nainital</span> Cabs Service
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            24/7 taxi service for your comfort and convenience. 
            Book your ride in seconds with trusted drivers in Lake City.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-6 border-b border-yellow-400 pb-2 w-fit">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="#locations" className="hover:text-yellow-400">Locations</a></li>
            <li><a href="#vehicles" className="hover:text-yellow-400">Our Vehicles</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-6 border-b border-yellow-400 pb-2 w-fit">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-400" /> 
              <a href="tel:+917500769531" className="hover:text-yellow-400">+91 7500769531</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" /> 
              <a href="mailto:nainitalcabs2015@gmail.com" className="hover:text-yellow-400">
                nainitalcabs2015@gmail.com
              </a>
            </li>
            <li className="text-sm">
              Bus Stop, Talital, Nainital
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative text-center text-gray-500 text-sm mt-10">
        <div className="border-t border-gray-700 pt-6">
          © 2025 Nainital Cabs Service. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
