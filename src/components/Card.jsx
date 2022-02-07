import React from "react";
import CardCSS from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ max, min, name,id, img, onClose }) {
  return (
    <div className={CardCSS.card} >
      <div className={CardCSS.alignRight}>
        <button className={CardCSS.btn} onClick={()=> onClose(id)}>X</button>
      </div>
      <Link style={{textDecoration: 'none'}} to={`/ciudad/${id}`}>
      <div>
        <h4>{name}</h4>
      </div>
      </Link>
      <div className={CardCSS.row}>
        <div className={CardCSS.column}>
          <p>Min </p>
          <p>{min}°</p>
        </div>
        <div className={CardCSS.column}>
          <p>Max</p>
          <p> {max}°</p>
        </div>
        <div>
        <img  className={CardCSS.img} alt="weather logo" src={`https://openweathermap.org/img/wn/${img}@2x.png`}></img>
      </div>
      </div>
     
    </div>
  );
}
