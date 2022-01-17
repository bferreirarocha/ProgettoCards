import React from "react";
import "./index.scss";
import { iconsList } from "../../../../services/iconsList";

function TemplateCard(props) {
  return (
    <div className="TemplateCard">
      <div className="img">{iconsList[0][props.icon]}</div>

      <span className="itemName">{props.name}</span>
    </div>
  );
}

export default TemplateCard;
