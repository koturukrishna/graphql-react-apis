import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import UpdateUserData from "./components/UpdateUserData.jsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import UsersData from "./components/UsersData";
import CreateUser from "./components/CreateUser.jsx";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/edit",
    element: (
      <div>
        <h1>Edit ok</h1>
        <UpdateUserData></UpdateUserData>
      </div>
    ),
    errorElement: <p>Something went wrong.</p>, // ✅ fallback UI
  },
  {
    path: "/create",
    element: <CreateUser></CreateUser>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
