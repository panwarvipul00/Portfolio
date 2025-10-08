import { useState } from "react";
import { FaPhone, FaLinkedin, FaWhatsapp, FaEnvelope, FaComments, FaGithub } from "react-icons/fa";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6">
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <FaComments />
      </button>

      {/* Contact Options */}
      {open && (
        <div className="mt-2 flex flex-col space-y-2 items-end">
          {/* Phone */}
          <a
            href="tel:+91 6398005375"
            className="bg-green-500 text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <FaPhone />
          </a>

          {/* WhatsApp */}
          

          {/* Gmail */}
          <a
            href="mailto:vipulpanwar1728@gmail.com"
            className="bg-red-500 text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <FaEnvelope />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vipul-panwar-aiml/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/panwarvipul00"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-3 rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <FaGithub />
          </a>
        </div>
      )}
    </div>
  );
}
