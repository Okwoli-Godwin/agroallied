import React from "react";
import { useRoutes } from "react-router-dom";
import About from "../components/About/About"
import Signup from "./Signup/Signup";
import Homescreen from "./Homescreen/Homescreen";
import Dashboard from "./DashBoard/Dashboard";

const Allroutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/who we are",
      element: <About />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return element;
};

export default Allroutes;
