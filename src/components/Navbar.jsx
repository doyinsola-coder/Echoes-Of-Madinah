// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { GiBookCover, GiQuillInk, GiTimeTrap, GiCompass } from 'react-icons/gi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const links = [
    { name: 'Seerah', icon: <GiBookCover /> },
    { name: 'Quiz', icon: <GiQuillInk /> },
    { name: 'Reflections', icon: <GiCompass /> },
    { name: 'Timeline', icon: <GiTimeTrap /> },
  ];

  return (
    <motion.nav
      className="bg-[#004d40] text-white px-6 py-4 shadow-md fixed w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 70 }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.h1
          className="text-xl font-bold tracking-wide flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
            <Link to="/">🕌 Echoes of Madinah</Link>
          
        </motion.h1>

        <div className="hidden md:flex space-x-6">
          {links.map(link => (
            <Link
              key={link.name}
              to={`/${link.name.toLowerCase()}`}
              className="flex items-center gap-2 hover:text-yellow-300 transition"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden mt-2 space-y-2 px-4"
        >
          {links.map(link => (
            <Link
              key={link.name}
              to={`/${link.name.toLowerCase()}`}
              className="block text-white border-b border-white py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
