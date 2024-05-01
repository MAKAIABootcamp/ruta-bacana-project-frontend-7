import React from 'react';
import "./header.scss"


function Header() {
  return (
    <header className='headerComponent'>
      <div className='ImgLogo'>
        <img src="src\assets\images\rutaBacanaLogo.png" alt="" />
      </div>
      <div className='NavButton'>
        <nav className='nav'>
          <ul className='ul'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Destinos</a></li>
            <li><a href="#">Contáctanos</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><img src="src\assets\images\User.png" alt="" /></li>
          </ul>
        </nav>
      </div>

    </header>
  );
}

export default Header;






