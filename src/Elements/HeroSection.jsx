import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HorizonWater } from './HorizonWater'
import BlobImage from './BlobImage'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const HeroSection = () => {
  const [headerText, setHeaderText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  
  useEffect(() => {
    let isCancelled = false;
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
    }, 5000); 

    const typeEffect = async () => {
      await new Promise((resolve) => setTimeout(resolve, 400));

      let curText = "";
      for (const char of "Hi! I'm Fake Name") {
        if (isCancelled) break;
        
        curText += char;
        setHeaderText(curText);
        
        await new Promise((resolve) => setTimeout(resolve, 80));
      }
    };

    typeEffect();

    const typeEffect2 = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      let curText = "";
      for (const char of "A Developer creating functional software and interactive gameplay-driven experiences") {
        if (isCancelled) break;
        
        curText += char;
        setDescriptionText(curText);
        
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    };

    typeEffect2();


    return () => {
      document.body.style.overflow = 'unset';
      clearTimeout(timer);
      isCancelled=true;
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
            <h1 className='text-white text-5xl font-bold monospace max-w-md min-w-40' >{headerText}</h1>
            <div className='text-white monospace text-wrap max-w-md' >{descriptionText}</div>
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