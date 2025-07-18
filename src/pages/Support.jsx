// pages/Support.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Support = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="pt-24 px-6 md:px-12 bg-gradient-to-b from-white to-blue-100 text-gray-900 min-h-screen">
      <motion.div
        className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FaPhoneAlt className="text-blue-600" /> Need Help?
        </h1>
        <p>If you’re facing issues or have questions, reach out to us via the methods below:</p>

        <ul className="space-y-5 text-lg">
          <li className="flex gap-4 items-center" data-aos="fade-right">
            <FaEnvelope className="text-blue-600 text-xl" />
            <span>Email: <a href="mailto:doyinspace@gmail.com" className="underline">doyinspace@gmail.com</a></span>
          </li>
          <li className="flex gap-4 items-center" data-aos="fade-left">
            <FaWhatsapp className="text-green-600 text-xl" />
            <span>WhatsApp: <a href="https://wa.me/2349035667678" target="_blank" rel="noopener noreferrer" className="underline">+234 903 566 7678</a></span>
          </li>
        </ul>
      </motion.div>
    </main>
  );
};

export default Support;
