import { React, useContext } from "react";
import "./style.scss";
import ContextService from "../../../services/ContextService";

function BaseModal(props) {
  const { modal, setModal } = useContext(ContextService);

  const closeHandler = (event) => {
    setModal(false);
  };
  const Component = modal.Component;
  console.log(modal.show);
  if (Component === "undefined" && !modal.show) {
    return <div>nothing o render</div>;
  } else {
    return (
      <div
        className="BaseModal"
        onClick={closeHandler}
        style={modal.show ? { display: "flex" } : { display: "none" }}
      >
        <div className="ModalContent">
          <Component />
        </div>
      </div>
    );
  }
}

export default BaseModal;
