import { useContext } from "react";
import "./style.scss";
import React from "react";

import MessageDetail from "../MessageDetail/index";
import ContextService from "../../../../services/ContextService";
import { iconsList } from "../../../../services/iconsList";

const MessagesCards = (props) => {
  const { modal, setModal } = useContext(ContextService);

  const onClickHandler = (event) => {
    const payload = {
      show: true,
      Component: MessageDetail,
      data: [
        {
          id: props.id,
          avatar: props.avatar,
          title: props.title,
          from: props.from,
          body: props.body,
        },
      ],
    };
    setModal(payload);
  };
  return (
    <div className="Messages" onClick={onClickHandler}>
      <div className="__header">
        <div className="profileIcon">{iconsList[0][props.avatar]}</div>
        <div>
          <span className="from">FROM:</span>
          <div className="author"> {props.from}</div>
        </div>
        <div className="msgbody">{props.title + "..."}</div>
      </div>
    </div>
  );
};

export default MessagesCards;
