import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // Named import

// Layouts
import LandingLayout from "../layouts/LandingLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

// Pages
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Dashboard from "../pages/Dashboard";
import TicketsPage from "../pages/TicketsPage";
import TicketDetails from "../pages/TicketDetails";
import NotFound from "../pages/NotFound";

// PrivateRoute checks authentication
function PrivateRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

// PublicRoute redirects logged-in users
function PublicRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Navigate to="/dashboard" replace /> : children;
}

export default function AppRouter() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route
        path="/"
        element={
          <LandingLayout>
            <LandingPage />
          </LandingLayout>
        }
      />

      {/* Auth Pages */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <AuthLayout>
              <LoginPage />
            </AuthLayout>
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <AuthLayout>
              <SignupPage />
            </AuthLayout>
          </PublicRoute>
        }
      />

      {/* Dashboard & Ticket Management (Private) */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <TicketsPage />
            </DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/tickets/:id"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <TicketDetails />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      {/* Catch-all 404 */}
      <Route
        path="*"
        element={
          <LandingLayout>
            <NotFound />
          </LandingLayout>
        }
      />
    </Routes>
  );
}
