import Navbar from "../ui/Navbar/Navbar.jsx";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
      <>
        <Navbar />
        <div>
          <Outlet />
        </div>
      </>
  );
}
