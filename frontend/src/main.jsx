import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";
import { ChatProvider } from "./context/Chatcontext.jsx";

export const server = "http://localhost:5000";


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <ChatProvider>
      <App />
      </ChatProvider>
    </UserProvider>
  </StrictMode>
);
