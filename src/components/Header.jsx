// src/components/Header.jsx
import React from "react";
import "../styles/Header.css";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="app-header">
      <div className="container">
        <div className="brand">
          <span className="brand-name">WeWantWaste</span>
        </div>
        <div className="header-right">
          <span className="page-title">Skip Selector</span>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
}
