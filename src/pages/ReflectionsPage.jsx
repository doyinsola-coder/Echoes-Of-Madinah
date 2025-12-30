import React, { useState } from "react";
import { Share2, Copy, Check, Calendar, BookOpen } from "lucide-react";

const reflections = [
  {
    id: 1,
    date: "2025-07-18",
    text: "Sincerity (Ikhlas) is the soul of every action. Without it, even a good deed loses its weight.",
    source: "Surah Al-Bayyinah: 5",
  },
  {
    id: 2,
    date: "2025-07-17",
    text: "In every hardship, there's a divine lesson. Allah doesn't burden a soul beyond what it can bear.",
    source: "Surah Al-Baqarah: 286",
  },
  {
    id: 3,
    date: "2025-07-16",
    text: "Gratitude beautifies the heart. Shukr attracts more blessings.",
    source: "Surah Ibrahim: 7",
  },
  {
    id: 4,
    date: "2025-07-15",
    text: "Patience is not about waiting, but how we behave while waiting. Sabr is the key to every closed door.",
    source: "Surah Al-Baqarah: 153",
  },
  {
    id: 5,
    date: "2025-07-14",
    text: "Your character in private is your true character. Allah sees what others cannot.",
    source: "Surah Al-Hadid: 4",
  },
  {
    id: 6,
    date: "2025-07-13",
    text: "The best investment is in the Hereafter. This world is temporary; work for what lasts eternally.",
    source: "Surah Al-Qasas: 77",
  },
  {
    id: 7,
    date: "2025-07-12",
    text: "Forgiveness is the fragrance the violet sheds on the heel that has crushed it. Pardon others as you wish to be pardoned.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 8,
    date: "2025-07-11",
    text: "Remember death often, for it softens the heart and detaches us from worldly desires.",
    source: "Hadith - Sunan At-Tirmidhi",
  },
  {
    id: 9,
    date: "2025-07-10",
    text: "The tongue is small but powerful. Guard it carefully, for it can build or destroy.",
    source: "Hadith - Sahih Al-Bukhari",
  },
  {
    id: 10,
    date: "2025-07-09",
    text: "Trust in Allah's plan, even when you don't understand it. His wisdom surpasses all understanding.",
    source: "Surah At-Tawbah: 51",
  },
  {
    id: 11,
    date: "2025-07-08",
    text: "Prayer is the key to Paradise and the weapon of the believer. Never underestimate its power.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 12,
    date: "2025-07-07",
    text: "Knowledge without action is like a tree without fruit. Implement what you learn.",
    source: "Islamic Wisdom",
  },
  {
    id: 13,
    date: "2025-07-06",
    text: "Charity doesn't decrease wealth. Give freely, and watch Allah multiply your blessings.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 14,
    date: "2025-07-05",
    text: "Your wealth is what you give in charity. What you keep will belong to your heirs.",
    source: "Hadith - Sahih Al-Bukhari",
  },
  {
    id: 15,
    date: "2025-07-04",
    text: "Every sunrise is a reminder of Allah's mercy. He gives us another chance to do better.",
    source: "Surah Ar-Rahman: 13",
  },
  {
    id: 16,
    date: "2025-07-03",
    text: "The best among you are those with the best character. Beauty is in the soul, not the face.",
    source: "Hadith - Sunan At-Tirmidhi",
  },
  {
    id: 17,
    date: "2025-07-02",
    text: "Seek knowledge from the cradle to the grave. Learning is a lifelong journey in Islam.",
    source: "Hadith - Sunan Ibn Majah",
  },
  {
    id: 18,
    date: "2025-07-01",
    text: "The heart finds peace in the remembrance of Allah. Dhikr is the medicine for anxious souls.",
    source: "Surah Ar-Ra'd: 28",
  },
  {
    id: 19,
    date: "2025-06-30",
    text: "Kindness is a mark of faith. Whoever is not kind to people, Allah will not be kind to them.",
    source: "Hadith - Sahih Al-Bukhari",
  },
  {
    id: 20,
    date: "2025-06-29",
    text: "The night prayer is the honor of the believer. Stand before Allah when others are asleep.",
    source: "Hadith - Sunan At-Tirmidhi",
  },
  {
    id: 21,
    date: "2025-06-28",
    text: "Paradise lies under the feet of mothers. Honor and cherish those who carried you.",
    source: "Hadith - Sunan An-Nasa'i",
  },
  {
    id: 22,
    date: "2025-06-27",
    text: "Lower your gaze, guard your modesty. Purity of sight leads to purity of heart.",
    source: "Surah An-Nur: 30",
  },
  {
    id: 23,
    date: "2025-06-26",
    text: "Actions are judged by intentions. Purify your niyyah before every deed.",
    source: "Hadith - Sahih Al-Bukhari",
  },
  {
    id: 24,
    date: "2025-06-25",
    text: "Speak good or remain silent. Words have power; use them wisely.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 25,
    date: "2025-06-24",
    text: "Contentment is a treasure that never depletes. True wealth is richness of the soul.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 26,
    date: "2025-06-23",
    text: "The best charity is to satisfy a hungry person. Feed others and Allah will nourish your soul.",
    source: "Hadith - Sahih Al-Bukhari",
  },
  {
    id: 27,
    date: "2025-06-22",
    text: "Your sustenance is already written. Work hard, but never forget to trust in Allah's decree.",
    source: "Surah Adh-Dhariyat: 22",
  },
  {
    id: 28,
    date: "2025-06-21",
    text: "Cleanliness is half of faith. Maintain purity in body, heart, and environment.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 29,
    date: "2025-06-20",
    text: "The strong believer is better than the weak believer. Strive for excellence in faith and action.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 30,
    date: "2025-06-19",
    text: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
    source: "Hadith - Sahih Al-Bukhari",
  },
  {
    id: 31,
    date: "2025-06-18",
    text: "Make du'a even if you think it won't be answered. Allah loves to hear from His servants.",
    source: "Hadith - Sunan At-Tirmidhi",
  },
  {
    id: 32,
    date: "2025-06-17",
    text: "The one who guides to good gets the same reward as the one who does it. Share knowledge generously.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 33,
    date: "2025-06-16",
    text: "Repent before the sun rises from the west. The door of forgiveness is always open.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 34,
    date: "2025-06-15",
    text: "Time is a blessing. Don't waste it on things that don't bring you closer to Allah.",
    source: "Hadith - Sahih Al-Bukhari",
  },
  {
    id: 35,
    date: "2025-06-14",
    text: "Be in this world as if you are a traveler. Prepare for your journey to the Hereafter.",
    source: "Hadith - Sahih Al-Bukhari",
  },
  {
    id: 36,
    date: "2025-06-13",
    text: "The believer's shade on the Day of Judgment will be their charity. Give without expecting return.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 37,
    date: "2025-06-12",
    text: "Allah is beautiful and loves beauty. Present yourself well, both inside and out.",
    source: "Hadith - Sahih Muslim",
  },
  {
    id: 38,
    date: "2025-06-11",
    text: "Visit the sick, feed the hungry, and free the captive. These are acts beloved to Allah.",
    source: "Hadith - Sahih Al-Bukhari",
  },
  {
    id: 39,
    date: "2025-06-10",
    text: "Envy destroys good deeds like fire consumes wood. Guard your heart from jealousy.",
    source: "Hadith - Sunan Abu Dawud",
  },
  {
    id: 40,
    date: "2025-06-09",
    text: "The best days of the year are the first ten days of Dhul-Hijjah. Maximize your worship during them.",
    source: "Hadith - Sahih Al-Bukhari",
  },
];

const getTodaysReflection = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  return reflections[dayOfYear % reflections.length];
};

const ReflectionsPage = () => {
  const [copied, setCopied] = useState(false);
  const todaysReflection = getTodaysReflection();

  const shareText = `${todaysReflection.text}\n\n— ${todaysReflection.source}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform) => {
    const encodedText = encodeURIComponent(shareText);
    const urls = {
      whatsapp: `https://wa.me/?text=${encodedText}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?quote=${encodedText}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
    };
    
    window.open(urls[platform], '_blank');
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-6 pt-28">
      <div className="max-w-3xl w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-10 h-10 text-emerald-600" />
            <h1 className="text-5xl font-bold text-gray-800">Daily Reflection</h1>
          </div>
          <div className="flex items-center justify-center gap-2 text-emerald-700">
            <Calendar className="w-5 h-5" />
            <p className="text-lg font-medium">
              {new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>

        {/* Main Reflection Card */}
        <div className="relative">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-200 rounded-full opacity-50 animate-pulse-slow"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-300 rounded-full opacity-40 animate-pulse-slow-delay"></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl p-10 transform transition-all duration-500 hover:scale-105 animate-slide-up">
            {/* Islamic Pattern Corner */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <svg viewBox="0 0 100 100" className="fill-emerald-600">
                <circle cx="50" cy="50" r="40"/>
                <circle cx="50" cy="50" r="30"/>
                <circle cx="50" cy="50" r="20"/>
              </svg>
            </div>

            {/* Quote Marks */}
            <div className="text-emerald-500 text-7xl font-serif leading-none mb-4 opacity-30">"</div>
            
            {/* Reflection Text */}
            <p className="text-2xl text-gray-800 leading-relaxed mb-6 font-serif italic relative z-10">
              {todaysReflection.text}
            </p>

            {/* Source */}
            <div className="flex items-center justify-end gap-2 mb-8">
              <div className="h-px bg-emerald-500 w-12"></div>
              <p className="text-emerald-700 font-semibold text-lg">
                {todaysReflection.source}
              </p>
            </div>

            {/* Share Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-emerald-100">
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full font-semibold shadow-lg hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300"
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {copied ? "Copied!" : "Copy"}
              </button>

              <button
                onClick={() => handleShare('whatsapp')}
                className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-full font-semibold shadow-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
              >
                <Share2 className="w-5 h-5" />
                WhatsApp
              </button>

              <button
                onClick={() => handleShare('facebook')}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
              >
                <Share2 className="w-5 h-5" />
                Facebook
              </button>

              <button
                onClick={() => handleShare('twitter')}
                className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-semibold shadow-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
              >
                <Share2 className="w-5 h-5" />
                X (Twitter)
              </button>
            </div>
          </div>
        </div>

        {/* Come Back Tomorrow Message */}
        <div className="mt-12 text-center animate-fade-in-delay">
          <div className="bg-emerald-600 text-white rounded-2xl p-8 shadow-xl">
            <p className="text-2xl font-semibold mb-2">✨ See you tomorrow!</p>
            <p className="text-emerald-100 text-lg">
              Come back tomorrow for a new reflection to inspire your day
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.3; }
        }

        @keyframes pulse-slow-delay {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.15); opacity: 0.2; }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ReflectionsPage;