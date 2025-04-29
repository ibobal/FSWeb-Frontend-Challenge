import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored) return JSON.parse(stored);
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const getInitialLanguage = () => {
  const stored = localStorage.getItem("language");
  return stored ? JSON.parse(stored) : "tr";
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    theme: getInitialTheme(),
    language: getInitialLanguage(),
  },
  reducers: {
    setTheme(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", JSON.stringify(state.theme));
    },
    setLanguage(state) {
      state.language = state.language === "tr" ? "en" : "tr";
      localStorage.setItem("language", JSON.stringify(state.language));
    },
  },
});

export const { setTheme, setLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
