// src/utils/getTodaysQuiz.js
import { quizQuestions } from '../data/quizQuestions';

export const getTodaysQuiz = () => {
  const today = new Date().toISOString().split('T')[0];
  const seed = today.split('-').join('');
  const rng = mulberry32(Number(seed));

  const shuffled = [...quizQuestions].sort(() => rng() - 0.5);
  return shuffled.slice(0, 10);
};

function mulberry32(a) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
