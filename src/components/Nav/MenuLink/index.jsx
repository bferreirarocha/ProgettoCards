import { useState } from "react";
import { iconsList } from "../../../services/iconsList";
import "./style.scss";

const MenuLink = (props) => {
  return (
    <div className="MenuLink">
      <a href={props.link}>{iconsList[0][props.icon]}</a>
    </div>
  );
};

export default MenuLink;
