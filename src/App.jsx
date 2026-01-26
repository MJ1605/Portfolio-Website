import { useEffect, useRef, useState } from 'react'
import './App.css'
import { FloatingButton } from './Elements/MenuButton'
import HeroSection from './Elements/HeroSection'
import FluidGrid from './Elements/FluidGrid'
import { useInView, motion } from 'framer-motion'
import WaterBubbles from './Elements/WaterBubbles'

function App() {
  const homeRef = useRef(null);
  const isHomeInView = useInView(homeRef, { amount: 0.1 });


  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);

    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
    }, 5000); 

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div className='w-full h-screen'>
        {isHomeInView && <FluidGrid></FluidGrid>}
        <FloatingButton></FloatingButton>

        <header>
          <motion.h1 className="text-5xl w-full mb-10 fixed p-8 text-white z-40"
            initial={{x:-20, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{delay:5.2, duration:1.4}}>
            Fake Name
          </motion.h1>

        </header>

        <section id="home" className="relative min-h-screen w-full overflow-x-hidden flex flex-col h-dvh overflow-hidden" style={{ touchAction: 'none' }} ref={homeRef}>
          <HeroSection></HeroSection>
        </section>

        <section id="intermission-1" className='relative w-full h-screen bg-linear-to-b from-[#006080] via-[#006080] to-[#004669]' style={{ zIndex: 1}}>
          {/* <WaterBubbles></WaterBubbles> */}
        </section>

        <section id="Featured-Work" className='relative w-full h-screen bg-linear-to-b from-[#004669] via-[#004669] to-[#003955]' style={{ zIndex: 1}}>
          
        </section>



        
      </div>
    </>
  )
}

export default App
