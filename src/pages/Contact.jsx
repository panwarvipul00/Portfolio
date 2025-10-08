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
          Get In <span className="text-blue-600">Touch</span>
        </motion.h2>

        {/* Contact Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg cursor-pointer flex flex-col items-center justify-center space-y-4"
              onClick={() => setSelected(contact)}
            >
              <div className="text-4xl">{contact.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
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
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-96 text-center relative"
            >
              <button
                className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 text-xl"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
              <div className="text-5xl mb-4">{selected.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {selected.name}
              </h3>
              {selected.value.startsWith("http") ? (
                <a
                  href={selected.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  {selected.value}
                </a>
              ) : (
                <p className="text-gray-700 dark:text-gray-300">
                  {selected.value}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
