import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/globals.css";
import { ContextProvider } from "./store/Context.jsx";
import { AuthContextProvider } from "./store/AuthContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </AuthContextProvider>
);
