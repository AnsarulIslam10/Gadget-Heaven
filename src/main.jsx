import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./components/Dashboard/Dashboard";
import Gadgets from "./components/Gadgets/Gadgets.jsx";
import GadgetDetails from "./components/GadgetDetails/GadgetDetails.jsx";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import { HelmetProvider } from "react-helmet-async";
import Faq from "./components/Faq/Faq.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/products.json"),
        children: [
          {
            path: "/",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("/products.json"),
          },
          {
            path: "/category/:category",
            element: <Gadgets></Gadgets>,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("/products.json"),
        children: [
          {
            path: "/dashboard/cart",
            element: <Cart></Cart>,
          },
          {
            path: "/dashboard/wishlist",
            element: <WishList></WishList>,
            loader: () => fetch("/products.json"),
          },
        ],
      },
      {
        path: "/gadgetDetails/:product_id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
