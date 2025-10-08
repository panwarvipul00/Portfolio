"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss,SiNextdotjs,SiMysql } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "text-[#E34F26]" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: <FaJs />, color: "text-[#F7DF1E]" },
  { name: "React", icon: <FaReact />, color: "text-[#61DAFB]" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-[#339933]" },
  { name: "Express.js", icon: <SiExpress />, color: "text-[#888888]" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-[#47A248]" },
  { name: "MySQL", icon: <SiMysql />, color: "text-[#4479A1]" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "text-black dark:text-white" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
  { name: "Python", icon: <FaPython />, color: "text-[#3776AB]" },
  { name: "Firebase", icon: <IoLogoFirebase />, color: "text-[#FFCA28]" }
];

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-32 bg-gray-950 text-gray-100 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff33 1px, transparent 1px)' , backgroundSize: '40px 40px'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-500">Expertise</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A diverse skill set is key to building modern, robust, and scalable web applications.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-800"
              variants={skillItemVariants}
            >
              <div className={`text-5xl sm:text-6xl mb-4 transition-transform duration-300 group-hover:rotate-6 ${skill.color}`}>
                {skill.icon}
              </div>
              <p className="text-lg font-semibold text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    </section>
  );
}