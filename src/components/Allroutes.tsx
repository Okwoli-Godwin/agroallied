import React from "react";
import { useRoutes } from "react-router-dom";
import About from "./About/About";
import Signup from "./Signup/Signup";
import Homescreen from "./Homescreen/Homescreen";

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
  ]);
  return element;
};

export default Allroutes;
