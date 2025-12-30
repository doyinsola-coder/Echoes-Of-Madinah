import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronDown, ChevronUp, Star, Moon } from "lucide-react";

const islamicMonths = [
  {
    id: 1,
    name: "Muharram",
    meaning: "Forbidden/Sacred",
    significance: "The first month of the Islamic calendar and one of the four sacred months",
    events: [
      {
        day: 1,
        event: "Islamic New Year (Hijri New Year)",
        description: "The beginning of a new Islamic year"
      },
      {
        day: 10,
        event: "Day of Ashura",
        description: "The day Prophet Musa (Moses) and the Israelites were saved from Pharaoh. Also the day Imam Hussain was martyred at Karbala."
      },
      {
        day: 10,
        event: "Prophet Nuh's Ark Settles",
        description: "The day the ark of Prophet Nuh (Noah) rested on Mount Judi"
      }
    ]
  },
  {
    id: 2,
    name: "Safar",
    meaning: "The Void/Empty",
    significance: "Named because pre-Islamic Arabs used to leave their homes empty for war",
    events: [
      {
        day: 27,
        event: "Beginning of Prophet's ﷺ Final Illness",
        description: "The Prophet Muhammad ﷺ fell ill during the end of Safar"
      }
    ]
  },
  {
    id: 3,
    name: "Rabi' al-Awwal",
    meaning: "The First Spring",
    significance: "The month of the Prophet's ﷺ birth and death",
    events: [
      {
        day: 12,
        event: "Birth of Prophet Muhammad ﷺ",
        description: "The Prophet Muhammad ﷺ was born on Monday, 12th Rabi' al-Awwal in the Year of the Elephant (570 CE)"
      },
      {
        day: 12,
        event: "Death of Prophet Muhammad ﷺ",
        description: "The Prophet Muhammad ﷺ passed away on Monday, 12th Rabi' al-Awwal, 11 AH (632 CE)"
      },
      {
        day: 1,
        event: "Arrival in Madinah after Hijrah",
        description: "The Prophet ﷺ arrived in Quba (near Madinah) after migrating from Makkah"
      }
    ]
  },
  {
    id: 4,
    name: "Rabi' al-Thani",
    meaning: "The Second Spring",
    significance: "Also known as Rabi' al-Akhir (The Last Spring)",
    events: [
      {
        day: 1,
        event: "Battle of the Trench Preparation",
        description: "Muslims began preparing for the Battle of Khandaq (The Trench)"
      }
    ]
  },
  {
    id: 5,
    name: "Jumada al-Awwal",
    meaning: "The First of Parched Land",
    significance: "Named during a time when water was scarce",
    events: [
      {
        day: 15,
        event: "Death of Khadijah (RA)",
        description: "The Prophet's ﷺ first wife, Khadijah bint Khuwaylid, passed away"
      },
      {
        day: 1,
        event: "Battle of Mu'tah",
        description: "One of the first major battles between Muslims and the Byzantine Empire"
      }
    ]
  },
  {
    id: 6,
    name: "Jumada al-Thani",
    meaning: "The Second of Parched Land",
    significance: "Also known as Jumada al-Akhirah (The Last Jumada)",
    events: [
      {
        day: 20,
        event: "Birth of Fatimah (RA)",
        description: "The Prophet's ﷺ daughter, Fatimah az-Zahra, was born"
      }
    ]
  },
  {
    id: 7,
    name: "Rajab",
    meaning: "Respect/Honor",
    significance: "One of the four sacred months, fighting is forbidden",
    events: [
      {
        day: 27,
        event: "Isra and Mi'raj (Night Journey)",
        description: "The miraculous night journey of Prophet Muhammad ﷺ from Makkah to Jerusalem and his ascension to the heavens"
      },
      {
        day: 1,
        event: "Beginning of the Islamic Months' Count",
        description: "In pre-Islamic times, this marked the beginning of the sacred months"
      }
    ]
  },
  {
    id: 8,
    name: "Sha'ban",
    meaning: "Scattered/Dispersed",
    significance: "The month before Ramadan, when Arabs used to disperse to seek water",
    events: [
      {
        day: 15,
        event: "Laylat al-Bara'ah (Night of Forgiveness)",
        description: "The 15th night of Sha'ban, believed to be a blessed night of forgiveness and mercy"
      },
      {
        day: 2,
        event: "Change of Qibla",
        description: "The direction of prayer was changed from Jerusalem to the Kaaba in Makkah"
      }
    ]
  },
  {
    id: 9,
    name: "Ramadan",
    meaning: "Scorching Heat/Burning",
    significance: "The holiest month, month of fasting and the revelation of the Quran",
    events: [
      {
        day: 17,
        event: "Battle of Badr",
        description: "The first major battle between Muslims and Quraysh, resulting in a decisive Muslim victory (2 AH/624 CE)"
      },
      {
        day: 21,
        event: "Laylat al-Qadr (Night of Power)",
        description: "The night the Quran was first revealed, better than a thousand months. It occurs in one of the last ten odd nights"
      },
      {
        day: 10,
        event: "Death of Khadijah (RA)",
        description: "According to some narrations, Khadijah passed away in Ramadan"
      },
      {
        day: 20,
        event: "Conquest of Makkah",
        description: "The Prophet ﷺ peacefully conquered Makkah (8 AH/630 CE)"
      }
    ]
  },
  {
    id: 10,
    name: "Shawwal",
    meaning: "Raised/Lifted",
    significance: "The month when camels would get pregnant and 'raise' their tails",
    events: [
      {
        day: 1,
        event: "Eid al-Fitr",
        description: "The festival of breaking the fast, marking the end of Ramadan"
      },
      {
        day: 8,
        event: "Battle of Hunayn",
        description: "A battle fought by Muslims against the tribes of Hawazin and Thaqif (8 AH/630 CE)"
      },
      {
        day: 15,
        event: "Marriage of Prophet ﷺ to Khadijah",
        description: "Prophet Muhammad ﷺ married Khadijah bint Khuwaylid"
      }
    ]
  },
  {
    id: 11,
    name: "Dhul-Qa'dah",
    meaning: "The One of Truce/Sitting",
    significance: "One of the four sacred months, when fighting is forbidden",
    events: [
      {
        day: 1,
        event: "Treaty of Hudaybiyyah",
        description: "A pivotal peace treaty between Muslims and Quraysh (6 AH/628 CE)"
      },
      {
        day: 25,
        event: "Day of Dahw al-Ard",
        description: "According to some traditions, the day the Earth was spread out from beneath the Kaaba"
      }
    ]
  },
  {
    id: 12,
    name: "Dhul-Hijjah",
    meaning: "The One of Pilgrimage",
    significance: "The month of Hajj and one of the four sacred months",
    events: [
      {
        day: 8,
        event: "Day of Tarwiyah",
        description: "Pilgrims travel from Makkah to Mina on the 8th day of Dhul-Hijjah"
      },
      {
        day: 9,
        event: "Day of Arafah",
        description: "The most important day of Hajj. The Prophet ﷺ delivered his Farewell Sermon on this day (10 AH/632 CE)"
      },
      {
        day: 10,
        event: "Eid al-Adha",
        description: "The Festival of Sacrifice, commemorating Prophet Ibrahim's willingness to sacrifice his son"
      },
      {
        day: 18,
        event: "Ghadir Khumm",
        description: "The Prophet ﷺ delivered a sermon at Ghadir Khumm on his return from the Farewell Pilgrimage"
      }
    ]
  }
];

const MonthCard = ({ month, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden"
    >
      {/* Header */}
      <div
        className="bg-emerald-600 p-6 cursor-pointer hover:bg-emerald-700 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Moon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{month.name}</h3>
              <p className="text-emerald-100 text-sm italic">"{month.meaning}"</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-white" />
          </motion.div>
        </div>
        <p className="text-white/90 mt-3 text-sm">{month.significance}</p>
      </div>

      {/* Expandable Events */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-emerald-600" />
                <h4 className="text-lg font-semibold text-gray-800">Historical Events</h4>
              </div>

              {month.events.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-l-4 border-emerald-500 pl-4 py-2 bg-emerald-50 rounded-r-lg"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold flex-shrink-0">
                      Day {event.day}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-800 mb-1">{event.event}</h5>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const IslamicMonthsPage = () => {
  const sacredMonths = [1, 7, 11, 12]; // Muharram, Rajab, Dhul-Qa'dah, Dhul-Hijjah

  return (
    <div className="min-h-screen bg-emerald-50 p-6 pt-28">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-300 rounded-full opacity-30 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-400 rounded-full opacity-25 blur-3xl animate-pulse-slow-delay" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6 bg-emerald-600 text-white px-6 py-3 rounded-full shadow-lg">
            <Calendar className="w-6 h-6" />
            <span className="font-semibold">Islamic Calendar</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            The 12 Islamic Months
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Explore the sacred months of the Islamic calendar and discover the significant historical events that shaped our faith
          </p>

          {/* Sacred Months Info */}
          <div className="inline-block bg-white rounded-2xl shadow-lg p-6 max-w-2xl">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <h3 className="text-lg font-bold text-gray-800">The Four Sacred Months</h3>
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
            </div>
            <p className="text-gray-600">
              Muharram, Rajab, Dhul-Qa'dah, and Dhul-Hijjah are the sacred months where fighting was traditionally forbidden
            </p>
          </div>
        </motion.div>

        {/* Months Grid */}
        <div className="space-y-6">
          {islamicMonths.map((month, index) => (
            <div key={month.id} className="relative">
              {sacredMonths.includes(month.id) && (
                <div className="absolute -left-4 top-4">
                  <Star className="w-8 h-8 text-yellow-500 fill-current animate-pulse" />
                </div>
              )}
              <MonthCard month={month} index={index} />
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <Moon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">The Lunar Calendar</h3>
            <p className="text-gray-600">
              The Islamic calendar is based on the lunar cycle, with each month beginning with the sighting of the new moon. 
              This calendar is approximately 11 days shorter than the solar calendar, causing Islamic months to shift through the seasons.
            </p>
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
    </div>
  );
};

export default IslamicMonthsPage;