import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Get in touch with us for bookings and inquiries. We’re here to help you 24/7.
        </p>

        <div className="flex justify-center gap-8">
          {/* Phone Call Button */}
          <a
            href="tel:+917500769531"
            className="flex items-center gap-3 bg-yellow-400 text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 transition"
          >
            <FaPhoneAlt className="text-xl" /> +91 7500769531
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://api.whatsapp.com/send/?phone=917302215985&text=Hi%2C+I+would+like+to+book+a+ride+with+LakeCity+Cabs&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
          >
            <FaWhatsapp className="text-xl" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
