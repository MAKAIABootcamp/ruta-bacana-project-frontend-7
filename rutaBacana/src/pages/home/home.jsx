import React, { useRef } from "react";
import Filtros from "../../componentes/Filtros/Filtros";
import "./home.scss";
import Footer from "../../componentes/Footer/Footer"
import ListDestinos from "../../componentes/ListDestinos/ListDestinos";
import Carrusel from "../../componentes/Carrusel/Carrusel";

const home = () => { 

  return (
    <div className="swrapper">
      <div className="containerHome">
        <Carrusel />
        <div className="destinosContainer">
          <Filtros />
          <ListDestinos/>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default home;
