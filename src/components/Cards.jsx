import React from "react";
import Card from "./Card";
import CardsCSS from "./Cards.module.css";

export default function Cards(props) {
  if (props.cities.length === 0)
    return (
      <div className={CardsCSS.container}>
        <h2 className={CardsCSS.h2}>No results were found...</h2>
      </div>
    );
  else
    return (
      <div className={CardsCSS.container}>
        {props.cities.map((city) => {
          return (
            <Card
              key={city.id}
              id={city.id}
              max={city.main.temp_max}
              min={city.main.temp_min}
              name={city.name}
              img={city.weather[0].icon}
              onClose={props.onClose}
            />
          );
        })}
      </div>
    );
}
