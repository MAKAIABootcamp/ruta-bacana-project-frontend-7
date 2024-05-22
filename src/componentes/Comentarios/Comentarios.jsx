import React from "react";
import "./comentarios.scss";

const Comentarios = () => {
  return (
    <div className="contenedorImagenes">
      <div className="fila">
        {/* Columna de contenido */}
        <div className="columnaContenido">
          <div className="comentarioAlineado">
            <h2>Tamara Vasquez</h2>
            <div className="descripcion">
              Amé cada minuto en Ráquira, es un lugar precioso, cultural,
              colonial y venden una comida deliciosa
            </div>
            <div className="estrellas">
              {/* <p>★★★☆☆</p> */}
              <img src="src\assets\images\ImagenDestinos\estrella.png"  alt="Imagen 5" />
            </div>
          </div>

          <div className="comentarioAlineado">
            <h2>Santiago Arboleda</h2>
            <div className="descripcion">
              Es la tercera vez que visito este lugar y siempre quiero volver
            </div>
            <div className="estrellas">
              {/* <p>★★★☆☆</p> */}
              <img src="src\assets\images\ImagenDestinos\estrella.png" alt="Imagen 5" />
            </div>
          </div>
        </div>

        {/* Columna de imágenes */}
        <div className="columnaImagenes">
          <div>
            <img src="src\assets\images\ImagenDestinos\usuario1.png" alt="Imagen 1" />
          </div>
          <div>
            <img src="src\assets\images\ImagenDestinos\usuario2.png" alt="Imagen 2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comentarios;


