import React, { useState } from "react";
import "./main.css";

const Main = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <div className="main-container">
      <form>
        <input
          type="text"
          placeholder="Enter city name!"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
          className="input"
        />
      </form>
    </div>
  );
};

export default Main;
