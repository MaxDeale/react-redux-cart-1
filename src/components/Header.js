import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="main-header">
      <div>
        <h2>Funky Floofers</h2>
      </div>
      <nav id="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
