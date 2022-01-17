import React from "react";
import styledComponents from "styled-components";

const BaseDropdown = (props) => {
  const Element = styledComponents.ul`    
        height: fit-content;
        list-style: none;
        border-radius: 5vw;
        width: 5.21vw;
        text-align: center;      
        li {
          position: relative;
          cursor: pointer;
      
          ul {
            position: absolute;
            top: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            list-style: none;
            display: none;
            line-height: normal;
            box-shadow: 0 15px 15px rgba(0, 0, 0, 0.4);
            background-color: white;
            border-radius: 5px;
      
            li {
              display: block;
              padding: 1vw;
              font-size: 0.8vw;
              border-radius: 5px;
              a {
                text-decoration: none;
                color: grey;
              }d
              &:hover {
                background-color: #f5f6fa;
                a {
                  color: black;
                }
              }
            }
          }
          &:hover ul.active {
            display: block;
          }
        }
      
      `;
  return (
    <Element className="BaseDropdown">
      <li>
        {props.icon}
        <ul className="active">
          {props.data.map((item, key) => (
            <li key={key}>
              <a
                href={item.link}
                onClick={() => {
                  alert(item.label + " clicked");
                }}
              >
                {" "}
                {item.label}{" "}
              </a>
            </li>
          ))}
        </ul>
      </li>
    </Element>
  );
};

export default BaseDropdown;
