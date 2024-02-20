import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { FilterProvider } from "./context";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <ToastContainer
          closeButton={false}
          autoClose={3000}
          position={"bottom-right"}
        />
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>
);
