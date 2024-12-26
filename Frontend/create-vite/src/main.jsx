// src/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";  // Correct default import

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider> {/* Wrap App with AuthProvider */}
      <div className="dark:bg-state-900 dark:text-white">
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>
);
