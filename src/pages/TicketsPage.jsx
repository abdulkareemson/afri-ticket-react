// src/pages/TicketsPage.jsx
import React, { useState, useMemo } from "react";
import { useTickets } from "../context/TicketContext";
import TicketCard from "../components/TicketCard";
import TicketForm from "../components/TicketForm";
import ModalConfirm from "../components/ModalConfirm";
import toast from "react-hot-toast";

export default function TicketsPage() {
  const { tickets, createTicket, updateTicket, deleteTicket } = useTickets();

  const [showForm, setShowForm] = useState(false);
  const [editingTicket, setEditingTicket] = useState(null);
  const [ticketToDelete, setTicketToDelete] = useState(null);

  // --- Dashboard Stats ---
  const stats = useMemo(() => {
    return {
      open: tickets.filter((t) => t.status === "open").length,
      inProgress: tickets.filter((t) => t.status === "in_progress").length,
      closed: tickets.filter((t) => t.status === "closed").length,
      total: tickets.length,
    };
  }, [tickets]);

  // --- Handlers ---
  const handleCreate = () => {
    setEditingTicket(null);
    setShowForm(true);
  };

  const handleEdit = (ticket) => {
    setEditingTicket(ticket);
    setShowForm(true);
  };

  const handleDelete = (ticket) => {
    setTicketToDelete(ticket);
  };

  const handleFormSubmit = (ticketData) => {
    if (editingTicket) {
      updateTicket(editingTicket.id, ticketData);
      toast.success("Ticket updated successfully");
    } else {
      createTicket(ticketData);
      toast.success("Ticket created successfully");
    }
    setShowForm(false);
  };

  const confirmDelete = () => {
    if (ticketToDelete) {
      deleteTicket(ticketToDelete.id);
      toast.success("Ticket deleted successfully");
      setTicketToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Header + Stats */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <h1 className="text-3xl font-bold">Tickets</h1>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          + Create Ticket
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-gray-500">Total</p>
          <p className="text-2xl font-bold">{stats.total}</p>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-gray-500">Open</p>
          <p className="text-2xl font-bold text-green-600">{stats.open}</p>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-gray-500">In Progress</p>
          <p className="text-2xl font-bold text-yellow-600">
            {stats.inProgress}
          </p>
        </div>
        <div className="bg-white rounded shadow p-4 text-center">
          <p className="text-gray-500">Closed</p>
          <p className="text-2xl font-bold text-gray-600">{stats.closed}</p>
        </div>
      </div>

      {/* Ticket List */}
      {tickets.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center mt-10">
          No tickets found. Create one to get started.
        </p>
      )}

      {/* Ticket Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
          <TicketForm
            initialData={editingTicket}
            onSubmitSuccess={() => setShowForm(false)}
          />
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {ticketToDelete && (
        <ModalConfirm
          message={`Are you sure you want to delete "${ticketToDelete.title}"?`}
          onConfirm={confirmDelete}
          onCancel={() => setTicketToDelete(null)}
        />
      )}
    </div>
  );
}
