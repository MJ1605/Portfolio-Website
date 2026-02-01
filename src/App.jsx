import { useEffect, useRef, useState } from 'react'
import './App.css'
import { FloatingButton } from './Elements/MenuButton'
import HeroSection from './Elements/HeroSection'
import FluidGrid from './Elements/FluidGrid'
import { useInView, motion } from 'framer-motion'
import WaterBubbles from './Elements/WaterBubbles'

function App() {
  const homeRef = useRef(null);


  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className='w-full h-screen'>
        <FluidGrid></FluidGrid>
        <FloatingButton></FloatingButton>

        <header>
          <motion.h1 className="text-5xl w-full mb-10 fixed p-8 text-white z-40"
            initial={{x:-20, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{delay:2.7, duration:1.4}}>
            MING JIE
          </motion.h1>

        </header>

        <section id="home" className="relative min-h-screen w-full overflow-x-hidden flex flex-col h-dvh overflow-hidden" style={{ touchAction: 'none' }}>
          <HeroSection></HeroSection>
        </section>

        <section id="Featured-Work" className='relative w-full bg-linear-to-b mt-12' style={{ zIndex: 1}}>
          <h1 className='text-white text-left md:text-center text-8xl tracking-widest m-5'>FEATURED WORK</h1>
          <div className='flex flex-row flex-wrap p-5'>
            <div className='w-full md:w-1/2 bg-amber-500 h-96'></div>
            <div className='w-full md:w-1/2 bg-amber-600 h-96'></div>     
            <div className='w-full md:w-1/2 bg-amber-700 h-96'></div>
            <div className='w-full md:w-1/2 bg-amber-800 h-96'></div>
          </div>
        </section>



        
      </div>
    </>
  )
}

export default App
