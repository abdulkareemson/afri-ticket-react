import React, { createContext, useContext, useState, useEffect } from "react";
import { STORAGE_KEYS } from "../utils/constants";

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  // --- Load tickets from localStorage on mount ---
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TICKETS);
      if (saved) setTickets(JSON.parse(saved));
    } catch (err) {
      console.error("Failed to load tickets:", err);
    }
  }, []);

  // --- Persist tickets to localStorage on every change ---
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(tickets));
  }, [tickets]);

  // --- CRUD Operations ---
  const createTicket = (data) => {
    const newTicket = {
      id: Date.now().toString(),
      ...data,
      status: "open",
      priority: data.priority || "medium",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setTickets((prev) => [...prev, newTicket]);
  };

  const updateTicket = (id, updates) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id
          ? { ...ticket, ...updates, updatedAt: new Date().toISOString() }
          : ticket
      )
    );
  };

  const deleteTicket = (id) => {
    setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
  };

  const updateTicketStatus = (id, newStatus) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              status: newStatus,
              updatedAt: new Date().toISOString(),
            }
          : ticket
      )
    );
  };

  const updateTicketPriority = (id, newPriority) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id
          ? {
              ...ticket,
              priority: newPriority,
              updatedAt: new Date().toISOString(),
            }
          : ticket
      )
    );
  };

  return (
    <TicketContext.Provider
      value={{
        tickets,
        createTicket,
        updateTicket,
        deleteTicket,
        updateTicketStatus,
        updateTicketPriority,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => useContext(TicketContext);
