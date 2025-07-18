import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import QuizPage from './pages/QuizPage';
import TimelinePage from './pages/TimelinePage';
import SeerahPage from './pages/SeerahPage';
import ReflectionsPage from './pages/ReflectionsPage';
import About from './pages/About';
import Support from './pages/Support';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar />
     <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/seerah" element={<SeerahPage />} />
        <Route path="/reflections" element={<ReflectionsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Add more routes as needed */}
        {/* Example: <Route path="/about" element={<AboutPage />} /> */}
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
