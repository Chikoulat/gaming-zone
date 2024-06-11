import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./pages/Homepage.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import PreBuild from "./pages/PreBuild.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Blog from "./pages/Blog.jsx";
import SingleBlog from "./pages/SingleBlog.jsx";
import Affiliate from "./pages/Affiliate.jsx";
import ShopingCart from "./pages/ShopingCart.jsx";
import Checkout from "./pages/Checkout.jsx";
import SingUp from "./pages/SingUp.jsx";
import Login from "./pages/Login.jsx";
import Error404 from "./pages/Error404.jsx";
import Builder from "./pages/Builder.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sing-up",
        element: <SingUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/builder",
        element: <Builder />,
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
        path: "/shopping-cart",
        element: <ShopingCart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
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
      {
        path: "/*",
        element: <Error404 />,
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
