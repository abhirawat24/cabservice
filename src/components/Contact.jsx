import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gray-50">
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Get in touch with us for bookings and inquiries. We’re here to help you{" "}
          <span className="font-semibold text-yellow-500">24/7</span>.
        </p>

        {/* Card Box */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-10 flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {/* Phone Call Button */}
            <a
              href="tel:+917500769531"
              className="flex items-center gap-3 border-2 border-yellow-400 bg-yellow-50 text-black px-8 py-4 rounded-xl hover:bg-yellow-400 hover:text-black hover:shadow-lg transition text-lg font-medium w-full sm:w-auto justify-center"
            >
              <FaPhoneAlt className="text-2xl text-yellow-500" /> +91 7500769531
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://api.whatsapp.com/send/?phone=917302215985&text=Hi%2C+I+would+like+to+book+a+ride+with+Nainital+Cabs&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-2 border-green-500 bg-green-50 text-green-600 px-8 py-4 rounded-xl hover:bg-green-500 hover:text-white hover:shadow-lg transition text-lg font-medium w-full sm:w-auto justify-center"
            >
              <FaWhatsapp className="text-2xl" /> WhatsApp
            </a>

            {/* Gmail Button */}
            <a
              href="mailto:pankajmanral218@gmail.com"
              className="flex items-center gap-3 border-2 border-red-500 bg-red-50 text-red-600 px-8 py-4 rounded-xl hover:bg-red-500 hover:text-white hover:shadow-lg transition text-lg font-medium w-full sm:w-auto justify-center"
            >
              <FaEnvelope className="text-2xl" /> Gmail
            </a>
          </div>

          {/* Location Line */}
          <div className="mt-6 text-gray-600 text-lg">
            📍 Bus Stop, Talital, Nainital
          </div>
        </div>
      </div>
    </section>
  );
}
