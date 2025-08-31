// src/components/Locations.jsx
export default function Locations() {
  const locations = [
    { name: "Nainital", img: "/images/nainital.jpg" },
    { name: "Almora", img: "/images/almora.jpg" },
    { name: "Jageshwar Dham", img: "/images/jageshwar.jpg" },
    { name: "Ranikhet", img: "/images/ranikhet.jpg" },
    { name: "Kausani", img: "/images/kausani.jpg" },
    { name: "Munsiyari", img: "/images/munsiyari.jpg" },
    { name: "Badrinath", img: "/images/badrinath.jpg" },
    { name: "Kedarnath", img: "/images/kedarnath.jpg" },
    { name: "Gangotri", img: "/images/gangotri.jpg" },
    { name: "Yamunotri", img: "/images/yamunotri.jpg" },
  ];

  return (
    <section id="locations" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Places We Cover
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore the beauty of Uttarakhand with our reliable taxi service.  
          We provide rides to all major tourist destinations and pilgrimage sites.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {locations.map((l, i) => (
            <div
              key={i}
              className="group relative bg-white border border-gray-200 shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              {/* Image */}
              <img
                src={l.img}
                alt={l.name}
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white font-semibold text-lg tracking-wide">
                  {l.name}
                </span>
              </div>

              {/* Title below image */}
              <h3 className="text-lg font-semibold mt-4 mb-4">{l.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
