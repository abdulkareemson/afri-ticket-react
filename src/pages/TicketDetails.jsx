import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTickets } from "../context/TicketContext";
import {
  STATUS_COLORS,
  PRIORITY_COLORS,
  TICKET_STATUSES,
  TICKET_PRIORITIES,
} from "../utils/constants";
import toast from "react-hot-toast";

export default function TicketDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tickets, updateTicketStatus, updateTicketPriority, deleteTicket } =
    useTickets();

  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    const found = tickets.find((t) => t.id === id);
    if (!found) {
      toast.error("Ticket not found");
      navigate("/tickets");
    } else {
      setTicket(found);
    }
  }, [id, tickets, navigate]);

  if (!ticket) return null;

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    updateTicketStatus(ticket.id, newStatus);
    toast.success("Status updated");
  };

  const handlePriorityChange = (e) => {
    const newPriority = e.target.value;
    updateTicketPriority(ticket.id, newPriority);
    toast.success("Priority updated");
  };

  const handleDelete = () => {
    deleteTicket(ticket.id);
    toast.success("Ticket deleted");
    navigate("/tickets");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        <button
          onClick={() => navigate("/tickets")}
          className="mb-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
        >
          ← Back to Tickets
        </button>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{ticket.title}</h2>
          <p className="text-gray-700 mb-4">{ticket.description}</p>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-4">
            <div>
              <label className="block font-semibold mb-1">Status:</label>
              <select
                value={ticket.status}
                onChange={handleStatusChange}
                className={`px-3 py-2 rounded ${STATUS_COLORS[ticket.status]}`}
              >
                {Object.values(TICKET_STATUSES).map((status) => (
                  <option key={status} value={status}>
                    {status.replace("_", " ").toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-1">Priority:</label>
              <select
                value={ticket.priority}
                onChange={handlePriorityChange}
                className={`px-3 py-2 rounded ${
                  PRIORITY_COLORS[ticket.priority]
                }`}
              >
                {Object.values(TICKET_PRIORITIES).map((priority) => (
                  <option key={priority} value={priority}>
                    {priority.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-gray-500 text-sm mt-4 space-y-1">
            <p>Created at: {new Date(ticket.createdAt).toLocaleString()}</p>
            <p>Last updated: {new Date(ticket.updatedAt).toLocaleString()}</p>
          </div>

          <button
            onClick={handleDelete}
            className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Delete Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
