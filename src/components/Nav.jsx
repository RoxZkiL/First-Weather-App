import React from "react";
import Logo from "../img/WeatherImage.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <span className="navbar-brand">
          <img
            id="logoHenry"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Jesus Matute - Weather App
        </span>
      </Link>
      <Link to="/about">
        <h2 className="about">About</h2>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
