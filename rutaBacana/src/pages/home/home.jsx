import React from "react";
import ImagenHome from "../../componentes/ImagenHome/ImagenHome";
import Filtros from "../../componentes/Filtros/Filtros";
import "./home.scss";
import Header from "../../componentes/Header/Header";
import Carrusel from "../../componentes/Carrusel/Carrusel";

const home = () => {
 

  return (
    <div>
      <div className="containerHome">
        <Header />
        <Carrusel />
        <Filtros />
        <ImagenHome />
      </div>
    </div>
  );
};
export default home;
