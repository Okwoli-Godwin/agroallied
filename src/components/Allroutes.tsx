import React from "react";
import { useRoutes } from "react-router-dom";
import About from "./About/About";
import Signup from "./Signup/Signup";
import Homescreen from "./Homescreen/Homescreen";
import FarmerDashboard from "./Dashboard/FarmerDashboard";

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
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/Dashboard",
      element: <FarmerDashboard />
    }
  ]);
  return element;
};

export default Allroutes;
