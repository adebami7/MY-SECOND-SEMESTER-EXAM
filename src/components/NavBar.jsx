import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="login">Login</Link>
    </nav>
  );
}

export default NavBar;
