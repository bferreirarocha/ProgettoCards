import React from "react";

import styled from "styled-components";
// import { componentList } from "../Identity/index";
// import { serviceList } from "../../Services/Identity";
// import styleList from "../../styles/identity/index.module.scss";

function BaseList({ data, Component, columns }, ...props) {
  const BaseList = styled.ul`
    display: grid;
    height: 100%;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-template-rows: auto;
    row-gap: 1vw;
    column-gap: 1vw;
    list-style: none;
    margin: 0;

    li {
      border-radius: 0.52vw;
      overflow: hidden;
    }
  `;

  return (
    <div>
      <BaseList>
        {data.map((item, key) => (
          <li key={key}>{React.cloneElement(Component, item)}</li>
        ))}
      </BaseList>
    </div>
  );
}

export default BaseList;
