import React from "react";
import "./Description.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mainDiv">
      <h2 className="h2">
        Type the name of the city which wheater details you want to see in the
        SearchBar, you can close the card preview or click the name of the city
        to see detailed info. If you want yo go back click the Home button.
      </h2>
      <div className="botonDiv">
        <Link to="/">
          <button className="boton">Home</button>
        </Link>
      </div>
    </div>
  );
}
