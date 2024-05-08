import React from "react";
import ImagenHome from "../../componentes/ImagenHome/ImagenHome";
import Filtros from "../../componentes/Filtros/Filtros";
import "./home.scss";
import Header from "../../componentes/Header/Header";
import Footer from "../../componentes/Footer/Footer"
import Carrusel from "../../componentes/Carrusel/Carrusel";

const home = () => {
 

  return (
    <div>
      <div className="containerHome">
        <Header />
        <Carrusel />
        <Filtros />
        <ImagenHome />
        <Footer />
      </div>
    </div>
  );
};
export default home;
