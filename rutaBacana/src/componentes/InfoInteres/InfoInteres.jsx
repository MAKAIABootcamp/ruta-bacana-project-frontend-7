// import React, { useEffect, useState } from "react";
import "./infoInteres.scss";
import imageDulceTentacion from "../../assets/InfoInteres/first__image__text.png";
import imageLaGuasca from "../../assets/InfoInteres/second__image__text.png";
import imageLosTiest from "../../assets/InfoInteres/third__image__text.png";
import imageFlecha from "../../assets/InfoInteres/next__arrow.png";

const InfoInteres = () => {
  // const [slideIndex, setSlideIndex] = useState(0);
  // let timer;

  // const moveSlide = (n) => {
  //   const slides = document.querySelectorAll('.carousel .slides img');
  //   let newIndex = slideIndex + n;
  //   if (newIndex >= slides.length) {
  //     newIndex = 0;
  //   }
  //   if (newIndex < 0) {
  //     newIndex = slides.length - 1;
  //   }
  //   setSlideIndex(newIndex);
  // }

  // const startAutoScroll = () => {
  //   timer = setInterval(() => moveSlide(1), 3000); // Cambia la imagen cada 3 segundos
  // }

  // const stopAutoScroll = () => {
  //   clearInterval(timer);
  // }

  // useEffect(() => {
  //   startAutoScroll();
  //   return () => clearInterval(timer);
  // }, []);

  return (
    <>
    <div className="containerButton">
        <button>Información de interés</button>
      </div>
      <div className="containerComercio">
        <h3>Gastronomía</h3>
        <div>
          <img className="imagenComercio" src={imageDulceTentacion} alt="Dulce tradición" />
          <p>Dulce Tradición</p>
        </div>
        <div>
          <img className="imagenComercio" src={imageLaGuasca} alt="La Guasca" />
          <p>La Guasca</p>
        </div>
        <div>
          <img className="imagenComercio" src={imageLosTiest} alt="Los Tiest" />
          <p>Los Tiest</p>
        </div>
        <div>
          <img className="imagenComercio" src={imageFlecha} alt="Fecha" />
        </div>
      </div>

{/* <div className="carousel" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
      <button className="prev" onClick={() => moveSlide(-1)}>&#10094;</button>
      <div className="slides">
        <img src={imageDulceTentacion} alt="Slide 1" style={{display: slideIndex === 0 ? 'block' : 'none'}} />
        <img src={imageLaGuasca} alt="Slide 2" style={{display: slideIndex === 1 ? 'block' : 'none'}} />
        <img src={imageLosTiest} alt="Slide 3" style={{display: slideIndex === 2 ? 'block' : 'none'}} />
      </div>
      <button className="next" onClick={() => moveSlide(1)}>&#10095;</button>
    </div> */}
    </>
  );
};
export default InfoInteres;
