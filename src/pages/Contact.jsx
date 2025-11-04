"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  const [selected, setSelected] = useState(null);

  const contacts = [
    {
      name: "Phone",
      value: "+91 6398005375",
      icon: <FaPhoneAlt className="text-green-500" />,
    },
    {
      name: "Email",
      value: "vipulpanwar1728@gmail.com",
      icon: <SiGmail className="text-red-500" />,
    },
    {
      name: "GitHub",
      value: "https://github.com/panwarvipul00",
      
      icon: <FaGithub className="text-gray-800 dark:text-white" />,
    },
    {
      name: "LinkedIn",
      value: "https://www.linkedin.com/in/vipul-panwar-aiml/",
      icon: <FaLinkedin className="text-blue-600" />,
    },
  ];

  return (
    <section
      id="contact"
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
          Get In <span className="text-sky-400">Touch</span>
        </motion.h2>

        {/* Contact Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, type: "spring", stiffness: 120 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotateY: 10, z: 50 }}
              className="p-6 bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg cursor-pointer flex flex-col items-center justify-center space-y-4 border border-gray-700 hover:border-sky-500 hover:shadow-sky-500/30 transition-all duration-300"
              onClick={() => setSelected(contact)}
            >
              <div className="text-4xl">{contact.icon}</div>
              <h3 className="text-lg font-semibold text-white">
                {contact.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Popup Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-96 text-center relative border border-gray-700"
            >
              <button
                className="absolute top-3 right-4 text-gray-300 text-xl hover:text-white transition-colors"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
              <div className="text-5xl mb-4">{selected.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {selected.name}
              </h3>
              {selected.value.startsWith("http") ? (
                <a
                  href={selected.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 underline hover:text-sky-300 transition-colors"
                >
                  {selected.value}
                </a>
              ) : (
                <p className="text-gray-300">
                  {selected.value}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>
      
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-72 h-72 bg-sky-500/10 rounded-full filter blur-3xl"
        animate={{ x: [0, 80, -80, 0], y: [0, -40, 40, 0], scale: [1, 1.3, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"
        animate={{ x: [0, -90, 90, 0], y: [0, 50, -50, 0], rotate: [0, 270, 360] }}
        transition={{ repeat: Infinity, duration: 15 }}
      />
    </section>
  );
}
