import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
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


      <div>
              <img className="photo" src={mainLogo} />
      </div>

    </>
  );
}

export default Header;
