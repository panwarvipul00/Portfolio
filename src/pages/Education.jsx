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
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
        >
          My <span className="text-blue-600">Education</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative border-l-4 border-blue-500 dark:border-blue-400 ml-6">
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
              <span className="absolute -left-6 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-blue-500">
                {edu.icon}
              </span>

              {/* Card */}
              <div
                className={`p-6 rounded-2xl shadow-lg bg-gradient-to-br ${edu.color}`}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {edu.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {edu.institution}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Year: {edu.year}
                </p>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Marks: {edu.marks}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
