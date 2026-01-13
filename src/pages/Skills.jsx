import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiNodedotjs, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
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
      <motion.div 
        className="relative inline-block w-full mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col items-center justify-center gap-6">
          <h2
            className="lg:text-4xl md:text-3xl text-2xl font-bold 
            flex items-center justify-center relative z-10 
            px-6 py-2 text-white overflow-hidden rounded-xl"
          >
            <span className="relative z-10">Technical Skills</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl">
            My technical toolbox and the technologies I work with.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="flex flex-col items-center p-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2"
          >
            <skill.icon className={`${skill.color} text-5xl mb-4 group-hover:scale-110 transition-transform duration-300`} />
            <span className="text-gray-200 font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
