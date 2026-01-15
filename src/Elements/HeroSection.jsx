import { motion } from 'framer-motion';
import { useEffect } from 'react';
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

  return (
    <>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 w-full pt-20 md:pt-40 md:-mt-40 px-6 z-10 grow h-screen">
        <motion.div 
          className="w-full md:w-1/2 flex justify-center items-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 2.4, type: "spring", stiffness: 100 }}
        >
          <BlobImage />
        </motion.div>

        <motion.div className='flex items-start flex-col justify-center' animate={{scale: 1}} initial={{scale:0}}>
          <div className='text-white bg-neutral-600 w-full flex flex-row justify-between p-2 pl-4 pr-4 rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex align-middle h-full gap-1.5 p-1'>
              <div className='w-4 h-4 bg-red-600 rounded-2xl'></div>
              <div className='w-4 h-4 bg-amber-300 rounded-2xl'></div>
              <div className='w-4 h-4 bg-green-600 rounded-2xl'></div>
            </div>
            <p className='w-full text-center'>Code Editor</p>
          </div>
          <div className='bg-neutral-800 p-4 rounded-br-2xl rounded-bl-2xl w-fit flex flex-col gap-3'>
            <h1 className='text-white text-5xl font-bold monospace'>Hi! I'm Fake Name</h1>
            <div className='text-white monospace text-wrap max-w-md'>A Developer creating functional software and interactive gameplay-driven experiences</div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="w-full"
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        transition={{ delay: 3.2, duration: 1.2, ease: "easeOut" }}
      >
        <HorizonWater />
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }} 
      >
        <p className="text-sm uppercase tracking-widest animate-bounce text-white text-nowrap">↓ Scroll to explore ↓</p>
      </motion.div>
    </>
  );
};

export default HeroSection;