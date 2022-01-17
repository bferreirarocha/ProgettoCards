import React from "react";

import { iconsList } from "../../../services/iconsList";
import "./style.scss";

const Avatar = (props) => {
  return (
    <div
      className="Avatar"
      style={
        props.isHorizontal
          ? { flexDirection: "row" }
          : { flexDirection: "column" }
      }
    >
      <div
        className="img"
        style={
          props.isHorizontal
            ? { marginRight: "1vw", height: "1.51vw" }
            : { marginButton: "1vw" }
        }
      >
        {iconsList[0]["avatarHeader"]}
      </div>
      <span
        style={props.isHorizontal ? { color: "white" } : { fontSize: "0.57vw" }}
      >
        {props.data.name}
      </span>
      {props.isHorizontal ? <button>Roma</button> : ""}
    </div>
  );
};

export default Avatar;
