import React from "react";
import Classes from "./Ciudad.module.css";
import { Fragment } from "react";
import {NavLink} from "react-router-dom"

const Ciudad = (props) => {
  let ciudad = props.city;
  return (
    <Fragment>
    <div className={Classes.container}>
      <div>
        <h2 style={{fontSize: "40px"}}>{ciudad.name}</h2>
        <div>
          <div>Temperature: {ciudad.main.temp} ºC</div>
          <div>Climate: {ciudad.weather[0].main}</div>
          <div>Wind: {ciudad.wind.speed} km/h</div>
          <div>Amount of Clouds: {ciudad.clouds.all}</div>
          <div>Latitude: {ciudad.coord.lat}º</div>
          <div>Length: {ciudad.coord.lon}º</div>
        </div>
      </div>
    </div>
    <NavLink to="/Weather-App-V1/">
    <button className={Classes.button}>Go back </button>
    </NavLink>
    </Fragment>

  );
};

export default Ciudad;
