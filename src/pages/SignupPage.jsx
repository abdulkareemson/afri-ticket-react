import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import toast from "react-hot-toast";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const success = await signup({ name, email, password });
      if (success) {
        toast.success("Account created successfully");
        navigate("/dashboard");
      } else {
        toast.error("Signup failed. Try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 w-full md:w-auto p-6 sm:p-8 bg-white rounded-2xl shadow-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Left side: Logo and welcome */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 gap-4">
            <img src={logo} alt="AfriTicket Logo" className="h-16 mb-2" />
            <h2 className="text-3xl font-bold text-gray-800">Create Account</h2>
            <p className="text-gray-600">
              Sign up to start managing your events and tickets effortlessly.
            </p>
          </div>

          {/* Right side: Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full md:w-1/2"
          >
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="mt-1 w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-700">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className="mt-1 w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Creating..." : "Sign Up"}
            </button>

            <p className="mt-2 text-center text-gray-600 text-sm">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
