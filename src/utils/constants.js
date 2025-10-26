// constants.js

export const APP_NAME = "AfriTicket";

// ---- Ticket Statuses ----
export const TICKET_STATUSES = {
  OPEN: "open",
  IN_PROGRESS: "in_progress",
  CLOSED: "closed",
};

// ---- Ticket Priorities ----
export const TICKET_PRIORITIES = {
  LOW: "low",
  MEDIUM: "medium",
  HIGH: "high",
};

// ---- Status Color Mapping ----
export const STATUS_COLORS = {
  [TICKET_STATUSES.OPEN]: "bg-green-500 text-white",
  [TICKET_STATUSES.IN_PROGRESS]: "bg-yellow-500 text-black",
  [TICKET_STATUSES.CLOSED]: "bg-gray-500 text-white",
};

// ---- Priority Color Mapping ----
export const PRIORITY_COLORS = {
  [TICKET_PRIORITIES.LOW]: "bg-blue-500 text-white",
  [TICKET_PRIORITIES.MEDIUM]: "bg-orange-500 text-white",
  [TICKET_PRIORITIES.HIGH]: "bg-red-600 text-white",
};

// ---- Storage Keys ----
export const STORAGE_KEYS = {
  USERS: "ticketapp_users",
  SESSION: "ticketapp_session",
  TICKETS: "ticketapp_tickets",
};
