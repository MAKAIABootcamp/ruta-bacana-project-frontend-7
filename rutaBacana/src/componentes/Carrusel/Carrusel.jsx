import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionGetDestinos } from "../../redux/Destinos/destinosActions";

const Carrusel = () => {
  const dispatch = useDispatch();
  const { destinos } = useSelector((store) => store.destinos);

  useEffect(() => {
    if (destinos.length === 0) {
      dispatch(actionGetDestinos());
    }
  }, [dispatch, destinos.length]);


  // Renderizar el carrusel con las imágenes obtenidas
  return (
    <div className="carousel">
      <h2>Carousel</h2>
      <figure className="carousel-inner">
        {destinos.length
          ? destinos.map((destinos) => (
              <img
                key={destinos.id}
                src={destinos.imagen}
                alt={destinos.nombre}
              />
            ))
          : null}
      </figure>
    </div>
  );
};

export default Carrusel;
