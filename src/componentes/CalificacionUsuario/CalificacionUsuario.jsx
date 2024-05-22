import React, { useState } from "react";
import "./calificacionUsuario.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa";
import { actionAddComentarios } from "../../redux/comentarios/comentariosActions";
import 'animate.css';

const CalificacionUsuario = () => {
  const { isAuth, user } = useSelector((store) => store.userAuth);
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTextareaClick = () => {
    if (!isAuth && !isClicked) {
      Swal.fire({
        title: "¡Alerta!",
        text: "Debes iniciar sesión para poder comentar.",
        icon: "warning",
        color: "",
        showCancelButton: true,
        confirmButtonColor: "#75c7ff",
        cancelButtonColor: "#f86f6f",
        confirmButtonText: "Ir al login",
        cancelButtonText: "Cancelar",
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        customClass: {
          popup: "animate__fadeInDown",
          actions: 'swal2-button-container',
          confirmButton: "swal2-custom-confirm",
          cancelButton: "swal2-custom-cancel",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
    setIsClicked(true);
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      Swal.fire({
        title: "¡Alerta!",
        text: "Escribe tu comentario.",
        icon: "warning",
        confirmButtonText: "Entendido",
        confirmButtonColor: "#3085d6",
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        }
      });
    } else {
      dispatch(
        actionAddComentarios({
          contenido: inputValue,
          idSender: user.photo,
          nombre: user.name,
          idDestino: "",
          valoracion: rating,
        })
      );
      setInputValue("");
      Swal.fire({
        title: "¡Éxito!",
        text: "Tu comentario se envió correctamente.",
        icon: "success",
        confirmButtonColor: " #0ced53b0",
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        customClass:{
        border:"none",
        }
      });
    }
    console.log("Calificación enviada:", inputValue);
  };
  return (
    <>
      <div className="containerButtonCalificacion">
        <button>
          Cuéntanos que lugares has visitado y que calificación le darias
        </button>
      </div>
      <div className="estrellasCalificacion">
        {Array(5)
          .fill()
          .map((_, index) => (
            <FaStar
              key={index}
              size={35}
              onClick={() => handleStarClick(index)}
              color={index < rating ? "yellow" : "white"}
              style={{ cursor: "pointer" }}
            />
          ))}
      </div>
      <div className="containerInputCalificacion">
        <textarea
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onClick={handleTextareaClick}
        />
        <button
          className="botonEnvio"
          onClick={handleSubmit}
          disabled={!isAuth}
        >
          Enviar Calificación
        </button>
      </div>
    </>
  );
};
export default CalificacionUsuario;
