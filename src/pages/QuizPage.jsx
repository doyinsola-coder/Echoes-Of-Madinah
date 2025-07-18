// src/pages/QuizPage.jsx
import React, { useState } from 'react';
import { getTodaysQuiz } from '../utils/getTodaysQuiz';
import { motion, AnimatePresence } from 'framer-motion';

const QuizPage = () => {
  const quiz = getTodaysQuiz();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    setAnswers([...answers, selected]);
    setSelected(null);
    if (current + 1 < quiz.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <div className="min-h-screen pt-24 pb-10 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">You’ve completed today’s quiz!</h2>
          <p className="mb-6 text-lg">Come back tomorrow for a new set of questions.</p>

          <div className="text-left space-y-4">
            {quiz.map((q, idx) => (
              <div key={idx} className="bg-white rounded-lg p-4 shadow">
                <p className="font-medium">{q.question}</p>
                <p className={`mt-1 ${answers[idx] === q.answer ? 'text-green-600' : 'text-red-600'}`}>
                  Your answer: {answers[idx]}
                </p>
                {answers[idx] !== q.answer && (
                  <p className="text-green-500">Correct answer: {q.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-10 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Daily Islamic Quiz</h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-lg p-6 shadow"
          >
            <p className="text-lg font-medium mb-4">
              {current + 1}. {quiz[current].question}
            </p>
            <div className="space-y-2">
              {quiz[current].options.map((option, index) => (
                <label key={index} className="block">
                  <input
                    type="radio"
                    value={option}
                    checked={selected === option}
                    onChange={() => setSelected(option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
            <button
              className="mt-4 px-4 py-2 bg-[#004d40] text-white rounded hover:bg-[#00695c] disabled:opacity-50"
              onClick={handleNext}
              disabled={!selected}
            >
              {current === quiz.length - 1 ? 'Finish' : 'Next'}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;
