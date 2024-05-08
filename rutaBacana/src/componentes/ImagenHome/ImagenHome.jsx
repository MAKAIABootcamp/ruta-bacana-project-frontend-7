import React from "react";
import "./ImagenHome.scss";

const ImagenHome = () => {
  return (
    <div>
      <div className="FilaUno">
        <div className="FtoUno">
          <img src="src\assets\images\ImagenHome\cañoCristal.png" alt="F" />
          <h3>Caño Cristales</h3>
        </div>

        <div className="FtoMedio">
          <img src="src\assets\images\ImagenHome\bosqueQuimbaya.png" alt="Imagen 1" />
          <h3>Santuario de Fauna y Flora Otún Quimbaya </h3>
        </div>
        <div className="FtoFinal">
          <img src="src\assets\images\ImagenHome\minaSal.png" alt="Imagen 1" />
        <h3>Catedral de Sal Zipaquirá</h3>
        </div>
      </div>
      <div className="FilaDos">
        <div className="ImagenUno">
          <img src="src\assets\images\ImagenHome\raquiraPlaza.png" alt="Imagen 1" />
          <h3>Plaza principal Raquirá</h3>
        </div>
       

        <div className="ImagenDos">
          <img src="src\assets\images\ImagenHome\playaCartagena.png" alt="Imagen 1" />
          <h3>Playa Cartagena</h3>
        </div>
      </div>
      <div className="FilaTres">
        <div className="FotoUno">
          <img src="src\assets\images\ImagenHome\santuarioNariño.png" alt="Imagen 1" />
          <h3>Santuario de las Lajas Nariño</h3>
        </div>

        <div className="FotoDos">
          <img src="src\assets\images\ImagenHome\villadeLeyva.png"  alt="Imagen 1" />
          <h3>Plaza Principal Villa de Leyva</h3>
        </div>
      
        <div className="FotoTres">
          <img src="src\assets\images\ImagenHome\atracciones.png" alt="Imagen 1" />
          <h3>Girardot</h3>
        </div>
       
      </div>
    </div>
  );
};

export default ImagenHome;
