import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import deleteImage from "../../assets/delete_3405244.png";
import editImage from "../../assets/edit_1159633.png";
import "./card.scss";
import { actionDeleteDestinos } from "../../redux/Destinos/destinosActions";

const Card = ({ destino = {} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <figure className="card">
      <img src={destino?.imagen} alt={destino?.nombre}/>
      <div className="actionButtons">
        <img
          src={deleteImage}
          alt="eliminar"
          onClick={() => dispatch(actionDeleteDestinos(destino.id))}
        />

        <img onClick={() => navigate(`edit/${destino.id}`)} src={editImage} alt="editar" />
      </div>
      <figcaption>{destino?.nombre}</figcaption>
    </figure>
  );
};

export default Card;