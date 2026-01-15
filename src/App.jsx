import { useEffect, useState } from 'react'
import './App.css'
import { FloatingButton } from './Elements/MenuButton'
import HeroSection from './Elements/HeroSection'
import FluidGrid from './Elements/FluidGrid'
import { useInView } from 'framer-motion'

function App() {
  const isInView = useInView(sectionRef, { amount: 0.6 });


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

  // useEffect(() => {
  //   if(isInView)
  // }, [isInView]);

  return (
    <>
      <div className='w-screen h-screen'>
        <FluidGrid></FluidGrid>
        <FloatingButton></FloatingButton>

        <header>
          <h1 className="text-5xl w-full mb-10 fixed p-8 text-white">
            Fake Name
          </h1>

        </header>

        <section id="home" className="relative min-h-screen w-full overflow-x-hidden flex flex-col h-dvh overflow-hidden" style={{ touchAction: 'none' }}>
          <HeroSection></HeroSection>
        </section>
        <section id="intermission-1" className='w-screen h-screen' style={{backgroundColor: "rgba(0, 96, 128)"}}>

        </section>



        <section id='contact' className=' text-3xl mt-96 mb-96 break-all overflow-x-hidden max-w-full'>contact: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</section>
        <footer style={{ padding: '50px' }}>
          <p>nice</p>
        </footer>
      </div>
    </>
  )
}

export default App
