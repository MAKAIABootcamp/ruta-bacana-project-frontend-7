import React from "react";
import { useDispatch } from "react-redux";
import { actionLogout } from "../../redux/userAuth/userAuthActions";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  const dispatch = useDispatch();

  const items = [
    ["/", "Home"],
    ["destinos", "Destinos"],
    ["contactanos", "Contactanos"],
    ["sobreNosotros", "Sobre nosotros"],
  ];
  return (
    <header className="headerComponent">
      <div className="ImgLogo">
        <img src="src\assets\images\rutaBacanaLogo.png" alt="" />
      </div>
      <div className="NavButton">
        <nav className="nav">
          <ul className="ul">
            {items.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item[0]}>{item[1]}</Link>
                </li>
              );
            })}
            <li>
            <div className="dropdown">
                <img src="src\assets\images\User.png" alt="" />
                <div className="dropdown-content">
                  <button
                    onClick={() => {
                      console.log("Antes de despachar la acción");
                      dispatch(actionLogout());
                    }}
                  >
                    Salir
                  </button>
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
