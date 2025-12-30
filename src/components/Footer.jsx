// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaEnvelope, FaFacebook, FaHeart } from 'react-icons/fa';
import { GiBookCover, GiQuillInk, GiCompass, GiTimeTrap } from 'react-icons/gi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: 'Seerah', path: '/seerah', icon: <GiBookCover size={16} /> },
    { name: 'Quiz', path: '/quiz', icon: <GiQuillInk size={16} /> },
    { name: 'Reflections', path: '/reflections', icon: <GiCompass size={16} /> },
    { name: 'Timeline', path: '/timeline', icon: <GiTimeTrap size={16} /> },
  ];

  const resourceLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Support', path: '/support' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dev_mubeen',
      icon: <FaInstagram size={20} />,
      color: 'hover:text-pink-400'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/Abdullateef Doyinsola Abdulmubeen',
      icon: <FaFacebook size={20} />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/Dev_Mubeen',
      icon: <FaTwitter size={20} />,
      color: 'hover:text-sky-400'
    },
    {
      name: 'Email',
      url: 'mailto:doyinspace@gmail.com',
      icon: <FaEnvelope size={20} />,
      color: 'hover:text-yellow-400'
    },
  ];

  return (
    <footer className="bg-emerald-600 text-white pt-16 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🕌</span>
              <h2 className="text-2xl font-bold">Echoes of Madinah</h2>
            </div>
            <p className="text-sm leading-relaxed text-emerald-100">
              A place to explore the rich legacy of the Prophet ﷺ and his companions. Reflect, learn, and grow spiritually.
            </p>
          </motion.div>

          {/* Explore Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-emerald-100">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-sm text-white hover:text-emerald-200 transition-colors group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-emerald-100">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-white hover:text-emerald-200 transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-emerald-100">Connect With Us</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${social.color} transition-all transform hover:scale-110`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-xs text-emerald-100 mt-6 leading-relaxed">
              Stay connected for daily reflections, updates, and spiritual inspiration.
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-500 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-emerald-100">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p>&copy; {currentYear} Echoes of Madinah. All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-center md:text-right"
          >
            <span>Designed with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaHeart className="text-red-400" size={16} />
            </motion.span>
            <span>by</span>
            <a
              href="https://www.facebook.com/Abdullateef Doyinsola Abdulmubeen"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:text-white transition-colors"
            >
              Abdullateef Doyinsola Abdulmubeen
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;