import React from "react";
import { motion } from "framer-motion";

const SeerahCard = ({ title, description, pdf }) => {
  return (
    <motion.div
      className="bg-white text-gray-900 rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto"
      whileHover={{ scale: 1.03 }}
      data-aos="fade-up"
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>

      <div className="flex gap-4">
        {/* View PDF */}
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          View
        </a>

        {/* Download PDF */}
        <a
          href={pdf}
          download
          className="bg-emerald-600 text-white py-2 px-4 rounded hover:bg-emerald-700 transition"
        >
          Download
        </a>
      </div>
    </motion.div>
  );
};

export default SeerahCard;
