"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Doctor Appointment  App",
      description:
        "A full-stack MERN application with authentication, Stripe & Razorpay integration, and Cloudinary for image storage.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      liveLink: "https://doctor-appointmentwebapp-frontend.onrender.com",
      githubLink: "https://github.com/panwarvipul00/Doctor-AppointmentWebApp",
    },
    {
      title: "TOMATO",
      description:
        "Built a full-stack food delivery web app. ",
      tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "JWT",],
      liveLink: "https://food-del-frontend-x0xy.onrender.com/",
      githubLink: "https://github.com/panwarvipul00/food-del",
    },
    {
      title: "MERN BLOG",
      description:
        "Built a full-stack Blogging web app. ",
      tech: ["React", "Tailwind", "Node.js", "Express.js", "MongoDB", "JWT",],
      liveLink: "https://blog-project2-mk0z.onrender.com/",
      githubLink: "https://github.com/panwarvipul00/Blog-project",
    },
    
  ];

  return (
    <section
      id="projects"
      className="relative py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-14"
        >
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">Projects</span>
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-black/80 backdrop-blur-md border border-purple-700 hover:border-pink-500 hover:shadow-pink-500/30 transition duration-300"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-center gap-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-lg shadow-lg hover:scale-105 transition"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
