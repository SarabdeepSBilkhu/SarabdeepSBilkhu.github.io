import "boxicons/css/boxicons.min.css"
import { AnimatePresence, motion } from "framer-motion"
import { FiGithub, FiTwitter, FiLinkedin, FiMenu, FiX } from "react-icons/fi"
import { useState } from "react"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="z-50 flex justify-between mb-12 pt-10 items-center"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

            <div className='lg:text-5xl text-2xl font-extrabold '>
                    Sarabdeep Singh Bilkhu
            </div>

            <nav className='lg:flex hidden space-x-8'>
                
                {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (

                    <motion.a 
                    key={"item"}
                    initial={{ opacity: 0 , y: -20}}
                    animate={{ opacity: 1, y: 0}}
                    transition={{ 
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: 1.5 + index * 0.2}}

                    className="relative text-gray-800 dark:text-gray-400 
                    hover:text-gray-200 transition-color duration-300 group"
                    href="">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 
                        bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                    </motion.a>
                ))}

            </nav>

            <div className="md:flex hidden items-center space-x-4">

                <motion.a 
                initial={{ opacity: 0 , scale: 0.1}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    delay: 2.0,
                    duration: 0.3
                }}
                href="https://github.com/SarabdeepSBilkhu" className="text-gray-800 dark:text-gray-400
                hover:text-gray-200 dark:hover:text-gray-200 transition-color duration-300">
                    <FiGithub className='w-5 h-5' />
                </motion.a>

                <motion.a 
                initial={{ opacity: 0 , scale: 0.1}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    delay: 2.0,
                    duration: 0.3
                }}
                href="https://www.linkedin.com/in/sarabdeep-singh-bilkhu/" className="text-gray-800 dark:text-gray-400
                hover:text-gray-200 dark:hover:text-gray-200 transition-color duration-300">
                    <FiLinkedin className='w-5 h-5' />
                </motion.a> 

                <motion.a 
                initial={{ opacity: 0 , scale: 0.1}}
                animate={{ opacity: 1, scale: 1}}
                transition={{
                    delay: 2.0,
                    duration: 0.3
                }}
                href="https://x.com/s_bilkhu_" className="text-gray-800 dark:text-gray-400
                hover:text-gray-200 dark:hover:text-gray-200 transition-color duration-300">
                    <FiTwitter className='w-5 h-5' />
                </motion.a> 
            </div>
            <div className="md:hidden flex items-center z-50">
                <motion.button 
                whileTap={{ scale: 0.7 }}
                onClick={toggleMenu}
                className="text-white">    
                    {
                        isOpen ? 
                        (<FiX className="w-6 h-6"/>) : 
                        (<FiMenu className="w-6 h-6"/>)
                    }
                </motion.button>
            </div>
        </div>

        <AnimatePresence>
            {isOpen && (
                <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="md:hidden absolute top-20 left-0 w-full bg-black text-white z-50 shadow-lg px-4 py-5 space-y-5"
                >
                <nav className="flex flex-col space-y-3">
                    {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
                    <a
                        onClick={toggleMenu}
                        className="hover:text-blue-400 transition-colors duration-200 py-2"
                        key={item}
                        href="#"
                    >
                        {item}
                    </a>
                    ))}
                </nav>

                <div className="pt-4 border-t border-gray-400 dark:border-gray-600">

                    <div className="flex space-x-5">

                        <a href="" className="text-gray-800 dark:text-gray-400 
                        hover:text-gray-200 dark:hover:text-gray-200 transition-color duration-300">
                            <FiGithub className="w-5 h-5" />
                        </a>
                        <a href="" className="text-gray-800 dark:text-gray-400 
                        hover:text-gray-200 dark:hover:text-gray-200 transition-color duration-300">
                            <FiTwitter className="w-5 h-5" />
                        </a>
                        <a href="" className="text-gray-800 dark:text-gray-400 
                        hover:text-gray-200 dark:hover:text-gray-200 transition-color duration-300">
                            <FiLinkedin className="w-5 h-5" />
                        </a>

                    </div>

                </div>

                </motion.div>
            )}
            </AnimatePresence>


    </header>
  )
}

export default Header
