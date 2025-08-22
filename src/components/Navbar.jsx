import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-yellow-400 text-black flex justify-between items-center px-6 py-2 text-sm">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaPhoneAlt /> +91 7902129644
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope /> mylackcitycabsparkservice@gmail.com
          </span>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
          <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
          <FaInstagram className="cursor-pointer hover:text-pink-500" />
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-black text-white flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="h-10" />
          <h1 className="font-bold text-lg">
            <span className="text-yellow-400">Lake City</span> CABS
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="flex gap-6 font-medium">
          <li className="text-yellow-400 underline underline-offset-4">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About-Us</li>
          <li className="hover:text-yellow-400 cursor-pointer">Services</li>
          <li className="hover:text-yellow-400 cursor-pointer">Our-Vehicles</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>

        {/* Book Button */}
        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 relative">
          Book a Taxi
          <span className="absolute top-0 right-[-8px] bottom-0 w-2 bg-black skew-x-12"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
