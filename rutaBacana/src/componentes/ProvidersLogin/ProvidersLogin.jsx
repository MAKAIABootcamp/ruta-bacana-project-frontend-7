import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "./providersLogin.scss";
import { actionLoginWithOtherProviders } from "../../redux/UserAuth/userAuthActions";

const ProvidersLogin = ({
  name = "",
  image = "",
  colorButton = "",
  provider = null,
}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const handleClickLogin = () => {
    if (provider) {
      dispatch(actionLoginWithOtherProviders(provider));
    } else {
        navigate('/phone');
    }
  };

  return (
    <div className="containerButtons">
    <button
      type="button"
      className="loginButton"
      style={{ "--color-primario": colorButton }}
      onClick={handleClickLogin}
    >
      <figure>
        <img src={image} alt={name} />
        <figcaption>Continúe con {name}</figcaption>
      </figure>
    </button>
    </div>
  );
};

export default ProvidersLogin;