// src/pages/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-6">Page not found.</p>
      <Link to="/" className="px-4 py-2 bg-primary text-white rounded">
        Go home
      </Link>
    </main>
  );
}
