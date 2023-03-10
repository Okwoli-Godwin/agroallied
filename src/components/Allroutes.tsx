import React from "react";
import { useRoutes } from "react-router-dom";
import Homescreen from "./Homescreen/Homescreen";
import Signup from "./Signup/Signup";

const Allroutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },

    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return element;
};

export default Allroutes;
