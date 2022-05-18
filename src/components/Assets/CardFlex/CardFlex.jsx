import React from "react";
import "./cardflex.css";
import Sun from "../images/sun.png";
import Suncloud from "../images/suncloud.png";

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
            {item.current.temp_c > 15 ? (
              <img src={Sun} alt="Sun" />
            ) : (
              <img src={Suncloud} alt="Sun" />
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardFlex;
