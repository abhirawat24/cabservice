// src/components/Locations.jsx
export default function Locations() {
  const locations = [
    { name: "Nainital", img: "/images/nainital.jpg" },
    { name: "Ranikhet", img: "/images/ranikhet.jpg" },
    { name: "Kausani", img: "/images/kausani.jpg" },
    { name: "Munsiyari", img: "/images/munsiyari.jpg" },
    { name: "Badrinath", img: "/images/badrinath.jpg" },
    { name: "Gangotri", img: "/images/gangotri.jpg" },
  ];

  return (
    <section id="locations" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Places We Cover</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {locations.map((l, i) => (
            <div
              key={i}
              className="bg-gray-50 shadow-md rounded-lg p-4 hover:shadow-xl transition"
            >
              <img
                src={l.img}
                alt={l.name}
                className="rounded-md h-40 w-full object-cover"
              />
              <h3 className="text-lg font-semibold mt-3">{l.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
