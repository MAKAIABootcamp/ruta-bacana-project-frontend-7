import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionLogout } from "../../redux/userAuth/userAuthActions";
import { setRequest } from "../../redux/userAuth/userAuthSlice";
import { triggerScrollToFooter } from "../../redux/scroll/scrollSlice";
import { Link, useNavigate } from "react-router-dom";
import userImage from "../../assets/images/User.png";
import "./header.scss";
import LogoRutaBacana from "../../assets/images/rutaBacanaLogo.png";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuth, request } = useSelector((store) => store.userAuth);

  const items = [
    ['/', 'Home'],
    ['#Footer', 'Contactanos'],
    ['about', 'Sobre nosotros'],
  ];

  useEffect(() => {
    if (request === "logout") {
      navigate("/login/");
      dispatch(setRequest());
    }
  }, [request, navigate, dispatch]);

  const handleContactClick = (e) => {
    e.preventDefault();
    dispatch(triggerScrollToFooter());
  };

  return (
    <header className="headerComponent">
      <div className="ImgLogo">
        <img src={LogoRutaBacana} alt="RutaBacana" onClick={() => navigate(`/`)}/>
      </div>
      <div className="NavButton">
        <nav className="nav">
          <ul className="ul">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  className="texto"
                  to={item[0]}
                  onClick={item[0] === '#Footer' ? handleContactClick : null}
                >
                  {item[1]}
                </Link>
              </li>
            ))}
            <li>
              <div className="dropdown">
                <img
                className="userLogo"
                  src={user?.photo || userImage}
                  alt={user?.name || "avatar"}
                />
                <div className="dropdown-content">
                  {isAuth ? (
                    <button
                      onClick={() => {
                        dispatch(actionLogout());
                      }}
                    >
                      Salir
                    </button>
                  ) : (
                    <button onClick={() => navigate(`/login`)}>
                      Iniciar Sesión
                    </button>
                  )}
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
