// src/components/Vehicles.jsx
import { motion } from "framer-motion";

export default function Vehicles() {
  const vehicles = [
    { name: "Innova Crysta", seats: "6+1", img: "/innova.webp" },
    { name: "Ertiga", seats: "6+1", img: "/ertiga.webp" },
    { name: "Swift Dzire", seats: "4+1", img: "/dzire.png" },
    { name: "Alto", seats: "4+1", img: "/alto.png" },
    { name: "Tempo Traveller", seats: "12+1", img: "/traveller.png" },
  ];

  const whatsappNumber = "7302215985";

  const handleBookNow = (vehicle) => {
    const message = `Hi, I wish to book a vehicle, ${vehicle}.`;
    const url = `https://api.whatsapp.com/send?phone=91${whatsappNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section id="vehicles" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-gray-800 inline-block pb-3 mb-12 border-b-4 border-yellow-400">
          Our Vehicles
        </h2>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {vehicles.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg 
                         overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer
                         relative flex flex-col group"
            >
              {/* Yellow Taxi Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>

              {/* Image wrapper */}
              <div className="w-full h-64 overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={v.img}
                  alt={v.name}
                  className={`transition-transform duration-500 
                              lg:group-hover:scale-110 
                              ${
                                v.name === "Innova Crysta" ||
                                v.name === "Ertiga"
                                  ? "object-contain scale-90"
                                  : "object-contain"
                              }`}
                />
              </div>

              {/* Details */}
              <div className="p-6 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 relative inline-block">
                  {v.name}
                  {/* Hover underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-600 mt-3">
                  Seating Capacity: {v.seats}
                </p>

                {/* Book Now Button */}
                <button
                  onClick={() => handleBookNow(v.name)}
                  className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold 
                             py-2 px-6 rounded-full transition-all duration-300 shadow-md"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}

          {/* ✅ Extra Custom Vehicle Option Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: vehicles.length * 0.15 }}
            className="bg-white border-2 border-yellow-400 rounded-2xl shadow-lg 
                       p-6 flex flex-col justify-between items-center text-center 
                       hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group"
          >
            <h3 className="text-xl font-bold text-gray-900 relative inline-block">
              Need a Different Ride?
              {/* Hover underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mt-4">
              Didn’t find the vehicle you are looking for?  
              We can arrange <span className="font-semibold">other vehicles</span> as per your need.  
              Just ask us directly!
            </p>

            {/* WhatsApp Button */}
            <button
              onClick={() => handleBookNow("Custom Vehicle Option")}
              className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold 
                         py-2 px-6 rounded-lg shadow-md flex items-center gap-2 transition-all"
            >
              <span>Chat on WhatsApp</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
