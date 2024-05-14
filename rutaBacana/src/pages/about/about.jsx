import React, { useState, useEffect } from 'react';
import FooterMinimo from '../../componentes/FooterMinimo/FooterMinimo';
import './about.scss';
import LogoRutaBacana from "../../assets/images/rutaBacanaLogo.png"
import ImageEmmanuel from "../../assets/images/about/emmanuel.png"
import ImageValentina from "../../assets/images/about/valentina.png"
import ImageVanessa from "../../assets/images/about//vanessa.png"
import ImageLina from "../../assets/images/about/lina.png"
import ImageCristian from "../../assets/images/about/cristian.png"

const About = () => {
  const [showMission, setShowMission] = useState(false);
  const [showCollaborators, setShowCollaborators] = useState(false);
  const [showFooterContent, setShowFooterContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const missionSection = document.querySelector('.ourMission');

      if (missionSection && !showMission) {
        const missionOffset = missionSection.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollPosition > missionOffset - windowHeight) {
          setShowMission(true);
        }
      }

      const collaboratorsSection = document.querySelector('.collaboratorContainer');

      if (collaboratorsSection && !showCollaborators) {
        const sectionOffset = collaboratorsSection.offsetTop;

        if (scrollPosition > sectionOffset - windowHeight) {
          setShowCollaborators(true);
        }
      }

      const footerSection = document.querySelector('.footerBannerContainer');

      if (footerSection && !showFooterContent) {
        const sectionOffset = footerSection.offsetTop;

        if (scrollPosition > sectionOffset - windowHeight) {
          setShowFooterContent(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showMission, showCollaborators, showFooterContent]);

  return (
    <>
      <main className='aboutUsMainContainer'>
        <section className='logoBanner'>
          <figure className='logoContainer'>
            <img src={LogoRutaBacana} alt="RutaBacana" />
          </figure>
          <figcaption className='figcapion'>
            <p className='figcaptionTitle'>Ruta Bacana</p>
            <p className='figcaptionText'>Descubre nuestra historia</p>
          </figcaption>
        </section>

        <section className={`ourMission ${showMission ? '' : 'hidden'}`}>
          <article className='missionContainer'>
            <p className='missionTitle'>Un Sueño Colombianamente Inspirador</p>
            <p className='missionText'>Todo comenzó con una fusión del gusto por los viajes y la pasión por la tecnología,
              arraigado en el amor por nuestro país y la convicción de que cada rincón de Colombia tiene una historia que contar.
              Nos unimos con un propósito común: mostrar al mundo la riqueza cultural, natural e histórica de nuestra tierra a través de una página web innovadora.
            </p>
          </article>

          <article className='missionContainer'>
            <p className='missionTitle'>Explorando Nuestro Territorio</p>
            <p className='missionText'>Desde las cumbres de los Andes hasta las costas del Caribe,
              cada kilómetro de nuestro hermoso país nos inspira. Nos sumergimos en la exploración de las maravillas de Colombia,
              desde las selvas tropicales hasta las ciudades coloniales,
              buscando capturar la esencia de nuestra tierra en cada aspecto de nuestra aplicación de turismo.
            </p>
          </article>

          <article className='missionContainer'>
            <p className='missionTitle'>La Esencia de Colombia en Nuestro Proyecto</p>
            <p className='missionText'>Es un tributo apasionado a la magia y la diversidad de Colombia.
              Nos esforzamos por destacar la autenticidad y la calidez de nuestra cultura,
              promoviendo un turismo responsable que respete y celebre la biodiversidad única y las tradiciones arraigadas de nuestro país.
            </p>
          </article>
        </section>

        <section className={`collaboratorContainer ${showCollaborators ? '' : 'hidden'}`}>
          <section className="collabs">
            <article className='collaboratorIconContainer'>
              <img src={ImageEmmanuel} alt="ImageEmmanuel" />
              <p>Emmanuel Usme</p>
            </article>

            <article className='collaboratorIconContainer'>
              <img src={ImageVanessa} alt="ImageVanessa" />
              <p>Vanessa Sánchez</p>
            </article>

            <article className='collaboratorIconContainer'>
              <img src={ImageValentina} alt="ImageValentina" />
              <p>Valentina Flórez</p>
            </article>

            <article className='collaboratorIconContainer'>
              <img src={ImageLina} alt="ImageLina" />
              <p>Lina Naranjo</p>
            </article>

            <article className='collaboratorIconContainer'>
              <img src={ImageCristian} alt="ImageCristian" />
              <p>Cristian Ojito</p>
            </article>
          </section>
        </section>

        <section className={`footerBannerContainer ${showFooterContent ? 'show' : ''}`}>
          <article className="passionContainer">
            <p className='passionTitle'>Un equipo apasionado</p>
            <p className='passionText'>
              Detrás de cada línea de código y cada diseño cuidadosamente elaborado, se encuentra un equipo apasionado y comprometido.
              Somos un grupo diverso de mentes creativas, unidas por nuestra determinación de hacer de este proyecto una realidad.
              Con habilidades complementarias y una visión compartida, hemos convertido desafíos en oportunidades y sueños en logros tangibles.
            </p>
          </article>

          <article className="joinUs">
            <p className="joinUsTitle">¡Únete a nuestra aventura!</p>
            <p className="joinUsText">Estamos emocionados de compartir nuestro viaje contigo y esperamos que te unas a nosotros en esta emocionante aventura.</p>
          </article>

          <article className="thanks">
            <p>¡Gracias por ser parte de nuestra historia!</p>
          </article>
        </section>
      </main>
      <FooterMinimo />
    </>
  );
};

export default About;
