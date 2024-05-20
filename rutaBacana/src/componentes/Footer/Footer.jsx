import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetScrollToFooter } from '../../redux/scroll/scrollSlice';
import "./footer.scss";
import Instagram from "../../assets/images/Instagram.png";
import gmail from "../../assets/images/gmail.png";
import Facebook from "../../assets/images/Facebook.png";
import x from "../../assets/images/x.png";
import LogoRutaBacana from "../../assets/images/rutaBacanaLogo.png";

const Footer = React.forwardRef((props, ref) => {
  const { scrollToFooter } = useSelector((store) => store.scroll);
  const dispatch = useDispatch();

  const footerRef = useRef(null);

  useEffect(() => {
    if (scrollToFooter) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
      dispatch(resetScrollToFooter());
    }
  }, [scrollToFooter, dispatch]);

  return (
    <footer ref={footerRef} className='footerComponent'>
      <section className='footer'>
        <section className='leftColumn'>
          <article className='socialContainer'>
          <a href="https://www.instagram.com/ruta.bacana?igsh=MWhlaXY1Ynl5bDNpYw==" target="_blank" rel="noopener noreferrer">
              <img className='socialIcon' src={Instagram} alt="Instagram" />
            </a>
            <p className='socialName'>@ruta.bacana</p>
          </article>
          <article className='socialContainer'>
          <a href="https://accounts.google.com/ServiceLogin" target="_blank" rel="noopener noreferrer">
              <img className='socialIcon' src={gmail} alt="Gmail" />
            </a>
            <p className='socialName'>rutabacana@gmail.com</p>
          </article>
          <article className='socialContainer'>
          <a href="https://www.facebook.com/share/CFcmWNXZ1z9jyp8p/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <img className='socialIcon' src={Facebook} alt="Facebook" />
            </a>
            <p className='socialName'>Ruta Bacana</p>
          </article>
          <article className='socialContainer'>
          <a href="https://twitter.com/BacanaRuta" target="_blank" rel="noopener noreferrer">
              <img className='socialIcon' src={x} alt="X" />
            </a>
            <p className='socialName'>@BacanaRuta</p>
          </article>
        </section>
        <section className='rightColumn'>
          <article className='logoFooterContainer'>
            <img className='logoFooter' src={LogoRutaBacana} alt="RutaBacana" />
          </article>
          <article className='textContainer'>
            <p>
              Descubre el encanto de Colombia en cada paso. 
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
  );
});

export default Footer;
