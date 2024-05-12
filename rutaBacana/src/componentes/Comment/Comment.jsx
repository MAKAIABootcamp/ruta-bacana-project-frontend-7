import React from "react";
//import "./comment.scss"

const Comment = ({ comentarios }) => {
  return (
    <div className="contenedorImagenes">
      <div className="fila">
        <div className="columnaContenido">
          <div className="comentarioAlineado">
            <div className="descripcion">{comentarios.contenido}</div>
            <div className="estrellas">
              {/* <p>★★★☆☆</p> */}
              <img
                src="src\assets\images\ImagenDestinos\estrella.png"
                alt="Imagen 5"
              />
            </div>
          </div>
        </div>
        <div className="columnaImagenes">
          <div>
            <img
              src="src\assets\images\ImagenDestinos\usuario1.png"
              alt="Imagen 1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
