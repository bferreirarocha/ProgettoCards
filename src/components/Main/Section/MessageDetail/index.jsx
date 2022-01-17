import React from "react";
import { iconsList } from "../../../../services/iconsList";
import "./style.scss";

const MessageDetail = (props) => {
  return (
    <div className="MessageDetail">
      <div className="header">
        <div className="avatar">{iconsList[0][props.avatar]}</div>
        <div className="from"></div>
      </div>
      <div className="bodyMsg"></div>
      <div></div>
    </div>
  );
};

export default MessageDetail;
