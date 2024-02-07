import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout/UserLayout";
import Hero from "./Components/Hero/Hero";
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

export default function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        { index: true, element: <Hero/> },
        { path: "hero", element: <Hero/> },
        { path: "about", element: <About/> },
        { path: "portfolio", element: <Portfolio/> },
        { path: "contact", element: <Contact/> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
