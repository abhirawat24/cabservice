import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="bg-gradient-to-r from-yellow-50 via-white to-gray-50 py-14 px-6 md:px-20"
      id="about"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Logo/Image with animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/logo.png" // Replace with your company logo path
            alt="Nainital Cabs Logo"
            className="rounded-xl shadow-md w-52 md:w-64 lg:w-72 object-contain"
          />
        </motion.div>

        {/* Right: Content with animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-5 leading-snug">
            About <span className="text-yellow-500">Nainital Cabs</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-3 text-sm md:text-base">
            Established in <span className="font-semibold">2015</span>,{" "}
            <span className="font-semibold">Nainital Cabs</span> has been
            providing safe, reliable, and comfortable rides across Uttarakhand
            and beyond. With years of experience, we’ve become a trusted travel
            partner for both tourists and locals.
          </p>

          <p className="text-gray-700 leading-relaxed mb-3 text-sm md:text-base">
            What started as a small service has now grown into a professional
            taxi network. We specialize in making every journey smooth,
            affordable, and memorable — whether it’s local sightseeing,
            long-distance tours, or outstation trips.
          </p>

          <p className="text-gray-700 leading-relaxed mb-3 text-sm md:text-base">
            Our fleet includes well-maintained vehicles with professional
            drivers available <span className="font-semibold">24/7</span>. At{" "}
            <span className="font-semibold text-yellow-500">Nainital Cabs</span>
            , your safety, comfort, and satisfaction are always our top
            priorities.
          </p>

          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            We look forward to being a part of your travel story and ensuring
            every ride with us is a pleasant memory.{" "}
            <span className="font-semibold text-yellow-500">Nainital Cabs</span>{" "}
            – Your Trusted Travel Companion.
          </p>

          {/* CTA Button */}
          <a
            href="https://wa.me/917302215985?text=Hello,%20I%20would%20like%20to%20book%20a%20ride%20with%20Nainital%20Cabs."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition"
          >
            Book Your Ride
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
