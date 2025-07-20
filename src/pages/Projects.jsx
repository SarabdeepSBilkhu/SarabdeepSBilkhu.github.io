import { FiExternalLink, FiGithub, FiCode, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";

const Projects = () => {
  const projectList = [
    {
      title: "Privacy Risk Auditor",
      description:
        "AI-powered tool that analyzes your social media posts to identify and flag personal data leaks. Built with Python, NLP, and modern web technologies.",
      technologies: ["Python", "NLP", "React", "Tailwind CSS"],
      link: "https://github.com/sarabdeepsbilkhu/privacy-risk-auditor",
      github: "https://github.com/sarabdeepsbilkhu/privacy-risk-auditor",
      image: "/project1.jpg",
      featured: true
    },
    {
      title: "AI Resume Generator",
      description:
        "Tool that builds ATS-friendly resumes using AI prompts and templates, exportable in PDF/HTML. Features intelligent formatting and optimization.",
      technologies: ["React", "AI/ML", "PDF Generation", "Tailwind"],
      link: "https://github.com/sarabdeepsbilkhu/ai-resume-builder",
      github: "https://github.com/sarabdeepsbilkhu/ai-resume-builder",
      image: "/project2.jpg",
      featured: true
    },
    {
      title: "3D Portfolio Website",
      description:
        "Personal portfolio with Spline 3D models, scroll-triggered effects, and responsive design. Showcases modern web development techniques.",
      technologies: ["React", "Spline", "Framer Motion", "Tailwind CSS"],
      link: "https://sarabdeepsbilkhu.github.io",
      github: "https://github.com/SarabdeepSBilkhu/SarabdeepSBilkhu.github.io",
      image: "/project3.jpg",
      featured: true
    },
    {
      title: "Task Management App",
      description:
        "A modern task management application with drag-and-drop functionality, real-time updates, and collaborative features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "#",
      github: "#",
      image: "/project4.jpg",
      featured: false
    },
    {
      title: "Weather Dashboard",
      description:
        "Interactive weather dashboard with real-time data, beautiful visualizations, and location-based forecasting.",
      technologies: ["JavaScript", "Chart.js", "Weather API", "CSS3"],
      link: "#",
      github: "#",
      image: "/project5.jpg",
      featured: false
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      link: "#",
      github: "#",
      image: "/project6.jpg",
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
  