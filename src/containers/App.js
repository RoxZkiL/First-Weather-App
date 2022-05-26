import React, { useState } from "react";

import "./App.css";
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import About from "../components/About.jsx";
import { Route, Switch } from "react-router-dom";
import Ciudad from "../components/Ciudad.jsx";
import Description from "../components/Description";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    // let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    // if (ciudad.length > 0) {
    //   return ciudad[0];
    // } else {
    //   return null;
    // }
    return cities.find((c) => c.id === parseInt(ciudadId));
  }
  return (
    <div className="App">
      <Route path="/">
        <Nav onSearch={onSearch} />
        <Description />
      </Route>
      <Switch>
        <Route path="/ciudad/:ciudadId">
          {({ match }) => <Ciudad city={onFilter(match.params.ciudadId)} />}
        </Route>
        <Route exact path="/">
          <Cards cities={cities} onClose={onClose} />
        </Route>
        <Route>
          <About path="/about" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
