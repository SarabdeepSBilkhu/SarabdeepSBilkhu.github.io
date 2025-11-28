
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Smaller base sizes
  const mainSize = 12; // px
  const trailSize = 24; // px
  const dotSize = 2; // px
  // Shrink scale on click
  const mainScale = isClicking ? 0.7 : 1;
  const trailScale = isClicking ? 1.2 : 1.6;
  const dotScale = isClicking ? 0.5 : 1;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{ width: mainSize, height: mainSize }}
        animate={{
          x: mousePosition.x - mainSize / 2,
          y: mousePosition.y - mainSize / 2,
          scale: 1.2 * mainScale,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 border border-white/30 rounded-full pointer-events-none z-[99999]"
        style={{ width: trailSize, height: trailSize }}
        animate={{
          x: mousePosition.x - trailSize / 2,
          y: mousePosition.y - trailSize / 2,
          scale: trailScale,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
          mass: 0.5,
        }}
      />
      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[99999]"
        style={{ width: dotSize, height: dotSize }}
        animate={{
          x: mousePosition.x - dotSize / 2,
          y: mousePosition.y - dotSize / 2,
          scale: dotScale,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
        }}
      />
    </>
  );
};

export default CustomCursor;
