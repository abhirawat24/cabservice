// src/components/Vehicles.jsx
export default function Vehicles() {
  const vehicles = [
    { name: "Swift Dzire", seats: "4+1", img: "/images/swift.jpg" },
    { name: "Innova Crysta", seats: "6+1", img: "/images/innova.jpg" },
    { name: "Tempo Traveller", seats: "12+1", img: "/images/tempo.jpg" },
  ];

  return (
    <section id="vehicles" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
            >
              <img
                src={v.img}
                alt={v.name}
                className="rounded-md h-48 w-full object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">{v.name}</h3>
              <p className="text-gray-600">Seating Capacity: {v.seats}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
