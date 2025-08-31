import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function Locations() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const locations = [
    {
      name: "Nainital",
      img: "/images/nainital.jpg",
      desc: "Famous hill station known for Naini Lake, Mall Road, and scenic beauty.",
    },
    {
      name: "Almora",
      img: "/images/almora.jpg",
      desc: "A cultural hub with Himalayan views, temples, and local traditions.",
    },
    {
      name: "Jageshwar Dham",
      img: "/images/jageshwar.jpg",
      desc: "Ancient temple town surrounded by deodar forests, known for Jyotirlingas.",
    },
    {
      name: "Ranikhet",
      img: "/images/ranikhet.jpg",
      desc: "Peaceful cantonment town offering panoramic views of the Himalayas.",
    },
    {
      name: "Kausani",
      img: "/images/kausani.jpg",
      desc: "Known as the 'Switzerland of India' for its breathtaking Himalayan views.",
    },
    {
      name: "Munsiyari",
      img: "/images/munsiyari.jpg",
      desc: "Gateway to the Johar Valley, surrounded by snow-capped mountains.",
    },
    {
      name: "Badrinath",
      img: "/images/badrinath.jpg",
      desc: "One of the Char Dham shrines dedicated to Lord Vishnu.",
    },
    {
      name: "Kedarnath",
      img: "/images/kedarnath.jpg",
      desc: "Famous pilgrimage site dedicated to Lord Shiva in the Himalayas.",
    },
    {
      name: "Gangotri",
      img: "/images/gangotri.jpg",
      desc: "Sacred town, the origin of the holy River Ganga.",
    },
    {
      name: "Yamunotri",
      img: "/images/yamunotri.jpg",
      desc: "One of the Char Dhams, source of the holy Yamuna River.",
    },
  ];

  return (
    <section id="locations" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 inline-block pb-3 mb-10 border-b-4 border-yellow-400">
          Places We Cover
        </h2>

        {/* Grid of Locations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {locations.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1.1,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden 
                         hover:shadow-2xl hover:border-yellow-400 transition transform hover:scale-105 cursor-pointer group"
              onClick={() => setSelectedPlace(l)}
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={l.img}
                  alt={l.name}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 relative inline-block">
                  {l.name}
                  {/* Hover underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
                </h3>
                <p className="text-gray-600 text-base leading-relaxed mt-3">
                  {l.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* ✅ Extra Custom Route Box */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.1,
              delay: locations.length * 0.15,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="bg-white border border-yellow-400 shadow-lg rounded-2xl p-6 flex flex-col justify-between items-center text-center hover:shadow-xl transform hover:scale-105 cursor-pointer group"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 relative inline-block">
                Custom Routes Available
                <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mt-3">
                Didn’t see your place in the list? No problem! We can arrange a
                taxi to{" "}
                <span className="font-semibold">
                  any location in Uttarakhand
                </span>
                . Click below and tell us where you want to go.
              </p>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              href="https://wa.me/917302215985?text=Hello,%20I%20want%20a%20taxi%20for%20another%20place%20not%20in%20the%20list."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 bg-green-500 text-white font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              <FaWhatsapp className="text-xl" />
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <p className="mt-14 text-lg md:text-xl text-gray-800 font-medium inline-block pb-2 border-b-4 border-yellow-400">
          We also cover many more destinations across Uttarakhand. Contact us
          for custom routes!
        </p>
      </div>

      {/* Modal */}
      {selectedPlace && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedPlace(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
            >
              ✖
            </button>
            <img
              src={selectedPlace.img}
              alt={selectedPlace.name}
              className="rounded-md h-56 w-full object-cover"
            />
            <h3 className="text-2xl font-bold mt-4">{selectedPlace.name}</h3>
            <p className="text-gray-700 mt-2">{selectedPlace.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
}
