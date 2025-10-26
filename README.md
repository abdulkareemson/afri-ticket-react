````markdown
# AfriTicket – Ticket Management Web App

AfriTicket is a **full-featured, responsive ticket management web application** built with **React**. It allows users to **create, view, edit, and delete support tickets**, track ticket status and priority, and see dashboard statistics. The app currently uses **localStorage** for data persistence and can be extended to a real backend.

---

## Live Demo

## **Live Link:**

## Features

- **CRUD Ticket Management** – Create, read, update, and delete tickets.
- **Ticket Details** – View full ticket information including description, status, and priority.
- **Dashboard Stats** – Real-time stats for open, in-progress, and closed tickets.
- **Responsive Design** – Works on desktop, tablet, and mobile screens.
- **Modal Forms** – Smooth modal forms for creating and editing tickets.
- **Status & Priority Badges** – Visual indicators for ticket progress and urgency.
- **Persistent Storage** – Tickets persist across page refresh using localStorage.
- **Notifications** – Success/error messages via `react-hot-toast`.

---

## Tech Stack

- **Frontend:** React, React Router, Tailwind CSS
- **State Management:** Context API
- **Storage:** localStorage
- **Utilities:** React Hot Toast

---

## Installation

1. **Clone the repo**

```bash
git clone https://github.com/abdulkareemson/afri-ticket-react.git
cd afri-ticket-react
```
````

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The app should open at `http://localhost:5173`.

---

## Usage

1. Click **+ Create Ticket** to add a new ticket.
2. Click **View** on a ticket card to see details and update status or priority.
3. Click **Edit** to modify a ticket.
4. Click **Delete** to remove a ticket (with confirmation modal).

---

## Folder Structure

```
src/
├─ components/    # Reusable UI components (TicketCard, TicketForm, ModalConfirm)
├─ context/       # Context API for tickets
├─ pages/         # Page components (TicketsPage, TicketDetails)
├─ utils/         # Constants, validations, storage helpers
└─ App.jsx        # Main app with routing
```
