import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Config from "./pages/Config.jsx";
import PreBuild from "./pages/PreBuild.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/config",
        element: <Config />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/pre-build/:id",
        element: <PreBuild />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
