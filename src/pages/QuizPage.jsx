// src/pages/QuizPage.jsx
import React, { useState, useEffect } from 'react';
import { getTodaysQuiz } from '../utils/getTodaysQuiz';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, CheckCircle, XCircle, Trophy, Award, Target, BookOpen, ArrowRight, Check } from 'lucide-react';

const QuizPage = () => {
  const quiz = getTodaysQuiz();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(50); // 50 seconds for entire quiz
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    if (finished) return;

    if (timeLeft === 0) {
      // Auto-finish quiz when time runs out
      setFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
      setTotalTime((prev) => prev + 1);
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
      <div className="min-h-screen pt-24 pb-10 px-6 bg-emerald-50">
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
                <div className="bg-emerald-100 p-6 rounded-full inline-block mb-4">
                  <Trophy className="w-16 h-16 text-emerald-600" />
                </div>
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
              <p className="text-gray-600 mb-4">Come back tomorrow for a new set of questions</p>
              
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="text-center bg-emerald-50 rounded-xl p-4">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-emerald-600">{score}</p>
                  <p className="text-sm text-gray-600">Correct</p>
                </div>
                <div className="text-center bg-red-50 rounded-xl p-4">
                  <XCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-red-500">{quiz.length - score}</p>
                  <p className="text-sm text-gray-600">Incorrect</p>
                </div>
                <div className="text-center bg-purple-50 rounded-xl p-4">
                  <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-purple-600">{percentage}%</p>
                  <p className="text-sm text-gray-600">Score</p>
                </div>
                <div className="text-center bg-blue-50 rounded-xl p-4">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-3xl font-bold text-blue-600">{formatTime(totalTime)}</p>
                  <p className="text-sm text-gray-600">Time</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold">
                {percentage >= 80 ? (
                  <>
                    <Award className="w-5 h-5" />
                    <span>Excellent Work!</span>
                  </>
                ) : percentage >= 60 ? (
                  <>
                    <Trophy className="w-5 h-5" />
                    <span>Good Job!</span>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-5 h-5" />
                    <span>Keep Learning!</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Review Your Answers</h3>
            </div>
            {quiz.map((q, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4"
                style={{
                  borderLeftColor: answers[idx] === q.answer ? '#10b981' : '#ef4444'
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {answers[idx] === q.answer ? (
                      <div className="bg-green-100 p-2 rounded-full">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="bg-red-100 p-2 rounded-full">
                        <XCircle className="w-5 h-5 text-red-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800 mb-2">{idx + 1}. {q.question}</p>
                    <p className={`text-sm mb-1 ${answers[idx] === q.answer ? 'text-green-600' : 'text-red-600'}`}>
                      Your answer: <span className="font-medium">{answers[idx] || "No answer"}</span>
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
  const timePercentage = (timeLeft / 50) * 100;

  return (
    <div className="min-h-screen pt-24 pb-10 px-6 bg-emerald-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-emerald-600 p-3 rounded-full">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Daily Islamic Quiz</h2>
          </div>
          
          {/* Timer and Progress Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-full ${timeLeft <= 10 ? 'bg-red-100' : 'bg-emerald-100'}`}>
                  <Clock className={`w-6 h-6 ${timeLeft <= 10 ? 'text-red-600 animate-pulse' : 'text-emerald-600'}`} />
                </div>
                <div>
                  <p className="text-xs text-gray-600">Time Remaining</p>
                  <span className={`text-2xl font-bold ${timeLeft <= 10 ? 'text-red-600' : 'text-emerald-600'}`}>
                    {timeLeft}s
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600">Question Progress</p>
                <p className="text-2xl font-bold text-gray-800">{current + 1} / {quiz.length}</p>
              </div>
            </div>
            
            {/* Question Progress Bar */}
            <div className="mb-3">
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Quiz Progress</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-emerald-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Timer Progress Bar */}
            <div>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>Total quiz time remaining</span>
                <span>{timePercentage.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div
                  className={`h-full ${timeLeft <= 10 ? 'bg-red-500' : 'bg-blue-500'}`}
                  animate={{ width: `${timePercentage}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
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
            <div className="bg-emerald-600 p-6">
              <p className="text-white text-xl font-semibold">
                {quiz[current].question}
              </p>
            </div>
            
            <div className="p-8">
              <div className="space-y-3">
                {quiz[current].options.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelected(option)}
                    className={`block cursor-pointer transition-all duration-300 ${
                      selected === option
                        ? 'bg-emerald-600 text-white shadow-lg'
                        : 'bg-emerald-50 hover:bg-emerald-100 text-gray-800'
                    } rounded-xl p-4 border-2 ${
                      selected === option ? 'border-emerald-600' : 'border-transparent hover:border-emerald-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selected === option 
                          ? 'border-white bg-white' 
                          : 'border-emerald-600'
                      }`}>
                        {selected === option && (
                          <Check className="w-4 h-4 text-emerald-600" />
                        )}
                      </div>
                      <span className="font-medium">{option}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full px-6 py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                onClick={handleNext}
                disabled={!selected}
              >
                {current === quiz.length - 1 ? (
                  <>
                    <Check className="w-5 h-5" />
                    <span>Finish Quiz</span>
                  </>
                ) : (
                  <>
                    <span>Next Question</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;