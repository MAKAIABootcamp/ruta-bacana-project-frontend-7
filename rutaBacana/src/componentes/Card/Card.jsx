import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import deleteImage from "../../assets/delete_3405244.png";
import editImage from "../../assets/edit_1159633.png";
import "./card.scss";
import { actionDeleteDestinos } from "../../redux/Destinos/destinosActions";
import { actionAddFavorite, actionDeleteFavoritos } from "../../redux/favoritos/favoritosActions";
import { SlActionRedo } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";

const Card = ({ destino = {} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuth } = useSelector((store) => store.userAuth);
  const { favoritos } = useSelector((store) => store.favoritos);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (user) {
      setIsFavorite(() =>
        favoritos.some(
          (item) => item.idDestino === destino.id || item.id === destino.id
        )
      );
    }
  }, [user, favoritos]);

  const isAdminEmail = user && user.email === "rutabacana@gmail.com";



  
  const handleFavoriteClick = () => {
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
      console.log(
        `Destino ${isFavorite ? 'eliminado de' : 'marcado como'} favorito: ${destino.nombre} (ID: ${destino.id})`
      );
    } else {
      Swal.fire({
        title: "¡Alerta!",
        text: "Debes iniciar sesión para marcar como favorito.",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar",
      });
    }
  };









  // const handleFavoriteClick = () => {
  //   if (isAuth) {
  //     setIsFavorite(!isFavorite);
  //     console.log(
  //       `Destino marcado como favorito: ${destino.nombre} (ID: ${destino.id})`
  //     );
  //     dispatch(
  //       actionAddFavorite({
  //         idDestino: destino.id,
  //         idUsuario: user.id,
  //       })
  //     );
  //   } else {
  //     Swal.fire({
  //       title: "¡Alerta!",
  //       text: "Debes iniciar sesión para marcar como favorito.",
  //       icon: "warning",
  //       confirmButtonColor: "#3085d6",
  //       confirmButtonText: "Aceptar",
  //     });
  //   }
  // };

  return (
    <>
      <figure className="card">
        <img src={destino?.imagen} alt={destino?.nombre} />
        <div>
          <FaHeart
            className="favoriteIcon"
            size={25}
            onClick={handleFavoriteClick}
            color={isFavorite ? "red" : "white"}
            style={{ cursor: "pointer" }}
          />
        </div>
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
