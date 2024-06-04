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
import SingleProduct from "./pages/SingleProduct.jsx";
import Blog from "./pages/Blog.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import Affiliate from "./pages/Affiliate.jsx";

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
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/pre-build/:id",
        element: <PreBuild />,
      },

      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/become-affiliate",
        element: <Affiliate />,
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
