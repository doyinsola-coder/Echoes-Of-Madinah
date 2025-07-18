import React from "react";
import { motion } from "framer-motion";

const ReflectionCard = ({ date, text, source }) => {
  return (
    <motion.div
      className="bg-white text-gray-800 p-6 rounded-2xl shadow-md max-w-md mx-auto"
      data-aos="fade-up"
      whileHover={{ scale: 1.02 }}
    >
      <p className="text-sm text-gray-500 mb-2">{new Date(date).toDateString()}</p>
      <p className="text-lg font-medium mb-4">{text}</p>
      <p className="text-sm text-emerald-600 italic">{source}</p>
    </motion.div>
  );
};

export default ReflectionCard;
