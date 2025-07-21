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
  SiNextdotjs,
  SiOpenai,
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { motion } from "framer-motion";

const Experience = () => {
  const skills = [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "Python", icon: FaPython, color: "text-blue-300" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-300" },
    { name: "Git", icon: FaGitAlt, color: "text-orange-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "OpenAI", icon: SiOpenai, color: "text-green-400" },
  ];

  const experiences = [
    {
      title: "Personal Portfolio Website",
      company: "Personal Project",
      duration: "2023 - Present",
      description: "The source code for my personal website, built and hosted using GitHub Pages. A simple space to showcase my projects, skills, and ideas.",
      technologies: ["React", "Vite", "Tailwind CSS", "GitHub Pages"],
      achievements: [
        "Designed and developed a fully responsive portfolio website",
        "Integrated modern UI/UX with Tailwind CSS and Framer Motion",
        "Deployed and maintained using GitHub Pages"
      ]
    },
    {
      title: "HoloCruze",
      company: "Personal Project",
      duration: "2022 - 2023",
      description: "A gesture-controlled robotic car powered by RF communication for smooth, wireless navigation. The system features an Arduino Nano-based gesture controller and a vehicle unit built with an Arduino Uno alternative. RF transmitter/receiver modules enable real-time, reliable control—no Bluetooth or Wi-Fi needed.",
      technologies: ["Arduino", "RF Communication", "Embedded Systems"],
      achievements: [
        "Built a custom gesture controller using Arduino Nano",
        "Implemented reliable RF communication for real-time control",
        "Designed and assembled the robotic car hardware"
      ]
    },
    {
      title: "CampusSync",
      company: "Personal Project",
      duration: "2023",
      description: "A centralized web platform designed to simplify student life. CampusSync combines class schedules, study notes, placement alerts, and roommate coordination into a single responsive interface—cutting through clutter and maximizing academic productivity.",
      technologies: ["React", "Web Platform", "Productivity"],
      achievements: [
        "Developed a unified dashboard for student productivity",
        "Integrated scheduling, notes, and alerts in one platform",
        "Designed for mobile and desktop responsiveness"
      ]
    },
    {
      title: "SKARK Banking System",
      company: "Team Project",
      duration: "2024",
      description: "Developed the backend for a chat-driven banking web application using Python Flask and MySQL. The frontend was developed by Ranbir Khurana (DevRanbir) using HTML, CSS, and JavaScript. Implemented secure authentication, account management, and transaction features via RESTful APIs.",
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
