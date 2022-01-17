import React from "react";
import { MenuCard } from "..";

const MenuFilter = (props) => {
  const dropdownChangeHandler = (value) => {
    props.onChangeFilter(value);
  };
  return (
    <div className="MenuFilter">
      {props.data.map((item, key) => (
        <MenuCard
          key={key}
          Selected={props.Selected}
          onChange={dropdownChangeHandler}
          data={item}
        />
      ))}
    </div>
  );
};

export default MenuFilter;
