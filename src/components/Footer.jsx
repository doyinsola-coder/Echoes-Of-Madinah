// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#004d40] text-white pt-12 pb-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-4">Echoes of Madinah</h2>
          <p className="text-sm leading-relaxed">
            A place to explore the rich legacy of the Prophet ﷺ and his companions. Reflect, learn, and grow spiritually.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/seerah" className="hover:text-yellow-300 transition">Seerah</a></li>
            <li><a href="/quiz" className="hover:text-yellow-300 transition">Quiz</a></li>
            <li><a href="/reflections" className="hover:text-yellow-300 transition">Reflections</a></li>
            <li><a href="/timeline" className="hover:text-yellow-300 transition">Timeline</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="/support" className="hover:text-yellow-300 transition">Support</a></li>
            <li><a href="/privacy" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-3">Connect</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-yellow-300 transition" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-300 transition" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="mailto:echoes@madinah.com" className="hover:text-yellow-300 transition" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Echoes of Madinah. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
