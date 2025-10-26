import React, { useState, useEffect } from "react";
import { useTickets } from "../context/TicketContext";
import { TICKET_PRIORITIES } from "../utils/constants";
import { validateTicket } from "../utils/validations";

const TicketForm = ({ initialData, onSubmitSuccess }) => {
  const { createTicket, updateTicket } = useTickets();

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: TICKET_PRIORITIES.LOW,
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateTicket(form);
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    if (initialData) {
      updateTicket(initialData.id, form);
    } else {
      createTicket(form);
      setForm({ title: "", description: "", priority: TICKET_PRIORITIES.LOW });
    }

    setErrors({});
    if (onSubmitSuccess) onSubmitSuccess();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">
          {initialData ? "Edit Ticket" : "Create Ticket"}
        </h2>

        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div>
          <label className="block font-medium mb-1">Priority</label>
          <select
            name="priority"
            value={form.priority}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {Object.values(TICKET_PRIORITIES).map((p) => (
              <option key={p} value={p}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {initialData ? "Update Ticket" : "Create Ticket"}
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
