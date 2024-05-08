import React from "react";
import Destinos from "../../componentes/Destinos/Destinos";
import Comentarios from "../../componentes/Comentarios/Comentarios";
import "./destinos.scss";
import FotoRaquira from "../../componentes/FotoRaquira/FotoRaquira";
import Header from "../../componentes/Header/Header";
import CalificacionUsuario from "../../componentes/CalificacionUsuario/CalificacionUsuario";
import Footer from "../../componentes/Footer/Footer"
// import "./comentarios.scss";

const destinos = () => {
  return (
    <div>
      <div className="fondo">
        <FotoRaquira />
        <Destinos />
        <CalificacionUsuario />
        <Comentarios />
      </div>
    </div>
  );
};
export default destinos;
