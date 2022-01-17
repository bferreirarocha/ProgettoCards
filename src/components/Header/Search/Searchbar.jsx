import React from "react";
import "./style.scss";

const Searchbar = () => {
  return (
    <div className="Searchbar">
      <input type="search" placeholder="Insert txt" />
      <button>Cerca</button>
    </div>
  );
};

export default Searchbar;
