import React, { useRef } from "react";
import Filtros from "../../componentes/Filtros/Filtros";
import "./home.scss";
import Footer from "../../componentes/Footer/Footer";
import FooterMinimo from "../../componentes/FooterMinimo/FooterMinimo";
import ListDestinos from "../../componentes/ListDestinos/ListDestinos";
import Carrusel from "../../componentes/Carrusel/Carrusel";
import { HiViewGridAdd } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const home = () => {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.userAuth);
  const isAdminEmail = user && user.email === "rutabacana@gmail.com";
  return (
    <div className="swrapper">
      <div className="containerHome">
        <Carrusel />
        <div className="agregarDestino">
          {isAdminEmail && (
            <HiViewGridAdd
              onClick={() => navigate(`/agregarDestinos/`)}
              size={40}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <div className="destinosContainer">
          <Filtros />
          <ListDestinos />
        </div>
        <Footer />
        <FooterMinimo />
      </div>
    </div>
  );
};
export default home;
