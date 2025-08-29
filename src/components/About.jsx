import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="/car.png" // Replace with actual car image path
            alt="Lake City Cabs"
            className="rounded-2xl shadow-lg w-full md:w-[90%] object-cover"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Your Travel Companion Across India "2015",{" "}
            <span className="text-yellow-500">Trusted by Nainital!</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            Our journey began in <span className="font-semibold">2018</span>, 
            with a vision to provide safe, reliable, and comfortable taxi 
            services to both locals and tourists in the beautiful city of Nainital. 
            As proud residents of Nainital, we understand the needs of travelers and 
            are passionate about offering them the best travel experiences.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold">Lake City Cabs</span>, we have a wide 
            range of vehicles to suit every traveler’s needs—whether you are a family 
            on vacation, a couple looking for a romantic escape, or friends planning 
            an adventurous trip. From small cars to luxury SUVs, we have it all.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            And our services are not limited to Uttarakhand alone! All our vehicles 
            come with <span className="font-semibold">All India Permits</span>, 
            allowing us to serve you anywhere across the country. Be it pickups, 
            drops, long-distance tours, or outstation rides—we are always ready to 
            make your journey smooth and memorable.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Give us a chance to serve you once, and we promise to make your travel 
            experience truly unforgettable.  
            <span className="font-semibold text-yellow-500"> Lake City Cabs</span> – 
            Your Trusted Travel Partner.
          </p>

          {/* CTA Button */}
          <button className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition">
            Book Your Ride
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
