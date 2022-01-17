import React from "react";
import "./style.scss";
function Main(props) {
  return (
    <div className="Main">
      <props.page />
    </div>
  );
}

export default Main;
