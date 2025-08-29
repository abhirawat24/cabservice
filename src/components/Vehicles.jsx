// src/components/Vehicles.jsx
import { motion } from "framer-motion";

export default function Vehicles() {
  const vehicles = [
    { name: "Innova Crysta", seats: "6+1", img: "/images/innova.jpg" },
    { name: "Ertiga", seats: "6+1", img: "/images/ertiga.jpg" },
    { name: "Swift Dzire", seats: "4+1", img: "/images/swift.jpg" },
    { name: "Alto", seats: "4+1", img: "/images/alto.jpg" },
    { name: "Tempo Traveller", seats: "12+1", img: "/images/tempo.jpg" },
  ];

  return (
    <section id="vehicles" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Vehicles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {vehicles.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={v.img}
                  alt={v.name}
                  className="w-full h-56 md:h-64 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800">{v.name}</h3>
                <p className="text-gray-600 mt-2">Seating Capacity: {v.seats}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
