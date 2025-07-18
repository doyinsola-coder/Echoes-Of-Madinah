// pages/About.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMosque, FaBookOpen, FaHandsHelping } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="pt-24 px-6 md:px-12 bg-gradient-to-b from-white to-emerald-100 text-gray-900 min-h-screen">
      <motion.div
        className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <FaMosque className="text-emerald-600" /> About Echoes of Madinah
        </h1>
        <p className="text-lg">
          Echoes of Madinah is a digital platform designed to bring the beauty of Islamic knowledge to life through engaging Seerah stories, daily reflections, and beneficial resources.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-emerald-50 p-4 rounded-xl" data-aos="fade-up">
            <FaBookOpen className="text-3xl text-emerald-600 mb-2" />
            <h2 className="text-xl font-semibold">Seerah Stories</h2>
            <p>Learn from the life of Prophet Muhammad ﷺ in a beautifully presented format with PDFs and reflections.</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl" data-aos="fade-up">
            <FaHandsHelping className="text-3xl text-emerald-600 mb-2" />
            <h2 className="text-xl font-semibold">Daily Reflections</h2>
            <p>Gain insight and spiritual growth through carefully selected reflections posted every day.</p>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default About;
