import React from "react";
import "./filtros.scss";

const Filtros = () => {
  return (
    <>
      <div className="containerBusqueda">
        <span>Qué destino buscas?</span>
        <input type="text"></input>
      </div>
      <div className="containerFiltros">
        <button type="button">Playas</button>
        <button type="button">Pueblos</button>
        <button type="button">Bosques</button>
        <button type="button">Atracciones</button>
      </div>
    </>
  );
};
export default Filtros;
