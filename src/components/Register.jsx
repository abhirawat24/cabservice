import React from "react";
import { InlineWidget } from "react-calendly"; // npm install react-calendly

const Register = () => {
  return (
    <section className="bg-black text-white w-full py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Booking Form */}
        <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">
            Book Your Cab
          </h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-black border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-black border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="Start Destination"
              className="p-3 rounded bg-black border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="End Destination"
              className="p-3 rounded bg-black border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="date"
              className="p-3 rounded bg-black border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="time"
              className="p-3 rounded bg-black border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="number"
              placeholder="Number of Passengers"
              min="1"
              className="p-3 rounded bg-black border border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="bg-yellow-400 text-black font-semibold py-3 rounded hover:bg-yellow-500 transition"
            >
              Submit Booking
            </button>
          </form>
        </div>

        {/* Calendly Embed */}
        <div className="bg-gray-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            Schedule with Calendly
          </h2>
          <InlineWidget url="https://calendly.com/your-calendly-link" styles={{ height: "600px" }} />
        </div>
      </div>
    </section>
  );
};

export default Register;
