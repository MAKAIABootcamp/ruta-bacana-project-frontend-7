import React from "react";
import userImage from "../../assets/images/User.png";
//import { useSelector } from "react-redux";
//import "./comment.scss"

const Comment = ({ comentarios }) => {
    //const { user, isAuth, request } = useSelector((store) => store.userAuth);
  return (
    <div className="contenedorImagenes comentariosContainer">
      <div className="fila">
        <div className="columnaContenido">
          <div className="comentarioAlineado">
            <div className="descripcion">{comentarios.contenido}</div>
            <div className="estrellas">
              {/* <p>★★★☆☆</p> */}
              <img
                src="src\assets\images\ImagenDestinos\estrella.png"
                alt="Imagen 5"
              />
            </div>
          </div>
        </div>
        <div className="columnaImagenes">
          <div>
            <img
              src={userImage}
              alt={"avatar"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
