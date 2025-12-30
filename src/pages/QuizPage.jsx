// src/pages/QuizPage.jsx
import React, { useState, useEffect } from 'react';
import { getTodaysQuiz } from '../utils/getTodaysQuiz';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, XCircle, Trophy } from 'lucide-react';

const QuizPage = () => {
  const quiz = getTodaysQuiz();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes = 180 seconds
  const [showCorrect, setShowCorrect] = useState(false);

  useEffect(() => {
    if (finished || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [finished, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    setAnswers([...answers, selected]);
    setSelected(null);
    setShowCorrect(false);
    if (current + 1 < quiz.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  const score = answers.filter((ans, idx) => ans === quiz[idx]?.answer).length;
  const percentage = quiz.length > 0 ? Math.round((score / quiz.length) * 100) : 0;

  if (finished) {
    return (
      <div className="min-h-screen pt-24 pb-10 px-6 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block"
              >
                <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
              <p className="text-gray-600 mb-4">Come back tomorrow for a new set of questions</p>
              
              <div className="flex justify-center gap-8 mb-6">
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal-600">{score}</p>
                  <p className="text-sm text-gray-600">Correct</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-red-500">{quiz.length - score}</p>
                  <p className="text-sm text-gray-600">Incorrect</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-purple-600">{percentage}%</p>
                  <p className="text-sm text-gray-600">Score</p>
                </div>
              </div>

              <div className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold">
                {percentage >= 80 ? '🌟 Excellent!' : percentage >= 60 ? '👍 Good Job!' : '📚 Keep Learning!'}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Review Your Answers</h3>
            {quiz.map((q, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4"
                style={{
                  borderLeftColor: answers[idx] === q.answer ? '#10b981' : '#ef4444'
                }}
              >
                <div className="flex items-start gap-3">
                  {answers[idx] === q.answer ? (
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 mb-2">{idx + 1}. {q.question}</p>
                    <p className={`text-sm mb-1 ${answers[idx] === q.answer ? 'text-green-600' : 'text-red-600'}`}>
                      Your answer: <span className="font-medium">{answers[idx]}</span>
                    </p>
                    {answers[idx] !== q.answer && (
                      <p className="text-sm text-green-600">
                        Correct answer: <span className="font-medium">{q.answer}</span>
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  const progressPercentage = ((current + 1) / quiz.length) * 100;

  return (
    <div className="min-h-screen pt-24 pb-10 px-6 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Daily Islamic Quiz</h2>
          
          {/* Timer and Progress Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Clock className={`w-6 h-6 ${timeLeft < 30 ? 'text-red-500' : 'text-teal-600'}`} />
                <span className={`text-2xl font-bold ${timeLeft < 30 ? 'text-red-500' : 'text-teal-600'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Question</p>
                <p className="text-2xl font-bold text-gray-800">{current + 1}/{quiz.length}</p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-teal-500 to-emerald-500"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{ duration: 0.4, type: "spring" }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 p-6">
              <p className="text-white text-xl font-semibold">
                {quiz[current].question}
              </p>
            </div>
            
            <div className="p-8">
              <div className="space-y-3">
                {quiz[current].options.map((option, index) => (
                  <motion.label
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`block cursor-pointer transition-all duration-300 ${
                      selected === option
                        ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-800'
                    } rounded-xl p-4 border-2 ${
                      selected === option ? 'border-teal-500' : 'border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        value={option}
                        checked={selected === option}
                        onChange={() => setSelected(option)}
                        className="w-5 h-5 accent-teal-600"
                      />
                      <span className="font-medium">{option}</span>
                    </div>
                  </motion.label>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleNext}
                disabled={!selected}
              >
                {current === quiz.length - 1 ? '✓ Finish Quiz' : 'Next Question →'}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;