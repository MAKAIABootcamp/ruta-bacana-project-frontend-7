import React from 'react';
import logo from "../../assest/imagenes/rutaBacanaLogo.png"
import logoUse from "../../assest/imagenes/User.png"
import "./header.scss"
function Header() {
  return (
    <header>
        <div className='ImgLogo'>
            <img src={logo} alt="" />
        </div>
    <div className='NavButton'>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Destinos</a></li>
          <li><a href="#">Contáctanos</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <button><img src={logoUse} alt="" /></button>
        </ul>
      </nav>
     </div>

    </header>
  );
}

export default Header;






