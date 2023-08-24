import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Admin Imports

import MainHome from "components/Menus/MainHome";
import Flight from "components/Menus/Flight";
import Bookings from "components/Menus/Bookings";
import BusManagement from "components/Menus/BusManagement";
import ToursHotel from "components/Menus/ToursHotel";
import HotelManagement from "components/Menus/HotelManagement";
// Auth Imports

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainHome,
  },
  {
    name: "Flights Management ",
    layout: "/admin",
    path: "/flight-management",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Flight,
  },

  {
    name: "Bookings",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    path: "/bookings",
    component: Bookings,
  },

  {
    name: "Buses Management  ",
    layout: "/admin",
    path: "/bus-management",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: BusManagement,
  },
  {
    name: "Tours & Hotel ",
    layout: "/admin",
    path: "/tourshotel",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: ToursHotel,
  },
  {
    name: "Hotel Management",
    layout: "/admin",
    path: "/Hotel-Management",
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: HotelManagement,
  },
];

export default routes;
