import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 1 - router configuration

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";
import ErrorPage from "./routes/ErrorPage";
import ContactDetails from "./routes/ContactDetails";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "contact",
//     element: <Contact />
//   },
// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 3 - error page
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 5 - nested routes - unique identifier - dynamic routes
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      // 7 - navigate to non-existing pages
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
