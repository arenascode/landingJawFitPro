import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { PurchaseContextProvider } from "./context/PurchaseContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <PurchaseContextProvider>
        <App />
      </PurchaseContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
