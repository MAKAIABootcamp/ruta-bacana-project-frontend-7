import React, { useState } from 'react';
import "./details.scss";
import placeimg from "../../assets/images/placeimg.png";
import moreImg from "../../assets/images/moreImg.png";
import first from "../../assets/images/first.png";
import second from "../../assets/images/second.png";
import third from "../../assets/images/third.png";
import arrow from "../../assets/images/arrowblack.png";
import { Link } from 'react-router-dom';

const Details = (props) => {
    const destinoSeleccionado = props.destinoSeleccionado;
    const [mostrarDescripcionCompleta, setMostrarDescripcionCompleta] = useState(false);
    const [mostrarDescripcionPequena, setMostrarDescripcionPequena] = useState(true);

    const toggleDescripcionCompleta = () => {
        setMostrarDescripcionCompleta(!mostrarDescripcionCompleta);
        setMostrarDescripcionPequena(!mostrarDescripcionPequena);
    };

    return (
        <div>
            <div className='ContenedorUno'>
                <div className='TituloDetalle'>
                    <h1> {destinoSeleccionado[0]?.nombre} </h1>
                </div>
                <div className='ImagenPrin'>
                    <img src={destinoSeleccionado[0]?.imgDetalles} alt="" />
                </div>
                <div className='TextoUno'>
                    <h3>
                        {mostrarDescripcionCompleta
                            ? destinoSeleccionado[0]?.descripcion
                            : (mostrarDescripcionPequena
                                ? `${destinoSeleccionado[0]?.descripcion.slice(0, 100)}...`
                                : destinoSeleccionado[0]?.descripcion)}
                    </h3>
                    <button onClick={toggleDescripcionCompleta}>
                        {mostrarDescripcionCompleta ? "Ver menos" : "Ver más"}
                    </button>
                </div>
                {mostrarDescripcionCompleta && (
                    <div className='ImagenSec'>
                        <img src={moreImg} alt="" />
                    </div>
                )}

                <Link to={`/destinos/${destinoSeleccionado[0].id}`}>
                    <button>Destinos relacionados</button>
                </Link>
            </div>
        </div>
    );
};

export default Details;
