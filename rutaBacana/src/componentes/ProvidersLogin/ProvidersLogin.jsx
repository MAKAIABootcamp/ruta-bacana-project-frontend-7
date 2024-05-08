import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "./providersLogin.scss";
import { actionLoginWithOtherProviders } from "../../redux/userAuth/userAuthActions";

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
  );
};

export default ProvidersLogin;