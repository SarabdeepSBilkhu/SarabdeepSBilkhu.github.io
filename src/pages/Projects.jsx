import { FiExternalLink, FiGithub, FiCode, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Personal Portfolio Website",
      description:
        "The source code for my personal website, built and hosted using GitHub Pages. A simple space to showcase my projects, skills, and ideas.",
      technologies: ["React", "Vite", "Tailwind CSS", "GitHub Pages"],
      link: "https://sarabdeepsbilkhu.github.io",
      github: "https://github.com/SarabdeepSBilkhu/SarabdeepSBilkhu.github.io",
      image: "/project1.jpg",
      featured: true
    },
    {
      title: "HoloCruze",
      description:
        "A gesture-controlled robotic car powered by RF communication for smooth, wireless navigation. The system features an Arduino Nano-based gesture controller and a vehicle unit built with an Arduino Uno alternative. RF transmitter/receiver modules enable real-time, reliable control—no Bluetooth or Wi-Fi needed.",
      technologies: ["Arduino", "RF Communication", "Embedded Systems"],
      link: "https://github.com/SarabdeepSBilkhu/HoloCruze",
      github: "https://github.com/SarabdeepSBilkhu/HoloCruze",
      image: "/project2.jpg",
      featured: true
    },
    {
      title: "CampusSync",
      description:
        "A centralized web platform designed to simplify student life. CampusSync combines class schedules, study notes, placement alerts, and roommate coordination into a single responsive interface—cutting through clutter and maximizing academic productivity.",
      technologies: ["React", "Web Platform", "Productivity"],
      link: "https://github.com/SarabdeepSBilkhu/CampusSync",
      github: "https://github.com/SarabdeepSBilkhu/CampusSync",
      image: "/project3.jpg",
      featured: true
    },
    {
      title: "SKARK Banking System",
      description:
        "A web-based chat-driven banking system with a Python Flask backend integrated with MySQL for secure data management. The frontend was developed by Ranbir Khurana (DevRanbir) using HTML, CSS, and JavaScript, while I focused on backend logic, database integration, and API endpoints.",
      technologies: ["Python", "Flask", "MySQL", "REST API"],
      link: "#",
      github: "#",
      image: "/project4.jpg",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-8 md:py-16 px-4 md:px-6 relative min-h-screen">
      {/* Section Heading */}
      <motion.div 
        className="relative inline-block p-4 mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="lg:text-xl sm:text-lg text-sm font-bold 
          flex items-center justify-center relative z-10 
          px-6 py-2 text-white overflow-hidden rounded-xl">
          <span className="introducing-container absolute inset-0" />
          <FiCode className="mr-2" />
          My Projects
        </h2>
      </motion.div>

      {/* Featured Projects */}
      <motion.div 
        className="mb-8 md:mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold mb-6 text-white">Featured Projects</h3>
        <motion.div 
          className="grid lg:grid-cols-2 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectList.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-md
                bg-white/5 hover:bg-white/10 transition-all duration-500 card-hover"
            >
              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-white">{project.title}</h3>
                  <div className="flex gap-2">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass-effect hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full glass-effect hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full glass-effect border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  View Project <FiEye className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* All Projects Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold mb-6 text-white">All Projects</h3>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-md
                bg-white/5 hover:bg-white/10 transition-all duration-300 card-hover"
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex gap-1">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full glass-effect hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub className="w-3 h-3" />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-full glass-effect hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-xs text-gray-300 mb-3 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs rounded-full glass-effect border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full glass-effect border border-white/10">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ x: 3 }}
                >
                  View Project <FiEye className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
  
