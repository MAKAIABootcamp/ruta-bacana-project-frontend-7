import React from "react";
import "./calificacionUsuario.scss";
import imageEstrellas from "../../assets/InfoInteres/Estrellas.png"

const CalificacionUsuario = () => {
  return (
    <>
      <div className="containerButtonCalificacion">
        <button>Califica estos lugares y cuentanos tu experiencia</button>
      </div>
      <img className="imageCalificacion" src={imageEstrellas} alt="Estrellas" />
      <div className="containerInputCalificacion">
        <textarea type="text" />
      </div>
    </>
  );
};
export default CalificacionUsuario;
