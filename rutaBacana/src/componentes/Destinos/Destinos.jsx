import React from "react";
import "./destinos.scss";

const Destinos = () => {
  return (
    <div className="contenedoPrincipal">
      <h1>Destinos Relacionados</h1>
      <div className="filaD">
        <div className="imagenConTitulo">
          <img src="../../../assets/ImagenDestinos/mano.png" alt="Imagen 1" />
          <h2>La mano del artesano</h2>
        </div>

        <div className="imagenConTitulo">
          <img src="../../../assets/ImagenDestinos/monasterio.png" alt="Imagen 1" />
          <h2>El Monasterio de la Candelaria</h2>
        </div>
      </div>
      <div className="filaD">
        <div className="imagenConTitulo">
          <img src="../../../assets/ImagenDestinos/fincaB.png"  alt="Imagen 1" />
          <h2>Finca Beraca</h2>
        </div>

        <div className="imagenConTitulo">
          <img src="../../../assets/ImagenDestinos/plazaV.png" alt="Imagen 1" />
          <h2>Plaza mayor de Villa de Leyva</h2>
        </div>
      </div>
    </div>
  );
};

export default Destinos;
