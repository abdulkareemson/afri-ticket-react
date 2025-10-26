import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
