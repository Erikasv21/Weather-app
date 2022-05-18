import React from "react";
import "./credit.css";

const Credit = () => {
  return (
    <div className="container">
      <div className="img-container">
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          <img
            src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
            alt="Weather data by WeatherAPI.com"
            border="0"
          />
        </a>
        <p>
          Powered by <a href="WeatherAPI.com"> WeatherAPI.com</a>
        </p>
      </div>
    </div>
  );
};

export default Credit;
