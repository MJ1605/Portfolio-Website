import { motion } from 'framer-motion';

const OceanBottom = () => {
  // Modified path: The 'v100' at the end creates a 100-unit deep block of color
  const deepWavePath = "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v100 h-352 z";

  return (
    <div style={{ 
      position: 'absolute', 
      bottom: -150, 
      left: 0, 
      width: '100%', 
      height: '300px', // Increased height for easier transition
      overflow: 'hidden', 
      lineHeight: 0,
      pointerEvents: 'none',    
    }}>
      <svg 
        viewBox="0 24 150 100" // Increased height from 28 to 100
        preserveAspectRatio="none" 
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <path id="deepWave" d={deepWavePath} />
        </defs>

        {/* Back Layer */}
        <motion.use 
          href="#deepWave" 
          x="0" y="5" 
          fill="rgba(0, 119, 190, 0.4)" 
          animate={{ x: [-15, 15], y: [0, 5, 0] }}
          transition={{ 
            x: { duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Middle Layer */}
        <motion.use 
          href="#deepWave" 
          x="0" y="12" 
          fill="rgba(0, 119, 190, 0.6)" 
          animate={{ x: [10, -10], y: [0, -3, 0] }}
          transition={{ 
            x: { duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />

        {/* Top Front Layer (The Solid "Surface") */}
        <motion.use 
          href="#deepWave" 
          x="0" y="20" 
          fill="#0077be" 
          animate={{ x: [-20, 20], y: [2, -2, 2] }}
          transition={{ 
            x: { duration: 7, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </svg>
    </div>
  );
};

export default OceanBottom;