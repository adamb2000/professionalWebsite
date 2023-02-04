import * as React from "react";
import HomePage from './views/HomePage';
import EnterDetails from "./views/EnterDetails";
import ErrorPage from "./views/ErrorPage";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/details",
      element: <EnterDetails/>
    }
  ]);
 
  return (
    <RouterProvider router={router} />
  )

}


