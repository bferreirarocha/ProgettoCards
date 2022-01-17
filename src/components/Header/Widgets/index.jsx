import React from "react";
import { iconsList } from "../../../services/iconsList";
import "./style.scss";

const Widgets = (props) => {
  return (
    <div className="Widgets">
      <ul>
        <li>{iconsList[0][props.data[0]]}</li>
        <li>
          <div></div>
          {iconsList[0][props.data[1]]}
        </li>
        <li>{iconsList[0][props.data[2]]}</li>
      </ul>
    </div>
  );
};

export default Widgets;
