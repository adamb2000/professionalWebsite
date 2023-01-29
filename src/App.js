import * as React from "react";
import HomePage from './views/HomePage';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
 
  return (
    <RouterProvider router={router} />
  )

}


