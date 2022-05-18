import React from "react";
import "./icons.css";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Icons = () => {
  return (
    <div className="icons-container">
      <a href="https://github.com/Erikasv21" target="blank">
        <FaGithub />
      </a>
      <a href="/">
        <FaTwitter />
      </a>
      <a href="/">
        <SiGmail />
      </a>
    </div>
  );
};

export default Icons;
