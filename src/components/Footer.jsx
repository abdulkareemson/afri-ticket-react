// src/components/Footer.jsx
import React from "react";
import logo from "../assets/logo.png";
import { HiOutlineMail } from "react-icons/hi";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row justify-between items-center md:items-center gap-10">
        {/* Logo & Description (left side on desktop) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
          <img src={logo} alt="AfriTicket Logo" className="h-12 mb-2" />
          <p className="text-sm text-gray-400 max-w-xs">
            AfriTicket — Your all-in-one platform for ticket management and
            event tracking.
          </p>
        </div>

        {/* Contact Links (right side on desktop) */}
        <div className="flex flex-col items-center md:items-end text-sm text-gray-400 flex-1 space-y-3">
          <a
            href="mailto:abdulkareemson@gmail.com"
            className="hover:text-white transition flex items-center gap-2"
          >
            <HiOutlineMail className="text-lg" /> abdulkareemson@gmail.com
          </a>
          <a
            href="https://twitter.com/abdulkareemson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition flex items-center gap-2"
          >
            <FaTwitter className="text-lg" /> @abdulkareemson
          </a>
          <a
            href="https://github.com/abdulkareemson"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition flex items-center gap-2"
          >
            <FaGithub className="text-lg" /> GitHub Profile
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 mt-6 pt-4 mb-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} AfriTicket. All rights reserved.
      </div>
    </footer>
  );
}
