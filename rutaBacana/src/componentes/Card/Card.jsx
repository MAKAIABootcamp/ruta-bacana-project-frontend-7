import React from "react";
import { useDispatch } from "react-redux";
// import deleteImage from "../../assets/delete_3405244.png";
// import editImage from "../../assets/edit_1159633.png";
import "./card.scss";
import { actionDeleteDestinos } from "../../redux/Destinos/destinosActions";

const Card = ({ destino = {} }) => {
  const dispatch = useDispatch();
  return (
    <figure className="card">
      <img src={destino?.imagen} alt={destino?.name} />
      <div className="actionButtons">
        {/* <img
          src={deleteImage}
          alt="eliminar"
          onClick={() => dispatch(actionDeleteDestinos(destino.id))}
        /> */}

        {/* <img src={editImage} alt="editar" /> */}
      </div>
      <figcaption>{destino?.name}</figcaption>
    </figure>
  );
};

export default Card;