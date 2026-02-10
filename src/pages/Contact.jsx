import { FiMail, FiUser, FiMessageSquare, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

import ScrollReveal from "../components/ScrollReveal";

const Contact = () => {
  // Form logic removed as per user request to keep only contact info


  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "sanjhbilkhu2006@gmail.com",
      link: "mailto:sanjhbilkhu2006@gmail.com"
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+91 70424-32513",
      link: "tel:+917042432513"
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Jalandhar, Punjab",
      link: "#"
    }
  ];



  return (
    <section className="py-8 md:py-16 px-4 md:px-6 relative min-h-screen">
      {/* Section Heading */}
      <ScrollReveal 
        className="relative inline-block p-4 mb-8 md:mb-12"
      >
        <h2 className="lg:text-xl sm:text-lg text-sm font-bold 
          flex items-center justify-center relative z-10 
          px-6 py-2 text-white overflow-hidden rounded-xl">
          <span className="introducing-container absolute inset-0" />
          <FiMail className="mr-2" />
          Contact Me
        </h2>
      </ScrollReveal>

      <div 
        className="max-w-6xl mx-auto"
      >
        {/* Contact Information */}
        <ScrollReveal 
          className="mb-8 md:mb-12"
        >
          <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="flex items-center gap-4 p-4 rounded-xl glass-effect border border-white/10 card-hover"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="p-3 rounded-full glass-effect">
                  <info.icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{info.title}</h4>
                  <p className="text-xs text-gray-300">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </ScrollReveal>

        {/* Additional Info */}
        <ScrollReveal 
          className="mt-8 md:mt-12 text-center"
          delay={0.2}
        >
          <p className="text-gray-400 text-sm mb-4">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.

          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
