import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSession, setSession, clearSession } from "../utils/storage";
import { fakeLogin, fakeSignup } from "../utils/fakeApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const session = getSession();
    if (session?.user) setUser(session.user);
    setLoading(false);
  }, []);

  const signup = async ({ name, email, password }) => {
    try {
      const newUser = await fakeSignup({ name, email, password });
      if (newUser) {
        setSession({ user: newUser });
        setUser(newUser);
        return true;
      }
      return false;
    } catch (err) {
      console.error("Signup failed:", err);
      return false;
    }
  };

  const login = async ({ email, password }) => {
    try {
      const loggedInUser = await fakeLogin({ email, password });
      if (loggedInUser) {
        setSession({ user: loggedInUser });
        setUser(loggedInUser);
        return true; // ✅ this is important
      }
      return false;
    } catch (err) {
      console.error("Login failed:", err);
      return false;
    }
  };

  const logout = () => {
    clearSession();
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
