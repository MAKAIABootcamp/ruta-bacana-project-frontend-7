import React from 'react'
import "./details.scss"
import placeimg from "../../assets/images/placeimg.png"
import moreImg from "../../assets/images/moreImg.png"
import first from "../../assets/images/first.png"
import second from "../../assets/images/second.png"
import third from "../../assets/images/third.png"
import arrow from "../../assets/images/arrowblack.png"
export default function Details() {
  return (
    <div>
        <div className='ContenedorUno'>
        <div className='TituloDetalle'>
            <h1>PLAZA PRINCIPAL RAQUIRA-
                <br />BOYACA
            </h1>
        </div>
        <div className='ImagenPrin'>
            <img src={placeimg} alt="" />
        </div>
        <div className='TextoUno'>
            <h3>
            Linda plaza con edificios coloniales, adornada con las 
            <br />famosas artesanías que se fabrican en este municipio. La <br />calle principal que llega a esta plaza tiene bellas casas con <br />balcones donde venden las artesanías de Ráquira.
            </h3>
            <h3>
            Qué es lo tradicional de Ráquira?
            <br />La cerámica más tradicional de Ráquira se denomina“loza de <br />arena” o “loza de tierra” porque en su elaboración, además de <br />la arcilla, se emplea arena de río. Una vez la arcilla que se <br />extrae de las minas está seca, se muele, se tamiza y se <br />deposita en recipientes con agua para que se ablande.
            
            </h3>
        </div>
        <div className='ImagenSec'>
            <img src={moreImg} alt="" />
        </div>
       
        </div>
    </div>
    

  )
}
