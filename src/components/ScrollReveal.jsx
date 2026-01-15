import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ children, className = "", delay = 0, ...props }) => {
  const [animationState, setAnimationState] = useState("hiddenBottom");

  const variants = {
    hiddenBottom: { 
      opacity: 0, 
      y: 50,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hiddenTop: { 
      opacity: 0, 
      y: -50,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: delay, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hiddenBottom"
      animate={animationState}
      variants={variants}
      onViewportEnter={() => setAnimationState("visible")}
      onViewportLeave={(entry) => {
        // If the element left via the top of the viewport (bounding client rect y is negative)
        // Set it to hiddenTop so it slides down when we scroll back up
        if (entry && entry.boundingClientRect.y < 0) {
          setAnimationState("hiddenTop");
        } else {
          // It left via the bottom (or other way), set to hiddenBottom
          setAnimationState("hiddenBottom");
        }
      }}
      viewport={{ amount: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
