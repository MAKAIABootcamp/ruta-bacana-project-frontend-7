import React from "react";
import "./filterButtons.scss"

import { categoria } from "../../data/destinosOptions";

const FilterButtons = ({ setTipo }) => {
  const handleClick = (categoria = "all") => {
    setTipo(categoria);
  };

  return (
    <div className="containerFiltros">
      <button onClick={() => handleClick()}>All</button>
      {categoria.map((item) => (
        <button key={item} onClick={() => handleClick(item)}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;