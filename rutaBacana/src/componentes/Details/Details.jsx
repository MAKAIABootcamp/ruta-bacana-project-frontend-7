import React from 'react'
import "./details.scss"
import placeimg from "../../assets/images/placeimg.png"
import moreImg from "../../assets/images/moreImg.png"
import first from "../../assets/images/first.png"
import second from "../../assets/images/second.png"
import third from "../../assets/images/third.png"
import arrow from "../../assets/images/arrowblack.png"
import { Link } from 'react-router-dom'



export default function Details(props) {

    const destinoSeleccionado = props.destinoSeleccionado;
    
  return (
    <div>
        <div className='ContenedorUno'>
        <h1 className='TituloDetalle'> {destinoSeleccionado[0].nombre} </h1>
       
        <div className='ImagenPrin'>
        <img src={destinoSeleccionado[0].imgDetalles} alt="" />
        </div>
      
        <div className='TextoUno'>
            <h3>
            {destinoSeleccionado[0].descripcion}
            </h3>
        </div>
        <div className='ImagenSec'>
            <img src={moreImg} alt="" />
        </div>

        <Link  to={`/destinos/${destinoSeleccionado[0].id}`}>
         <button>Destinos relacionados</button>
        </Link>

        </div>
    </div>
    

  )
}
