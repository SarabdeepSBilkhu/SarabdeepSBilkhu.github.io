import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import { FiMail, FiX } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {

    const [contactFormOpen, setContactFormOpen] = useState(false);

    const openContactForm = () => {
        setContactFormOpen(true);
    }

    const closeContactForm = () => {
        setContactFormOpen(false);
    }

  return (
    <main className="flex flex-1 flex-col justify-between h-full">

      <div className="flex py-10 relative">

        <div
          className="flex flex-col absolute md:gap-10 
          lg:top-12 lg:left-4 md:top-36 md:left-1 top-72 left-12
          [@media(max-width:380px)]:top-28
          [@media(max-width:380px)]:left-8"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          <div
            className="introducing-container lg:text-xl sm:text-lg text-sm w-[230px] md:w-[300px] h-[33px] 
            flex items-center justify-center mb-1 relative"
          >
            <div>
              Developer Portfolio
            </div>
          </div>

          <div
            className="lg:max-w-[500px] sm:max-w-[400px]
            max-w-[250px] reading-relaxd"
          >
            <h1
              className="lg:text-5xl sm:text-4xl text-2xl 
              font-extrabold mb-5"
            >
              Providing the Best Project Experience
            </h1>

            <p className="lg:max-w-[400px]">
              A curious mind blending numbers, logic, and design. I work on
              practical, problem-solving projects that make sense and create
              impact. Data isn't just numbers to me — it's a story waiting to
              be cleaned, shaped, and told.
            </p>
          </div>

          <div className="mt-5">
            <button
              onClick={openContactForm}
              href=""
              className="w-[208px] h-[33px] inline-flex items-center 
              justify-center border-white rounded-full 
              text-sm tracking-wider contact-button"
            >
                <FiMail className="mr-2" />
               Contact Me
            </button>
          </div>
        </div>
        
        <AnimatePresence>
            {contactFormOpen && (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 background-blur flex items-center justify-center z-50 p-4">

                <motion.div 
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 30 }}
                transition={{ 
                    type: "spring",
                    damping: 20,
                    stiffness: 200,
                    duration: 0.8 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6">
                
                <div className=" flex justify-between mb-4 items-center">

                    <h1 className="text-2xl font-bold text-gray-300 dark:text-white">
                        Get in Touch
                    </h1>

                    <button onClick={closeContactForm}>
                        <FiX className="w-5 h-5 dark:text-white text-gray-300 font-extrabold"/>
                    </button>
                </div>

                <form className="space-y-4">
                    <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 dark:text-white">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        className="w-full px-4 py-2 rounded-lg border-gray-600 
                        focus:border-indigo-500 focus:ring-indigo-500 bg-gray-700"/>
                    </div>

                    <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 dark:text-white"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your E-mail"
                        className="w-full px-4 py-2 rounded-lg border-gray-600 
                        focus:border-indigo-500 focus:ring-indigo-500 bg-gray-700"
                    />
                    </div>

                    <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 dark:text-white"
                    >
                        Message
                    </label>
                    <textarea
                        rows="4"
                        id="message"
                        name="message"
                        placeholder="How can I help you?"
                        className="w-full px-4 py-2 rounded-lg border-gray-600 
                        focus:border-indigo-500 focus:ring-indigo-500 bg-gray-700"
                    />
                    </div>

                    <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}

                    className="w-full px-4 py-2 rounded-lg border-gray-600 
                        focus:border-indigo-500 focus:ring-indigo-500 bg-blue-500"
                    >
                    Send
                    </motion.button>
                </form>

                </motion.div>

            </motion.div>
            )}
        </AnimatePresence>
        
        <div
          className="lg:w-[50%] lg:h-[70%] -z-10 fixed 
          lg:top-[12%] md:left-[40%] md:top-[20%] md:h-[50%] 
          h-[35%] top-[50%] right-[14%]"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
            <Spline
                scene="https://prod.spline.design/JLccJBIspasqBmdj/scene.splinecode" 
            />
            <div className="spline-overlay" />
        </div>
      </div>

      <div className="mt-auto"
           data-aos="fade-zoom-in"
           data-aos-easing="ease-in-back"
           data-aos-delay="300"
           data-aos-offset="0">

            <h1 className="lg:text-3xl md:text-2xl text-md 
            font-extrabold mb-8 tracking-wider text-center [@media(max-width:380px)]:mb-2">
                "Clean code. Clear visuals. Useful insights."
            </h1>
      </div>
    </main>
  );
};

export default Hero;
