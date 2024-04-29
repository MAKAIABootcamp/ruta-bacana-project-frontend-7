import React from "react";
import Destinos from "../../componentes/Destinos/Destinos";
import Comentarios from "../../componentes/Comentarios/Comentarios";
import "./destinos.scss";
// import "./comentarios.scss";

const destinos = () => {
  return (
    <div>
      <div className="fondo">
        <Destinos />
        <Comentarios />
      </div>
    </div>
  );
};
export default destinos;
