// storage.js
import { STORAGE_KEYS } from "./constants";

/**
 * -----------------------------
 * Generic LocalStorage Helpers
 * -----------------------------
 */
export const getData = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error parsing data from localStorage:", error);
    return null;
  }
};

export const setData = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error setting data to localStorage:", error);
  }
};

export const removeData = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data from localStorage:", error);
  }
};

/**
 * -----------------------------
 * Convenience Wrappers
 * -----------------------------
 */
export const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("storage.save error:", error);
    return false;
  }
};

export const load = (key) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    console.error("storage.load error:", error);
    return null;
  }
};

export const remove = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("storage.remove error:", error);
    return false;
  }
};

/**
 * -----------------------------
 * Auth / Session Helpers
 * -----------------------------
 */
export const getSession = () => load(STORAGE_KEYS.SESSION);

export const setSession = (sessionObj) =>
  save(STORAGE_KEYS.SESSION, sessionObj);

export const clearSession = () => remove(STORAGE_KEYS.SESSION);

export const getUserFromStorage = () => load(STORAGE_KEYS.SESSION);

export const setUserInStorage = (user) => save(STORAGE_KEYS.SESSION, user);

export const clearStorage = () => {
  remove(STORAGE_KEYS.SESSION);
};
