import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Main 1</Link>
          </li>
          <li>
            <Link to="/components/main2">Main 2</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
