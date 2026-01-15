import Header from './components/Header';
import Hero from './components/Hero';

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';


import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';


import { CursorContext } from './context/CursorContext';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    // AOS removed in favor of custom ScrollReveal
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


            
            <main className="flex flex-col gap-0">
              <section id="home">
                <Hero />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </main>
          </motion.div>
        </CursorContext.Provider>
      )}
    </>
  );
};

export default App;
