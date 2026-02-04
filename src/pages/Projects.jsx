import { FiExternalLink, FiGithub, FiCode, FiEye } from "react-icons/fi";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";


const Projects = () => {
  const projectList = [
    {
      title: "AlgoTrace - Advanced Algorithm Visualizer",
      description:
        "A next-generation algorithm visualizer featuring a 'Time-Travel' debugging engine to record, replay, and scrub through algorithm execution steps. Includes multi-structure visualization for arrays and graphs, plus an integrated Monaco code editor.",
      link: "https://SarabdeepSBilkhu.github.io/AlgoTrace",
      github: "https://github.com/SarabdeepSBilkhu/algotrace",
      image: "/project1.jpg",
      featured: true,
      achievements: [
        "Implemented deterministic 'Time-Travel' debugging to step forward/backward through algorithms",
        "Built a custom Proxy-based JS execution engine to capture comparisons and swaps",
        "Integrated Monaco Editor for in-browser code writing and execution",
        "Designed a modern 'Dark Glass' aesthetic with smooth Framer Motion animations"
      ]
    },
    {
      title: "SMPHorizon Discord Bot",
      company: "Personal / Community Project",
      duration: "2024",
      description:
        "Built a full-featured Discord bot for the SMPHorizon Minecraft community, handling voice-based play sessions, AI-powered chat, persistent user memory, XP tracking, moderation, and live Aternos server status. Designed as a single integrated system with long-running reliability and persistent storage.",
      achievements: [
        "Implemented Minecraft voice session tracking with playtime logging and leaderboards",
        "Built an AI assistant with long-term user memory and private DM support using Groq-hosted Llama 3.1",
        "Designed an XP and leveling system backed by persistent SQLite storage",
        "Integrated live Aternos server status monitoring via mcstatus",
        "Developed automated moderation features including banned-word filtering and warning system",
        "Deployed and maintained the bot on Railway with environment-based configuration"
      ],
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
        "Designed a schema-driven backend framework that generates production-ready FastAPI applications from YAML definitions. The system auto-generates database models, CRUD APIs, validation layers, and migrations, eliminating repetitive backend setup while preserving extensibility.",
      achievements: [
        "Designed a YAML-based schema system to define models, fields, and relationships declaratively",
        "Built a code generator that produces SQLAlchemy models, CRUD routers, and Pydantic schemas",
        "Implemented JWT-based authentication with secure password hashing",
        "Integrated Alembic migrations for automated schema evolution",
        "Containerized the entire stack with Docker and Docker Compose for one-command startup",
        "Created an extension and hook system for injecting custom business logic without modifying core code"
      ],
      link: "#",
      github: "https://github.com/SarabdeepSBilkhu/Backend-in-a-Box",
      image: "/project3.jpg",
      featured: true
    },
    {
      title: "SKARK Banking System",
      description:
        "A web-based chat-driven banking system with a Python Flask backend integrated with MySQL for secure data management. The frontend was developed by Ranbir Khurana (DevRanbir) using HTML, CSS, and JavaScript, while I focused on backend logic, database integration, and API endpoints.",
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
  
