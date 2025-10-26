// src/pages/Dashboard.jsx
import React from "react";
import { useTickets } from "../context/TicketContext";
import { useAuth } from "../context/AuthContext";
import StatCard from "../components/StatCard";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { tickets } = useTickets();
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  // Calculate summary stats
  const totalTickets = tickets.length;
  const openTickets = tickets.filter((t) => t.status === "open").length;
  const inProgressTickets = tickets.filter(
    (t) => t.status === "in_progress"
  ).length;
  const resolvedTickets = tickets.filter((t) => t.status === "closed").length;

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold">Welcome, {user?.name || "User"}</h1>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => navigate("/tickets")}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Manage Tickets
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        <StatCard
          title="Total Tickets"
          value={totalTickets}
          color="bg-blue-500"
        />
        <StatCard
          title="Open Tickets"
          value={openTickets}
          color="bg-green-500"
        />
        <StatCard
          title="In Progress"
          value={inProgressTickets}
          color="bg-yellow-500"
        />
        <StatCard
          title="Resolved Tickets"
          value={resolvedTickets}
          color="bg-gray-500"
        />
      </div>
    </div>
  );
}
