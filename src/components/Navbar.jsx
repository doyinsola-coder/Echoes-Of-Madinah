// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { GiBookCover, GiQuillInk, GiTimeTrap, GiCompass, GiCalendar } from 'react-icons/gi';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { name: 'Seerah', path: '/seerah', icon: <GiBookCover size={20} /> },
    { name: 'Quiz', path: '/quiz', icon: <GiQuillInk size={20} /> },
    { name: 'Reflections', path: '/reflections', icon: <GiCompass size={20} /> },
    { name: 'Timeline', path: '/timeline', icon: <GiTimeTrap size={20} /> },
    {name: 'Months', path: '/months', icon: <GiCalendar size={20} />  },
    {name: 'Aadab & Akhlaq', path: '/adab', icon: <GiQuillInk size={20} />  },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-emerald-600 shadow-lg py-3' 
            : 'bg-emerald-600 py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="text-xl md:text-2xl font-bold tracking-wide flex items-center gap-2 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">🕌</span>
              <span className="hidden sm:inline">Echoes of Madinah</span>
              <span className="sm:hidden">Echoes</span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
              >
                <motion.div
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-emerald-700 text-white font-semibold'
                      : 'text-white hover:bg-emerald-500'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-emerald-500 transition"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 h-full w-64 bg-emerald-600 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-6 border-b border-emerald-500">
                  <h2 className="text-white font-bold text-lg">Menu</h2>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="text-white p-2 hover:bg-emerald-500 rounded-lg transition"
                  >
                    <HiX size={24} />
                  </button>
                </div>

                {/* Mobile Menu Links */}
                <div className="flex flex-col p-4 space-y-2">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive(link.path)
                            ? 'bg-emerald-700 text-white font-semibold'
                            : 'text-white hover:bg-emerald-500'
                        }`}
                      >
                        {link.icon}
                        <span className="text-lg">{link.name}</span>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="mt-auto p-6 border-t border-emerald-500">
                  <p className="text-emerald-100 text-sm text-center">
                    Let the echoes guide you
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;