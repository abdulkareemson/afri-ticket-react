// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-6">
      <h1 className="text-7xl font-extrabold text-blue-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 text-center max-w-md mb-6">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>

      <div className="flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 rounded-md bg-gray-300 hover:bg-gray-400 transition"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
