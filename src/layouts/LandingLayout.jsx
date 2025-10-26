import React from "react";
import Footer from "../components/Footer";

export default function LandingLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
