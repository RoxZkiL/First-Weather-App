import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity("");
      }}
    >
      <input
        className="bar"
        type="text"
        placeholder="Enter your city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
        className="boton_personalizado"
        type="submit"
        value="Search a city"
      />
    </form>
  );
}
