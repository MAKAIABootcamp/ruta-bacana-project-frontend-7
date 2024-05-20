// src/pages/DetailsPage.jsx
import React, { useEffect } from "react";
import Details from "../../componentes/Details/Details";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDestinos } from "../../redux/Destinos/destinosActions";
import Footer from "../../componentes/Footer/Footer";
import Slider from "../../componentes/Slider/Slider";
import MapComponent from "../../componentes/MapComponent/MapComponent";
import deleteImage from "../../assets/delete_3405244.png";
import editImage from "../../assets/edit_1159633.png";
import { actionDeleteDestinos } from "../../redux/Destinos/destinosActions";
import { useNavigate } from "react-router-dom";
import "./details.scss"

const DetailsPage = ({ destino = {} }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { destinos } = useSelector((store) => store.destinos);
  const { user, isAuth } = useSelector((store) => store.userAuth);

  const isAdminEmail = user && user.email === "rutabacana@gmail.com";


  useEffect(() => {
    dispatch(actionGetDestinos());
  }, [dispatch]);

  const destinoSeleccionado = destinos.filter((destino) => destino.id === id);

  return (
    <div className="fondoDegradado">

<div className="actionButtons">
        {isAdminEmail && (
          <>
            <img
              src={deleteImage}
              alt="eliminar"
              onClick={() => dispatch(actionDeleteDestinos(destino.id))}
            />
            <img
              onClick={() => navigate(`edit/${destino.id}`)}
              src={editImage}
              alt="editar"
            />
          </>
        )}
      </div>
      <Details destinoSeleccionado={destinoSeleccionado} />
      <MapComponent id={id} />
      {/*<InfoInteres />*/}
      <div className="infoInteresDiv"><p className="infoInteres">Información de interés</p></div>
      <Slider destinoId={id} />
      <Footer />
    </div>
  );
};

export default DetailsPage;
