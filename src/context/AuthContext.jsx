import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSession, setSession, clearSession } from "../utils/storage";
import { STORAGE_KEYS } from "../utils/constants";
import { fakeLogin, fakeSignup } from "../utils/fakeApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- Restore session on mount ---
  useEffect(() => {
    const existingSession = getSession();
    if (existingSession?.user) {
      setUser(existingSession.user);
    }
    setLoading(false);
  }, []);

  // --- Signup function ---
  const signup = async (credentials) => {
    setLoading(true);
    try {
      const newUser = await fakeSignup(credentials);
      setSession({ user: newUser });
      setUser(newUser);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // --- Login function ---
  const login = async (credentials) => {
    setLoading(true);
    try {
      const loggedInUser = await fakeLogin(credentials);
      setSession({ user: loggedInUser });
      setUser(loggedInUser);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // --- Logout function ---
  const logout = () => {
    clearSession();
    setUser(null);
    navigate("/login");
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
