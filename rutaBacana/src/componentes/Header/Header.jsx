import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionLogout } from "../../redux/userAuth/userAuthActions";
import { setRequest } from "../../redux/userAuth/userAuthSlice";
import { Link, useNavigate } from "react-router-dom";
import userImage from "../../assets/images/User.png";
import "./header.scss";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuth, request } = useSelector((store) => store.userAuth);

  const items = [
    ["/", "Home"],
    ["/destinos", "Destinos"],
    ["/contactanos", "Contactanos"],
    ["/sobreNosotros", "Sobre nosotros"],
  ];
  useEffect(() => {
    if (request == 'logout') {
      navigate('/');
      dispatch(setRequest());
    }
  },[request])
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
                <img
                  src={user?.photo || userImage}
                  alt={user?.name || "avatar"}
                />
                <div className="dropdown-content">
                  <button onClick={() => navigate(`/login/`)}>Iniciar Sesión</button>
                  <button
                    onClick={() => {
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
