// // src/utils/storage.js
// export const load = (key, fallback = null) => {
//   try {
//     const raw = localStorage.getItem(key);
//     return raw ? JSON.parse(raw) : fallback;
//   } catch {
//     return fallback;
//   }
// };

// export const save = (key, data) => {
//   try {
//     localStorage.setItem(key, JSON.stringify(data));
//   } catch {}
// };



// src/utils/localStorage.js

// Save data to localStorage
export const save = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error("Error saving to localStorage", error);
  }
};

// Load data from localStorage
export const load = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error loading from localStorage", error);
    return null;
  }
};

// Remove data from localStorage
export const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage", error);
  }
};
