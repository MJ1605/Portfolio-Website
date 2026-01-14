import { motion } from "framer-motion";

export default function Background() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        background: "#FFB2A6",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          width: "200vmax",
          height: "200vmax",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: `
            conic-gradient(
              from 0deg,
              #ffb2a6,
              #fff9f0,
              #e8a89e,
              #f5d5ae,
              #ffb2a6
            )
          `,
          filter: "blur(80px)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
