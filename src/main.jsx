import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import Authprovider from "./components/firebase/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient(); // Creating a query client

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Authprovider>
  </StrictMode>
);
