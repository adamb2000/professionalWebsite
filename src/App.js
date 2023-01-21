import './App.css';
import * as React from "react";
import Index from './views/Index';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
  ]);
 
  return (
    <RouterProvider router={router} />
  )

}


