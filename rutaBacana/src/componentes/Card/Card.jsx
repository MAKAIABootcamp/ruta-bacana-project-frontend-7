import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import deleteImage from "../../assets/delete_3405244.png";
import editImage from "../../assets/edit_1159633.png";
import "./card.scss";
import { actionDeleteDestinos } from "../../redux/Destinos/destinosActions";
import { SlActionRedo } from "react-icons/sl";

const Card = ({ destino = {} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.userAuth);

  const isAdminEmail = user && user.email === 'rutabacana@gmail.com';

  return (
    <>
      <figure className="card">
        <img src={destino?.imagen} alt={destino?.nombre} />
        <div className="actionButtons">
          {isAdminEmail &&  (
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
        <SlActionRedo
          className="botonDetalle"
          onClick={() => navigate(`/DetailsPage/${destino.id}`)}
        />

        <figcaption>{destino?.nombre}</figcaption>
      </figure>
    </>
  );
};

export default Card;
