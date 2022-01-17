import React from "react";
import "./style.scss";

const Informazioni = (props) => {
  return (
    <div className="Informazioni">
      <span>Schede informazioni</span>
      <ul>
        <li>{props.data.location}</li>
        <li>profili</li>
        <li>{props.data.location}</li>
      </ul>
    </div>
  );
};

export default Informazioni;
