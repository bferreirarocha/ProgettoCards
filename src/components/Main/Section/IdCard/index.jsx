import React from "react";
import "./style.scss";
import { iconsList } from "../../../../services/iconsList";
import bgimg from "../../../../assets/images/bg-card.png";

function IdCard(props) {
  return (
    <div
      className="idCard"
      style={{
        backgroundColor: props["category"].colour,
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="header">
        <div className="img">{iconsList[0][props["category"].icon]}</div>
        <div className="Itemtitle">{props.template}</div>
      </div>
      <div className="main">
        <span className="ItemName">{props.name}</span>
      </div>
    </div>
  );
}

export default IdCard;
