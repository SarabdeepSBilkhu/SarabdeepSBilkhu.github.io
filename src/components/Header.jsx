import "boxicons/css/boxicons.min.css";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", path: "/", icon: FiHome },
    { name: "About", path: "/about", icon: FiUser },
    { name: "Projects", path: "/projects", icon: FiCode },
    {/* { name: "Experience", path: "/experience", icon: FiBriefcase } */},
    { name: "Contact", path: "/contact", icon: FiMail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.header
      className={`z-50 flex justify-between mb-6 md:mb-12 pt-6 md:pt-10 items-center transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : ''
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.div 
          className="lg:text-5xl md:text-3xl text-xl font-extrabold text-white leading-tight"
          variants={itemVariants}
        >
          Sarabdeep Singh Bilkhu
        </motion.div>

        <motion.nav 
          className="lg:flex hidden space-x-8"
          variants={containerVariants}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
            >
              <Link
                to={item.path}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 group flex items-center gap-1 ${
                  location.pathname === item.path ? 'text-white' : ''
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <motion.div 
          className="md:flex hidden items-center space-x-4"
          variants={containerVariants}
        >
          <motion.a
            variants={itemVariants}
            href="https://github.com/SarabdeepSBilkhu"
            className="text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/sarabdeep-singh-bilkhu/"
            className="text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="https://x.com/s_bilkhu_"
            className="text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiTwitter className="w-5 h-5" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="md:hidden flex items-center z-50"
          variants={itemVariants}
        >
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-md text-white z-50 shadow-lg border-b border-white/10"
          >
            <motion.nav 
              className="flex flex-col space-y-2 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    onClick={toggleMenu}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/10 ${
                      location.pathname === item.path ? 'bg-white/10 text-white' : 'text-gray-300'
                    }`}
                    to={item.path}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>

            <motion.div 
              className="pt-4 border-t border-white/10 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/SarabdeepSBilkhu"
                  className="text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://x.com/s_bilkhu_"
                  className="text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiTwitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/sarabdeep-singh-bilkhu/"
                  className="text-gray-300 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;