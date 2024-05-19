import React, {useEffect} from 'react'
import Destinos from "../../componentes/Destinos/Destinos";
import Comentarios from "../../componentes/Comentarios/Comentarios";
import "./destinos.scss";
import FotoRaquira from "../../componentes/FotoRaquira/FotoRaquira";
import Header from "../../componentes/Header/Header";
import CalificacionUsuario from "../../componentes/CalificacionUsuario/CalificacionUsuario";
import Footer from "../../componentes/Footer/Footer"

// import "./comentarios.scss";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {actionGetDestinos} from "../../redux/Destinos/destinosActions";
import ListComentarios from "../../componentes/ListComentarios/ListComentarios";

const destinos = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const { destinos } = useSelector(
    (store) => store.destinos
  );

  useEffect(() => {
    dispatch(actionGetDestinos());
  }, []);

  const destinoSeleccionado = destinos.filter(destino => destino.id === id);
  return (
    <div>
      <div className="fondo">
        {/* <Header /> */}
        {/* <ImgRelacionados /> */}
        <div className='tamañoimg'>
        <img src={destinoSeleccionado[0].imagen} alt="imagen" />
        </div>
        <div className="bannerImageContainer">
        </div>
        <Destinos />
        <CalificacionUsuario />
        <ListComentarios/>
        {/*<Comentarios />*/}
        <Footer />
      </div>
    </div>
  );
};
export default destinos;
