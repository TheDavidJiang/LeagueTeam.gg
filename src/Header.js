import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import mainLogo from "./images/logo.png";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
        <a class="navbar-brand" href="#">
          LeagueTeam
        </a>

        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="./index.html">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <img src={mainLogo} alt="LeagueTeam" />
      </div>

      <div>
        <form>
          <input type="text" placeholder="Enter summoner name here" />
          <Button variant="primary">Submit</Button>
        </form>
      </div>
    </header>
  );
}

export default Header;
