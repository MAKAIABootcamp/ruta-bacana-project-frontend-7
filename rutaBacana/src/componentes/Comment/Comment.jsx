import React from "react";
import userImage from "../../assets/images/User.png";
import { useSelector } from "react-redux";
import "./comment.scss";
import EstrellasValoracion from "../EstrellasValoracion/EstrellasValoracion";

const Comment = ({ comentarios }) => {
  const { user, isAuth, request } = useSelector((store) => store.userAuth);
  console.log("Datos del usuario autenticado:", user);

  return (
    <div className="contenedorComentarios">
      <section className=" comentarios">
        <div className="fila">
          <div className="imagenAvatar">
            <img src={comentarios.idSender || userImage} alt={"avatar"} />
          </div>
          <div className="contenedorCalificacion">
            <div>
              <h3>{comentarios.nombre || null }</h3>
            </div>
            <div className="descripcion">{comentarios.contenido}</div>
            {comentarios.valoracion > 0 && (
              <div className="contenedorEstrellas">
                <EstrellasValoracion rating={comentarios.valoracion} />
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comment;
