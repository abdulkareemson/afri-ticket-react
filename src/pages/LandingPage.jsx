import logo from "../assets/logo.png";
import heroImage from "../assets/hero.jpg";
import circle1 from "../assets/circle-1.svg";
import circle2 from "../assets/circle-2.svg";
import wave from "../assets/wave.svg";
import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Navigation Bar */}
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="AfriTicket Logo" className="h-10" />
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a
              href="#home"
              className="hover:text-blue-600 hover:underline transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-blue-600 hover:underline transition"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 hover:underline transition"
            >
              Contact
            </a>
          </div>

          {/* Right: Auth Buttons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="/login"
              className="px-4 py-2 border border-gray-700 rounded hover:bg-gray-100 transition"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-2 px-4 py-4 text-gray-700 font-medium">
              <li>
                <a href="#home" onClick={() => setMobileOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMobileOpen(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="px-4 py-2 border border-gray-700 rounded hover:bg-gray-100 transition block"
                  onClick={() => setMobileOpen(false)}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  href="/signup"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition block"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative w-full flex items-start justify-start pt-16 md:pt-20"
      >
        <div className="relative w-full h-[90vh] md:h-[85vh] lg:h-[80vh]">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover object-top brightness-75"
          />
          <img
            src={circle1}
            alt="Circle 1"
            className="absolute top-10 left-10 w-32 h-32"
          />
          <img
            src={circle2}
            alt="Circle 2"
            className="absolute bottom-10 right-20 w-40 h-40"
          />
          <img src={wave} alt="Wave" className="absolute bottom-0 w-full" />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 flex items-start justify-start max-w-[1440px] mx-auto px-6 py-24 md:py-32 flex-col gap-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold max-w-2xl">
            AfriTicket
          </h1>
          <p className="text-lg md:text-2xl max-w-xl">
            Manage your events and tickets seamlessly with AfriTicket. Create,
            track, and resolve tickets easily from one modern platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="px-6 py-3 border border-white rounded-lg text-white font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Login
            </a>
          </div>
        </div>
      </section>

      {/* Placeholder Features Section */}
      <section
        id="about"
        className="max-w-[1440px] mx-auto px-6 py-24 flex flex-col items-center text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
          Why Choose AfriTicket?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 w-full">
          {[
            {
              title: "Easy Management",
              description:
                "Quickly create and track tickets for events or support requests.",
            },
            {
              title: "Real-time Updates",
              description:
                "Stay informed with real-time ticket status updates and notifications.",
            },
            {
              title: "Secure Platform",
              description:
                "Your data is safe and accessible only by authorized users.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section Placeholder */}
      <section
        id="contact"
        className="max-w-[1440px] mx-auto px-6 py-24 flex flex-col items-center text-center bg-gray-50"
      >
        <motion.div
          className="w-full md:w-2/3 lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact Us
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Have questions or need support? Reach out to us and we'll respond
            promptly.
          </p>
          <a
            href="mailto:support@afriticket.com"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            <HiOutlineMail className="text-lg" /> Email Support
          </a>
        </motion.div>
      </section>
    </div>
  );
}
