import React from "react";
import "./header.scss";
import { useDispatch } from "react-redux";
import { actionLogout } from "../../redux/userAuth/userAuthActions";

function Header() {
  const dispatch = useDispatch();
  

  return (
    <header className="headerComponent">
      <div className="ImgLogo">
        <img src="src\assets\images\rutaBacanaLogo.png" alt="" />
      </div>
      <div className="NavButton">
        <nav className="nav">
          <ul className="ul">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Destinos</a>
            </li>
            <li>
              <a href="#">Contáctanos</a>
            </li>
            <li>
              <a href="#">Sobre Nosotros</a>
            </li>
            <li>
              <div className="dropdown">
                <img src="src\assets\images\User.png" alt="" />
                <div className="dropdown-content">
                <button onClick={() => {
                  console.log("Antes de despachar la acción")
                  dispatch(actionLogout())}}>Salir</button>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
