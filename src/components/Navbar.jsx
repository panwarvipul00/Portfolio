"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa"; // Student icon

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Name on Far Left */}
        <Link
          to="/"
          className="flex items-center gap-2 text-3xl font-extrabold font-serif"
        >
          <FaUserGraduate className="text-white animate-bounce" />
          <motion.span
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="text-white"
          >
            Vipul Panwar
          </motion.span>
        </Link>

        {/* Desktop Menu aligned Right */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          {links.map((link, i) => (
            <motion.div key={i} whileHover={{ scale: 1.1 }}>
              <Link
                to={link.path}
                className="relative text-white font-medium group tracking-wide"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button (Right side) */}
        <button
          className="md:hidden text-2xl text-white ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Popup Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 shadow-lg rounded-b-2xl px-6 py-6 space-y-6"
          >
            {links.map((link, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, x: 10 }}
                className="text-lg font-semibold"
              >
                <Link
                  to={link.path}
                  className="block text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}



