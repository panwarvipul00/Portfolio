"use client";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaFileAlt } from "react-icons/fa";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gray-950">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>

      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center">
        
        {/* Profile Photo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <img
            src="/profile.JPG"
            alt="Vipul"
            className="w-40 h-40 rounded-full border-4 border-gray-700 shadow-xl object-cover"
          />
        </motion.div>

        {/* Intro Text */}
        <div className="overflow-hidden w-full max-w-4xl mb-2">
          <motion.h1
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ 
              duration: 12, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight whitespace-nowrap"
          >
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-cyan-500">
              Vipul Panwar
            </span>
            {" "} • Software Engineer • MERN Stack Developer • AI Enthusiast{" "} •{" "}
          </motion.h1>
        </div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto"
        >
          Software Engineer | MERN STACK Developer | AI Enthusiast
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="/Vipul resume.pdf"
            download="Vipul resume.pdf"
            className="group px-6 py-3 bg-gray-800 text-gray-200 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 hover:ring-2 hover:ring-purple-500 flex items-center justify-center"
          >
            <FaDownload className="mr-3 text-purple-400" />
            Download Resume
          </a>

          <a
            href="/Vipul resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 bg-gray-800 text-gray-200 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 hover:ring-2 hover:ring-sky-500 flex items-center justify-center"
          >
            <FaFileAlt className="mr-3 text-sky-400" />
            View Resume
          </a>

          <a
            href="/contact"
            className="group px-6 py-3 bg-gray-800 text-gray-200 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-700 hover:ring-2 hover:ring-teal-500 flex items-center justify-center"
          >
            <FaEnvelope className="mr-3 text-teal-400" />
            Contact Me
          </a>
        </motion.div>
      </div>
      
      {/* All Sections */}
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
