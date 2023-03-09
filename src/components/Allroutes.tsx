import React from 'react'
import {useRoutes} from "react-router-dom"
import Homescreen from './Homescreen/Homescreen'

const Allroutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <Homescreen />
        }
    ])
  return element
}

export default Allroutes