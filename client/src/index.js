import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContexProvider } from "./context/authContext";
import axios from "axios";

// Ensures Axios sends credentials (like JWT tokens) with every request
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>
);
