// src/context/TicketContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { STORAGE_KEYS, TICKET_STATUSES, TICKET_PRIORITIES } from "../utils/constants";
import { getData, setData } from "../utils/storage";

const TicketContext = createContext();
export const useTickets = () => useContext(TicketContext);

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  // Load tickets from localStorage on mount
  useEffect(() => {
    const stored = getData(STORAGE_KEYS.TICKETS);
    if (stored && Array.isArray(stored)) {
      setTickets(stored);
    } else {
      setTickets([]);
      setData(STORAGE_KEYS.TICKETS, []);
    }
  }, []);

  // Persist tickets to localStorage whenever they change
  useEffect(() => {
    setData(STORAGE_KEYS.TICKETS, tickets);
  }, [tickets]);

  // Create
  const createTicket = (ticketData) => {
    const newTicket = {
      id: Date.now().toString(),
      title: ticketData.title,
      description: ticketData.description,
      priority: ticketData.priority || TICKET_PRIORITIES.LOW,
      status: TICKET_STATUSES.OPEN,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      user: ticketData.user || "anonymous",
    };
    setTickets((prev) => [...prev, newTicket]);
    return newTicket;
  };

  // Update
  const updateTicket = (id, updates) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, ...updates, updatedAt: new Date().toISOString() } : t
      )
    );
  };

  // Delete
  const deleteTicket = (id) => {
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  // Update status
  const updateTicketStatus = (id, status) => {
    if (!Object.values(TICKET_STATUSES).includes(status)) return;
    updateTicket(id, { status });
  };

  // Update priority
  const updateTicketPriority = (id, priority) => {
    if (!Object.values(TICKET_PRIORITIES).includes(priority)) return;
    updateTicket(id, { priority });
  };

  // Clear all tickets
  const clearTickets = () => {
    setTickets([]);
    setData(STORAGE_KEYS.TICKETS, []);
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        createTicket,
        updateTicket,
        updateTicketStatus,
        updateTicketPriority,
        deleteTicket,
        clearTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};
