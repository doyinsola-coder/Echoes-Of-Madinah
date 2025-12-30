// src/pages/LandingPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GiBookCover, GiQuillInk, GiCompass, GiTimeTrap, GiOpenBook, GiScrollQuill, GiMedallist, GiPrayerBeads } from 'react-icons/gi';

const LandingPage = () => {
  // ==================== STATE MANAGEMENT ====================
  const [currentReview, setCurrentReview] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ==================== HERO SLIDER DATA ====================
  // Edit hero slides here - add/remove/modify slides as needed
  const heroSlides = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/decgjhtlb/image/upload/v1767075158/hero1_drkpwz.jpg',
      title: 'Echoes of Madinah',
      subtitle: 'Step into the legacy of the Prophet ﷺ and his companions',
      description: 'Read their stories. Reflect. Learn. Grow.',
      primaryCta: { text: 'Start Reading', link: '/seerah' },
      secondaryCta: { text: 'Take a Quiz', link: '/quiz' }
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/decgjhtlb/image/upload/v1767075012/hero2_pqpjta.jpg',
      title: 'Learn the Seerah',
      subtitle: 'Discover the life of Prophet Muhammad ﷺ',
      description: 'From birth to the final sermon, explore his blessed journey',
      primaryCta: { text: 'Explore Seerah', link: '/seerah' },
      secondaryCta: { text: 'View Timeline', link: '/timeline' }
    },
    {
      id: 3,
      image: '/hero3.jpg',
      title: 'Test Your Knowledge',
      subtitle: 'Challenge yourself with Islamic quizzes',
      description: 'Learn through engaging questions about Islam and history',
      primaryCta: { text: 'Start Quiz', link: '/quiz' },
      secondaryCta: { text: 'View Reflections', link: '/reflections' }
    },
    {
      id: 4,
      image: '/hero4.jpg',
      title: 'Daily Reflections',
      subtitle: 'Spiritual wisdom for everyday life',
      description: 'Find peace and guidance through daily Islamic reflections',
      primaryCta: { text: 'Read Reflections', link: '/reflections' },
      secondaryCta: { text: 'Learn More', link: '/about' }
    },
    {
      id: 5,
      image: 'https://res.cloudinary.com/decgjhtlb/image/upload/v1767075012/hero5_chyagl.jpg',
      title: 'Companions of the Prophet',
      subtitle: 'Stories of the Sahabah that inspire',
      description: 'Learn from the lives of those who walked with the Prophet ﷺ',
      primaryCta: { text: 'Read Stories', link: '/seerah' },
      secondaryCta: { text: 'Take Quiz', link: '/quiz' }
    },
    {
      id: 6,
      image: '/hero6.jpg',
      title: 'Islamic Timeline',
      subtitle: 'Journey through Islamic history',
      description: 'Explore key events from the life of the Prophet ﷺ',
      primaryCta: { text: 'View Timeline', link: '/timeline' },
      secondaryCta: { text: 'Start Learning', link: '/seerah' }
    },
    {
      id: 7,
      image: '/hero7.jpg',
      title: 'Hadith Library',
      subtitle: 'Authentic sayings of the Prophet ﷺ',
      description: 'Access a collection of verified Hadith for study and reflection',
      primaryCta: { text: 'Browse Hadith', link: '/seerah' },
      secondaryCta: { text: 'Daily Reflections', link: '/reflections' }
    },
    {
      id: 8,
      image: 'https://res.cloudinary.com/decgjhtlb/image/upload/v1767075048/hero8_ut6im6.jpg',
      title: 'Begin Your Journey',
      subtitle: 'Transform your spiritual life today',
      description: 'Join thousands learning about Islam every day',
      primaryCta: { text: 'Get Started', link: '/seerah' },
      secondaryCta: { text: 'Learn More', link: '/about' }
    }
  ];

  // ==================== TESTIMONIALS DATA ====================
  // Edit reviews here - add/remove/modify testimonials as needed
  const reviews = [
    { text: "Echoes of Madinah has become part of my daily routine. The stories are moving and insightful.", author: "Hafsah A." },
    { text: "The timeline feature helped me understand the Seerah like never before.", author: "Musa A." },
    { text: "This platform has deepened my connection to the Prophet's life in ways I never expected.", author: "Zainab M." },
    { text: "The quizzes are both fun and educational. I learn something new every time!", author: "Ibrahim K." },
    { text: "A beautiful way to learn about our rich Islamic heritage. Highly recommended!", author: "Aisha F." },
    { text: "The reflections help me start my day with a spiritual mindset. Truly transformative.", author: "Omar Y." },
    { text: "I've shared this with my entire family. We discuss the stories together now.", author: "Fatima S." },
    { text: "The companion stories are incredibly inspiring. I feel more connected to my faith.", author: "Abdullah R." },
    { text: "Simple, elegant, and deeply meaningful. This is exactly what we need today.", author: "Mariam H." },
    { text: "The attention to detail and authenticity makes this a trustworthy resource.", author: "Yusuf T." }
  ];

  // ==================== ANIMATION VARIANTS ====================
  // Instant crossfade for hero slider - no lag
  const slideVariants = {
    enter: {
      opacity: 0,
      position: 'absolute'
    },
    center: {
      opacity: 1,
      position: 'absolute'
    },
    exit: {
      opacity: 0,
      position: 'absolute'
    }
  };

  // ==================== PRELOAD IMAGES ====================
  // Preload all hero images for faster loading
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // ==================== EFFECTS ====================
  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    // Auto-rotate reviews every 6 seconds
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);

    // Auto-rotate hero slides every 5 seconds
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => {
      clearInterval(reviewInterval);
      clearInterval(slideInterval);
    };
  }, []);

  // ==================== SLIDE HANDLERS ====================
  const handleSlideClick = (index) => {
    setCurrentSlide(index);
  };

  // ==================== RENDER ====================
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 overflow-hidden">

      {/* ==================== HERO SLIDER SECTION ==================== */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={false}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{ 
              pointerEvents: index === currentSlide ? 'auto' : 'none',
              zIndex: index === currentSlide ? 10 : 1
            }}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
                loading={index <= 1 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  {/* Hero Title */}
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Hero Subtitle */}
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-emerald-300 mb-3 sm:mb-4 font-semibold">
                    {slide.subtitle}
                  </h2>

                  {/* Hero Description */}
                  <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link
                      to={slide.primaryCta.link}
                      className="bg-emerald-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-emerald-600 transition transform hover:scale-105 shadow-lg text-center"
                    >
                      {slide.primaryCta.text}
                    </Link>
                    <Link
                      to={slide.secondaryCta.link}
                      className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-emerald-600 transition transform hover:scale-105 text-center"
                    >
                      {slide.secondaryCta.text}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Slide Indicators (Dots) */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideClick(index)}
              className={`h-2 sm:h-3 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-emerald-500 w-8 sm:w-10'
                  : 'bg-white bg-opacity-50 w-2 sm:w-3 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ==================== FEATURES SECTION ==================== */}
      <section className="bg-emerald-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-3 sm:mb-4">Explore Our Offerings</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Discover a comprehensive Islamic learning experience designed to enrich your spiritual journey
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-emerald-700">
            {/* Feature 1: Seerah */}
            <div data-aos="fade-up" className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <GiBookCover size={40} className="mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
              <h3 className="mt-3 sm:mt-4 font-bold text-lg sm:text-xl">Seerah</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 leading-relaxed">
                Explore the lives of the Prophet ﷺ and companions.
              </p>
            </div>

            {/* Feature 2: Quizzes */}
            <div data-aos="fade-up" data-aos-delay="100" className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <GiQuillInk size={40} className="mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
              <h3 className="mt-3 sm:mt-4 font-bold text-lg sm:text-xl">Quizzes</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 leading-relaxed">
                Test your knowledge with engaging Islamic questions.
              </p>
            </div>

            {/* Feature 3: Reflections */}
            <div data-aos="fade-up" data-aos-delay="200" className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <GiCompass size={40} className="mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
              <h3 className="mt-3 sm:mt-4 font-bold text-lg sm:text-xl">Reflections</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 leading-relaxed">
                Daily spiritual gems to nourish your soul.
              </p>
            </div>

            {/* Feature 4: Timeline */}
            <div data-aos="fade-up" data-aos-delay="300" className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <GiTimeTrap size={40} className="mx-auto mb-3 sm:mb-4 sm:w-12 sm:h-12" />
              <h3 className="mt-3 sm:mt-4 font-bold text-lg sm:text-xl">Timeline</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-3 leading-relaxed">
                Walk through the key events of early Islam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ADDITIONAL FEATURES SECTION ==================== */}
      <section className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-3 sm:mb-4">More Ways to Learn</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Enhance your understanding with these additional resources
          </p>
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Additional Feature 1: Hadith Library */}
          <div data-aos="zoom-in" className="text-center p-5 sm:p-6 bg-emerald-100 rounded-2xl">
            <GiOpenBook size={40} className="mx-auto text-emerald-600 mb-3 sm:mb-4 sm:w-12 sm:h-12" />
            <h3 className="font-bold text-base sm:text-lg text-emerald-800 mb-2">Hadith Library</h3>
            <p className="text-xs sm:text-sm text-gray-700">Access authenticated sayings of the Prophet ﷺ</p>
          </div>

          {/* Additional Feature 2: Companion Biographies */}
          <div data-aos="zoom-in" data-aos-delay="100" className="text-center p-5 sm:p-6 bg-emerald-100 rounded-2xl">
            <GiScrollQuill size={40} className="mx-auto text-emerald-600 mb-3 sm:mb-4 sm:w-12 sm:h-12" />
            <h3 className="font-bold text-base sm:text-lg text-emerald-800 mb-2">Companion Biographies</h3>
            <p className="text-xs sm:text-sm text-gray-700">Detailed life stories of the Sahabah</p>
          </div>

          {/* Additional Feature 3: Achievements */}
          <div data-aos="zoom-in" data-aos-delay="200" className="text-center p-5 sm:p-6 bg-emerald-100 rounded-2xl">
            <GiMedallist size={40} className="mx-auto text-emerald-600 mb-3 sm:mb-4 sm:w-12 sm:h-12" />
            <h3 className="font-bold text-base sm:text-lg text-emerald-800 mb-2">Achievements</h3>
            <p className="text-xs sm:text-sm text-gray-700">Track your learning progress and earn badges</p>
          </div>

          {/* Additional Feature 4: Daily Adhkar */}
          <div data-aos="zoom-in" data-aos-delay="300" className="text-center p-5 sm:p-6 bg-emerald-100 rounded-2xl">
            <GiPrayerBeads size={40} className="mx-auto text-emerald-600 mb-3 sm:mb-4 sm:w-12 sm:h-12" />
            <h3 className="font-bold text-base sm:text-lg text-emerald-800 mb-2">Daily Adhkar</h3>
            <p className="text-xs sm:text-sm text-gray-700">Reminders for morning and evening supplications</p>
          </div>
        </div>
      </section>

      {/* ==================== QUOTE OF THE DAY SECTION ==================== */}
      <section className="bg-emerald-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Quote of the Day</h2>
            <p className="text-lg sm:text-xl lg:text-2xl italic text-white leading-relaxed px-4">
              "Indeed, in the Messenger of Allah you have an excellent example..." <br />
              <span className="text-sm sm:text-base block mt-3 sm:mt-4 font-normal">— Qur'an 33:21</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SLIDER SECTION ==================== */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-700 mb-3 sm:mb-4 text-center">What Others Are Saying</h2>
          <p className="text-sm sm:text-base text-gray-600 text-center mb-8 sm:mb-12 px-4">Join thousands of learners on their spiritual journey</p>
          
          {/* Testimonial Slider */}
          <div className="relative h-auto min-h-[200px] sm:min-h-[250px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-emerald-50 p-6 sm:p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">
                  <p className="text-base sm:text-lg text-gray-800 italic leading-relaxed mb-3 sm:mb-4">
                    "{reviews[currentReview].text}"
                  </p>
                  <p className="text-sm sm:text-base font-bold text-emerald-600">
                    — {reviews[currentReview].author}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all ${
                  index === currentReview 
                    ? 'bg-emerald-600 w-6 sm:w-8' 
                    : 'bg-emerald-200 hover:bg-emerald-300'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="bg-emerald-600 text-white py-12 sm:py-16 lg:py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Begin Your Journey Today</h2>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-white mb-6 sm:mb-8">Let the echoes of the past guide your present.</p>
          <Link
            to="/seerah"
            className="inline-block bg-white text-emerald-600 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-emerald-50 transition transform hover:scale-105 shadow-xl"
          >
            Explore the Seerah
          </Link>
        </motion.div>
      </section>

    </main>
  );
};

export default LandingPage;