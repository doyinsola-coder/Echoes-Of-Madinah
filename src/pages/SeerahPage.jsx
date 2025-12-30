import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Star, Calendar } from "lucide-react";

const seerahEvents = [
  {
    id: 1,
    title: "The Life of the Prophet Muhammad ﷺ",
    description: "An overview of the noble life of the Final Messenger.",
    pdf: "/assets/seerah/The-Life-of-The-Prophet-Muhammad.pdf",
  },
  {
    id: 2,
    title: "Fitnah of Fame",
    description: "A thought-provoking reminder on the dangers of seeking fame and recognition, and how it can affect sincerity and faith",
    pdf: "/assets/seerah/Fitnah_of_Fame.docx",
  },
  {
    id: 3,
    title: "The Islamic Ettiquette of using the telephone",
    description: "A guide to using the telephone with proper Islamic manners, preserving respect, privacy, and adab in communication.",
    pdf: "/assets/seerah/The-Islamic-Etiquettes-of-Using-the-Telephone.pdf",
  },
  {
    id: 4,
    title: "Men and Women Around the Messenger ﷺ",
    description: "Inspiring stories of men and women who closely accompanied the Prophet ﷺ, highlighting their character, faith, and legacy.",
    pdf: "/assets/seerah/Men And Women Around the Messenger.pdf",
  },
  {
    id: 5,
    title: "Riyadus-Salihin",
    description: "A timeless collection of authentic hadiths guiding Muslims on righteous conduct, worship, and moral excellence",
    pdf: "/assets/seerah/Riyadus Saliheen.pdf",
  },  
  {
    id: 6,
    title: "Fiqh made easy",
    description: "A simplified guide to essential Islamic rulings on worship, transactions, and daily life, made easy for every Muslim to understand.",
    pdf: "/assets/seerah/Fiqh Made Easy.pdf",
  },
];

const SeerahCard = ({ title, description, pdf, index }) => {
  const handleDownload = () => {
    window.open(pdf, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 cursor-pointer"
      onClick={handleDownload}
    >
      {/* Gradient Header */}
      <div className="relative h-32 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/10" />
        <BookOpen className="w-16 h-16 text-white opacity-80 group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 bg-emerald-100 rounded-lg flex-shrink-0">
            <Star className="w-5 h-5 text-emerald-600 fill-current" />
          </div>
          <h3 className="text-xl font-bold text-gray-800 flex-1 group-hover:text-emerald-600 transition-colors leading-tight">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 leading-relaxed mb-4">
          {description}
        </p>

        {/* Download Button */}
        <div className="mt-4 pt-4 border-t border-emerald-100">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-emerald-600">Click to view</span>
            <div className="flex items-center gap-2 text-emerald-600 group-hover:translate-x-2 transition-transform">
              <span className="text-sm font-semibold">Open PDF</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/10 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

const SeerahPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full opacity-20 blur-3xl animate-pulse-slow-delay" />
      </div>

      <div className="relative z-10 px-6 pt-32 pb-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 bg-emerald-600 text-white px-6 py-3 rounded-full shadow-lg">
            <BookOpen className="w-6 h-6" />
            <span className="font-semibold">Prophetic Biography</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Islamic Books & Resources
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the Seerah of Prophet Muhammad ﷺ and discover beneficial books of Islamic knowledge
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-20 bg-emerald-600" />
            <Star className="w-5 h-5 text-emerald-600 fill-current" />
            <div className="h-px w-20 bg-emerald-600" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {seerahEvents.map((event, index) => (
            <SeerahCard key={event.id} {...event} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Continue Learning</h3>
            <p className="text-gray-600 mb-6">
              Deepen your understanding of the Prophet's life and teachings through our daily reflections and quizzes
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button className="px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all shadow-lg">
                Take Quiz
              </button>
              <button className="px-6 py-3 bg-white text-emerald-600 border-2 border-emerald-600 rounded-full font-semibold hover:bg-emerald-50 transform hover:scale-105 transition-all">
                Read Reflections
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.15; }
        }

        @keyframes pulse-slow-delay {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.15); opacity: 0.1; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default SeerahPage;