import React from "react";
import "./component.css";
export default function currentweather() {
  let time = "AM";
  let Logo = "cloudy";
  return (
    <div className="currentweather">
      <p className="Heading">
        <h1>CURRENT WEATHER</h1>
        <p className="time">10:30 {time}</p>
      </p>
      <p className="tempreture">
        <h1>{Logo}</h1>
        <h1>Temprature</h1>
        <p>Real Feal Like : T</p>
      </p>
      <ul className="details-list">
        <li className="condition">Condition</li>
        <li className="more-details">More Details</li>
      </ul>
    </div>
  );
}
