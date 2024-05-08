import React from 'react'
import "./details.scss"
import placeimg from "../../assets/images/placeimg.png"
import moreImg from "../../assets/images/moreImg.png"
import first from "../../assets/images/first.png"
import second from "../../assets/images/second.png"
import third from "../../assets/images/third.png"
import arrow from "../../assets/images/arrowblack.png"


export default function Details(props) {

    const destinoSeleccionado = props.destinoSeleccionado;
    console.log(destinoSeleccionado)
    
  return (
    <div>
        <div className='ContenedorUno'>
        <div className='TituloDetalle'>
            <h1> {destinoSeleccionado[0].nombre} </h1>
        </div>
        <div className='ImagenPrin'>
        <img src={destinoSeleccionado[0].imagen} alt="" />
        </div>
        <div className='TextoUno'>
            <h3>
            {destinoSeleccionado[0].descripcion}
            </h3>
        </div>
        <div className='ImagenSec'>
            <img src={moreImg} alt="" />
        </div>
       
        </div>
    </div>
    

  )
}
