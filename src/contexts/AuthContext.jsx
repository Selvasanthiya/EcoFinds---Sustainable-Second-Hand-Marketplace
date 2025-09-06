// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { load, save } from "../utils/storage";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(load("eco_auth", null));
  const [users, setUsers] = useState(load("eco_users", []) || []);

  // Persist
  useEffect(() => save("eco_auth", user), [user]);
  useEffect(() => save("eco_users", users), [users]);

  // Seed demo user if none
  useEffect(() => {
    if (!users || users.length === 0) {
      const seed = [{ id: "u1", email: "alice@example.com", password: "pass123", username: "alice" }];
      setUsers(seed);
    }
  }, []);

  const register = ({ email, password, username }) => {
    if (users.find((u) => u.email === email)) return { ok: false, message: "Email already registered" };
    const id = "u_" + Math.random().toString(36).slice(2, 9);
    const newUser = { id, email, password, username };
    setUsers((p) => [...p, newUser]);
    setUser({ id, email, username });
    return { ok: true };
  };

  const login = ({ email, password }) => {
    const u = users.find((x) => x.email === email && x.password === password);
    if (!u) return { ok: false, message: "Invalid credentials" };
    setUser({ id: u.id, email: u.email, username: u.username });
    return { ok: true };
  };

  const logout = () => {
    setUser(null);
  };

  const updateProfile = (changes) => {
    if (!user) return;
    setUsers((p) => p.map((u) => (u.id === user.id ? { ...u, ...changes } : u)));
    setUser((u) => ({ ...u, ...changes }));
  };

  return <AuthContext.Provider value={{ user, register, login, logout, updateProfile }}>{children}</AuthContext.Provider>;
}
