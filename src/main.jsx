import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Dashboard from "./components/Dashboard/Dashboard";
import Gedgets from "./components/Gedgets/Gedgets";
import GedgetDetails from "./components/GedgetDetails/GedgetDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('./products.json'),
        
        children: [
          {
            path: '/',
            element: <Gedgets></Gedgets>,
            loader: ()=> fetch('./products.json'),
          },
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/gedgetDetails/:product_id',
        element: <GedgetDetails></GedgetDetails>,
        loader: ()=> fetch('./products.json')
       }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
