// src/pages/TimelinePage.jsx
import React from 'react';
import { timelineEvents } from '../data/timelineEvents';
import { motion } from 'framer-motion';

const TimelinePage = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 pt-24">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Timeline of the Seerah
      </h1>

      <div className="relative border-l-4 border-[#004d40] pl-6 space-y-10">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow p-4 relative"
          >
            <div className="absolute -left-[30px] top-4 w-4 h-4 bg-[#004d40] rounded-full border-2 border-white"></div>
            <h3 className="text-xl font-semibold text-[#004d40]">{event.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{event.year}</p>
            <p className="text-gray-700">{event.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelinePage;
