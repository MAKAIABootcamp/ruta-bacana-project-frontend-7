import React from "react";
import ImagenHome from "../../componentes/ImagenHome/ImagenHome";
import Filtros from "../../componentes/Filtros/Filtros";
import "./home.scss";

const home = () => {
  return (
    <div>
      <div className="containerHome">
        <Filtros />
        <ImagenHome />
      </div>
    </div>
  );
};
export default home;
