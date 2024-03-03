import React from "react";

import { NavLink } from "react-router-dom";

export default function RootLaout() {
  return (
    <div className="root-laout">

      <header>
        <nav>
          <h1>three-day-touch</h1>
          <NavLink to="./">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
    </div>
  )
}