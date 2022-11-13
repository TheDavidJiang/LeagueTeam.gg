import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import mainLogo from "./images/logo.png";
import { Link } from "react-router-dom"

function Header() {



  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
        <a className="navbar-brand" href="http://www.google.com">
          LeagueTeam
        </a>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link" href="./index.html">
                Home
              </a> */}
              {/* <Link to="/">Home</Link> */}
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
}

export default Header;
