// src/components/StatCard.jsx
import React from "react";

export default function StatCard({
  title,
  value,
  icon,
  colorClass = "bg-blue-500",
}) {
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg shadow-md ${colorClass} text-white`}
    >
      {/* Left: Title & Value */}
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>

      {/* Right: Icon */}
      {icon && <div className="text-3xl">{icon}</div>}
    </div>
  );
}
