import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <footer className='footerComponent'>
        <section className='footer'>
            <section  className='leftColumn'>
                <article className='socialContainer'>
                    <img className='socialIcon' src="src\assets\images\Instagram.png" alt="" />
                    <p className='socialName'>RutaBacana12</p>
                </article>
                <article className='socialContainer'>
                    <img className='socialIcon' src="src\assets\images\gmail.png" alt="" />
                    <p className='socialName'>rutabacana@gmail.com</p>
                </article>
                <article className='socialContainer'>
                    <img className='socialIcon' src="src\assets\images\Facebook.png" alt="" />
                    <p className='socialName'>Ruta Bacana</p>
                </article>
                <article className='socialContainer'>
                    <img className='socialIcon' src="src\assets\images\x.png" alt="" />
                    <p className='socialName'>@RutaBacana12</p>
                </article>


            </section>

            <section className='rightColumn'>
                <article className='logoFooterContainer'>
                    <img className='logoFooter' src="src\assets\images\rutaBacanaLogo.png" alt="" />
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