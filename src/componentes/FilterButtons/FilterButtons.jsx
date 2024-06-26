import React from "react";
import "./filterButtons.scss"

import { categoria } from "../../data/destinosOptions";
import { useSelector } from "react-redux";

const FilterButtons = ({ setTipo }) => {
  const { isAuth, user } = useSelector((store) => store.userAuth);
  const handleClick = (categoria = "all") => {
    setTipo(categoria);
  };

  return (
    <div className="containerFiltros">
      <button onClick={() => handleClick()}>Todo</button>
      {categoria.map((item) => (
        <button key={item} onClick={() => {
          const category = item === "Atracciones"?'Atraciones': item;
          handleClick(category);
        }}>
          {item}
        </button>
      ))}
      {isAuth && (
        <button onClick={() => handleClick("favoritos")}>Favoritos</button>
      )}
    </div>
  );
};

export default FilterButtons;