import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import deleteImage from "../../assets/delete_3405244.png";
//import editImage from "../../assets/edit_1159633.png";
import "./card.scss";
import { actionDeleteDestinos } from "../../redux/Destinos/destinosActions";
import {
  actionAddFavorite,
  actionDeleteFavoritos,
} from "../../redux/favoritos/favoritosActions";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import "animate.css";

const Card = ({ destino = {} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuth } = useSelector((store) => store.userAuth);
  const { favoritos } = useSelector((store) => store.favoritos);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isFavoriteExpanded, setIsFavoriteExpanded] = useState(false);

  useEffect(() => {
    if (user) {
      setIsFavorite(
        favoritos.some(
          (item) => item.idDestino === destino.id || item.id === destino.id
        )
      );
    }
  }, [user, favoritos, destino.id]);

  //const isAdminEmail = user && user.email === "rutabacana@gmail.com";

  const handleFavoriteClick = async () => {
    if (isAuth) {
      const favorito = favoritos.find(
        (item) => item.idDestino === destino.id || item.id === destino.id
      );

      if (isFavorite && favorito) {
        dispatch(actionDeleteFavoritos(favorito.id));
      } else {
        dispatch(
          actionAddFavorite({
            idDestino: destino.id,
            idUsuario: user.id,
          })
        );
      }

      setIsFavorite(!isFavorite);
      setIsFavoriteExpanded(true);
      setTimeout(() => {
        setIsFavoriteExpanded(false);
      }, 300); // Duración de la animación
    } else {
      Swal.fire({
        title: "¡Atención!",
        text: "Debes iniciar sesión para marcar como favorito.",
        icon: "info",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar",
        timer: 4000, // 4 segundos de tiempo de espera
        timerProgressBar: true,
        //background: "#fbfee9",
        width: "30%",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
      });
    }
  };

  const handleDelete = () => {
    Swal.fire({
      title: "¿Quieres elminarlo?",
      text: "No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#75c7ff",
      cancelButtonColor: "#f86f6f",
      confirmButtonText: "Sí, eliminarlo!",
      cancelButtonText: "Cancelar",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      customClass: {
        popup: "animate__fadeInDown",
        actions: "swal2-button-container",
        //cancelButton: "swal2-confirm",
        confirmButton: "swal2-custom-confirm",
        cancelButton: "swal2-custom-cancel",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(actionDeleteDestinos(destino.id));
      }
    });
  };

  return (
    <>
      <figure className="card">
        <img
          onClick={() => navigate(`/DetailsPage/${destino.id}`)}
          src={destino?.imagen}
          alt={destino?.nombre}
        />
        <div>
          <FaHeart
            className={`favoriteIcon ${isFavoriteExpanded ? "expanded" : ""}`}
            size={25}
            onClick={handleFavoriteClick}
            color={isFavorite ? "red" : "white"}
            style={{ cursor: "pointer" }}
          />
        </div>
        <figcaption>{destino?.nombre}</figcaption>
      </figure>
    </>
  );
};

export default Card;
