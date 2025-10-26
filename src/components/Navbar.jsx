// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        <img src={logo} alt="AfriTicket Logo" className="h-12 w-auto" />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        <Link
          to="/dashboard"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Dashboard
        </Link>
        <Link
          to="/tickets"
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Tickets
        </Link>
        <span className="text-gray-500">Hello, {user?.name}</span>
        <button
          onClick={logout}
          className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <MobileMenu user={user} logout={logout} />
      </div>
    </nav>
  );
}

// Mobile dropdown menu
function MobileMenu({ user, logout }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-700 focus:outline-none text-2xl"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md flex flex-col p-2 z-50">
          <Link
            to="/dashboard"
            className="py-2 px-3 hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/tickets"
            className="py-2 px-3 hover:bg-gray-100 rounded"
            onClick={() => setOpen(false)}
          >
            Tickets
          </Link>
          <span className="py-2 px-3 text-gray-500">Hello, {user?.name}</span>
          <button
            onClick={logout}
            className="py-2 px-3 mt-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
