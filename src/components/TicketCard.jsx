// src/components/TicketCard.jsx
import React from "react";
import { STATUS_COLORS, PRIORITY_COLORS } from "../utils/constants";

export default function TicketCard({ ticket, onEdit, onDelete, onClick }) {
  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      {/* Title */}
      <h3 className="text-lg font-semibold mb-2">{ticket.title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-4">
        {ticket.description.length > 100
          ? ticket.description.slice(0, 100) + "..."
          : ticket.description}
      </p>

      {/* Status & Priority */}
      <div className="flex items-center justify-between mb-4">
        <span
          className={`px-2 py-1 rounded text-sm ${
            STATUS_COLORS[ticket.status]
          }`}
        >
          {ticket.status.replace("_", " ").toUpperCase()}
        </span>
        <span
          className={`px-2 py-1 rounded text-sm ${
            PRIORITY_COLORS[ticket.priority]
          }`}
        >
          {ticket.priority.toUpperCase()}
        </span>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2">
        {onEdit && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(ticket);
            }}
            className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
          >
            Edit
          </button>
        )}
        {onDelete && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(ticket);
            }}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
