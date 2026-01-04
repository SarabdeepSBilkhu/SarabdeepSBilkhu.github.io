import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";

const Experience = () => {
  const skills = [
    { name: "Python", icon: FaPython, color: "text-blue-300" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-300" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
  ];

  const experiences = [
  {
    title: "Personal Portfolio Website",
    company: "Personal Project",
    duration: "2023 - Present",
    description:
      "The source code for my personal website, built and hosted using GitHub Pages. A simple space to showcase my projects, skills, and ideas.",
    technologies: ["React", "Vite", "Tailwind CSS", "GitHub Pages"],
    achievements: [
      "Designed and developed a fully responsive portfolio website",
      "Integrated modern UI/UX with Tailwind CSS and Framer Motion",
      "Deployed and maintained using GitHub Pages"
    ]
  },
  {
    title: "SMPHorizon Discord Bot",
    company: "Personal / Community Project",
    duration: "2024",
    description:
      "Built a full-featured Discord bot for the SMPHorizon Minecraft community, handling voice-based play sessions, AI-powered chat, persistent user memory, XP tracking, moderation, and live Aternos server status. Designed as a single integrated system with long-running reliability and persistent storage.",
    technologies: [
      "Python",
      "discord.py",
      "SQLite",
      "Groq API",
      "Llama 3.1",
      "aiohttp",
      "mcstatus"
    ],
    achievements: [
      "Implemented Minecraft voice session tracking with playtime logging and leaderboards",
      "Built an AI assistant with long-term user memory and private DM support using Groq-hosted Llama 3.1",
      "Designed an XP and leveling system backed by persistent SQLite storage",
      "Integrated live Aternos server status monitoring via mcstatus",
      "Developed automated moderation features including banned-word filtering and warning system",
      "Deployed and maintained the bot on Railway with environment-based configuration"
    ]
  },
  {
    title: "Backend-in-a-Box",
    company: "Open Source Project",
    duration: "2024",
    description:
      "Designed a schema-driven backend framework that generates production-ready FastAPI applications from YAML definitions. The system auto-generates database models, CRUD APIs, validation layers, and migrations, eliminating repetitive backend setup while preserving extensibility.",
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Alembic",
      "Docker",
      "JWT",
      "Celery",
      "Redis"
    ],
    achievements: [
      "Designed a YAML-based schema system to define models, fields, and relationships declaratively",
      "Built a code generator that produces SQLAlchemy models, CRUD routers, and Pydantic schemas",
      "Implemented JWT-based authentication with secure password hashing",
      "Integrated Alembic migrations for automated schema evolution",
      "Containerized the entire stack with Docker and Docker Compose for one-command startup",
      "Created an extension and hook system for injecting custom business logic without modifying core code"
    ]
  },
  {
    title: "SKARK Banking System",
    company: "Team Project",
    duration: "2024",
    description:
      "Developed the backend for a chat-driven banking web application using Python Flask and MySQL. The frontend was developed by Ranbir Khurana (DevRanbir) using HTML, CSS, and JavaScript. Implemented secure authentication, account management, and transaction features via RESTful APIs.",
    technologies: ["Python", "Flask", "MySQL", "REST API"],
    achievements: [
      "Designed and implemented the database schema in MySQL",
      "Built RESTful endpoints for banking operations",
      "Integrated secure user authentication and session management",
      "Collaborated with Ranbir Khurana (DevRanbir) for seamless backend/frontend integration"
    ]
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

  const itemVariants = {
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
    <section className="py-16 px-6 relative min-h-screen">
      {/* Section Heading with Inline Tech Icons */}
      <motion.div 
        className="relative inline-block w-full mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2
            className="lg:text-xl sm:text-lg text-sm font-bold 
            flex items-center justify-center relative z-10 
            px-6 py-2 text-white overflow-hidden rounded-xl"
          >
            <span className="introducing-container absolute inset-0" />
            <span className="relative z-10">Experience & Skills</span>
          </h2>

          {/* Inline Tech Stack Icons with Hover Effects */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-white text-2xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group relative"
              >
                <skill.icon
                  className={`${skill.color} skill-icon hover:scale-120 hover:drop-shadow-md transition-transform duration-200`}
                  title={skill.name}
                />
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-black/80 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  {skill.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="mb-8 relative"
          >
            <div className="bg-white/5 p-6 rounded-xl border border-white/10 card-hover">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold gradient-text mb-1">{experience.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{experience.company}</p>
                  <span className="text-xs opacity-60 bg-white/10 px-2 py-1 rounded-full">{experience.duration}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full glass-effect border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-sm text-gray-300 leading-relaxed mb-4">{experience.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-blue-400">Key Achievements:</h4>
                <ul className="space-y-1">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-xs text-gray-300 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Section */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-lg font-semibold mb-8 gradient-text text-center">Technical Skills</h3>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center p-4 rounded-xl glass-effect border border-white/10 card-hover"
            >
              <skill.icon className={`${skill.color} text-3xl mb-2 skill-icon`} />
              <span className="text-xs text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
