"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gray-950 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Heading with animation */}
        <motion.h2
          className="text-5xl font-extrabold text-white mb-8"
          initial={{ opacity: 0, scale: 0.5, y: -40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.8 }}
        >
          About <span className="text-sky-400">Me</span>
        </motion.h2>

        {/* About Text with subtle animation */}
        <motion.div
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <p className="mb-6">
            Hello 👋, I’m{" "}
            <span className="font-semibold text-sky-400">Vipul</span>, a
            <span className="font-semibold"> Software Engineer</span> and
            <span className="text-cyan-400"> AI Enthusiast</span> who loves
            building
            <span className="font-semibold"> modern, scalable web applications</span> and
            <span className="font-semibold"> AI-powered solutions</span>.
          </p>

          <p className="mb-6">
            With a <span className="font-semibold">B.Tech in Computer Science</span> and
            hands-on experience as a{" "}
            <span className="font-semibold">software intern</span>, I’ve built
            strong expertise in{" "}
            <span className="font-semibold">
              MERN full-stack development (React, Tailwind CSS, Node.js,
              Express, MongoDB)
            </span>
            . I enjoy solving challenging problems, experimenting with new
            technologies, and transforming ideas into impactful products.
          </p>

          <p>
            🚀 My ultimate goal is to become a professional
            <span className="text-sky-400 font-semibold"> AI Agent Developer</span>{" "}
            and build innovative solutions that make a real-world impact.
          </p>
        </motion.div>
      </div>

      {/* Background gradient effect with animation */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-sky-500/10 rounded-full filter blur-3xl"
        animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0], scale: [1, 1.2, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
        animate={{ x: [0, -60, 60, 0], y: [0, -40, 40, 0], scale: [1, 0.8, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
    </section>
  );
}
