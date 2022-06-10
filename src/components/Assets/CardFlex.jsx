import React from "react";
import "./cardflex.css";

const CardFlex = ({ weather }) => {
  return (
    <section>
      {weather.map((item) => (
        <div className="kortele" key={item.location.name}>
          <h2>
            <strong>Location:</strong> {item.location.name},{" "}
            {item.location.country}
          </h2>
          <h2>{item.current.temp_c} °C</h2>
          <h2>{item.current.humidity}% Humidity </h2>
          <h2>{item.location.localtime}</h2>
          <div className="picture-weather">
            <img src={item.current.condition.icon} alt="Sun" />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardFlex;
