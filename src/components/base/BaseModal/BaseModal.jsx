import { React, useState } from "react";
import { useContext } from "react";
import ContextService from "../../../services/ContextService";
import styled from "styled-components";

function BaseModal(props) {
  const [show, setshow] = useState(false);
  const closeHandler = (event) => {};
  console.log("Hello from  BaseModal");
  const ModalContent = styled.div`
    display: flex;
    height: 80%;
    width: 50%;
    align-items: center;
    justify-content: center;
    padding: 2vw;
    background-color: white;
  `;

  return (
    <div
      className="BaseModal"
      onClick={closeHandler}
      style={show ? { display: "flex" } : { display: "none" }}
    >
      <ModalContent></ModalContent>
    </div>
  );
}

export default BaseModal;
