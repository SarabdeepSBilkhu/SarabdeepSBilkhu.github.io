import { FiExternalLink, FiGithub, FiCode, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";


const Projects = () => {
  const projectList = [
    {
      title: "AlgoTrace - Advanced Algorithm Visualizer",
      description:
        "An algorithm visualization platform with a time-travel debugging engine for step-by-step execution replay. Supports array and graph visualization with an integrated code editor.",
      link: "https://SarabdeepSBilkhu.github.io/AlgoTrace",
      github: "https://github.com/SarabdeepSBilkhu/algotrace",
      image: "/project1.jpg",
      featured: true,
    },
    {
      title: "SMPHorizon Discord Bot",
      company: "Personal / Community Project",
      duration: "2024",
      description:
        "A production-grade Discord bot managing voice sessions, AI chat, user data, XP tracking, moderation, and live server status. Built for long-term reliability with persistent storage.",
      link: "#",
      github: "https://github.com/SarabdeepSBilkhu/SMPHorizon_Bot",
      image: "/project2.jpg",
      featured: true
    },
    {
      title: "Backend-in-a-Box",
      company: "Open Source Project",
      duration: "2024",
      description:
        "A schema-driven framework that generates FastAPI backends from YAML definitions. Automatically creates database models, APIs, validation layers, and migrations.",
      link: "#",
      github: "https://github.com/SarabdeepSBilkhu/Backend-in-a-Box",
      image: "/project3.jpg",
      featured: true
    },
    {
      title: "SKARK Banking System",
      description:
        "A web-based banking platform using Flask and MySQL. Responsible for backend logic, database integration, and API development.",
      link: "#",
      github: "#",
      image: "/project4.jpg",
      featured: false
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
          <FiCode className="mr-2" />
          My Projects
        </h2>
      </ScrollReveal>
      
      {/* All Projects Grid */}
      <div>
        <ScrollReveal>
             <h3 className="text-lg font-semibold mb-6 text-white">All Projects</h3>
        </ScrollReveal>
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {projectList.map((project, index) => (
            <ScrollReveal
              key={index}
              className="group relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-md
                bg-white/5 hover:bg-white/10 transition-all duration-300 card-hover flex flex-col h-full"
              delay={index * 0.1}
            >
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <div className="flex gap-1">
                    <motion.a
                      href={(project.github && project.github !== '#') ? project.github : '#'}
                      target={(project.github && project.github !== '#') ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`p-1.5 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 flex items-center justify-center ${
                        (!project.github || project.github === '#') ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      whileHover={(project.github && project.github !== '#') ? { scale: 1.1 } : {}}
                      whileTap={(project.github && project.github !== '#') ? { scale: 0.9 } : {}}
                    >
                      <FiGithub className="w-3 h-3" />
                    </motion.a>
                    <motion.a
                      href={(project.link && project.link !== '#') ? project.link : '#'}
                      target={(project.link && project.link !== '#') ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className={`p-1.5 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 flex items-center justify-center ${
                        (!project.link || project.link === '#') ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      whileHover={(project.link && project.link !== '#') ? { scale: 1.1 } : {}}
                      whileTap={(project.link && project.link !== '#') ? { scale: 0.9 } : {}}
                    >
                      <FiExternalLink className="w-3 h-3" />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-xs text-gray-300 mb-3 leading-relaxed">{project.description}</p>

                <motion.a
                  href={(project.link && project.link !== '#') ? project.link : (project.github && project.github !== '#') ? project.github : '#'}
                  target={(project.link && project.link !== '#') || (project.github && project.github !== '#') ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors duration-300 mt-auto ${
                    !((project.link && project.link !== '#') || (project.github && project.github !== '#')) ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={((project.link && project.link !== '#') || (project.github && project.github !== '#')) ? { x: 3 } : {}}
                >
                  View Project <FiEye className="w-3 h-3" />
                </motion.a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
  
