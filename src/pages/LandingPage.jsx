// src/pages/LandingPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiBookCover, GiQuillInk, GiCompass, GiTimeTrap } from 'react-icons/gi';

const LandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-gray-800 pt-24 overflow-hidden">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 items-center gap-10">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#004d40] leading-tight"
            whileInView={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            Echoes of Madinah
          </motion.h1>
          <p className="text-lg text-gray-700">
            Step into the legacy of the Prophet ﷺ and his companions. Read their stories. Reflect. Learn. Grow.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/seerah"
              className="bg-[#004d40] text-white px-6 py-3 rounded-lg hover:bg-[#00695c] transition"
            >
              Start Reading
            </Link>
            <Link
              to="/quiz"
              className="border border-[#004d40] text-[#004d40] px-6 py-3 rounded-lg hover:bg-[#004d40] hover:text-white transition"
            >
              Take a Quiz
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          <img
            src="/Mosque illustration.jpg"
            alt="Masjid Illustration"
            className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
          />
        </motion.div>
      </section>

      {/* FEATURES SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#004d40] mb-10">Explore Our Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-[#004d40]">
            <div data-aos="fade-up" className="flex flex-col items-center">
              <GiBookCover size={40} />
              <h3 className="mt-4 font-semibold text-lg">Seerah</h3>
              <p className="text-sm text-gray-600 mt-2">Explore the lives of the Prophet ﷺ and companions.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col items-center">
              <GiQuillInk size={40} />
              <h3 className="mt-4 font-semibold text-lg">Quizzes</h3>
              <p className="text-sm text-gray-600 mt-2">Test your knowledge with engaging Islamic questions.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-center">
              <GiCompass size={40} />
              <h3 className="mt-4 font-semibold text-lg">Reflections</h3>
              <p className="text-sm text-gray-600 mt-2">Daily spiritual gems to nourish your soul.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col items-center">
              <GiTimeTrap size={40} />
              <h3 className="mt-4 font-semibold text-lg">Timeline</h3>
              <p className="text-sm text-gray-600 mt-2">Walk through the key events of early Islam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE OF THE DAY */}
      <section className="bg-[#004d40] text-white py-16">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-2xl font-semibold">Quote of the Day</h2>
          <p className="text-xl italic text-gray-100">
            “Indeed, in the Messenger of Allah you have an excellent example...” <br />
            <span className="text-sm block mt-2">— Qur’an 33:21</span>
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#004d40] mb-10 text-center">What Others Are Saying</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div data-aos="fade-up" className="bg-[#f0fdfa] p-6 rounded-xl shadow-md">
              <p>“Echoes of Madinah has become part of my daily routine. The stories are moving and insightful.”</p>
              <p className="mt-4 text-sm font-semibold text-[#004d40]">— Hafsah A.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="150" className="bg-[#f0fdfa] p-6 rounded-xl shadow-md">
              <p>“The timeline feature helped me understand the Seerah like never before.”</p>
              <p className="mt-4 text-sm font-semibold text-[#004d40]">— Musa A.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#004d40] text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Begin Your Journey Today</h2>
        <p className="mt-4 text-lg text-gray-200">Let the echoes of the past guide your present.</p>
        <Link
          to="/seerah"
          className="mt-6 inline-block bg-white text-[#004d40] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-100 transition"
        >
          Explore the Seerah
        </Link>
      </section>

    </main>
  );
};

export default LandingPage;
