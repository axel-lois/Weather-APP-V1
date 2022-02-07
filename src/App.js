import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import About from "./components/About";
import Ciudad from "./components/Ciudad";

function App() {
  const API_KEY = "a372ef436031a88db0e0f58be33ea056";
  const [cities, setNewCity] = useState([]);
  console.log(cities)

  async function getCity(city) {
    try {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const response = await data.json();
      console.log(response)
      return response;
    } catch (error) {
      console.error(error.message);
    }
  }

  const doesCityExist = (id) => {
    for (let city of cities) {
      if (city.id === id) return true;
    }
    return false;
  };

  const onClose = (id) => {
    setNewCity((prevCities) => prevCities.filter((city) => city.id !== id));
  };

  const onSearch = (city) => {
    getCity(city).then((response) => {
      if (doesCityExist(response.id)) {
        alert("You already entered this city, please enter another one.");
      } else if (response.main === undefined) {
        alert("Requested city not found.");
      } else {
        console.log('Ciudad ingresada!')
        setNewCity((prevCities) => [response, ...prevCities]);
      }
    });
  };

  const onFilter = (id) => {
    let city = cities.filter((ciudad) => ciudad.id === parseInt(id));
    return city[0];
  };

  return (
    <div className="App">
      <Route path="/" render={() => <Nav onSearch={onSearch} />} />
      <Route path="/about" render={About} />
      <Route
        path="/Weather-App-V1/"
        render={() => <Cards onClose={onClose} cities={cities} />}
      ></Route>
      <Route
        exact
        path="/ciudad/:ciudadId"
        render={({ match }) => (
          <Ciudad city={onFilter(match.params.ciudadId)} />
        )}
      />
    </div>
  );
}

export default App;
