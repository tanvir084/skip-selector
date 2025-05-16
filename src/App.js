// src/App.js
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SkipSelectPage from "./components/SkipSelectPage";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Whenever theme changes, update HTML attribute & persist
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <SkipSelectPage />
      </main>
      <Footer />
    </>
  );
}
