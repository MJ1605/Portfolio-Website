import React from 'react';
import { motion } from 'framer-motion';

const BlobImage = () => {
  return (
    <svg
      viewBox="-100 -100 200 200"
      style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="blobClip">
          <motion.path
            d="M43.1,-68.5C56.2,-58.6,67.5,-47.3,72.3,-33.9C77.2,-20.5,75.5,-4.9,74.2,11.3C72.9,27.6,71.9,44.5,63.8,57.2C55.7,69.8,40.6,78.2,25.5,79.2C10.4,80.1,-4.7,73.6,-20.9,69.6C-37.1,65.5,-54.5,63.9,-66,54.8C-77.5,45.8,-83.2,29.3,-85.7,12.3C-88.3,-4.8,-87.7,-22.3,-79.6,-34.8C-71.5,-47.3,-55.8,-54.9,-41.3,-64.2C-26.7,-73.6,-13.4,-84.7,0.8,-86C15,-87.2,29.9,-78.5,43.1,-68.5Z"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </clipPath>
      </defs>

      <image
        // href="/Photo.jpg"
        href='https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=764&q=80'
        x="-100"
        y="-100"
        width="200"
        height="200"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#blobClip)"
      />
    </svg>
  );
};

export default BlobImage;
