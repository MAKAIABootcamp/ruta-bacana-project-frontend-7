import React from "react";
import "./ImagenHome.scss";

const ImagenHome = () => {
  return (
    <div>
      <div className="FilaUno">
        <div className="FtoUno">
          <img src="../../../assets/ImagenHome/cañoCristal.png" alt="F" />
          <h3>Caño Cristales</h3>
        </div>

        <div className="FtoMedio">
          <img src="../../../assets/ImagenHome/bosqueQuimbaya.png" alt="Imagen 1" />
          <h3>Santuario de Fauna y Flora Otún Quimbaya </h3>
        </div>
        <div className="FtoFinal">
          <img src="../../../assets/ImagenHome/minaSal.png" alt="Imagen 1" />
        <h3>Catedral de Sal Zipaquirá</h3>
        </div>
      </div>
      <div className="FilaDos">
        <div className="ImagenUno">
          <img src="../../../assets/ImagenHome/raquiraPlaza.png" alt="Imagen 1" />
          <h3>Plaza principal Raquirá</h3>
        </div>
       

        <div className="ImagenDos">
          <img src="../../../assets/ImagenHome/playaCartagena.png" alt="Imagen 1" />
          <h3>Playa Cartagena</h3>
        </div>
      </div>
      <div className="FilaTres">
        <div className="FotoUno">
          <img src="../../../assets/ImagenHome/santuarioNariño.png" alt="Imagen 1" />
          <h3>Santuario de las Lajas Nariño</h3>
        </div>

        <div className="FotoDos">
          <img src="../../../assets/ImagenHome/villadeLeyva.png"  alt="Imagen 1" />
          <h3>Plaza Principal Villa de Leyva</h3>
        </div>
      
        <div className="FotoTres">
          <img src="../../../assets/ImagenHome/atracciones.png" alt="Imagen 1" />
          <h3>Girardot</h3>
        </div>
       
      </div>
    </div>
  );
};

export default ImagenHome;
