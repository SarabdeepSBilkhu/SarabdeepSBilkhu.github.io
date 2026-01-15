import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";
import { FiUser, FiMail, FiMessageSquare, FiX, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { useState, useContext, useEffect } from "react";
import { CursorContext } from "../context/CursorContext";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const Hero = () => {

    const [contactFormOpen, setContactFormOpen] = useState(false);
    const { setCursorVisible } = useContext(CursorContext);

    // Add state for form data and submission
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
      setCursorVisible(true); // Always show the custom cursor
    }, [contactFormOpen, setCursorVisible]);

    const openContactForm = () => {
        setContactFormOpen(true);
    }

    const closeContactForm = () => {
        setContactFormOpen(false);
        setFormData({ name: "", email: "", message: "" });
        setSubmitStatus(null);
    }

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const response = await fetch('https://formspree.io/f/manbqgje', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        setSubmitStatus("error");
      }
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    };

  return (
    <main className="flex flex-1 flex-col justify-between min-h-screen py-12">
      <div className="w-full px-4 md:px-10 lg:px-20 py-8 relative">
        
        {/* 3D Model - positioned absolutely on desktop, static on mobile */}
        <ScrollReveal
          className="hidden lg:block lg:absolute lg:top-8 lg:right-4 xl:right-32 lg:w-[480px] lg:h-[480px] rounded-lg shadow-2xl overflow-hidden"
          delay={0.5}
        >
          <Spline scene="https://prod.spline.design/JLccJBIspasqBmdj/scene.splinecode" />
          <div className="absolute bottom-4 right-4 w-36 h-11 bg-black rounded-md z-20" />
        </ScrollReveal>
        
        {/* Content - with right margin on desktop to make space for 3D model */}
        <div className="lg:mr-[480px] flex flex-col items-center lg:items-start text-center lg:text-left">
          <ScrollReveal
            className="introducing-container lg:text-xl sm:text-lg 
            text-sm w-full md:w-[300px] h-[33px] font-bold
            flex items-center justify-center mb-8 relative"
            delay={0.2}
          >
            <div className="text-white">
              Developer Portfolio
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="max-w-full"
            delay={0.4}
          >
            <h1
              className="lg:text-5xl sm:text-4xl text-2xl 
              font-extrabold mb-5 text-white"
            >
              Crafting Digital Experiences
            </h1>

            <p className="lg:max-w-[500px] text-gray-300 leading-relaxed">
                A passionate developer focused on crafting meaningful digital solutions, I blend creativity with 
                technical expertise to build applications that are both functional and user-centric. From intuitive 
                interfaces to scalable backend systems, I strive to create products that not only work seamlessly 
                but also provide real value to their users. My approach is rooted in clean, efficient code and 
                thoughtful design that prioritizes both performance and usability.
            </p>
          </ScrollReveal>

          <ScrollReveal 
            className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            delay={0.6}
          >
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); openContactForm(); }}
              className="w-full sm:w-[208px] h-[44px] inline-flex items-center 
              justify-center border border-white/20 rounded-full 
              text-sm tracking-wider glass-effect hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <FiMail className="mr-2" />
               Contact Me
            </motion.a>

            <motion.a
              href="/resume.pdf"
              className="w-full sm:w-[208px] h-[44px] inline-flex items-center 
              justify-center border border-white/20 rounded-full 
              text-sm tracking-wider glass-effect hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <FiDownload className="mr-2" />
                  View Resume
            </motion.a>
          </ScrollReveal>
        </div>
        
        <AnimatePresence>
          {contactFormOpen && (
            <motion.div 
              className={`fixed inset-0 bg-black/50 backdrop-blur-custom flex items-center justify-center z-50 p-4 force-cursor`}
              onClick={closeContactForm}
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 30 }}
                transition={{ 
                  type: "spring",
                  damping: 20,
                  stiffness: 200,
                  duration: 0.8 
                }}
                className="glass-effect rounded-2xl shadow-xl w-full max-w-md p-6 text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between mb-6 items-center">
                  <h1 className="text-2xl font-bold text-white">
                    Get in Touch
                  </h1>
                  <motion.button 
                    onClick={closeContactForm}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2"
                  >
                    <FiX className="w-5 h-5 text-white font-extrabold" />
                  </motion.button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-sm">
                  <div className="flex items-center gap-3">
                    <FiUser className="text-lg text-blue-300" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="flex-1 bg-transparent border-b border-white/20 outline-none py-2 placeholder-white/70 focus:border-blue-400 transition-colors duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <FiMail className="text-lg text-blue-300" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="flex-1 bg-transparent border-b border-white/20 outline-none py-2 placeholder-white/70 focus:border-blue-400 transition-colors duration-300"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <FiMessageSquare className="text-lg text-blue-300 mt-2" />
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Your Message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="flex-1 bg-transparent border-b border-white/20 outline-none py-2 placeholder-white/70 resize-none focus:border-blue-400 transition-colors duration-300"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`self-center mt-4 px-8 py-3 rounded-full font-semibold 
                      bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 
                      hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 text-white shadow-md pulse-glow ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-3 rounded-lg bg-green-500/20 border border-green-500/30 mt-2"
                    >
                      <p className="text-green-400 text-sm">Message sent successfully!</p>
                    </motion.div>
                  )}
                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-3 rounded-lg bg-red-500/20 border border-red-500/30 mt-2"
                    >
                      <p className="text-red-400 text-sm">Failed to send message. Please try again later.</p>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
      </div>

      <ScrollReveal 
        className="mt-auto px-4"
        delay={1.0}
      >
        <motion.h1 
          className="lg:text-3xl md:text-2xl text-lg
          font-extrabold mb-12 tracking-wider text-center text-white"
        >
          "Clean code. Clear visuals. Useful insights."
        </motion.h1>
      </ScrollReveal>
    </main>
  );
};

export default Hero;
