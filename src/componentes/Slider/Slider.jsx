import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetNegociosByDestinoId } from "../../redux/negocios/negociosActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

const CATEGORIAS_NEGOCIOS = {
  hotel: "Hotel",
  restaurante: "Restaurante",
};

const NegociosSlider = ({ negocios, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="contenedorCarrusel">
      <div className="titulo">
        <h2>{title}</h2>
      </div>
      <div className="slider">
        {negocios.length > 0 ? (
          <Slider {...settings} className="contenedorDelSliderA">
            {negocios.map((item, index) => (
              <div key={index} className="divContenedorDeImagen">
                <img src={item.imagen} alt={item.nombre} className="imagenCarrusel"/>
                <p>{item.nombre}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <p>No hay {title.toLowerCase()} disponibles.</p>
        )}
      </div>
    </div>
  );
};

const SliderComponent = ({ destinoId = null }) => {
  const dispatch = useDispatch();
  const { negocios, isLoading, error } = useSelector((store) => store.negocios);
  const [restaurant, setRestaurant] = useState([]);
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    if (destinoId) {
      dispatch(actionGetNegociosByDestinoId(destinoId));
    }
  }, [dispatch, destinoId]);

  useEffect(() => {
    setRestaurant(() =>
      negocios.filter(
        (item) => item.categoria === CATEGORIAS_NEGOCIOS.restaurante
      )
    );
    setHotel(() =>
      negocios.filter((item) => item.categoria === CATEGORIAS_NEGOCIOS.hotel)
    );
  }, [negocios]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar los datos: {error}</div>;
  }

  return (
    <div className="sliderContenedor">
      <NegociosSlider negocios={restaurant} title="Gastronomía" />
      <NegociosSlider negocios={hotel} title="Hospedaje" />
    </div>
  );
};

export default SliderComponent;