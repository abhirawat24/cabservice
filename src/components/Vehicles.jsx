// src/components/Vehicles.jsx
import { motion } from "framer-motion";

export default function Vehicles() {
  const vehicles = [
    { name: "Innova Crysta", seats: "6+1", img: "/images/innova.webp" },
    { name: "Ertiga", seats: "6+1", img: "/images/ertiga.webp" },
    { name: "Swift Dzire", seats: "4+1", img: "/images/dzire.png" },
    { name: "Alto", seats: "4+1", img: "/images/alto.png" },
    { name: "Tempo Traveller", seats: "12+1", img: "/images/traveller.png" },
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
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Vehicles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {vehicles.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 100 }} // slide from right
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg 
                         overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer
                         relative flex flex-col"
            >
              {/* Yellow Taxi Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-yellow-400"></div>

              {/* Image wrapper */}
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden flex items-center justify-center bg-white">
                <img
                  src={v.img}
                  alt={v.name}
                  className={`transition-transform duration-500 
                              lg:hover:scale-110 
                              ${
                                v.name === "Innova Crysta" || v.name === "Ertiga"
                                  ? "object-contain scale-90"
                                  : "object-contain"
                              }`}
                />
              </div>

              {/* Details */}
              <div className="p-4 text-center flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{v.name}</h3>
                <p className="text-gray-600 mt-2">Seating Capacity: {v.seats}</p>

                {/* Book Now Button */}
                <button
                  onClick={() => handleBookNow(v.name)}
                  className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold 
                             py-2 px-5 rounded-full transition-all duration-300 shadow-md"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
