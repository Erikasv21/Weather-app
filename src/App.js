import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import CardFlex from "./components/Assets/CardFlex/CardFlex";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Credit from "./components/Assets/Credit/Credit";
import Icons from "./components/Assets/Icons/Icons";

function App() {
  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      const result = await axios(
        `http://api.weatherapi.com/v1/current.json?key=4ef162dda9934c4eb72130853221705&q=city=${query}&days=7/`
      );

      setWeather([result.data]);
      // console.log(result.data);
    };

    fetchWeather();
  }, [query]);

  return (
    <div className="container">
      <Navbar />
      <Main getQuery={(q) => setQuery(q)} />
      {/* <CardFlex weather={weather} /> */}
      {query ? <CardFlex weather={weather} /> : <Credit />}
      <Icons />
    </div>
  );
}

export default App;
