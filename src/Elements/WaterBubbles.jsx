"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function WaterBubbles() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -400]);

  useEffect(()=>{
    console.log(scrollYProgress);
  }, [scrollYProgress])

  return (
    <>
        <p className="text-white text-4xl" ref={ref}>Testing</p>
    </>
  );
}
