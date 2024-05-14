import React from 'react'
import "./footer.scss"
import Instagram from "../../assets/images/Instagram.png"
import gmail from "../../assets/images/gmail.png"
import Facebook from "../../assets/images/Facebook.png"
import x from "../../assets/images/x.png"
import LogoRutaBacana from "../../assets/images/rutaBacanaLogo.png"


const Footer = () => {
  return (
    <footer className='footerComponent'>
        <section className='footer'>
            <section  className='leftColumn'>
                <article className='socialContainer'>
                    <img className='socialIcon' src={Instagram} alt="Instagram" />
                    <p className='socialName'>RutaBacana12</p>
                </article>
                <article className='socialContainer'>
                    <img className='socialIcon' src={gmail} alt="Gmail" />
                    <p className='socialName'>rutabacana@gmail.com</p>
                </article>
                <article className='socialContainer'>
                    <img className='socialIcon' src={Facebook} alt="Facebook" />
                    <p className='socialName'>Ruta Bacana</p>
                </article>
                <article className='socialContainer'>
                    <img className='socialIcon' src={x} alt="X" />
                    <p className='socialName'>@RutaBacana12</p>
                </article>


            </section>

            <section className='rightColumn'>
                <article className='logoFooterContainer'>
                    <img className='logoFooter' src={LogoRutaBacana} alt="RutaBacana" />
                </article>

                <article className='textContainer'>
                    <p>Descubre el encanto de Colombia en cada paso. 
                        Explora, sueña y crea recuerdos inolvidables mientras te sumerges en la magia de nuestra tierra. 
                        ¡Bienvenido a un viaje de aventura, cultura y diversidad! Juntos, hacemos que cada momento sea inolvidable.
                    </p>
                </article>
            </section>


        </section>
        <section className='copyRight'>

            <article className='copyRightTextContainer'>
                <p>© Ruta Bacana. Derechos Reservados 2024</p>
            </article>

        </section>
    </footer>
  )
}
export default Footer