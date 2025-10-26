// fakeApi.js
import { STORAGE_KEYS } from "./constants";
import { getData, setData } from "./storage";

/**
 * Simulate network delay (like a real API)
 */
const simulateDelay = (ms = 600) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Load users from localStorage
 */
const loadUsers = () => getData(STORAGE_KEYS.USERS) || [];

/**
 * Save users back to localStorage
 */
const saveUsers = (users) => setData(STORAGE_KEYS.USERS, users);

/**
 * ---- AUTH SECTION ----
 */

/**
 * Signup user (simulated API)
 * @param {{ name: string, email: string, password: string }} data
 */
export const fakeSignup = async (data) => {
  await simulateDelay();

  const { name, email, password } = data;

  if (!name || !email || !password) {
    throw new Error("All fields are required.");
  }

  const users = loadUsers();

  const existingUser = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase()
  );
  if (existingUser) {
    throw new Error("Email is already registered.");
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password, // NOTE: In production, passwords would be hashed
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
};

/**
 * Login user (simulated API)
 * @param {{ email: string, password: string }} credentials
 */
export const fakeLogin = async (credentials) => {
  await simulateDelay();

  const { email, password } = credentials;

  if (!email || !password) {
    throw new Error("Email and password are required.");
  }

  const users = loadUsers();

  const user = users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );

  if (!user) {
    throw new Error("Invalid email or password.");
  }

  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};

/**
 * ---- TICKET SECTION ----
 * These functions simulate CRUD operations for tickets.
 * They are optional but useful for your TicketsPage and Dashboard.
 */

/**
 * Load all tickets
 */
export const getTickets = async () => {
  await simulateDelay();
  return getData(STORAGE_KEYS.TICKETS) || [];
};

/**
 * Create a new ticket
 */
export const createTicket = async (ticket) => {
  await simulateDelay();

  if (!ticket.title || !ticket.status) {
    throw new Error("Title and status are required.");
  }

  const tickets = getData(STORAGE_KEYS.TICKETS) || [];

  const newTicket = {
    id: Date.now(),
    title: ticket.title,
    description: ticket.description || "",
    status: ticket.status,
    priority: ticket.priority || "medium",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  tickets.push(newTicket);
  setData(STORAGE_KEYS.TICKETS, tickets);

  return newTicket;
};

/**
 * Update a ticket by ID
 */
export const updateTicket = async (id, updates) => {
  await simulateDelay();

  const tickets = getData(STORAGE_KEYS.TICKETS) || [];
  const index = tickets.findIndex((t) => t.id === id);

  if (index === -1) throw new Error("Ticket not found.");

  const updated = {
    ...tickets[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  tickets[index] = updated;
  setData(STORAGE_KEYS.TICKETS, tickets);
  return updated;
};

/**
 * Delete a ticket by ID
 */
export const deleteTicket = async (id) => {
  await simulateDelay();

  const tickets = getData(STORAGE_KEYS.TICKETS) || [];
  const updatedTickets = tickets.filter((t) => t.id !== id);

  if (tickets.length === updatedTickets.length) {
    throw new Error("Ticket not found.");
  }

  setData(STORAGE_KEYS.TICKETS, updatedTickets);
  return true;
};
