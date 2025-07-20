import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center max-w-md mx-auto px-4">
        <motion.div
          className="text-4xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sarabdeep Singh Bilkhu
        </motion.div>
        
        <motion.div
          className="text-lg text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Developer Portfolio
        </motion.div>

        <motion.div
          className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div
          className="text-sm text-gray-500 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Loading... {progress}%
        </motion.div>

        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 