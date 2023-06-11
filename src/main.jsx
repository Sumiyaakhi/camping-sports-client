import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Routes";
import AuthProviders from "./Providers/AuthProviders";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="">
    <React.StrictMode>
      <HelmetProvider>
        <AuthProviders>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </AuthProviders>
      </HelmetProvider>
    </React.StrictMode>
  </div>
);
