"use client";
import { motion } from "framer-motion";
import { FaSchool, FaUniversity, FaGraduationCap } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      year: "2019",
      title: "Secondary (10th)",
      institution: "Jawahar navodaya vidyalaya",
      marks: "84%",
      icon: <FaSchool className="text-pink-500" />,
      color: "from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-700",
    },
    {
      year: "2021",
      title: "Senior Secondary (12th)",
      institution: "Jawahar navodaya vidyalaya",
      marks: "76%",
      icon: <FaUniversity className="text-indigo-500" />,
      color: "from-indigo-100 to-indigo-200 dark:from-indigo-900 dark:to-indigo-700",
    },
    {
      year: "2025",
      title: "B.Tech in Computer Science",
      institution: "AKTU",
      marks: "7.2 CGPA",
      icon: <FaGraduationCap className="text-green-500" />,
      color: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-700",
    },
  ];

  return (
    <section
      id="education"
      className="relative py-24 bg-gray-950 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.5, y: -30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          My <span className="text-sky-400">Education</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-sky-500 ml-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 ml-6"
            >
              {/* Icon */}
              <span className="absolute -left-6 flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 shadow-lg border-2 border-sky-500">
                {edu.icon}
              </span>

              {/* Card */}
              <div className="p-6 rounded-2xl shadow-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-sky-500 transition-all duration-300">
                <h3 className="text-xl font-bold text-white">
                  {edu.title}
                </h3>
                <p className="text-gray-300">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Year: {edu.year}
                </p>
                <p className="text-sm font-semibold text-sky-400">
                  Marks: {edu.marks}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 right-0 w-80 h-80 bg-sky-500/10 rounded-full filter blur-3xl"
        animate={{ x: [0, -100, 100, 0], y: [0, 50, -50, 0], scale: [1, 1.3, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 14 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
        animate={{ x: [0, 120, -120, 0], y: [0, -60, 60, 0], rotate: [0, 180, 360] }}
        transition={{ repeat: Infinity, duration: 16 }}
      />
    </section>
  );
}
