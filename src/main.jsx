import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./components/Dashboard/Dashboard";
import Gedgets from "./components/Gedgets/Gedgets";
import GedgetDetails from "./components/GedgetDetails/GedgetDetails";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import { ToastContainer } from "react-toastify";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/products.json"),
        children: [
          {
            path: "/",
            element: <Gedgets></Gedgets>,
            loader: () => fetch("/products.json"),
          },
          {
            path: "/category/:category",
            element: <Gedgets></Gedgets>,
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
          },
        ],
      },
      {
        path: "/gedgetDetails/:product_id",
        element: <GedgetDetails></GedgetDetails>,
        loader: () => fetch("/products.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
  </React.StrictMode>
);
