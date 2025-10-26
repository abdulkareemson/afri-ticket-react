// src/components/ToastProvider.jsx
import React, { createContext, useContext } from "react";
import { Toaster, toast } from "react-hot-toast";

// Create context for easy toast access
const ToastContext = createContext();

// Custom hook to use toast functions
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

// ToastProvider component
export const ToastProvider = ({ children }) => {
  // Wrap react-hot-toast functions
  const showSuccess = (message) => toast.success(message);
  const showError = (message) => toast.error(message);
  const showInfo = (message) => toast(message);
  const showPromise = (promise, { loading, success, error }) =>
    toast.promise(promise, { loading, success, error });

  return (
    <ToastContext.Provider
      value={{ showSuccess, showError, showInfo, showPromise }}
    >
      {children}
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "14px",
          },
        }}
      />
    </ToastContext.Provider>
  );
};
