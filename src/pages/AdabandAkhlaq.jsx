import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, BookOpen, Users, Sparkles, ChevronRight } from "lucide-react";

const adabAkhlaqData = [
  {
    id: 1,
    category: "Prophet Muhammad ﷺ",
    name: "Prophet Muhammad ﷺ",
    title: "The Perfect Example",
    virtues: [
      {
        virtue: "Honesty (Al-Amin)",
        description: "Known as 'The Trustworthy' even before prophethood. He never lied and was trusted by everyone.",
        example: "Even his enemies entrusted their valuables to him for safekeeping."
      },
      {
        virtue: "Mercy (Rahmah)",
        description: "He showed mercy to all of creation - humans, animals, and even enemies.",
        example: "He forgave the people of Makkah who persecuted him for years, saying 'Go, you are free.'"
      },
      {
        virtue: "Humility (Tawadu)",
        description: "Despite being the final messenger, he lived simply and served others.",
        example: "He would mend his own clothes, milk his own goats, and help with household chores."
      },
      {
        virtue: "Patience (Sabr)",
        description: "He endured immense hardship with patience and never complained.",
        example: "He patiently endured the Year of Sorrow when he lost his wife Khadijah and uncle Abu Talib."
      },
      {
        virtue: "Generosity (Karam)",
        description: "He gave freely and never turned away anyone in need.",
        example: "He would give away everything he had, never keeping anything for the next day."
      }
    ]
  },
  {
    id: 2,
    category: "Companions",
    name: "Abu Bakr As-Siddiq (RA)",
    title: "The Truthful One",
    virtues: [
      {
        virtue: "Immediate Faith (Iman)",
        description: "He was the first adult male to accept Islam without hesitation.",
        example: "When told about Isra and Mi'raj, he immediately believed, earning the title 'As-Siddiq' (The Truthful)."
      },
      {
        virtue: "Generosity",
        description: "He spent his entire wealth for the sake of Islam.",
        example: "He brought all his wealth to support the Battle of Tabuk, leaving nothing for his family except Allah and His Messenger."
      },
      {
        virtue: "Steadfastness",
        description: "He remained firm when others wavered.",
        example: "After the Prophet's death, he steadied the community saying: 'Whoever worshipped Muhammad, Muhammad is dead. Whoever worships Allah, Allah is Ever-Living.'"
      }
    ]
  },
  {
    id: 3,
    category: "Companions",
    name: "Umar ibn Al-Khattab (RA)",
    title: "Al-Farooq - The Criterion",
    virtues: [
      {
        virtue: "Justice (Adl)",
        description: "He established justice equally for all, regardless of status.",
        example: "He held himself accountable, saying 'If a dog dies hungry on the banks of the Euphrates, Umar will be responsible for it.'"
      },
      {
        virtue: "Strength in Faith",
        description: "His conversion to Islam strengthened the Muslim community.",
        example: "After his conversion, Muslims were able to pray openly at the Kaaba for the first time."
      },
      {
        virtue: "Simplicity",
        description: "Despite ruling a vast empire, he lived in extreme simplicity.",
        example: "He wore patched clothes and slept on a mat that left marks on his side."
      },
      {
        virtue: "Fear of Allah",
        description: "He constantly feared Allah's judgement despite his righteousness.",
        example: "He would weep while reciting the Quran and say 'I fear I will be held accountable for every stone in the street.'"
      }
    ]
  },
  {
    id: 4,
    category: "Companions",
    name: "Uthman ibn Affan (RA)",
    title: "Dhun-Nurayn - Possessor of Two Lights",
    virtues: [
      {
        virtue: "Generosity",
        description: "He was extremely wealthy but spent it all for Islam.",
        example: "He bought the well of Rumah and made it free for all Muslims. He also equipped the army of Tabuk single-handedly."
      },
      {
        virtue: "Modesty (Haya)",
        description: "He was extremely modest and shy.",
        example: "The Prophet said even the angels felt shy in his presence."
      },
      {
        virtue: "Preservation of Quran",
        description: "He compiled the Quran into one standard manuscript.",
        example: "He gathered all variants and standardized the Quran we have today."
      }
    ]
  },
  {
    id: 5,
    category: "Companions",
    name: "Ali ibn Abi Talib (RA)",
    title: "The Lion of Allah",
    virtues: [
      {
        virtue: "Courage (Shuja'ah)",
        description: "He was fearless in battle and defense of truth.",
        example: "He slept in the Prophet's bed on the night of Hijrah, risking his life to protect him."
      },
      {
        virtue: "Knowledge (Ilm)",
        description: "He was one of the most knowledgeable companions.",
        example: "The Prophet said: 'I am the city of knowledge and Ali is its gate.'"
      },
      {
        virtue: "Justice",
        description: "He ruled with fairness and wisdom.",
        example: "His sermons and letters in Nahj al-Balagha demonstrate profound wisdom and justice."
      },
      {
        virtue: "Devotion to Worship",
        description: "He was known for his intense devotion in prayer.",
        example: "Arrows were removed from his body during prayer and he didn't feel them due to his concentration."
      }
    ]
  },
  {
    id: 6,
    category: "Companions",
    name: "Khadijah bint Khuwaylid (RA)",
    title: "Mother of the Believers",
    virtues: [
      {
        virtue: "Support and Encouragement",
        description: "She was the first to believe and support the Prophet.",
        example: "When revelation first came, she comforted him saying 'Allah would never disgrace you. You maintain ties of kinship, help the poor, and honor your guests.'"
      },
      {
        virtue: "Sacrifice",
        description: "She gave all her wealth to support Islam.",
        example: "She spent her entire fortune supporting the early Muslims during the boycott and hardship."
      },
      {
        virtue: "Wisdom",
        description: "She was known for her intelligence and sound judgment.",
        example: "She took the Prophet to her cousin Waraqah ibn Nawfal to confirm the revelation."
      }
    ]
  },
  {
    id: 7,
    category: "Companions",
    name: "Aisha bint Abi Bakr (RA)",
    title: "The Beloved of the Beloved",
    virtues: [
      {
        virtue: "Knowledge and Teaching",
        description: "She was one of the greatest scholars of Islam.",
        example: "She narrated over 2,210 hadiths and taught numerous students who became great scholars."
      },
      {
        virtue: "Intelligence",
        description: "She had exceptional memory and understanding.",
        example: "The Prophet said half of your religion can be learned from 'this Humayra' (referring to Aisha)."
      },
      {
        virtue: "Devotion",
        description: "She was dedicated to worship and spreading knowledge.",
        example: "She would spend entire nights in prayer and gave away large sums in charity."
      }
    ]
  },
  {
    id: 8,
    category: "Companions",
    name: "Bilal ibn Rabah (RA)",
    title: "The First Muezzin",
    virtues: [
      {
        virtue: "Perseverance",
        description: "He endured severe torture for his faith without wavering.",
        example: "Under torture in the desert, he kept saying 'Ahad, Ahad' (One, One - referring to Allah)."
      },
      {
        virtue: "Loyalty",
        description: "His devotion to Islam and the Prophet was unwavering.",
        example: "After the Prophet's death, he couldn't bear to call the adhan in Madinah and moved to Syria."
      },
      {
        virtue: "Beautiful Voice",
        description: "He was chosen as the first muezzin for his beautiful voice.",
        example: "The Prophet loved his call to prayer and said 'Bilal's adhan is the adhan.'"
      }
    ]
  },
  {
    id: 9,
    category: "Companions",
    name: "Salman Al-Farisi (RA)",
    title: "The Seeker of Truth",
    virtues: [
      {
        virtue: "Dedication to Truth",
        description: "He traveled for years seeking the true religion.",
        example: "He left Persia, traveled through Christian lands, and was even enslaved in his quest for truth before finding Islam."
      },
      {
        virtue: "Wisdom and Strategy",
        description: "His practical wisdom helped Muslims in difficult times.",
        example: "He suggested digging the trench during the Battle of Khandaq, saving the Muslims from a large army."
      },
      {
        virtue: "Humility",
        description: "Despite his high status, he remained humble.",
        example: "The Prophet said 'Salman is from us, the People of the House (Ahl al-Bayt).'"
      }
    ]
  },
  {
    id: 10,
    category: "Companions",
    name: "Khalid ibn Al-Walid (RA)",
    title: "The Sword of Allah",
    virtues: [
      {
        virtue: "Military Genius",
        description: "He never lost a battle in his entire military career.",
        example: "He won over 100 battles against superior forces through brilliant strategy."
      },
      {
        virtue: "Transformation",
        description: "He went from enemy to champion of Islam.",
        example: "After accepting Islam, he became the greatest Muslim general, earning the title 'Saifullah' (Sword of Allah)."
      },
      {
        virtue: "Humility in Victory",
        description: "Despite his achievements, he remained humble.",
        example: "When he was removed from command by Umar, he accepted it without complaint and continued fighting as an ordinary soldier."
      }
    ]
  },
  {
    id: 11,
    category: "Companions",
    name: "Fatimah bint Muhammad (RA)",
    title: "Leader of the Women of Paradise",
    virtues: [
      {
        virtue: "Piety and Worship",
        description: "She was known for her intense devotion to Allah.",
        example: "She would stand in prayer so long that her feet would swell."
      },
      {
        virtue: "Patience in Hardship",
        description: "She lived a life of simplicity despite being the Prophet's daughter.",
        example: "She ground grain by hand until her hands bled, yet never complained."
      },
      {
        virtue: "Love for Parents",
        description: "She had immense love and respect for her father.",
        example: "The Prophet would stand up when she entered and kiss her forehead, saying 'Fatimah is a part of me.'"
      }
    ]
  },
  {
    id: 12,
    category: "Companions",
    name: "Abu Hurairah (RA)",
    title: "The Narrator of Hadith",
    virtues: [
      {
        virtue: "Love of Knowledge",
        description: "He dedicated his life to learning and preserving hadith.",
        example: "He narrated over 5,374 hadiths, the most of any companion, because he stayed close to the Prophet constantly."
      },
      {
        virtue: "Sacrifice for Learning",
        description: "He chose knowledge over worldly comfort.",
        example: "He would tie a stone to his stomach to suppress hunger so he could stay with the Prophet and learn."
      },
      {
        virtue: "Trustworthiness",
        description: "He was known for his accuracy in narration.",
        example: "His photographic memory made him one of the most reliable narrators of hadith."
      }
    ]
  }
];

const PersonCard = ({ person, index, isProphetEtiquette = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isProphet = person.category === "Prophet Muhammad ﷺ";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`bg-white rounded-2xl shadow-xl overflow-hidden ${isProphet ? 'border-4 border-amber-400' : isProphetEtiquette ? 'border-2 border-amber-300' : ''}`}
    >
      {/* Header */}
      <div
        className={`${isProphet ? 'bg-amber-500' : isProphetEtiquette ? 'bg-amber-400' : 'bg-emerald-600'} p-6 cursor-pointer hover:opacity-90 transition-opacity`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              {isProphet ? (
                <Star className="w-8 h-8 text-white fill-white" />
              ) : isProphetEtiquette ? (
                <Sparkles className="w-6 h-6 text-white" />
              ) : (
                <Users className="w-6 h-6 text-white" />
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{person.name}</h3>
              <p className="text-white/90 text-sm italic">"{person.title}"</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="w-6 h-6 text-white transform rotate-90" />
          </motion.div>
        </div>
      </div>

      {/* Expandable Virtues */}
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
              {person.virtues.map((virtue, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="border-l-4 border-emerald-500 pl-4 py-3 bg-emerald-50 rounded-r-lg"
                >
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1 fill-emerald-600" />
                    <div className="flex-1">
                      <h5 className="font-bold text-gray-800 mb-2 text-lg">{virtue.virtue}</h5>
                      <p className="text-gray-700 mb-2">{virtue.description}</p>
                      <div className="bg-white p-3 rounded-lg border-l-2 border-emerald-400">
                        <p className="text-sm text-gray-600 italic">
                          <span className="font-semibold text-emerald-700">Example: </span>
                          {virtue.example}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Action Items */}
              <div className="mt-6 pt-4 border-t border-emerald-100 bg-emerald-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-gray-800">How to Apply These Virtues</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Reflect on these noble characteristics and strive to embody them in your daily life. 
                  Start with small actions and gradually build these virtues into your character.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const AdabAkhlaqPage = () => {
  const prophet = adabAkhlaqData.filter(p => p.category === "Prophet Muhammad ﷺ");
  const prophetEtiquettes = adabAkhlaqData.filter(p => p.category === "Prophet's Etiquettes");
  const companions = adabAkhlaqData.filter(p => p.category === "Companions");

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
            <Heart className="w-6 h-6 fill-white" />
            <span className="font-semibold">Noble Character</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Adab & Akhlaq
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Learn from the exemplary character and daily etiquettes of Prophet Muhammad ﷺ and his noble companions. 
            Discover the virtues that made them lights of guidance for humanity.
          </p>

          {/* Hadith Quote */}
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 border-l-4 border-emerald-600">
            <BookOpen className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <p className="text-gray-700 italic text-lg mb-2">
              "I have been sent to perfect good character."
            </p>
            <p className="text-emerald-700 font-semibold">— Prophet Muhammad ﷺ (Hadith)</p>
          </div>
        </motion.div>

        {/* Prophet Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
            <h2 className="text-3xl font-bold text-gray-800">The Perfect Example</h2>
          </motion.div>
          {prophet.map((person, index) => (
            <PersonCard key={person.id} person={person} index={index} />
          ))}
        </div>

        {/* Prophet's Etiquettes Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <Sparkles className="w-8 h-8 text-amber-500" />
            <h2 className="text-3xl font-bold text-gray-800">The Prophet's Daily Etiquettes</h2>
          </motion.div>
          <p className="text-gray-600 mb-6 text-lg">
            Learn the beautiful manners and habits of Prophet Muhammad ﷺ in his daily life - how he ate, slept, walked, dressed, and interacted with people.
          </p>
          <div className="space-y-6">
            {prophetEtiquettes.map((person, index) => (
              <PersonCard key={person.id} person={person} index={index} isProphetEtiquette={true} />
            ))}
          </div>
        </div>

        {/* Companions Section */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <Users className="w-8 h-8 text-emerald-600" />
            <h2 className="text-3xl font-bold text-gray-800">The Noble Companions</h2>
          </motion.div>

          <div className="space-y-6">
            {companions.map((person, index) => (
              <PersonCard key={person.id} person={person} index={index} />
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <Sparkles className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Embody These Virtues</h3>
            <p className="text-gray-600">
              These noble companions are our role models. Study their lives, learn from their examples, 
              and strive to incorporate their beautiful character traits into your own life. 
              Good character is the heaviest thing on the scale of deeds on the Day of Judgment.
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }

        @keyframes pulse-slow-delay {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.15); opacity: 0.15; }
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

export default AdabAkhlaqPage;