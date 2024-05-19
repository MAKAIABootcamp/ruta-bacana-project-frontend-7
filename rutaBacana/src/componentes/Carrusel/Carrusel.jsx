import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionGetDestinos } from "../../redux/Destinos/destinosActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carrusel.scss";

const Carrusel = () => {
  const dispatch = useDispatch();
  const { destinos } = useSelector((store) => store.destinos);

  useEffect(() => {
    if (destinos.length === 0) {
      dispatch(actionGetDestinos());
    }
  }, [dispatch, destinos.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  return (
      <div className="carousel">

        <Slider {...settings}>
          {destinos.map((destino) => (
            <div key={destino.id}>
              <img
                src={destino.imagen}
                alt={destino.nombre}
                className="carousel-img"
              />
            </div>
          ))}
        </Slider>
      </div>

  );
};

export default Carrusel;