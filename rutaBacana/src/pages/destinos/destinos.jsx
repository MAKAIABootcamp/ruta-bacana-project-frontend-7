import React from "react";
import Destinos from "../../componentes/Destinos/Destinos";
import Comentarios from "../../componentes/Comentarios/Comentarios";
import "./destinos.scss";
import FotoRaquira from "../../componentes/FotoRaquira/FotoRaquira";
import Header from "../../componentes/Header/Header";
import CalificacionUsuario from "../../componentes/CalificacionUsuario/CalificacionUsuario";
import Footer from "../../componentes/Footer/Footer"
import ListComentarios from "../../componentes/ListComentarios/ListComentarios";

const destinos = () => {
  return (
    <div>
      <div className="fondo">
        <Header />
        <FotoRaquira />
        <Destinos />
        <CalificacionUsuario />
        <ListComentarios/>
        <Comentarios />
        <Footer />
      </div>
    </div>
  );
};
export default destinos;
