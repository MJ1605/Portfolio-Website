import { motion } from 'framer-motion';

const WaveLayer = ({ color, speed, delay, yOffset, xRange, showGlints }) => {
  const wavePath = "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v150 h-352 z";

  return (
    <motion.g
      animate={{ 
        x: xRange, 
        y: [yOffset, yOffset + 5, yOffset] 
      }}
      transition={{ 
        x: { duration: speed, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay },
        y: { duration: speed / 1.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay }
      }}
    >
      <path d={wavePath} fill={color} />
      
    </motion.g>
  );
};

export const HorizonWater = () => {
  return (
    <div style={{ 
      position: 'absolute', 
      bottom: 0, 
      left: 0, 
      width: '100%', 
      height: '200px', 
      overflow: 'hidden',
    }}>
      <svg 
        viewBox="0 24 150 100" 
        preserveAspectRatio="none" 
        style={{ width: '100%', height: '100%', position: 'absolute' }}
      >
        <WaveLayer color="#013a4f" speed={12} yOffset={0} xRange={[-10, 10]} delay={0} />
        <WaveLayer color="#004c66" speed={9} yOffset={12} xRange={[15, -15]} delay={1} />
        <WaveLayer color="#006080" speed={6} yOffset={24} xRange={[-20, 20]} delay={0.5} />
      </svg>
    </div>
  );
};