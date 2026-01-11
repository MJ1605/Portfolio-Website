import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { HorizonWater } from './HorizonWater'
import BlobImage from './BlobImage'

const HeroSection = () => {
  useEffect(() => {
    // 1. Lock scroll on mount
    document.body.style.overflow = 'hidden';
    
    // 2. Unlock scroll after the sequence is finished (matches your longest delay)
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
    }, 5000); 

    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
    };
  }, []);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section 
      id="home" 
      className="relative h-dvh w-full overflow-hidden flex flex-col"
      style={{ touchAction: 'none' }} // Prevents touch-scrolling on mobile during intro
    >

      <div className="flex flex-col md:flex-row gap-8 w-full pt-20 md:pt-40 md:-mt-40 px-6 z-10 grow">
        {/* BLOB IMAGE */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.5, type: "spring", stiffness: 100 }}
        >
          <BlobImage />
        </motion.div>

        {/* TYPING TEXT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <motion.h1 
            className='text-4xl md:text-7xl font-bold'
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {"Hi, I'm Fake Name".split("").map((char, index) => (
              <motion.span key={index} variants={letter}>{char}</motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className='text-lg md:text-2xl pt-4 opacity-80'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            //Insert something here as a one sentence summary
          </motion.p>
        </div>
      </div>

      {/* WATER */}
      <motion.div 
        className="w-full"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay: 3.2, duration: 1.2, ease: "easeOut" }}
      >
        <HorizonWater />
      </motion.div>

      {/* SCROLL PROMPT - Only appears when scrolling is actually enabled */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }} // Appears right as the scroll unlocks
      >
        <p className="text-sm uppercase tracking-widest animate-bounce">Scroll to explore ↓</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;