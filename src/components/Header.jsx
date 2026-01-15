import "boxicons/css/boxicons.min.css";
import { AnimatePresence, motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiHome, FiUser, FiCode, FiMail, FiCpu, FiMenu, FiX, FiTwitter } from "react-icons/fi";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", path: "#home", icon: FiHome, id: 'home' },
  { name: "About", path: "#about", icon: FiUser, id: 'about' },
  { name: "Projects", path: "#projects", icon: FiCode, id: 'projects' },
  { name: "Skills", path: "#skills", icon: FiCpu, id: 'skills' },
  { name: "Contact", path: "#contact", icon: FiMail, id: 'contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -35% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e, path) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

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
      className={`z-50 sticky top-0 flex justify-between pt-6 pb-6 md:pt-4 md:pb-4 items-center transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <motion.div 
          className="lg:text-4xl md:text-2xl text-xl font-extrabold text-white leading-tight cursor-pointer"
          variants={itemVariants}
          onClick={(e) => handleNavClick(e, '#home')}
        >
          Sarabdeep Singh Bilkhu
        </motion.div>

        <motion.nav 
          className="lg:flex hidden space-x-8"
          variants={containerVariants}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
            >
              <a
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`relative text-gray-300 hover:text-white transition-all duration-300 group flex items-center gap-1 ${
                  activeSection === item.id ? 'text-white' : ''
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.id ? 'w-full' : ''
                }`}></span>
              </a>
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
        </motion.div>
        <motion.button
          className="lg:hidden text-white focus:outline-none p-2"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md text-white z-50 shadow-lg border-b border-white/10"
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
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-white/10 ${
                      activeSection === item.id ? 'bg-white/10 text-white' : 'text-gray-300'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </a>
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