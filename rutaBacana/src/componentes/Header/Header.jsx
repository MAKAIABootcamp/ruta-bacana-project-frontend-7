import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss"


function Header() {
  const items = [
    ['/','Home'],
    ['footer','Contactanos'],
    ['about','Sobre nosotros'],

]
  return (
    <header className='headerComponent'>
      <div className='ImgLogo'>
        <img src="src\assets\images\rutaBacanaLogo.png" alt="" />
      </div>

     <div className='NavButton'>
        <nav className='nav'>
            <ul className='ul'>
                {items.map((item,index)=>{
                    return <li key={index} ><Link to={item[0]}>{item[1]}</Link></li>
                })
                } 
                <li><img src="src\assets\images\User.png" alt="" /></li>
   
            </ul>
            
        </nav>
    </div>
    </header>
  );
}

export default Header;






