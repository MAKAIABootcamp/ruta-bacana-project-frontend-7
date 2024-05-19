// src/pages/DetailsPage.jsx
import React, { useEffect } from "react";
import Details from "../../componentes/Details/Details";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDestinos } from "../../redux/Destinos/destinosActions";
import Footer from "../../componentes/Footer/Footer";
import Slider from "../../componentes/Slider/Slider";
import MapComponent from "../../componentes/MapComponent/MapComponent";
import "./details.scss"

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { destinos } = useSelector((store) => store.destinos);

  useEffect(() => {
    dispatch(actionGetDestinos());
  }, [dispatch]);

  const destinoSeleccionado = destinos.find((destino) => destino.id === id);

  return (
    <div className="fondoDegradado">
      <Details destinoSeleccionado={destinoSeleccionado} />
      <MapComponent id={id} />
      {/*<InfoInteres />*/}
      <Slider destinoId={id} />
      <Footer />
    </div>
  );
};

export default DetailsPage;
