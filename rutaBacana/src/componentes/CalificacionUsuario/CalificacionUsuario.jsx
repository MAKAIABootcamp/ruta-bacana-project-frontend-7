import React, { useState } from "react";
import "./calificacionUsuario.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import {actionAddComentarios} from "../../redux/comentarios/comentariosActions"

const CalificacionUsuario = () => {
  const { isAuth } = useSelector((store) => store.userAuth);
  const [inputValue, setInputValue] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTextareaClick = () => {
    // Mostrar alerta solo si el usuario no está autenticado y aún no ha hecho clic en el área de texto
    if (!isAuth && !isClicked) {
      Swal.fire({
        title: "¡Alerta!",
        text: "Debes iniciar sesión para poder comentar.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ir al login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
    setIsClicked(true);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      Swal.fire({
        title: "¡Alerta!",
        text: "Debes escribir algo antes de enviar.",
        icon: "warning",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Aceptar",
      });
    } else {
      dispatch(actionAddComentarios({ contenido: inputValue }));
      setInputValue("");
      Swal.fire({
        title: "¡Éxito!",
        text: "Tu comentario se envió correctamente.",
        icon: "success",
      })
    }
    console.log("Calificación enviada:", inputValue);
    // Aquí puedes agregar la lógica para enviar la calificación
  };
  return (
    <>
      <div className="containerButtonCalificacion">
        <button>Califica estos lugares y cuentanos tu experiencia</button>
      </div>
      <div className="estrellasCalificacion">
        {/* <p>★★★☆☆</p> */}
        <img className="imageCalificacion"
          src="src\assets\images\ImagenDestinos\estrella.png"
          alt="Imagen 5"
        />
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
