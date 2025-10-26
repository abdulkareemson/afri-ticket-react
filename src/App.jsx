// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";
import { TicketProvider } from "./context/TicketContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TicketProvider>
          <AppRouter />
          <Toaster position="top-center" />
        </TicketProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
