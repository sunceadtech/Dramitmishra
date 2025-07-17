import React from "react";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
function TopComp() {
  return (
    <>
      {/*top compobar */}
      <div className="bg-gray-600 text-white px-4 py-3 md:h-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto w-full max-w-screen-xl">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm">
            <div className="flex items-center gap-1">
              <FiPhone className="text-white" />
              <span>+91-8750056560 / 8826629486</span>
            </div>
            <div className="flex items-center gap-1">
              <MdEmail className="text-white" />
              <span>amit9851@yahoo.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-2 md:mt-0">
            <a
              href="https://www.facebook.com/profile?id=61560396193559"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 cursor-pointer transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-sharma-175232a4/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 cursor-pointer transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/amit9851?utm_source=qr&igsh=dG5tZXlxdXJoendk"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 cursor-pointer transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopComp;
