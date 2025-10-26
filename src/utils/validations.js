// validations.js

// --- Authentication Validations ---

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const validatePassword = (password) => {
  // Minimum 6 characters with at least one number
  const passRegex = /^(?=.*\d).{6,}$/;
  return passRegex.test(password.trim());
};

export const validateLogin = (values) => {
  const errors = {};
  if (!values.email || !validateEmail(values.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!values.password || !validatePassword(values.password)) {
    errors.password =
      "Password must be at least 6 characters and contain a number";
  }
  return errors;
};

export const validateSignup = (values) => {
  const errors = {};
  if (!values.name || values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }
  Object.assign(errors, validateLogin(values));
  return errors;
};

// --- Ticket Validations ---

export const validateTicket = (ticket) => {
  const errors = {};
  if (!ticket.title || ticket.title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters";
  }
  if (!ticket.description || ticket.description.trim().length < 10) {
    errors.description = "Description must be at least 10 characters";
  }
  if (!ticket.priority) {
    errors.priority = "Select a ticket priority";
  }
  return errors;
};
