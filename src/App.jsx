import Header from './components/Header';
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect, useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

export const CursorContext = createContext({ cursorVisible: true, setCursorVisible: () => {} });

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <CursorContext.Provider value={{ cursorVisible, setCursorVisible }}>
          <CustomCursor />
          <motion.div
            className="container mx-auto px-4 md:px-12 min-h-screen flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Header />

            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/experience" element={<Experience />} /> */}
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </motion.div>
        </CursorContext.Provider>
      )}
    </>
  );
};

export default App;
