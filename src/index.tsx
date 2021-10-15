import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// REACT QUERY IMPORTS
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Modal from "react-modal";

// TOAST IMPORTS
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import AuthContextProvider from "./Context.ts/AuthContext";

import "./index.css";

const queryClient = new QueryClient({});

Modal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
