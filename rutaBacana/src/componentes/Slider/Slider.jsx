import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetNegociosByDestinoId } from "../../redux/negocios/negociosActions";
import "./slider.scss";

const CATEGORIAS_NEGOCIOS = {
  hotel: "Hotel",
  restaurante: "Restaurante",
};

const Slider = ({ destinoId = null }) => {
  const dispatch = useDispatch();
  const { negocios } = useSelector((store) => store.negocios);
  const [restaurant, setRestaurant] = useState([]);
  const [hotel, setHotel] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    dispatch(actionGetNegociosByDestinoId(destinoId));
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

  return (
    <div className="sliderContenedor">
      <div className="contenedorCarrusel">
        <div className="titulo">
          <h2>Gastronomía</h2>
        </div>
        <div className="slider">
          <div className="carousel">
            {restaurant.map((item, index) => (
              <div key={index}>
                <img src={item.imagen} alt={item.nombre} />
                <p>{item.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contenedorCarrusel">
        <div className="titulo">
          <h2>Hospedaje</h2>
        </div>
        <div className="slider">
          <div className="carousel">
            {hotel.map((item, index) => (
              <div key={index}>
                <img src={item.imagen} alt={item.nombre} />
                <p>{item.nombre}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
