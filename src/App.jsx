import Header from './components/Header'
import Hero from './components/Hero'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { use, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    })
  })

  return (
    <div className='container max-auto px-12 h-screen flex flex-col'>
      <Header />
      <Hero />
      <CustomCursor />
    </div>
  )
}

export default App
